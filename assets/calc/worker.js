// Hesap ayrı iş parçacığında: uzun bir planda sayfa donmaz, ölçü değişince eski hesap iptal edilir.
import { planPanels, planBars } from './engine.js';

self.onmessage = (e) => {
  const { id, kind, input } = e.data;
  try {
    const result = kind === 'bars' ? planBars(input) : planPanels(input);
    self.postMessage({ id, result });
  } catch (err) {
    self.postMessage({ id, error: String((err && err.message) || err) });
  }
};
