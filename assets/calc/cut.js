// 0X Cut web hesaplayıcısı: tablo -> hesap (ayrı iş parçacığında) -> çizim.
// Her şey tarayıcıda olur; ölçüler hiçbir sunucuya gitmez. Paylaşım bağlantısı ölçüleri adresin # kısmında taşır.
(() => {
  'use strict';
  const BASE = document.currentScript.src;
  const C = JSON.parse(document.getElementById('calc-config').textContent);
  const T = C.strings;
  const UNIT = { mm: 1, cm: 10, in: 25.4 };
  // 0X Cut'taki parça renkleri (PartColors): aynı sıra, aynı tonlar.
  const FILLS = ['#E8C39E', '#B5D6A7', '#A9C8E8', '#E8A9A9', '#D4B5E8', '#F2D58A', '#9FD8CF', '#E8B98F', '#C9C9A3', '#B9C4D8'];
  const MAX_PIECES = 300;
  const MAX_ROWS = 60;
  const MAX_DRAWN = 40;
  const $ = (id) => document.getElementById(id);
  const fill = (s, v) => s.replace(/\{(\w+)\}/g, (_, k) => (k in v ? v[k] : ''));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  const rows = $('rows');
  let unit = C.unit;

  // ---- sayılar -------------------------------------------------------------------------------
  /** "12,5", "12.5", "23 5/8", "5/8" -> sayı (geçerli birimde). Boşsa ya da okunamıyorsa NaN. */
  function parse(s) {
    s = String(s).trim().replace(/,/g, '.');
    if (s === '') return NaN;
    if (/^(\d+\.?\d*|\.\d+)$/.test(s)) return parseFloat(s);
    const m = s.match(/^(?:(\d+(?:\.\d+)?)[\s-]+)?(\d+)\/(\d+)$/);
    if (m && +m[3] > 0) return (m[1] ? +m[1] : 0) + +m[2] / +m[3];
    return NaN;
  }
  const toMm = (s) => parse(s) * UNIT[unit];
  function count(s) {
    s = String(s).trim();
    return /^\d+$/.test(s) ? parseInt(s, 10) : NaN;
  }
  function show(mm, u = unit, digits) {
    const d = digits ?? (u === 'mm' ? 1 : u === 'cm' ? 2 : 3);
    const f = 10 ** d;
    const s = String(Math.round((mm / UNIT[u]) * f) / f);
    return C.decimalComma ? s.replace('.', ',') : s;
  }
  const short = (mm) => show(mm, unit, unit === 'mm' ? 0 : unit === 'cm' ? 1 : 2);
  const pct = (n) => fill(T.pct, { n });
  const letter = (i) => (i < 26 ? String.fromCharCode(65 + i) : String(i + 1));

  // ---- parça tablosu -------------------------------------------------------------------------
  function addRow(p = {}, focus = false) {
    if (rows.children.length >= MAX_ROWS) return null;
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML =
      `<input type="text" data-k="name" autocomplete="off" maxlength="24" aria-label="${esc(T.name)}">` +
      `<input type="text" data-k="l" inputmode="decimal" autocomplete="off" aria-label="${esc(T.length)}">` +
      `<input type="text" data-k="w" inputmode="decimal" autocomplete="off" aria-label="${esc(T.width)}">` +
      `<input type="text" data-k="q" inputmode="numeric" autocomplete="off" placeholder="1" aria-label="${esc(T.qty)}">` +
      `<button type="button" class="del" aria-label="${esc(T.remove)}">×</button>`;
    const [n, l, w, q] = row.querySelectorAll('input');
    n.value = p.name || '';
    l.value = p.l > 0 ? show(p.l) : '';
    w.value = p.w > 0 ? show(p.w) : '';
    q.value = p.q > 0 ? String(p.q) : '';
    rows.appendChild(row);
    relabel();
    if (focus) n.focus();
    return row;
  }
  function relabel() {
    [...rows.children].forEach((r, i) => {
      const n = r.querySelector('[data-k=name]');
      n.placeholder = letter(i);
      n.style.boxShadow = `inset 5px 0 0 ${FILLS[i % FILLS.length]}`;
    });
  }
  function check(input) {
    const k = input.dataset.k;
    const s = input.value.trim();
    let bad = false;
    if (s && k !== 'name') bad = !((k === 'q' ? count(s) : parse(s)) > 0);
    if (s && (input.id === 'kerf' || input.id === 'trim')) bad = !(parse(s) >= 0);
    input.setAttribute('aria-invalid', bad ? 'true' : 'false');
  }

  rows.addEventListener('input', (e) => {
    check(e.target);
    schedule();
  });
  rows.addEventListener('click', (e) => {
    const del = e.target.closest('.del');
    if (!del) return;
    const row = del.parentElement;
    if (rows.children.length > 1) row.remove();
    else row.querySelectorAll('input').forEach((i) => { i.value = ''; check(i); });
    relabel();
    schedule(0);
  });
  rows.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' || e.isComposing) return;
    e.preventDefault();
    const all = [...rows.querySelectorAll('input')];
    const i = all.indexOf(e.target);
    if (i < all.length - 1) all[i + 1].focus();
    else addRow({}, true);
  });
  // Excel ya da not defterinden yapıştırma: her satır bir parça ("Yan 720 560 2", "720x560x2", sekmeli sütunlar).
  rows.addEventListener('paste', (e) => {
    const text = (e.clipboardData || window.clipboardData).getData('text');
    if (!/[\n\t]/.test(text.trim())) return;
    const parsed = text.split(/\r?\n/).map(parseLine).filter(Boolean);
    if (!parsed.length) return;
    e.preventDefault();
    let row = e.target.closest('.row');
    for (const p of parsed) {
      const empty = row && [...row.querySelectorAll('input')].every((i) => !i.value.trim());
      if (!row || !empty) row = addRow();
      if (!row) break;
      const [n, l, w, q] = row.querySelectorAll('input');
      n.value = p.name; l.value = p.l; w.value = p.w; q.value = p.q;
      [n, l, w, q].forEach(check);
      row = row.nextElementSibling;
    }
    schedule(0);
  });
  function parseLine(line) {
    const tokens = line.trim().split(/\t|;|\s*[x×X*]\s*|\s+/).filter(Boolean);
    const nums = [];
    const words = [];
    for (const t of tokens) (Number.isFinite(parse(t)) && nums.length < 3 ? nums : words).push(t);
    if (nums.length < 2) return null;
    return { name: words.join(' ').slice(0, 24), l: nums[0], w: nums[1], q: nums[2] && count(nums[2]) > 0 ? nums[2] : '' };
  }

  $('add').addEventListener('click', () => addRow({}, true));
  $('clear').addEventListener('click', () => {
    rows.textContent = '';
    for (let i = 0; i < 3; i++) addRow();
    rows.querySelector('input').focus();
    schedule(0);
  });

  // ---- levha, birim, seçenekler --------------------------------------------------------------
  for (const id of ['sl', 'sw', 'kerf', 'trim']) {
    $(id).addEventListener('input', (e) => {
      check(e.target);
      markPreset();
      schedule();
    });
  }
  $('grain').addEventListener('change', () => schedule(0));

  function drawPresets() {
    const box = $('presets');
    box.textContent = '';
    for (const p of (unit === 'in' && C.presetsIn) || C.presets) {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = (p.name ? p.name + ' · ' : '') + `${short(p.l)} × ${short(p.w)}`;
      b.addEventListener('click', () => {
        $('sl').value = show(p.l);
        $('sw').value = show(p.w);
        check($('sl'));
        check($('sw'));
        markPreset();
        schedule(0);
      });
      b.dataset.l = p.l;
      b.dataset.w = p.w;
      box.appendChild(b);
    }
    markPreset();
  }
  function markPreset() {
    const l = toMm($('sl').value);
    const w = toMm($('sw').value);
    for (const b of $('presets').children) {
      const on = Math.abs(+b.dataset.l - l) < 1 && Math.abs(+b.dataset.w - w) < 1;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }

  function setUnit(u) {
    if (u === unit || !UNIT[u]) return;
    const fields = [$('sl'), $('sw'), $('kerf'), $('trim'), ...rows.querySelectorAll('[data-k=l],[data-k=w]')];
    for (const f of fields) {
      const v = parse(f.value);
      if (v >= 0) f.value = show(v * UNIT[unit], u);
    }
    unit = u;
    showUnit();
    drawPresets();
    schedule(0);
  }
  function showUnit() {
    for (const b of $('units').querySelectorAll('button')) b.setAttribute('aria-pressed', b.dataset.unit === unit ? 'true' : 'false');
    for (const el of document.querySelectorAll('[data-unit-label]')) el.textContent = unit;
  }
  $('units').addEventListener('click', (e) => {
    const b = e.target.closest('button[data-unit]');
    if (b) setUnit(b.dataset.unit);
  });

  // ---- girdiyi topla ve hesapla --------------------------------------------------------------
  function collect() {
    const imperial = unit === 'in';
    const grain = $('grain').checked;
    const sheet = { length: toMm($('sl').value), width: toMm($('sw').value), grain };
    const parts = [];
    const rowOf = [];
    let pieces = 0;
    let bad = false;
    [...rows.children].forEach((r, i) => {
      const [n, l, w, q] = r.querySelectorAll('input');
      const L = toMm(l.value);
      const W = toMm(w.value);
      const Q = q.value.trim() === '' ? 1 : count(q.value);
      if (L > 0 && W > 0 && Q > 0) {
        parts.push({ label: n.value.trim() || letter(i), length: L, width: W, quantity: Q, grain });
        rowOf.push(i);
        pieces += Q;
      }
    });
    const opt = (id, def) => {
      const s = $(id).value.trim();
      if (s === '') return 0;
      const v = toMm(s);
      if (!(v >= 0)) bad = true;
      return v >= 0 ? v : def;
    };
    const kerf = Math.min(opt('kerf', 3.2), 20);
    const trim = Math.min(opt('trim', 0), 100);
    return {
      bad,
      pieces,
      rowOf,
      input: {
        sheet, parts, kerf, trim,
        minOffcutLength: imperial ? 203.2 : 200,
        minOffcutWidth: imperial ? 101.6 : 100,
      },
    };
  }

  let worker = null;
  let noWorker = typeof Worker === 'undefined';
  let busy = false;
  let seq = 0;
  let timer = 0;
  let slow = 0;
  let current = null;
  let shown = null;
  let engine = null;

  function schedule(delay = 300) {
    clearTimeout(timer);
    timer = setTimeout(run, delay);
  }
  function getWorker() {
    if (worker) return worker;
    try {
      worker = new Worker(new URL('worker.js', BASE), { type: 'module' });
    } catch (err) {
      return null;
    }
    worker.onmessage = (e) => done(e.data);
    worker.onerror = (e) => {
      // Modül iş parçacığı desteklenmiyor (eski tarayıcı): hesap sayfanın kendisinde yapılır.
      e.preventDefault();
      if (worker) worker.terminate();
      worker = null;
      busy = false;
      noWorker = true;
      if (current) onMainThread(current.msg);
    };
    return worker;
  }
  async function onMainThread(msg) {
    try {
      engine = engine || (await import(new URL('engine.js', BASE).href));
      done({ id: msg.id, result: engine.planPanels(msg.input) });
    } catch (err) {
      done({ id: msg.id, error: String(err) });
    }
  }
  function run() {
    const c = collect();
    saveHash(c);
    if (!(c.input.sheet.length > 0 && c.input.sheet.width > 0)) return idle(T.needSheet);
    if (!c.input.parts.length) return idle(T.empty);
    if (c.pieces > MAX_PIECES) return idle(fill(T.tooMany, { max: MAX_PIECES }), true);
    const msg = { id: ++seq, kind: 'panels', input: c.input };
    current = { msg, rowOf: c.rowOf };
    clearTimeout(slow);
    slow = setTimeout(() => setStatus(T.calculating), 250);
    if (noWorker) return void onMainThread(msg);
    if (busy && worker) {
      worker.terminate();
      worker = null;
    }
    const w = getWorker();
    if (!w) {
      noWorker = true;
      return void onMainThread(msg);
    }
    busy = true;
    w.postMessage(msg);
  }
  function done(d) {
    if (!current || d.id !== current.msg.id) return;
    busy = false;
    clearTimeout(slow);
    setStatus('');
    if (d.error) {
      console.warn(d.error);
      return idle(T.error, true);
    }
    shown = { r: d.result, rowOf: current.rowOf };
    render();
  }
  function setStatus(s) {
    $('status').textContent = s;
  }
  function idle(message, warn = false) {
    clearTimeout(slow);
    shown = null;
    for (const id of ['r-sheets', 'r-used', 'r-off', 'r-waste']) $(id).textContent = '–';
    meter(0, 0, 0);
    $('sheets').textContent = '';
    $('warn').hidden = !warn;
    $('warn').innerHTML = warn ? `<p>${esc(message)}</p>` : '';
    setStatus(warn ? '' : message);
  }
  function meter(u, o, w) {
    const m = $('meter').children;
    m[0].style.flexBasis = u + '%';
    m[1].style.flexBasis = o + '%';
    m[2].style.flexBasis = w + '%';
  }

  // ---- sonuç ---------------------------------------------------------------------------------
  function render() {
    if (!shown) return;
    const { r, rowOf } = shown;
    const total = r.totalArea || 1;
    const used = Math.round((r.usedArea / total) * 100);
    const off = Math.min(Math.round((r.offcutArea / total) * 100), 100 - used);
    const waste = r.sheetCount ? 100 - used - off : 0;
    $('r-sheets').textContent = r.sheetCount;
    $('r-used').textContent = r.sheetCount ? pct(used) : '–';
    $('r-off').textContent = r.sheetCount ? pct(off) : '–';
    $('r-waste').textContent = r.sheetCount ? pct(waste) : '–';
    meter(used, off, waste);

    const warn = r.unplaced.map((u) => `<p>${esc(fill(T.tooLarge, { name: u.label, n: u.count }))}</p>`).join('');
    $('warn').hidden = !warn;
    $('warn').innerHTML = warn;

    // Aynı dizilişteki ardışık levhalar tek çizimde: "Levha 2–4 (×3)".
    const groups = [];
    for (const s of r.sheets) {
      const key = s.placements.map((p) => `${p.part},${p.x},${p.y},${p.rotated}`).join('|');
      const g = groups[groups.length - 1];
      if (g && g.key === key) g.n++;
      else groups.push({ key, s, n: 1 });
    }
    const box = $('sheets');
    const px = Math.max(280, box.clientWidth || 600);
    let html = '';
    let index = 1;
    groups.slice(0, MAX_DRAWN).forEach((g, gi) => {
      const from = index;
      const to = index + g.n - 1;
      index = to + 1;
      const title = g.n > 1 ? fill(T.sheetRange, { a: from, b: to, n: g.n }) : fill(T.sheetOne, { i: from });
      html +=
        `<figure class="sheet"><figcaption><b>${esc(title)}</b>` +
        `<span>${short(g.s.length)} × ${short(g.s.width)} · ${esc(fill(T.usedOf, { p: pct(Math.round(g.s.utilization * 100)) }))}</span></figcaption>` +
        drawSheet(g.s, rowOf, px, gi, title) +
        `<p class="list">${esc(partList(g.s))}</p></figure>`;
    });
    const hidden = groups.slice(MAX_DRAWN).reduce((a, g) => a + g.n, 0);
    if (hidden) html += `<p class="more-sheets">${esc(fill(T.moreSheets, { n: hidden }))}</p>`;
    box.innerHTML = html;
  }
  function partList(s) {
    const counts = new Map();
    for (const p of s.placements) counts.set(p.label, (counts.get(p.label) || 0) + 1);
    return [...counts].map(([label, n]) => `${label} ×${n}`).join(' · ');
  }
  function drawSheet(s, rowOf, px, gi, title) {
    const L = s.length;
    const W = s.width;
    const k = px / L;
    const fs = Math.max(10, Math.min(13, px / 46)) / k;
    const sw = 1 / k;
    const cw = fs * 0.55;
    const id = 'h' + gi;
    const label = fill(T.svgLabel, { title, n: s.placements.length, p: pct(Math.round(s.utilization * 100)) });
    let h =
      `<svg viewBox="${-sw} ${-sw} ${L + 2 * sw} ${W + 2 * sw}" role="img" aria-label="${esc(label)}">` +
      `<defs><pattern id="${id}" patternUnits="userSpaceOnUse" width="${6 / k}" height="${6 / k}" patternTransform="rotate(45)">` +
      `<rect width="${6 / k}" height="${6 / k}" style="fill:var(--board)"/>` +
      `<rect width="${1.6 / k}" height="${6 / k}" style="fill:var(--hatch)"/></pattern></defs>` +
      `<rect width="${L}" height="${W}" fill="url(#${id})" style="stroke:var(--faint);stroke-width:${sw}"/>`;
    for (const o of s.offcuts) {
      h +=
        `<rect x="${o.x}" y="${o.y}" width="${o.length}" height="${o.width}" ` +
        `style="fill:var(--good-soft);stroke:var(--good);stroke-width:${sw};stroke-dasharray:${4 / k} ${3 / k}"/>`;
      const text = `${T.offcut} ${short(o.length)}×${short(o.width)}`;
      h += textIn(o.x, o.y, o.length, o.width, [text], fs * 0.9, cw * 0.9, 'svg-off');
    }
    for (const p of s.placements) {
      const color = FILLS[rowOf[p.part] % FILLS.length];
      h +=
        `<rect x="${p.x}" y="${p.y}" width="${p.length}" height="${p.width}" ` +
        `style="fill:${color};stroke:var(--part-line);stroke-width:${sw}"/>`;
      const own = p.rotated ? [p.width, p.length] : [p.length, p.width];
      const dim = `${short(own[0])}×${short(own[1])}`;
      h += textIn(p.x, p.y, p.length, p.width, [p.label, dim], fs, cw, 'svg-label');
    }
    return h + '</svg>';
  }
  /** Kutunun içine sığan kadar yazı: iki satır, tek satır, yalnız ad ya da hiç. Uzun ince kutuda yazı dik döner. */
  function textIn(x, y, w, hgt, lines, fs, cw, cls) {
    const vertical = hgt > w * 1.4;
    const along = (vertical ? hgt : w) - 2 * cw;
    const across = vertical ? w : hgt;
    const fits = (s) => s.length * cw <= along;
    let out = null;
    if (lines.length === 2 && across >= fs * 2.6 && fits(lines[0]) && fits(lines[1])) out = lines;
    else if (lines.length === 2 && across >= fs * 1.3 && fits(lines.join(' '))) out = [lines.join(' ')];
    else if (across >= fs * 1.3 && fits(lines[0])) out = [lines[0]];
    if (!out) return '';
    const cx = x + w / 2;
    const cy = y + hgt / 2;
    const rot = vertical ? ` transform="rotate(-90 ${cx} ${cy})"` : '';
    const dy = out.length === 2 ? [-0.62 * fs, 0.62 * fs] : [0];
    return out
      .map((s, i) =>
        `<text class="${cls}" x="${cx}" y="${cy + dy[i]}" font-size="${fs}" text-anchor="middle" dominant-baseline="central"` +
        `${rot}${i === 1 ? ' style="font-weight:500"' : ''}>${esc(s)}</text>`)
      .join('');
  }
  let resizeTimer = 0;
  let lastWidth = 0;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const w = $('sheets').clientWidth;
      if (Math.abs(w - lastWidth) > 40) {
        lastWidth = w;
        render();
      }
    }, 200);
  });

  // ---- paylaşım bağlantısı -------------------------------------------------------------------
  const num = (mm) => String(Math.round(mm * 1000) / 1000);
  function saveHash(c) {
    const i = c.input;
    const p = i.parts.map((x) => [encodeURIComponent(x.label), num(x.length), num(x.width), x.quantity].join(',')).join(';');
    const s = i.sheet.length > 0 && i.sheet.width > 0 ? `${num(i.sheet.length)}x${num(i.sheet.width)}` : '';
    const h = `u=${unit}&s=${s}&k=${num(i.kerf)}&t=${num(i.trim)}&g=${i.sheet.grain ? 1 : 0}&p=${p}`;
    try {
      history.replaceState(null, '', '#' + h);
    } catch (err) {
      /* dosyadan açılmış sayfa: adres değiştirilemez */
    }
  }
  function loadHash() {
    const raw = location.hash.slice(1);
    if (!raw) return false;
    const q = {};
    for (const kv of raw.split('&')) {
      const i = kv.indexOf('=');
      if (i > 0) q[kv.slice(0, i)] = kv.slice(i + 1);
    }
    if (!q.p) return false;
    const parts = q.p.split(';').map((r) => {
      const f = r.split(',');
      let name = '';
      try {
        name = decodeURIComponent(f[0] || '');
      } catch (err) {
        name = '';
      }
      return { name: name.slice(0, 24), l: +f[1], w: +f[2], q: Math.min(9999, Math.floor(+f[3]) || 1) };
    }).filter((p) => p.l > 0 && p.w > 0).slice(0, MAX_ROWS);
    if (!parts.length) return false;
    unit = UNIT[q.u] ? q.u : C.unit;
    const [sl, sw] = (q.s || '').split('x').map(Number);
    setup({ sheet: [sl > 0 ? sl : C.sheet[0], sw > 0 ? sw : C.sheet[1]], kerf: +q.k >= 0 ? +q.k : C.kerf, trim: +q.t >= 0 ? +q.t : 0, grain: q.g === '1', parts });
    return true;
  }
  function setup(d) {
    $('sl').value = show(d.sheet[0]);
    $('sw').value = show(d.sheet[1]);
    $('kerf').value = d.kerf > 0 ? show(d.kerf) : '0';
    $('trim').value = d.trim > 0 ? show(d.trim) : '0';
    $('grain').checked = !!d.grain;
    rows.textContent = '';
    for (const p of d.parts) addRow(p);
    if (rows.children.length < 3) addRow();
  }
  $('share').addEventListener('click', async () => {
    const url = location.href;
    const msg = $('share-msg');
    try {
      if (navigator.share && matchMedia('(pointer: coarse)').matches) {
        await navigator.share({ title: document.title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      msg.textContent = T.copied;
    } catch (err) {
      if (err && err.name === 'AbortError') return;
      msg.textContent = url;
    }
    setTimeout(() => { msg.textContent = ''; }, 2500);
  });

  // ---- açılış --------------------------------------------------------------------------------
  if (!loadHash()) {
    const us = C.imperialExample && /^en-US$/i.test(navigator.language || '');
    if (us) {
      unit = 'in';
      setup(C.imperialExample);
    } else {
      setup({ sheet: C.sheet, kerf: C.kerf, trim: 0, grain: false, parts: C.example });
    }
  }
  showUnit();
  drawPresets();
  lastWidth = $('sheets').clientWidth;
  run();
})();
