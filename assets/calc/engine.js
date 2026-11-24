//region block: polyfills
if (typeof Math.imul === 'undefined') {
  Math.imul = function imul(a, b) {
    return (a & 4.29490176E9) * (b & 65535) + (a & 65535) * (b | 0) | 0;
  };
}
if (typeof ArrayBuffer.isView === 'undefined') {
  ArrayBuffer.isView = function (a) {
    return a != null && a.__proto__ != null && a.__proto__.__proto__ === Int8Array.prototype.__proto__;
  };
}
if (typeof Array.prototype.fill === 'undefined') {
  // Polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill#Polyfill
  Object.defineProperty(Array.prototype, 'fill', {value: function (value) {
    // Steps 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }
    var O = Object(this); // Steps 3-5.
    var len = O.length >>> 0; // Steps 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0; // Step 8.
    var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len); // Steps 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0; // Step 11.
    var finalValue = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len); // Step 12.
    while (k < finalValue) {
      O[k] = value;
      k++;
    }
    ; // Step 13.
    return O;
  }});
}
[Int8Array, Int16Array, Uint16Array, Int32Array, Float32Array, Float64Array].forEach(function (TypedArray) {
  if (typeof TypedArray.prototype.fill === 'undefined') {
    Object.defineProperty(TypedArray.prototype, 'fill', {value: Array.prototype.fill});
  }
});
if (typeof Math.hypot === 'undefined') {
  Math.hypot = function () {
    var y = 0;
    var length = arguments.length;
    for (var i = 0; i < length; i++) {
      if (arguments[i] === Infinity || arguments[i] === -Infinity) {
        return Infinity;
      }
      y += arguments[i] * arguments[i];
    }
    return Math.sqrt(y);
  };
}
if (typeof Math.clz32 === 'undefined') {
  Math.clz32 = function (log, LN2) {
    return function (x) {
      var asUint = x >>> 0;
      if (asUint === 0) {
        return 32;
      }
      return 31 - (log(asUint) / LN2 | 0) | 0; // the "| 0" acts like math.floor
    };
  }(Math.log, Math.LN2);
}
if (typeof String.prototype.startsWith === 'undefined') {
  Object.defineProperty(String.prototype, 'startsWith', {value: function (searchString, position) {
    position = position || 0;
    return this.lastIndexOf(searchString, position) === position;
  }});
}
//endregion
//region block: imports
var imul_0 = Math.imul;
var isView = ArrayBuffer.isView;
var clz32 = Math.clz32;
var hypot = Math.hypot;
//endregion
//region block: pre-declaration
initMetadataForInterface(CharSequence, 'CharSequence');
initMetadataForInterface(Comparable, 'Comparable');
initMetadataForClass(Number_0, 'Number');
initMetadataForClass(asSequence$$inlined$Sequence$1);
initMetadataForClass(sortedWith$1);
initMetadataForClass(Char, 'Char', VOID, VOID, [Comparable]);
initMetadataForInterface(Collection, 'Collection');
initMetadataForInterface(KtList, 'List', VOID, VOID, [Collection]);
initMetadataForInterface(Entry, 'Entry');
initMetadataForInterface(KtMap, 'Map');
initMetadataForInterface(KtSet, 'Set', VOID, VOID, [Collection]);
initMetadataForCompanion(Companion);
initMetadataForClass(Enum, 'Enum', VOID, VOID, [Comparable]);
initMetadataForCompanion(Companion_0);
initMetadataForClass(Long, 'Long', VOID, Number_0, [Comparable]);
initMetadataForInterface(FunctionAdapter, 'FunctionAdapter');
initMetadataForObject(Digit, 'Digit');
initMetadataForInterface(Comparator, 'Comparator');
initMetadataForObject(Unit, 'Unit');
initMetadataForClass(AbstractCollection, 'AbstractCollection', VOID, VOID, [Collection]);
initMetadataForClass(AbstractMutableCollection, 'AbstractMutableCollection', VOID, AbstractCollection, [Collection]);
initMetadataForClass(IteratorImpl, 'IteratorImpl');
initMetadataForClass(AbstractMutableList, 'AbstractMutableList', VOID, AbstractMutableCollection, [KtList, Collection]);
initMetadataForClass(AbstractMap, 'AbstractMap', VOID, VOID, [KtMap]);
initMetadataForClass(AbstractMutableMap, 'AbstractMutableMap', VOID, AbstractMap, [KtMap]);
initMetadataForClass(AbstractMutableSet, 'AbstractMutableSet', VOID, AbstractMutableCollection, [KtSet, Collection]);
initMetadataForCompanion(Companion_1);
initMetadataForClass(ArrayList, 'ArrayList', ArrayList_init_$Create$, AbstractMutableList, [KtList, Collection]);
initMetadataForClass(HashMap, 'HashMap', HashMap_init_$Create$, AbstractMutableMap, [KtMap]);
initMetadataForClass(HashMapValues, 'HashMapValues', VOID, AbstractMutableCollection, [Collection]);
initMetadataForClass(HashMapEntrySetBase, 'HashMapEntrySetBase', VOID, AbstractMutableSet, [KtSet, Collection]);
initMetadataForClass(HashMapEntrySet, 'HashMapEntrySet', VOID, HashMapEntrySetBase);
initMetadataForClass(HashMapValuesDefault$iterator$1);
initMetadataForClass(HashMapValuesDefault, 'HashMapValuesDefault', VOID, AbstractMutableCollection);
initMetadataForCompanion(Companion_2);
initMetadataForClass(Itr, 'Itr');
initMetadataForClass(ValuesItr, 'ValuesItr', VOID, Itr);
initMetadataForClass(EntriesItr, 'EntriesItr', VOID, Itr);
initMetadataForClass(EntryRef, 'EntryRef', VOID, VOID, [Entry]);
function containsAllEntries(m) {
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.all' call
    var tmp;
    if (isInterface(m, Collection)) {
      tmp = m.i();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_0;
    }
    var _iterator__ex2g4s = m.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var entry = element;
      var tmp_0;
      if (!(entry == null) ? isInterface(entry, Entry) : false) {
        tmp_0 = this.x4(entry);
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    tmp$ret$0 = true;
  }
  return tmp$ret$0;
}
initMetadataForInterface(InternalMap, 'InternalMap');
initMetadataForClass(InternalHashMap, 'InternalHashMap', InternalHashMap_init_$Create$, VOID, [InternalMap]);
initMetadataForClass(LinkedHashMap, 'LinkedHashMap', LinkedHashMap_init_$Create$, HashMap, [KtMap]);
initMetadataForClass(Exception, 'Exception', Exception_init_$Create$, Error);
initMetadataForClass(RuntimeException, 'RuntimeException', RuntimeException_init_$Create$, Exception);
initMetadataForClass(UnsupportedOperationException, 'UnsupportedOperationException', UnsupportedOperationException_init_$Create$, RuntimeException);
initMetadataForClass(IllegalStateException, 'IllegalStateException', IllegalStateException_init_$Create$, RuntimeException);
initMetadataForClass(IllegalArgumentException, 'IllegalArgumentException', IllegalArgumentException_init_$Create$, RuntimeException);
initMetadataForClass(NoSuchElementException, 'NoSuchElementException', NoSuchElementException_init_$Create$, RuntimeException);
initMetadataForClass(IndexOutOfBoundsException, 'IndexOutOfBoundsException', IndexOutOfBoundsException_init_$Create$, RuntimeException);
initMetadataForClass(ArithmeticException, 'ArithmeticException', ArithmeticException_init_$Create$, RuntimeException);
initMetadataForClass(NumberFormatException, 'NumberFormatException', NumberFormatException_init_$Create$, IllegalArgumentException);
initMetadataForClass(ConcurrentModificationException, 'ConcurrentModificationException', ConcurrentModificationException_init_$Create$, RuntimeException);
initMetadataForClass(NoWhenBranchMatchedException, 'NoWhenBranchMatchedException', NoWhenBranchMatchedException_init_$Create$, RuntimeException);
initMetadataForClass(NullPointerException, 'NullPointerException', NullPointerException_init_$Create$, RuntimeException);
initMetadataForClass(ClassCastException, 'ClassCastException', ClassCastException_init_$Create$, RuntimeException);
initMetadataForClass(KClassImpl, 'KClassImpl');
initMetadataForClass(PrimitiveKClassImpl, 'PrimitiveKClassImpl', VOID, KClassImpl);
initMetadataForObject(NothingKClassImpl, 'NothingKClassImpl', VOID, KClassImpl);
initMetadataForClass(StringBuilder, 'StringBuilder', StringBuilder_init_$Create$_0, VOID, [CharSequence]);
initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForClass(IteratorImpl_0, 'IteratorImpl');
initMetadataForCompanion(Companion_3);
initMetadataForClass(AbstractList, 'AbstractList', VOID, AbstractCollection, [KtList]);
initMetadataForClass(AbstractMap$values$1$iterator$1);
initMetadataForCompanion(Companion_4);
initMetadataForClass(AbstractMap$values$1, VOID, VOID, AbstractCollection);
initMetadataForCompanion(Companion_5);
initMetadataForObject(EmptyList, 'EmptyList', VOID, VOID, [KtList]);
initMetadataForObject(EmptyIterator, 'EmptyIterator');
initMetadataForInterface(MapWithDefault, 'MapWithDefault', VOID, VOID, [KtMap]);
initMetadataForClass(FilteringSequence$iterator$1);
initMetadataForClass(FilteringSequence, 'FilteringSequence');
initMetadataForClass(TransformingSequence$iterator$1);
initMetadataForClass(TransformingSequence, 'TransformingSequence');
initMetadataForClass(EnumEntriesList, 'EnumEntriesList', VOID, AbstractList, [KtList]);
initMetadataForClass(Random, 'Random');
initMetadataForObject(Default, 'Default', VOID, Random);
initMetadataForCompanion(Companion_6);
initMetadataForClass(XorWowRandom, 'XorWowRandom', VOID, Random);
initMetadataForClass(Pair, 'Pair');
initMetadataForClass(Triple, 'Triple');
initMetadataForCompanion(Companion_7);
initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForClass(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForClass(GuillotineSheet, 'GuillotineSheet');
initMetadataForClass(FreeRect, 'FreeRect');
initMetadataForClass(RawCut, 'RawCut');
initMetadataForClass(FreeChoice, 'FreeChoice', VOID, Enum);
initMetadataForClass(SplitRule, 'SplitRule', VOID, Enum);
initMetadataForClass(BarStock, 'BarStock');
initMetadataForClass(LinearPart, 'LinearPart');
initMetadataForClass(LinearSettings, 'LinearSettings', LinearSettings);
initMetadataForClass(BarPiece, 'BarPiece');
initMetadataForClass(BarLayout, 'BarLayout');
initMetadataForClass(LinearResult, 'LinearResult');
initMetadataForClass(Run, 'Run');
initMetadataForClass(sam$kotlin_Comparator$0_2, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForClass(sam$kotlin_Comparator$0_3, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForClass(sam$kotlin_Comparator$0_4, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForClass(sam$kotlin_Comparator$0_5, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForClass(sam$kotlin_Comparator$0_6, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForObject(LinearOptimizer, 'LinearOptimizer');
initMetadataForClass(Grain, 'Grain', VOID, Enum);
initMetadataForCompanion(Companion_8);
initMetadataForClass(Edges, 'Edges', Edges);
initMetadataForClass(SheetStock, 'SheetStock');
initMetadataForClass(PanelPart, 'PanelPart');
initMetadataForCompanion(Companion_9);
initMetadataForClass(Trim, 'Trim', Trim);
initMetadataForClass(Priority, 'Priority', VOID, Enum);
initMetadataForClass(Effort, 'Effort', VOID, Enum);
initMetadataForClass(PanelSettings, 'PanelSettings', PanelSettings);
initMetadataForClass(Placement, 'Placement');
initMetadataForClass(CutDirection, 'CutDirection', VOID, Enum);
initMetadataForClass(Cut, 'Cut');
initMetadataForClass(Offcut, 'Offcut');
initMetadataForClass(SheetLayout, 'SheetLayout');
initMetadataForClass(UnplacedReason, 'UnplacedReason', VOID, Enum);
initMetadataForClass(UnplacedPart, 'UnplacedPart');
initMetadataForClass(PanelResult, 'PanelResult');
initMetadataForObject(EdgeBanding, 'EdgeBanding');
initMetadataForClass(sam$kotlin_Comparator$0_7, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForObject(PanelOptimizer, 'PanelOptimizer');
initMetadataForClass(Order, 'Order', VOID, Enum);
initMetadataForClass(SearchPlan, 'SearchPlan');
initMetadataForClass(Solution, 'Solution');
initMetadataForClass(sam$kotlin_Comparator$0_8, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForClass(Search, 'Search');
initMetadataForClass(sam$kotlin_Comparator$0_9, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForClass(PartShape, 'PartShape', VOID, Enum);
initMetadataForClass(Point, 'Point');
initMetadataForClass(Blank, 'Blank');
initMetadataForObject(Shapes, 'Shapes');
//endregion
function CharSequence() {
}
function Comparable() {
}
function Number_0() {
}
function toList(_this__u8e3s4) {
  var tmp;
  switch (_this__u8e3s4.length) {
    case 0:
      tmp = emptyList();
      break;
    case 1:
      tmp = listOf(_this__u8e3s4[0]);
      break;
    default:
      // Inline function 'kotlin.collections.copyOf' call

      // Inline function 'kotlin.collections.copyOf' call

      // Inline function 'kotlin.js.asDynamic' call

      var tmp$ret$0 = _this__u8e3s4.slice();
      tmp = asList(tmp$ret$0);
      break;
  }
  return tmp;
}
function indexOf(_this__u8e3s4, element) {
  if (element == null) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (_this__u8e3s4[index] == null) {
          return index;
        }
      }
       while (inductionVariable <= last);
  } else {
    var inductionVariable_0 = 0;
    var last_0 = _this__u8e3s4.length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (equals(element, _this__u8e3s4[index_0])) {
          return index_0;
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  return -1;
}
function get_lastIndex(_this__u8e3s4) {
  return _this__u8e3s4.length - 1 | 0;
}
function joinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
  separator = separator === VOID ? ', ' : separator;
  prefix = prefix === VOID ? '' : prefix;
  postfix = postfix === VOID ? '' : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? '...' : truncated;
  transform = transform === VOID ? null : transform;
  return joinTo(_this__u8e3s4, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
}
function joinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
  separator = separator === VOID ? ', ' : separator;
  prefix = prefix === VOID ? '' : prefix;
  postfix = postfix === VOID ? '' : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? '...' : truncated;
  transform = transform === VOID ? null : transform;
  buffer.d(prefix);
  var count = 0;
  var inductionVariable = 0;
  var last = _this__u8e3s4.length;
  $l$loop: while (inductionVariable < last) {
    var element = _this__u8e3s4[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    count = count + 1 | 0;
    if (count > 1) {
      buffer.d(separator);
    }
    if (limit < 0 || count <= limit) {
      appendElement(buffer, element, transform);
    } else
      break $l$loop;
  }
  if (limit >= 0 && count > limit) {
    buffer.d(truncated);
  }
  buffer.d(postfix);
  return buffer;
}
function getOrNull(_this__u8e3s4, index) {
  return (0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false) ? _this__u8e3s4[index] : null;
}
function joinToString_0(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
  separator = separator === VOID ? ', ' : separator;
  prefix = prefix === VOID ? '' : prefix;
  postfix = postfix === VOID ? '' : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? '...' : truncated;
  transform = transform === VOID ? null : transform;
  return joinTo_0(_this__u8e3s4, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
}
function joinTo_0(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
  separator = separator === VOID ? ', ' : separator;
  prefix = prefix === VOID ? '' : prefix;
  postfix = postfix === VOID ? '' : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? '...' : truncated;
  transform = transform === VOID ? null : transform;
  buffer.d(prefix);
  var count = 0;
  var _iterator__ex2g4s = _this__u8e3s4.e();
  $l$loop: while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    count = count + 1 | 0;
    if (count > 1) {
      buffer.d(separator);
    }
    if (limit < 0 || count <= limit) {
      appendElement(buffer, element, transform);
    } else
      break $l$loop;
  }
  if (limit >= 0 && count > limit) {
    buffer.d(truncated);
  }
  buffer.d(postfix);
  return buffer;
}
function firstOrNull(_this__u8e3s4) {
  return _this__u8e3s4.i() ? null : _this__u8e3s4.h(0);
}
function asSequence(_this__u8e3s4) {
  // Inline function 'kotlin.sequences.Sequence' call
  return new asSequence$$inlined$Sequence$1(_this__u8e3s4);
}
function toList_0(_this__u8e3s4) {
  if (isInterface(_this__u8e3s4, Collection)) {
    var tmp;
    switch (_this__u8e3s4.j()) {
      case 0:
        tmp = emptyList();
        break;
      case 1:
        var tmp_0;
        if (isInterface(_this__u8e3s4, KtList)) {
          tmp_0 = _this__u8e3s4.h(0);
        } else {
          tmp_0 = _this__u8e3s4.e().g();
        }

        tmp = listOf(tmp_0);
        break;
      default:
        tmp = toMutableList(_this__u8e3s4);
        break;
    }
    return tmp;
  }
  return optimizeReadOnlyList(toMutableList_0(_this__u8e3s4));
}
function plus(_this__u8e3s4, elements) {
  if (isInterface(elements, Collection)) {
    var result = ArrayList_init_$Create$_0(_this__u8e3s4.j() + elements.j() | 0);
    result.n(_this__u8e3s4);
    result.n(elements);
    return result;
  } else {
    var result_0 = ArrayList_init_$Create$_1(_this__u8e3s4);
    addAll(result_0, elements);
    return result_0;
  }
}
function sortedWith(_this__u8e3s4, comparator) {
  if (isInterface(_this__u8e3s4, Collection)) {
    if (_this__u8e3s4.j() <= 1)
      return toList_0(_this__u8e3s4);
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp = copyToArray(_this__u8e3s4);
    // Inline function 'kotlin.apply' call
    var this_0 = isArray(tmp) ? tmp : THROW_CCE();
    sortWith(this_0, comparator);
    return asList(this_0);
  }
  // Inline function 'kotlin.apply' call
  var this_1 = toMutableList_0(_this__u8e3s4);
  sortWith_0(this_1, comparator);
  return this_1;
}
function sum(_this__u8e3s4) {
  var sum = 0;
  var _iterator__ex2g4s = _this__u8e3s4.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    sum = sum + element | 0;
  }
  return sum;
}
function random(_this__u8e3s4, random) {
  if (_this__u8e3s4.i())
    throw NoSuchElementException_init_$Create$_0('Collection is empty.');
  return elementAt(_this__u8e3s4, random.o(_this__u8e3s4.j()));
}
function first(_this__u8e3s4) {
  if (_this__u8e3s4.i())
    throw NoSuchElementException_init_$Create$_0('List is empty.');
  return _this__u8e3s4.h(0);
}
function toMutableList(_this__u8e3s4) {
  return ArrayList_init_$Create$_1(_this__u8e3s4);
}
function toMutableList_0(_this__u8e3s4) {
  if (isInterface(_this__u8e3s4, Collection))
    return toMutableList(_this__u8e3s4);
  return toCollection(_this__u8e3s4, ArrayList_init_$Create$());
}
function elementAt(_this__u8e3s4, index) {
  if (isInterface(_this__u8e3s4, KtList))
    return _this__u8e3s4.h(index);
  return elementAtOrElse(_this__u8e3s4, index, elementAt$lambda(index));
}
function toCollection(_this__u8e3s4, destination) {
  var _iterator__ex2g4s = _this__u8e3s4.e();
  while (_iterator__ex2g4s.f()) {
    var item = _iterator__ex2g4s.g();
    destination.p(item);
  }
  return destination;
}
function elementAtOrElse(_this__u8e3s4, index, defaultValue) {
  if (isInterface(_this__u8e3s4, KtList)) {
    // Inline function 'kotlin.collections.getOrElse' call
    return (0 <= index ? index < _this__u8e3s4.j() : false) ? _this__u8e3s4.h(index) : defaultValue(index);
  }
  if (index < 0)
    return defaultValue(index);
  var iterator = _this__u8e3s4.e();
  var count = 0;
  while (iterator.f()) {
    var element = iterator.g();
    var _unary__edvuaz = count;
    count = _unary__edvuaz + 1 | 0;
    if (index === _unary__edvuaz)
      return element;
  }
  return defaultValue(index);
}
function asSequence$$inlined$Sequence$1($this_asSequence) {
  this.q_1 = $this_asSequence;
}
protoOf(asSequence$$inlined$Sequence$1).e = function () {
  return this.q_1.e();
};
function elementAt$lambda($index) {
  return function (it) {
    throw IndexOutOfBoundsException_init_$Create$_0("Collection doesn't contain element at index " + $index + '.');
  };
}
function coerceAtLeast(_this__u8e3s4, minimumValue) {
  return _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
}
function coerceAtMost(_this__u8e3s4, maximumValue) {
  return _this__u8e3s4 > maximumValue ? maximumValue : _this__u8e3s4;
}
function toList_1(_this__u8e3s4) {
  var it = _this__u8e3s4.e();
  if (!it.f())
    return emptyList();
  var element = it.g();
  if (!it.f())
    return listOf(element);
  var dst = ArrayList_init_$Create$();
  dst.p(element);
  while (it.f()) {
    dst.p(it.g());
  }
  return dst;
}
function filter(_this__u8e3s4, predicate) {
  return new FilteringSequence(_this__u8e3s4, true, predicate);
}
function map(_this__u8e3s4, transform) {
  return new TransformingSequence(_this__u8e3s4, transform);
}
function sortedWith_0(_this__u8e3s4, comparator) {
  return new sortedWith$1(_this__u8e3s4, comparator);
}
function toMutableList_1(_this__u8e3s4) {
  return toCollection_0(_this__u8e3s4, ArrayList_init_$Create$());
}
function toCollection_0(_this__u8e3s4, destination) {
  var _iterator__ex2g4s = _this__u8e3s4.e();
  while (_iterator__ex2g4s.f()) {
    var item = _iterator__ex2g4s.g();
    destination.p(item);
  }
  return destination;
}
function sortedWith$1($this_sortedWith, $comparator) {
  this.r_1 = $this_sortedWith;
  this.s_1 = $comparator;
}
protoOf(sortedWith$1).e = function () {
  var sortedList = toMutableList_1(this.r_1);
  sortWith_0(sortedList, this.s_1);
  return sortedList.e();
};
function _Char___init__impl__6a9atx(value) {
  return value;
}
function _get_value__a43j40($this) {
  return $this;
}
function Char__compareTo_impl_ypi4mb($this, other) {
  return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
}
function Char__minus_impl_a2frrh($this, other) {
  return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
}
function Char__toInt_impl_vasixd($this) {
  return _get_value__a43j40($this);
}
function toString($this) {
  // Inline function 'kotlin.js.unsafeCast' call
  return String.fromCharCode(_get_value__a43j40($this));
}
function Char() {
}
function KtList() {
}
function Collection() {
}
function Entry() {
}
function KtMap() {
}
function KtSet() {
}
function Companion() {
}
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
function Enum(name, ordinal) {
  this.c1_1 = name;
  this.d1_1 = ordinal;
}
protoOf(Enum).e1 = function (other) {
  return compareTo(this.d1_1, other.d1_1);
};
protoOf(Enum).c = function (other) {
  return this.e1(other instanceof Enum ? other : THROW_CCE());
};
protoOf(Enum).equals = function (other) {
  return this === other;
};
protoOf(Enum).hashCode = function () {
  return identityHashCode(this);
};
protoOf(Enum).toString = function () {
  return this.c1_1;
};
function toString_0(_this__u8e3s4) {
  var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : toString_1(_this__u8e3s4);
  return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
}
function Companion_0() {
  Companion_instance_0 = this;
  this.f1_1 = new Long(0, -2147483648);
  this.g1_1 = new Long(-1, 2147483647);
  this.h1_1 = 8;
  this.i1_1 = 64;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 == null)
    new Companion_0();
  return Companion_instance_0;
}
function Long(low, high) {
  Companion_getInstance_0();
  Number_0.call(this);
  this.j1_1 = low;
  this.k1_1 = high;
}
protoOf(Long).l1 = function (other) {
  return compare(this, other);
};
protoOf(Long).c = function (other) {
  return this.l1(other instanceof Long ? other : THROW_CCE());
};
protoOf(Long).toString = function () {
  return toStringImpl(this, 10);
};
protoOf(Long).equals = function (other) {
  var tmp;
  if (other instanceof Long) {
    tmp = equalsLong(this, other);
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(Long).hashCode = function () {
  return hashCode(this);
};
protoOf(Long).valueOf = function () {
  return toNumber(this);
};
function abs(_this__u8e3s4) {
  var tmp;
  // Inline function 'kotlin.js.internal.isNegative' call
  if (_this__u8e3s4 < 0) {
    // Inline function 'kotlin.js.internal.unaryMinus' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = -_this__u8e3s4;
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function FunctionAdapter() {
}
function booleanArray(size) {
  var tmp0 = 'BooleanArray';
  // Inline function 'withType' call
  var array = fillArrayVal(Array(size), false);
  array.$type$ = tmp0;
  // Inline function 'kotlin.js.unsafeCast' call
  return array;
}
function fillArrayVal(array, initValue) {
  var inductionVariable = 0;
  var last = array.length - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      array[i] = initValue;
    }
     while (!(i === last));
  return array;
}
function booleanArrayOf(arr) {
  var tmp0 = 'BooleanArray';
  // Inline function 'kotlin.js.asDynamic' call
  // Inline function 'withType' call
  var array = arr.slice();
  array.$type$ = tmp0;
  // Inline function 'kotlin.js.unsafeCast' call
  return array;
}
function get_buf() {
  _init_properties_bitUtils_kt__nfcg4k();
  return buf;
}
var buf;
function get_bufFloat64() {
  _init_properties_bitUtils_kt__nfcg4k();
  return bufFloat64;
}
var bufFloat64;
var bufFloat32;
function get_bufInt32() {
  _init_properties_bitUtils_kt__nfcg4k();
  return bufInt32;
}
var bufInt32;
function get_lowIndex() {
  _init_properties_bitUtils_kt__nfcg4k();
  return lowIndex;
}
var lowIndex;
function get_highIndex() {
  _init_properties_bitUtils_kt__nfcg4k();
  return highIndex;
}
var highIndex;
function getNumberHashCode(obj) {
  _init_properties_bitUtils_kt__nfcg4k();
  // Inline function 'kotlin.js.jsBitwiseOr' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  if ((obj | 0) === obj) {
    return numberToInt(obj);
  }
  get_bufFloat64()[0] = obj;
  return imul_0(get_bufInt32()[get_highIndex()], 31) + get_bufInt32()[get_lowIndex()] | 0;
}
var properties_initialized_bitUtils_kt_i2bo3e;
function _init_properties_bitUtils_kt__nfcg4k() {
  if (!properties_initialized_bitUtils_kt_i2bo3e) {
    properties_initialized_bitUtils_kt_i2bo3e = true;
    buf = new ArrayBuffer(8);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    bufFloat64 = new Float64Array(get_buf());
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    bufFloat32 = new Float32Array(get_buf());
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    bufInt32 = new Int32Array(get_buf());
    // Inline function 'kotlin.run' call
    get_bufFloat64()[0] = -1.0;
    lowIndex = !(get_bufInt32()[0] === 0) ? 1 : 0;
    highIndex = 1 - get_lowIndex() | 0;
  }
}
function get_ZERO() {
  _init_properties_boxedLong_kt__v24qrw();
  return ZERO;
}
var ZERO;
function get_ONE() {
  _init_properties_boxedLong_kt__v24qrw();
  return ONE;
}
var ONE;
function get_NEG_ONE() {
  _init_properties_boxedLong_kt__v24qrw();
  return NEG_ONE;
}
var NEG_ONE;
function get_MAX_VALUE() {
  _init_properties_boxedLong_kt__v24qrw();
  return MAX_VALUE;
}
var MAX_VALUE;
function get_MIN_VALUE() {
  _init_properties_boxedLong_kt__v24qrw();
  return MIN_VALUE;
}
var MIN_VALUE;
function get_TWO_PWR_24_() {
  _init_properties_boxedLong_kt__v24qrw();
  return TWO_PWR_24_;
}
var TWO_PWR_24_;
var longArrayClass;
function compare(_this__u8e3s4, other) {
  _init_properties_boxedLong_kt__v24qrw();
  if (equalsLong(_this__u8e3s4, other)) {
    return 0;
  }
  var thisNeg = isNegative(_this__u8e3s4);
  var otherNeg = isNegative(other);
  return thisNeg && !otherNeg ? -1 : !thisNeg && otherNeg ? 1 : isNegative(subtract(_this__u8e3s4, other)) ? -1 : 1;
}
function convertToInt(_this__u8e3s4) {
  _init_properties_boxedLong_kt__v24qrw();
  return _this__u8e3s4.j1_1;
}
function toNumber(_this__u8e3s4) {
  _init_properties_boxedLong_kt__v24qrw();
  return _this__u8e3s4.k1_1 * 4.294967296E9 + getLowBitsUnsigned(_this__u8e3s4);
}
function toStringImpl(_this__u8e3s4, radix) {
  _init_properties_boxedLong_kt__v24qrw();
  if (isZero(_this__u8e3s4)) {
    return '0';
  }
  if (isNegative(_this__u8e3s4)) {
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      var radixLong = fromInt(radix);
      var div = divide(_this__u8e3s4, radixLong);
      var rem = convertToInt(subtract(multiply(div, radixLong), _this__u8e3s4));
      var tmp = toStringImpl(div, radix);
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      return tmp + rem.toString(radix);
    } else {
      return '-' + toStringImpl(negate(_this__u8e3s4), radix);
    }
  }
  var digitsPerTime = radix === 2 ? 31 : radix <= 10 ? 9 : radix <= 21 ? 7 : radix <= 35 ? 6 : 5;
  var radixToPower = fromNumber(Math.pow(radix, digitsPerTime));
  var rem_0 = _this__u8e3s4;
  var result = '';
  while (true) {
    var remDiv = divide(rem_0, radixToPower);
    var intval = convertToInt(subtract(rem_0, multiply(remDiv, radixToPower)));
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var digits = intval.toString(radix);
    rem_0 = remDiv;
    if (isZero(rem_0)) {
      return digits + result;
    } else {
      while (digits.length < digitsPerTime) {
        digits = '0' + digits;
      }
      result = digits + result;
    }
  }
}
function equalsLong(_this__u8e3s4, other) {
  _init_properties_boxedLong_kt__v24qrw();
  return _this__u8e3s4.k1_1 === other.k1_1 && _this__u8e3s4.j1_1 === other.j1_1;
}
function hashCode(l) {
  _init_properties_boxedLong_kt__v24qrw();
  return l.j1_1 ^ l.k1_1;
}
function fromInt(value) {
  _init_properties_boxedLong_kt__v24qrw();
  return new Long(value, value < 0 ? -1 : 0);
}
function isNegative(_this__u8e3s4) {
  _init_properties_boxedLong_kt__v24qrw();
  return _this__u8e3s4.k1_1 < 0;
}
function subtract(_this__u8e3s4, other) {
  _init_properties_boxedLong_kt__v24qrw();
  return add(_this__u8e3s4, negate(other));
}
function getLowBitsUnsigned(_this__u8e3s4) {
  _init_properties_boxedLong_kt__v24qrw();
  return _this__u8e3s4.j1_1 >= 0 ? _this__u8e3s4.j1_1 : 4.294967296E9 + _this__u8e3s4.j1_1;
}
function isZero(_this__u8e3s4) {
  _init_properties_boxedLong_kt__v24qrw();
  return _this__u8e3s4.k1_1 === 0 && _this__u8e3s4.j1_1 === 0;
}
function multiply(_this__u8e3s4, other) {
  _init_properties_boxedLong_kt__v24qrw();
  if (isZero(_this__u8e3s4)) {
    return get_ZERO();
  } else if (isZero(other)) {
    return get_ZERO();
  }
  if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
    return isOdd(other) ? get_MIN_VALUE() : get_ZERO();
  } else if (equalsLong(other, get_MIN_VALUE())) {
    return isOdd(_this__u8e3s4) ? get_MIN_VALUE() : get_ZERO();
  }
  if (isNegative(_this__u8e3s4)) {
    var tmp;
    if (isNegative(other)) {
      tmp = multiply(negate(_this__u8e3s4), negate(other));
    } else {
      tmp = negate(multiply(negate(_this__u8e3s4), other));
    }
    return tmp;
  } else if (isNegative(other)) {
    return negate(multiply(_this__u8e3s4, negate(other)));
  }
  if (lessThan(_this__u8e3s4, get_TWO_PWR_24_()) && lessThan(other, get_TWO_PWR_24_())) {
    return fromNumber(toNumber(_this__u8e3s4) * toNumber(other));
  }
  var a48 = _this__u8e3s4.k1_1 >>> 16 | 0;
  var a32 = _this__u8e3s4.k1_1 & 65535;
  var a16 = _this__u8e3s4.j1_1 >>> 16 | 0;
  var a00 = _this__u8e3s4.j1_1 & 65535;
  var b48 = other.k1_1 >>> 16 | 0;
  var b32 = other.k1_1 & 65535;
  var b16 = other.j1_1 >>> 16 | 0;
  var b00 = other.j1_1 & 65535;
  var c48 = 0;
  var c32 = 0;
  var c16 = 0;
  var c00 = 0;
  c00 = c00 + imul_0(a00, b00) | 0;
  c16 = c16 + (c00 >>> 16 | 0) | 0;
  c00 = c00 & 65535;
  c16 = c16 + imul_0(a16, b00) | 0;
  c32 = c32 + (c16 >>> 16 | 0) | 0;
  c16 = c16 & 65535;
  c16 = c16 + imul_0(a00, b16) | 0;
  c32 = c32 + (c16 >>> 16 | 0) | 0;
  c16 = c16 & 65535;
  c32 = c32 + imul_0(a32, b00) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c32 = c32 + imul_0(a16, b16) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c32 = c32 + imul_0(a00, b32) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c48 = c48 + (((imul_0(a48, b00) + imul_0(a32, b16) | 0) + imul_0(a16, b32) | 0) + imul_0(a00, b48) | 0) | 0;
  c48 = c48 & 65535;
  return new Long(c16 << 16 | c00, c48 << 16 | c32);
}
function negate(_this__u8e3s4) {
  _init_properties_boxedLong_kt__v24qrw();
  return add(invert(_this__u8e3s4), new Long(1, 0));
}
function fromNumber(value) {
  _init_properties_boxedLong_kt__v24qrw();
  if (isNaN_0(value)) {
    return get_ZERO();
  } else if (value <= -9.223372036854776E18) {
    return get_MIN_VALUE();
  } else if (value + 1 >= 9.223372036854776E18) {
    return get_MAX_VALUE();
  } else if (value < 0) {
    return negate(fromNumber(-value));
  } else {
    var twoPwr32 = 4.294967296E9;
    // Inline function 'kotlin.js.jsBitwiseOr' call
    var tmp = value % twoPwr32 | 0;
    // Inline function 'kotlin.js.jsBitwiseOr' call
    var tmp$ret$1 = value / twoPwr32 | 0;
    return new Long(tmp, tmp$ret$1);
  }
}
function add(_this__u8e3s4, other) {
  _init_properties_boxedLong_kt__v24qrw();
  var a48 = _this__u8e3s4.k1_1 >>> 16 | 0;
  var a32 = _this__u8e3s4.k1_1 & 65535;
  var a16 = _this__u8e3s4.j1_1 >>> 16 | 0;
  var a00 = _this__u8e3s4.j1_1 & 65535;
  var b48 = other.k1_1 >>> 16 | 0;
  var b32 = other.k1_1 & 65535;
  var b16 = other.j1_1 >>> 16 | 0;
  var b00 = other.j1_1 & 65535;
  var c48 = 0;
  var c32 = 0;
  var c16 = 0;
  var c00 = 0;
  c00 = c00 + (a00 + b00 | 0) | 0;
  c16 = c16 + (c00 >>> 16 | 0) | 0;
  c00 = c00 & 65535;
  c16 = c16 + (a16 + b16 | 0) | 0;
  c32 = c32 + (c16 >>> 16 | 0) | 0;
  c16 = c16 & 65535;
  c32 = c32 + (a32 + b32 | 0) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c48 = c48 + (a48 + b48 | 0) | 0;
  c48 = c48 & 65535;
  return new Long(c16 << 16 | c00, c48 << 16 | c32);
}
function isOdd(_this__u8e3s4) {
  _init_properties_boxedLong_kt__v24qrw();
  return (_this__u8e3s4.j1_1 & 1) === 1;
}
function lessThan(_this__u8e3s4, other) {
  _init_properties_boxedLong_kt__v24qrw();
  return compare(_this__u8e3s4, other) < 0;
}
function invert(_this__u8e3s4) {
  _init_properties_boxedLong_kt__v24qrw();
  return new Long(~_this__u8e3s4.j1_1, ~_this__u8e3s4.k1_1);
}
function divide(_this__u8e3s4, other) {
  _init_properties_boxedLong_kt__v24qrw();
  if (isZero(other)) {
    throw Exception_init_$Create$_0('division by zero');
  } else if (isZero(_this__u8e3s4)) {
    return get_ZERO();
  }
  if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
    if (equalsLong(other, get_ONE()) || equalsLong(other, get_NEG_ONE())) {
      return get_MIN_VALUE();
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return get_ONE();
    } else {
      var halfThis = shiftRight(_this__u8e3s4, 1);
      var approx = shiftLeft(divide(halfThis, other), 1);
      if (equalsLong(approx, get_ZERO())) {
        return isNegative(other) ? get_ONE() : get_NEG_ONE();
      } else {
        var rem = subtract(_this__u8e3s4, multiply(other, approx));
        return add(approx, divide(rem, other));
      }
    }
  } else if (equalsLong(other, get_MIN_VALUE())) {
    return get_ZERO();
  }
  if (isNegative(_this__u8e3s4)) {
    var tmp;
    if (isNegative(other)) {
      tmp = divide(negate(_this__u8e3s4), negate(other));
    } else {
      tmp = negate(divide(negate(_this__u8e3s4), other));
    }
    return tmp;
  } else if (isNegative(other)) {
    return negate(divide(_this__u8e3s4, negate(other)));
  }
  var res = get_ZERO();
  var rem_0 = _this__u8e3s4;
  while (greaterThanOrEqual(rem_0, other)) {
    var approxDouble = toNumber(rem_0) / toNumber(other);
    var approx2 = Math.max(1.0, Math.floor(approxDouble));
    var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
    var delta = log2 <= 48 ? 1.0 : Math.pow(2.0, log2 - 48);
    var approxRes = fromNumber(approx2);
    var approxRem = multiply(approxRes, other);
    while (isNegative(approxRem) || greaterThan(approxRem, rem_0)) {
      approx2 = approx2 - delta;
      approxRes = fromNumber(approx2);
      approxRem = multiply(approxRes, other);
    }
    if (isZero(approxRes)) {
      approxRes = get_ONE();
    }
    res = add(res, approxRes);
    rem_0 = subtract(rem_0, approxRem);
  }
  return res;
}
function shiftRight(_this__u8e3s4, numBits) {
  _init_properties_boxedLong_kt__v24qrw();
  var numBits_0 = numBits & 63;
  if (numBits_0 === 0) {
    return _this__u8e3s4;
  } else {
    if (numBits_0 < 32) {
      return new Long(_this__u8e3s4.j1_1 >>> numBits_0 | 0 | _this__u8e3s4.k1_1 << (32 - numBits_0 | 0), _this__u8e3s4.k1_1 >> numBits_0);
    } else {
      return new Long(_this__u8e3s4.k1_1 >> (numBits_0 - 32 | 0), _this__u8e3s4.k1_1 >= 0 ? 0 : -1);
    }
  }
}
function shiftLeft(_this__u8e3s4, numBits) {
  _init_properties_boxedLong_kt__v24qrw();
  var numBits_0 = numBits & 63;
  if (numBits_0 === 0) {
    return _this__u8e3s4;
  } else {
    if (numBits_0 < 32) {
      return new Long(_this__u8e3s4.j1_1 << numBits_0, _this__u8e3s4.k1_1 << numBits_0 | (_this__u8e3s4.j1_1 >>> (32 - numBits_0 | 0) | 0));
    } else {
      return new Long(0, _this__u8e3s4.j1_1 << (numBits_0 - 32 | 0));
    }
  }
}
function greaterThan(_this__u8e3s4, other) {
  _init_properties_boxedLong_kt__v24qrw();
  return compare(_this__u8e3s4, other) > 0;
}
function greaterThanOrEqual(_this__u8e3s4, other) {
  _init_properties_boxedLong_kt__v24qrw();
  return compare(_this__u8e3s4, other) >= 0;
}
function isLongArray(a) {
  _init_properties_boxedLong_kt__v24qrw();
  return isJsArray(a) && a.$type$ === 'LongArray';
}
function longArrayClass$lambda(it) {
  _init_properties_boxedLong_kt__v24qrw();
  return !(it == null) ? isLongArray(it) : false;
}
var properties_initialized_boxedLong_kt_lfwt2;
function _init_properties_boxedLong_kt__v24qrw() {
  if (!properties_initialized_boxedLong_kt_lfwt2) {
    properties_initialized_boxedLong_kt_lfwt2 = true;
    ZERO = fromInt(0);
    ONE = fromInt(1);
    NEG_ONE = fromInt(-1);
    MAX_VALUE = new Long(-1, 2147483647);
    MIN_VALUE = new Long(0, -2147483648);
    TWO_PWR_24_ = fromInt(16777216);
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp = Array;
    longArrayClass = new PrimitiveKClassImpl(tmp, 'LongArray', longArrayClass$lambda);
  }
}
function charSequenceGet(a, index) {
  var tmp;
  if (isString(a)) {
    tmp = charCodeAt(a, index);
  } else {
    tmp = a.b(index);
  }
  return tmp;
}
function isString(a) {
  return typeof a === 'string';
}
function charCodeAt(_this__u8e3s4, index) {
  // Inline function 'kotlin.js.asDynamic' call
  return _this__u8e3s4.charCodeAt(index);
}
function charSequenceLength(a) {
  var tmp;
  if (isString(a)) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    tmp = a.length;
  } else {
    tmp = a.a();
  }
  return tmp;
}
function arrayToString(array) {
  return joinToString(array, ', ', '[', ']', VOID, VOID, arrayToString$lambda);
}
function arrayToString$lambda(it) {
  return toString_1(it);
}
function compareTo(a, b) {
  var tmp;
  switch (typeof a) {
    case 'number':
      var tmp_0;
      if (typeof b === 'number') {
        tmp_0 = doubleCompareTo(a, b);
      } else {
        if (b instanceof Long) {
          tmp_0 = doubleCompareTo(a, toNumber(b));
        } else {
          tmp_0 = primitiveCompareTo(a, b);
        }
      }

      tmp = tmp_0;
      break;
    case 'string':
    case 'boolean':
    case 'bigint':
      tmp = primitiveCompareTo(a, b);
      break;
    default:
      tmp = compareToDoNotIntrinsicify(a, b);
      break;
  }
  return tmp;
}
function doubleCompareTo(a, b) {
  var tmp;
  if (a < b) {
    tmp = -1;
  } else if (a > b) {
    tmp = 1;
  } else if (a === b) {
    var tmp_0;
    if (a !== 0) {
      tmp_0 = 0;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      var ia = 1 / a;
      var tmp_1;
      // Inline function 'kotlin.js.asDynamic' call
      if (ia === 1 / b) {
        tmp_1 = 0;
      } else {
        if (ia < 0) {
          tmp_1 = -1;
        } else {
          tmp_1 = 1;
        }
      }
      tmp_0 = tmp_1;
    }
    tmp = tmp_0;
  } else if (a !== a) {
    tmp = b !== b ? 0 : 1;
  } else {
    tmp = -1;
  }
  return tmp;
}
function primitiveCompareTo(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function compareToDoNotIntrinsicify(a, b) {
  return a.c(b);
}
function identityHashCode(obj) {
  return getObjectHashCode(obj);
}
function getObjectHashCode(obj) {
  // Inline function 'kotlin.js.jsIn' call
  if (!('kotlinHashCodeValue$' in obj)) {
    var hash = calculateRandomHash();
    var descriptor = new Object();
    descriptor.value = hash;
    descriptor.enumerable = false;
    Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
  }
  // Inline function 'kotlin.js.unsafeCast' call
  return obj['kotlinHashCodeValue$'];
}
function calculateRandomHash() {
  // Inline function 'kotlin.js.jsBitwiseOr' call
  return Math.random() * 4.294967296E9 | 0;
}
function objectCreate(proto) {
  proto = proto === VOID ? null : proto;
  return Object.create(proto);
}
function defineProp(obj, name, getter, setter, enumerable) {
  return Object.defineProperty(obj, name, {configurable: true, get: getter, set: setter, enumerable: enumerable});
}
function toString_1(o) {
  var tmp;
  if (o == null) {
    tmp = 'null';
  } else if (isArrayish(o)) {
    tmp = '[...]';
  } else if (!(typeof o.toString === 'function')) {
    tmp = anyToString(o);
  } else {
    // Inline function 'kotlin.js.unsafeCast' call
    tmp = o.toString();
  }
  return tmp;
}
function anyToString(o) {
  return Object.prototype.toString.call(o);
}
function equals(obj1, obj2) {
  if (obj1 == null) {
    return obj2 == null;
  }
  if (obj2 == null) {
    return false;
  }
  if (typeof obj1 === 'object' && typeof obj1.equals === 'function') {
    return obj1.equals(obj2);
  }
  if (obj1 !== obj1) {
    return obj2 !== obj2;
  }
  if (typeof obj1 === 'number' && typeof obj2 === 'number') {
    var tmp;
    if (obj1 === obj2) {
      var tmp_0;
      if (obj1 !== 0) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = 1 / obj1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = tmp_1 === 1 / obj2;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  }
  return obj1 === obj2;
}
function hashCode_0(obj) {
  if (obj == null)
    return 0;
  var typeOf = typeof obj;
  var tmp;
  switch (typeOf) {
    case 'object':
      tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
      break;
    case 'function':
      tmp = getObjectHashCode(obj);
      break;
    case 'number':
      tmp = getNumberHashCode(obj);
      break;
    case 'boolean':
      // Inline function 'kotlin.js.unsafeCast' call

      tmp = getBooleanHashCode(obj);
      break;
    case 'string':
      tmp = getStringHashCode(String(obj));
      break;
    case 'bigint':
      // Inline function 'kotlin.js.unsafeCast' call

      tmp = getBigIntHashCode(obj);
      break;
    case 'symbol':
      tmp = getSymbolHashCode(obj);
      break;
    default:
      tmp = function () {
        throw new Error('Unexpected typeof `' + typeOf + '`');
      }();
      break;
  }
  return tmp;
}
function getBooleanHashCode(value) {
  return value ? 1231 : 1237;
}
function getStringHashCode(str) {
  var hash = 0;
  var length = str.length;
  var inductionVariable = 0;
  var last = length - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var code = str.charCodeAt(i);
      hash = imul_0(hash, 31) + code | 0;
    }
     while (!(i === last));
  return hash;
}
function getBigIntHashCode(value) {
  var shiftNumber = BigInt(32);
  var mask = BigInt(4.294967295E9);
  var bigNumber = abs(value);
  var hashCode = 0;
  var tmp;
  // Inline function 'kotlin.js.internal.isNegative' call
  if (value < 0) {
    tmp = -1;
  } else {
    tmp = 1;
  }
  var signum = tmp;
  $l$loop: while (true) {
    // Inline function 'kotlin.js.internal.isZero' call
    if (!!(bigNumber == 0)) {
      break $l$loop;
    }
    // Inline function 'kotlin.js.internal.and' call
    // Inline function 'kotlin.js.jsBitwiseAnd' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.internal.toNumber' call
    var self_0 = bigNumber & mask;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var chunk = Number(self_0);
    hashCode = imul_0(31, hashCode) + chunk | 0;
    // Inline function 'kotlin.js.internal.shr' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    bigNumber = bigNumber >> shiftNumber;
  }
  return imul_0(hashCode, signum);
}
function getSymbolHashCode(value) {
  var hashCodeMap = symbolIsSharable(value) ? getSymbolMap() : getSymbolWeakMap();
  var cachedHashCode = hashCodeMap.get(value);
  if (cachedHashCode !== VOID)
    return cachedHashCode;
  var hash = calculateRandomHash();
  hashCodeMap.set(value, hash);
  return hash;
}
function symbolIsSharable(symbol) {
  return Symbol.keyFor(symbol) != VOID;
}
function getSymbolMap() {
  if (symbolMap === VOID) {
    symbolMap = new Map();
  }
  return symbolMap;
}
function getSymbolWeakMap() {
  if (symbolWeakMap === VOID) {
    symbolWeakMap = new WeakMap();
  }
  return symbolWeakMap;
}
var symbolMap;
var symbolWeakMap;
function unboxIntrinsic(x) {
  // Inline function 'kotlin.error' call
  var message = 'Should be lowered';
  throw IllegalStateException_init_$Create$_0(toString_1(message));
}
function captureStack(instance, constructorFunction) {
  if (Error.captureStackTrace != null) {
    Error.captureStackTrace(instance, constructorFunction);
  } else {
    // Inline function 'kotlin.js.asDynamic' call
    instance.stack = (new Error()).stack;
  }
}
function protoOf(constructor) {
  return constructor.prototype;
}
function defineMessage(message, cause) {
  var tmp;
  if (isUndefined(message)) {
    var tmp_0;
    if (isUndefined(cause)) {
      tmp_0 = message;
    } else {
      var tmp1_elvis_lhs = cause == null ? null : cause.toString();
      tmp_0 = tmp1_elvis_lhs == null ? VOID : tmp1_elvis_lhs;
    }
    tmp = tmp_0;
  } else {
    tmp = message == null ? VOID : message;
  }
  return tmp;
}
function isUndefined(value) {
  return value === VOID;
}
function extendThrowable(this_, message, cause) {
  defineFieldOnInstance(this_, 'message', defineMessage(message, cause));
  defineFieldOnInstance(this_, 'cause', cause);
  defineFieldOnInstance(this_, 'name', Object.getPrototypeOf(this_).constructor.name);
}
function defineFieldOnInstance(this_, name, value) {
  Object.defineProperty(this_, name, {configurable: true, writable: true, value: value});
}
function noWhenBranchMatchedException() {
  throw NoWhenBranchMatchedException_init_$Create$();
}
function THROW_NPE() {
  throw NullPointerException_init_$Create$();
}
function THROW_CCE() {
  throw ClassCastException_init_$Create$();
}
function ensureNotNull(v) {
  var tmp;
  if (v == null) {
    THROW_NPE();
  } else {
    tmp = v;
  }
  return tmp;
}
function jsGenerateInterfaceSymbol() {
  return generateInterfaceSymbolById();
}
function createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
  var undef = VOID;
  return {kind: kind, simpleName: name, associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, $kClass$: undef, defaultConstructor: defaultConstructor};
}
function initMetadataForClass(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
  var kind = 'class';
  initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
}
function initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
  if (!(parent == null)) {
    ctor.prototype = Object.create(parent.prototype);
    ctor.prototype.constructor = ctor;
  }
  var metadata = createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity);
  ctor.$metadata$ = metadata;
  var prototype = ctor.prototype;
  if (!(interfaces == null)) {
    var inductionVariable = 0;
    var last = interfaces.length;
    while (inductionVariable < last) {
      var i = interfaces[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      Object.assign(prototype, i.prototype);
      prototype[i.Symbol] = true;
    }
  }
  if (kind === 'interface') {
    ctor.Symbol = generateInterfaceSymbolById();
  }
}
function generateInterfaceSymbolById() {
  return '#__interface_' + generateInterfaceId();
}
function generateInterfaceId() {
  if (globalInterfaceId === VOID) {
    globalInterfaceId = 0;
  }
  // Inline function 'kotlin.js.unsafeCast' call
  globalInterfaceId = globalInterfaceId + 1 | 0;
  return globalInterfaceId;
}
var globalInterfaceId;
function initMetadataForObject(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
  var kind = 'object';
  initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
}
function initMetadataForInterface(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
  var kind = 'interface';
  initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
}
function initMetadataForLambda(ctor, parent, interfaces, suspendArity) {
  initMetadataForClass(ctor, 'Lambda', VOID, parent, interfaces, suspendArity, VOID, VOID);
}
function initMetadataForCoroutine(ctor, parent, interfaces, suspendArity) {
  initMetadataForClass(ctor, 'Coroutine', VOID, parent, interfaces, suspendArity, VOID, VOID);
}
function initMetadataForFunctionReference(ctor, parent, interfaces, suspendArity) {
  initMetadataForClass(ctor, 'FunctionReference', VOID, parent, interfaces, suspendArity, VOID, VOID);
}
function initMetadataForCompanion(ctor, parent, interfaces, suspendArity) {
  initMetadataForObject(ctor, 'Companion', VOID, parent, interfaces, suspendArity, VOID, VOID);
}
function numberToInt(a) {
  var tmp;
  if (a instanceof Long) {
    tmp = convertToInt(a);
  } else {
    tmp = doubleToInt(a);
  }
  return tmp;
}
function doubleToInt(a) {
  var tmp;
  if (a > 2147483647) {
    tmp = 2147483647;
  } else if (a < -2147483648) {
    tmp = -2147483648;
  } else {
    // Inline function 'kotlin.js.jsBitwiseOr' call
    tmp = a | 0;
  }
  return tmp;
}
function isArrayish(o) {
  return isJsArray(o) || isView(o);
}
function isJsArray(obj) {
  // Inline function 'kotlin.js.unsafeCast' call
  return Array.isArray(obj);
}
function isInterface(obj, iface) {
  return obj[iface.Symbol] === true;
}
function isArray(obj) {
  var tmp;
  if (isJsArray(obj)) {
    // Inline function 'kotlin.js.asDynamic' call
    tmp = !obj.$type$;
  } else {
    tmp = false;
  }
  return tmp;
}
function isNumber(a) {
  var tmp;
  if (typeof a === 'number') {
    tmp = true;
  } else {
    tmp = a instanceof Long;
  }
  return tmp;
}
function isComparable(value) {
  var type = typeof value;
  return type === 'string' || type === 'boolean' || isNumber(value) || isInterface(value, Comparable);
}
function isCharSequence(value) {
  return typeof value === 'string' || isInterface(value, CharSequence);
}
function get_VOID() {
  _init_properties_void_kt__3zg9as();
  return VOID;
}
var VOID;
var properties_initialized_void_kt_e4ret2;
function _init_properties_void_kt__3zg9as() {
  if (!properties_initialized_void_kt_e4ret2) {
    properties_initialized_void_kt_e4ret2 = true;
    VOID = void 0;
  }
}
function asList(_this__u8e3s4) {
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return new ArrayList(_this__u8e3s4);
}
function sortWith(_this__u8e3s4, comparator) {
  if (_this__u8e3s4.length > 1) {
    sortArrayWith(_this__u8e3s4, comparator);
  }
}
function copyOf(_this__u8e3s4, newSize) {
  // Inline function 'kotlin.require' call
  if (!(newSize >= 0)) {
    var message = 'Invalid new array size: ' + newSize + '.';
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  return fillFrom(_this__u8e3s4, new Int32Array(newSize));
}
function copyOf_0(_this__u8e3s4, newSize) {
  // Inline function 'kotlin.require' call
  if (!(newSize >= 0)) {
    var message = 'Invalid new array size: ' + newSize + '.';
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  return arrayCopyResize(_this__u8e3s4, newSize, null);
}
function digitToIntImpl(_this__u8e3s4) {
  // Inline function 'kotlin.code' call
  var ch = Char__toInt_impl_vasixd(_this__u8e3s4);
  var index = binarySearchRange(Digit_getInstance().n1_1, ch);
  var diff = ch - Digit_getInstance().n1_1[index] | 0;
  return diff < 10 ? diff : -1;
}
function binarySearchRange(array, needle) {
  var bottom = 0;
  var top = array.length - 1 | 0;
  var middle = -1;
  var value = 0;
  while (bottom <= top) {
    middle = (bottom + top | 0) / 2 | 0;
    value = array[middle];
    if (needle > value)
      bottom = middle + 1 | 0;
    else if (needle === value)
      return middle;
    else
      top = middle - 1 | 0;
  }
  return middle - (needle < value ? 1 : 0) | 0;
}
function Digit() {
  Digit_instance = this;
  var tmp = this;
  // Inline function 'kotlin.intArrayOf' call
  tmp.n1_1 = new Int32Array([48, 1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296]);
}
var Digit_instance;
function Digit_getInstance() {
  if (Digit_instance == null)
    new Digit();
  return Digit_instance;
}
function isWhitespaceImpl(_this__u8e3s4) {
  // Inline function 'kotlin.code' call
  var ch = Char__toInt_impl_vasixd(_this__u8e3s4);
  return (9 <= ch ? ch <= 13 : false) || (28 <= ch ? ch <= 32 : false) || ch === 160 || (ch > 4096 && (ch === 5760 || (8192 <= ch ? ch <= 8202 : false) || ch === 8232 || ch === 8233 || ch === 8239 || ch === 8287 || ch === 12288));
}
function Comparator() {
}
function isNaN_0(_this__u8e3s4) {
  return !(_this__u8e3s4 === _this__u8e3s4);
}
function takeHighestOneBit(_this__u8e3s4) {
  var tmp;
  if (_this__u8e3s4 === 0) {
    tmp = 0;
  } else {
    // Inline function 'kotlin.countLeadingZeroBits' call
    tmp = 1 << (31 - clz32(_this__u8e3s4) | 0);
  }
  return tmp;
}
function Unit() {
}
protoOf(Unit).toString = function () {
  return 'kotlin.Unit';
};
var Unit_instance;
function Unit_getInstance() {
  return Unit_instance;
}
function collectionToArray(collection) {
  return collectionToArrayCommonImpl(collection);
}
function listOf(element) {
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp$ret$0 = [element];
  return new ArrayList(tmp$ret$0);
}
function checkIndexOverflow(index) {
  if (index < 0) {
    throwIndexOverflow();
  }
  return index;
}
function mapCapacity(expectedSize) {
  return expectedSize;
}
function sortWith_0(_this__u8e3s4, comparator) {
  collectionsSort(_this__u8e3s4, comparator);
}
function copyToArray(collection) {
  var tmp;
  // Inline function 'kotlin.js.asDynamic' call
  if (collection.toArray !== undefined) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    tmp = collection.toArray();
  } else {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = collectionToArray(collection);
  }
  return tmp;
}
function collectionsSort(list, comparator) {
  if (list.j() <= 1)
    return Unit_instance;
  var array = copyToArray(list);
  sortArrayWith(array, comparator);
  var inductionVariable = 0;
  var last = array.length;
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      list.o1(i, array[i]);
    }
     while (inductionVariable < last);
}
function AbstractMutableCollection() {
  AbstractCollection.call(this);
}
protoOf(AbstractMutableCollection).n = function (elements) {
  this.p1();
  var modified = false;
  var _iterator__ex2g4s = elements.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    if (this.p(element))
      modified = true;
  }
  return modified;
};
protoOf(AbstractMutableCollection).toJSON = function () {
  return this.toArray();
};
protoOf(AbstractMutableCollection).p1 = function () {
};
function IteratorImpl($outer) {
  this.s1_1 = $outer;
  this.q1_1 = 0;
  this.r1_1 = -1;
}
protoOf(IteratorImpl).f = function () {
  return this.q1_1 < this.s1_1.j();
};
protoOf(IteratorImpl).g = function () {
  if (!this.f())
    throw NoSuchElementException_init_$Create$();
  var tmp = this;
  var _unary__edvuaz = this.q1_1;
  this.q1_1 = _unary__edvuaz + 1 | 0;
  tmp.r1_1 = _unary__edvuaz;
  return this.s1_1.h(this.r1_1);
};
function AbstractMutableList() {
  AbstractMutableCollection.call(this);
  this.t1_1 = 0;
}
protoOf(AbstractMutableList).p = function (element) {
  this.p1();
  this.u1(this.j(), element);
  return true;
};
protoOf(AbstractMutableList).e = function () {
  return new IteratorImpl(this);
};
protoOf(AbstractMutableList).t = function (element) {
  return this.v1(element) >= 0;
};
protoOf(AbstractMutableList).v1 = function (element) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.collections.indexOfFirst' call
    var index = 0;
    var _iterator__ex2g4s = this.e();
    while (_iterator__ex2g4s.f()) {
      var item = _iterator__ex2g4s.g();
      if (equals(item, element)) {
        tmp$ret$0 = index;
        break $l$block;
      }
      index = index + 1 | 0;
    }
    tmp$ret$0 = -1;
  }
  return tmp$ret$0;
};
protoOf(AbstractMutableList).equals = function (other) {
  if (other === this)
    return true;
  if (!(!(other == null) ? isInterface(other, KtList) : false))
    return false;
  return Companion_instance_3.x1(this, other);
};
protoOf(AbstractMutableList).hashCode = function () {
  return Companion_instance_3.y1(this);
};
function AbstractMutableMap() {
  AbstractMap.call(this);
  this.b2_1 = null;
  this.c2_1 = null;
}
protoOf(AbstractMutableMap).d2 = function () {
  return new HashMapValuesDefault(this);
};
protoOf(AbstractMutableMap).a1 = function () {
  var tmp0_elvis_lhs = this.c2_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.also' call
    var this_0 = this.d2();
    this.c2_1 = this_0;
    tmp = this_0;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
};
protoOf(AbstractMutableMap).p1 = function () {
};
function AbstractMutableSet() {
  AbstractMutableCollection.call(this);
}
protoOf(AbstractMutableSet).equals = function (other) {
  if (other === this)
    return true;
  if (!(!(other == null) ? isInterface(other, KtSet) : false))
    return false;
  return Companion_instance_5.i2(this, other);
};
protoOf(AbstractMutableSet).hashCode = function () {
  return Companion_instance_5.j2(this);
};
function arrayOfUninitializedElements(capacity) {
  // Inline function 'kotlin.require' call
  if (!(capacity >= 0)) {
    var message = 'capacity must be non-negative.';
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  // Inline function 'kotlin.arrayOfNulls' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return Array(capacity);
}
function resetRange(_this__u8e3s4, fromIndex, toIndex) {
  // Inline function 'kotlin.js.nativeFill' call
  // Inline function 'kotlin.js.asDynamic' call
  _this__u8e3s4.fill(null, fromIndex, toIndex);
}
function copyOfUninitializedElements(_this__u8e3s4, newSize) {
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return copyOf_0(_this__u8e3s4, newSize);
}
function Companion_1() {
  Companion_instance_1 = this;
  var tmp = this;
  // Inline function 'kotlin.also' call
  var this_0 = ArrayList_init_$Create$_0(0);
  this_0.m_1 = true;
  tmp.k2_1 = this_0;
}
var Companion_instance_1;
function Companion_getInstance_1() {
  if (Companion_instance_1 == null)
    new Companion_1();
  return Companion_instance_1;
}
function ArrayList_init_$Init$($this) {
  // Inline function 'kotlin.emptyArray' call
  var tmp$ret$0 = [];
  ArrayList.call($this, tmp$ret$0);
  return $this;
}
function ArrayList_init_$Create$() {
  return ArrayList_init_$Init$(objectCreate(protoOf(ArrayList)));
}
function ArrayList_init_$Init$_0(initialCapacity, $this) {
  // Inline function 'kotlin.emptyArray' call
  var tmp$ret$0 = [];
  ArrayList.call($this, tmp$ret$0);
  // Inline function 'kotlin.require' call
  if (!(initialCapacity >= 0)) {
    var message = 'Negative initial capacity: ' + initialCapacity;
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  return $this;
}
function ArrayList_init_$Create$_0(initialCapacity) {
  return ArrayList_init_$Init$_0(initialCapacity, objectCreate(protoOf(ArrayList)));
}
function ArrayList_init_$Init$_1(elements, $this) {
  // Inline function 'kotlin.collections.toTypedArray' call
  var tmp$ret$0 = copyToArray(elements);
  ArrayList.call($this, tmp$ret$0);
  return $this;
}
function ArrayList_init_$Create$_1(elements) {
  return ArrayList_init_$Init$_1(elements, objectCreate(protoOf(ArrayList)));
}
function increaseLength($this, amount) {
  var previous = $this.j();
  // Inline function 'kotlin.js.asDynamic' call
  $this.l_1.length = $this.j() + amount | 0;
  return previous;
}
function rangeCheck($this, index) {
  // Inline function 'kotlin.apply' call
  Companion_instance_3.l2(index, $this.j());
  return index;
}
function insertionRangeCheck($this, index) {
  // Inline function 'kotlin.apply' call
  Companion_instance_3.m2(index, $this.j());
  return index;
}
function ArrayList(array) {
  Companion_getInstance_1();
  AbstractMutableList.call(this);
  this.l_1 = array;
  this.m_1 = false;
}
protoOf(ArrayList).j = function () {
  return this.l_1.length;
};
protoOf(ArrayList).h = function (index) {
  return this.l_1[rangeCheck(this, index)];
};
protoOf(ArrayList).o1 = function (index, element) {
  this.p1();
  rangeCheck(this, index);
  // Inline function 'kotlin.apply' call
  var this_0 = this.l_1[index];
  this.l_1[index] = element;
  return this_0;
};
protoOf(ArrayList).p = function (element) {
  this.p1();
  // Inline function 'kotlin.js.asDynamic' call
  this.l_1.push(element);
  this.t1_1 = this.t1_1 + 1 | 0;
  return true;
};
protoOf(ArrayList).u1 = function (index, element) {
  this.p1();
  // Inline function 'kotlin.js.asDynamic' call
  this.l_1.splice(insertionRangeCheck(this, index), 0, element);
  this.t1_1 = this.t1_1 + 1 | 0;
};
protoOf(ArrayList).n = function (elements) {
  this.p1();
  if (elements.i())
    return false;
  var offset = increaseLength(this, elements.j());
  // Inline function 'kotlin.collections.forEachIndexed' call
  var index = 0;
  var _iterator__ex2g4s = elements.e();
  while (_iterator__ex2g4s.f()) {
    var item = _iterator__ex2g4s.g();
    var _unary__edvuaz = index;
    index = _unary__edvuaz + 1 | 0;
    var index_0 = checkIndexOverflow(_unary__edvuaz);
    this.l_1[offset + index_0 | 0] = item;
  }
  this.t1_1 = this.t1_1 + 1 | 0;
  return true;
};
protoOf(ArrayList).n2 = function (index) {
  this.p1();
  rangeCheck(this, index);
  this.t1_1 = this.t1_1 + 1 | 0;
  var tmp;
  if (index === get_lastIndex_0(this)) {
    // Inline function 'kotlin.js.asDynamic' call
    tmp = this.l_1.pop();
  } else {
    // Inline function 'kotlin.js.asDynamic' call
    tmp = this.l_1.splice(index, 1)[0];
  }
  return tmp;
};
protoOf(ArrayList).v1 = function (element) {
  return indexOf(this.l_1, element);
};
protoOf(ArrayList).toString = function () {
  return arrayToString(this.l_1);
};
protoOf(ArrayList).o2 = function () {
  return [].slice.call(this.l_1);
};
protoOf(ArrayList).toArray = function () {
  return this.o2();
};
protoOf(ArrayList).p1 = function () {
  if (this.m_1)
    throw UnsupportedOperationException_init_$Create$();
};
var _stableSortingIsSupported;
function sortArrayWith(array, comparator) {
  if (getStableSortingIsSupported()) {
    var comparison = sortArrayWith$lambda(comparator);
    // Inline function 'kotlin.js.asDynamic' call
    array.sort(comparison);
  } else {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    mergeSort(array, 0, get_lastIndex(array), comparator);
  }
}
function getStableSortingIsSupported() {
  var tmp0_safe_receiver = _stableSortingIsSupported;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp0_safe_receiver;
  }
  _stableSortingIsSupported = false;
  // Inline function 'kotlin.js.unsafeCast' call
  var array = [];
  var inductionVariable = 0;
  if (inductionVariable < 600)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      array.push(index);
    }
     while (inductionVariable < 600);
  var comparison = getStableSortingIsSupported$lambda;
  // Inline function 'kotlin.js.asDynamic' call
  array.sort(comparison);
  var inductionVariable_0 = 1;
  var last = array.length;
  if (inductionVariable_0 < last)
    do {
      var index_0 = inductionVariable_0;
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      var a = array[index_0 - 1 | 0];
      var b = array[index_0];
      if ((a & 3) === (b & 3) && a >= b)
        return false;
    }
     while (inductionVariable_0 < last);
  _stableSortingIsSupported = true;
  return true;
}
function mergeSort(array, start, endInclusive, comparator) {
  // Inline function 'kotlin.arrayOfNulls' call
  var size = array.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var buffer = Array(size);
  var result = mergeSort_0(array, buffer, start, endInclusive, comparator);
  if (!(result === array)) {
    var inductionVariable = start;
    if (inductionVariable <= endInclusive)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = result[i];
      }
       while (!(i === endInclusive));
  }
}
function mergeSort_0(array, buffer, start, end, comparator) {
  if (start === end) {
    return array;
  }
  var median = (start + end | 0) / 2 | 0;
  var left = mergeSort_0(array, buffer, start, median, comparator);
  var right = mergeSort_0(array, buffer, median + 1 | 0, end, comparator);
  var target = left === buffer ? array : buffer;
  var leftIndex = start;
  var rightIndex = median + 1 | 0;
  var inductionVariable = start;
  if (inductionVariable <= end)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (leftIndex <= median && rightIndex <= end) {
        var leftValue = left[leftIndex];
        var rightValue = right[rightIndex];
        if (comparator.compare(leftValue, rightValue) <= 0) {
          target[i] = leftValue;
          leftIndex = leftIndex + 1 | 0;
        } else {
          target[i] = rightValue;
          rightIndex = rightIndex + 1 | 0;
        }
      } else if (leftIndex <= median) {
        target[i] = left[leftIndex];
        leftIndex = leftIndex + 1 | 0;
      } else {
        target[i] = right[rightIndex];
        rightIndex = rightIndex + 1 | 0;
      }
    }
     while (!(i === end));
  return target;
}
function sortArrayWith$lambda($comparator) {
  return function (a, b) {
    return $comparator.compare(a, b);
  };
}
function getStableSortingIsSupported$lambda(a, b) {
  return (a & 3) - (b & 3) | 0;
}
function HashMap_init_$Init$(internalMap, $this) {
  AbstractMutableMap.call($this);
  HashMap.call($this);
  $this.t2_1 = internalMap;
  return $this;
}
function HashMap_init_$Init$_0($this) {
  HashMap_init_$Init$(InternalHashMap_init_$Create$(), $this);
  return $this;
}
function HashMap_init_$Create$() {
  return HashMap_init_$Init$_0(objectCreate(protoOf(HashMap)));
}
function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
  HashMap_init_$Init$(InternalHashMap_init_$Create$_0(initialCapacity, loadFactor), $this);
  return $this;
}
function HashMap_init_$Init$_2(initialCapacity, $this) {
  HashMap_init_$Init$_1(initialCapacity, 1.0, $this);
  return $this;
}
protoOf(HashMap).x = function (key) {
  return this.t2_1.v2(key);
};
protoOf(HashMap).y = function (value) {
  return this.t2_1.y(value);
};
protoOf(HashMap).d2 = function () {
  return new HashMapValues(this.t2_1);
};
protoOf(HashMap).b1 = function () {
  var tmp0_elvis_lhs = this.u2_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.also' call
    var this_0 = new HashMapEntrySet(this.t2_1);
    this.u2_1 = this_0;
    tmp = this_0;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
};
protoOf(HashMap).z = function (key) {
  return this.t2_1.z(key);
};
protoOf(HashMap).e2 = function (key, value) {
  return this.t2_1.e2(key, value);
};
protoOf(HashMap).j = function () {
  return this.t2_1.j();
};
function HashMap() {
  this.u2_1 = null;
}
function HashMapValues(backing) {
  AbstractMutableCollection.call(this);
  this.w2_1 = backing;
}
protoOf(HashMapValues).j = function () {
  return this.w2_1.j();
};
protoOf(HashMapValues).i = function () {
  return this.w2_1.j() === 0;
};
protoOf(HashMapValues).x2 = function (element) {
  return this.w2_1.y(element);
};
protoOf(HashMapValues).t = function (element) {
  if (!true)
    return false;
  return this.x2(element);
};
protoOf(HashMapValues).y2 = function (element) {
  throw UnsupportedOperationException_init_$Create$();
};
protoOf(HashMapValues).p = function (element) {
  return this.y2(element);
};
protoOf(HashMapValues).z2 = function (elements) {
  throw UnsupportedOperationException_init_$Create$();
};
protoOf(HashMapValues).n = function (elements) {
  return this.z2(elements);
};
protoOf(HashMapValues).e = function () {
  return this.w2_1.a3();
};
protoOf(HashMapValues).p1 = function () {
  return this.w2_1.b3();
};
function HashMapEntrySet(backing) {
  HashMapEntrySetBase.call(this, backing);
}
protoOf(HashMapEntrySet).e = function () {
  return this.d3_1.e3();
};
function HashMapEntrySetBase(backing) {
  AbstractMutableSet.call(this);
  this.d3_1 = backing;
}
protoOf(HashMapEntrySetBase).j = function () {
  return this.d3_1.j();
};
protoOf(HashMapEntrySetBase).i = function () {
  return this.d3_1.j() === 0;
};
protoOf(HashMapEntrySetBase).f3 = function (element) {
  return this.d3_1.h3(element);
};
protoOf(HashMapEntrySetBase).t = function (element) {
  if (!(!(element == null) ? isInterface(element, Entry) : false))
    return false;
  return this.f3((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
};
protoOf(HashMapEntrySetBase).g3 = function (element) {
  throw UnsupportedOperationException_init_$Create$();
};
protoOf(HashMapEntrySetBase).p = function (element) {
  return this.g3((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
};
protoOf(HashMapEntrySetBase).n = function (elements) {
  throw UnsupportedOperationException_init_$Create$();
};
protoOf(HashMapEntrySetBase).u = function (elements) {
  return this.d3_1.i3(elements);
};
protoOf(HashMapEntrySetBase).p1 = function () {
  return this.d3_1.b3();
};
function HashMapValuesDefault$iterator$1($entryIterator) {
  this.j3_1 = $entryIterator;
}
protoOf(HashMapValuesDefault$iterator$1).f = function () {
  return this.j3_1.f();
};
protoOf(HashMapValuesDefault$iterator$1).g = function () {
  return this.j3_1.g().w();
};
function HashMapValuesDefault(backingMap) {
  AbstractMutableCollection.call(this);
  this.k3_1 = backingMap;
}
protoOf(HashMapValuesDefault).y2 = function (element) {
  throw UnsupportedOperationException_init_$Create$_0('Add is not supported on values');
};
protoOf(HashMapValuesDefault).p = function (element) {
  return this.y2(element);
};
protoOf(HashMapValuesDefault).x2 = function (element) {
  return this.k3_1.y(element);
};
protoOf(HashMapValuesDefault).t = function (element) {
  if (!true)
    return false;
  return this.x2(element);
};
protoOf(HashMapValuesDefault).e = function () {
  var entryIterator = this.k3_1.b1().e();
  return new HashMapValuesDefault$iterator$1(entryIterator);
};
protoOf(HashMapValuesDefault).j = function () {
  return this.k3_1.j();
};
protoOf(HashMapValuesDefault).p1 = function () {
  return this.k3_1.p1();
};
function computeHashSize($this, capacity) {
  return takeHighestOneBit(imul_0(coerceAtLeast(capacity, 1), 3));
}
function computeShift($this, hashSize) {
  // Inline function 'kotlin.countLeadingZeroBits' call
  return clz32(hashSize) + 1 | 0;
}
function checkForComodification($this) {
  if (!($this.v3_1.s3_1 === $this.x3_1))
    throw ConcurrentModificationException_init_$Create$_0('The backing map has been modified after this entry was obtained.');
}
function InternalHashMap_init_$Init$($this) {
  InternalHashMap_init_$Init$_0(8, $this);
  return $this;
}
function InternalHashMap_init_$Create$() {
  return InternalHashMap_init_$Init$(objectCreate(protoOf(InternalHashMap)));
}
function InternalHashMap_init_$Init$_0(initialCapacity, $this) {
  InternalHashMap.call($this, arrayOfUninitializedElements(initialCapacity), null, new Int32Array(initialCapacity), new Int32Array(computeHashSize(Companion_instance_2, initialCapacity)), 2, 0);
  return $this;
}
function InternalHashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
  InternalHashMap_init_$Init$_0(initialCapacity, $this);
  // Inline function 'kotlin.require' call
  if (!(loadFactor > 0)) {
    var message = 'Non-positive load factor: ' + loadFactor;
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  return $this;
}
function InternalHashMap_init_$Create$_0(initialCapacity, loadFactor) {
  return InternalHashMap_init_$Init$_1(initialCapacity, loadFactor, objectCreate(protoOf(InternalHashMap)));
}
function _get_capacity__a9k9f3($this) {
  return $this.l3_1.length;
}
function _get_hashSize__tftcho($this) {
  return $this.o3_1.length;
}
function registerModification($this) {
  $this.s3_1 = $this.s3_1 + 1 | 0;
}
function ensureExtraCapacity($this, n) {
  if (shouldCompact($this, n)) {
    compact($this, true);
  } else {
    ensureCapacity($this, $this.q3_1 + n | 0);
  }
}
function shouldCompact($this, extraCapacity) {
  var spareCapacity = _get_capacity__a9k9f3($this) - $this.q3_1 | 0;
  var gaps = $this.q3_1 - $this.j() | 0;
  return spareCapacity < extraCapacity && (gaps + spareCapacity | 0) >= extraCapacity && gaps >= (_get_capacity__a9k9f3($this) / 4 | 0);
}
function ensureCapacity($this, minCapacity) {
  if (minCapacity < 0)
    throw RuntimeException_init_$Create$_0('too many elements');
  if (minCapacity > _get_capacity__a9k9f3($this)) {
    var newSize = Companion_instance_3.y3(_get_capacity__a9k9f3($this), minCapacity);
    $this.l3_1 = copyOfUninitializedElements($this.l3_1, newSize);
    var tmp = $this;
    var tmp0_safe_receiver = $this.m3_1;
    tmp.m3_1 = tmp0_safe_receiver == null ? null : copyOfUninitializedElements(tmp0_safe_receiver, newSize);
    $this.n3_1 = copyOf($this.n3_1, newSize);
    var newHashSize = computeHashSize(Companion_instance_2, newSize);
    if (newHashSize > _get_hashSize__tftcho($this)) {
      rehash($this, newHashSize);
    }
  }
}
function allocateValuesArray($this) {
  var curValuesArray = $this.m3_1;
  if (!(curValuesArray == null))
    return curValuesArray;
  var newValuesArray = arrayOfUninitializedElements(_get_capacity__a9k9f3($this));
  $this.m3_1 = newValuesArray;
  return newValuesArray;
}
function hash($this, key) {
  return key == null ? 0 : imul_0(hashCode_0(key), -1640531527) >>> $this.r3_1 | 0;
}
function compact($this, updateHashArray) {
  var i = 0;
  var j = 0;
  var valuesArray = $this.m3_1;
  while (i < $this.q3_1) {
    var hash = $this.n3_1[i];
    if (hash >= 0) {
      $this.l3_1[j] = $this.l3_1[i];
      if (!(valuesArray == null)) {
        valuesArray[j] = valuesArray[i];
      }
      if (updateHashArray) {
        $this.n3_1[j] = hash;
        $this.o3_1[hash] = j + 1 | 0;
      }
      j = j + 1 | 0;
    }
    i = i + 1 | 0;
  }
  resetRange($this.l3_1, j, $this.q3_1);
  if (valuesArray == null)
    null;
  else {
    resetRange(valuesArray, j, $this.q3_1);
  }
  $this.q3_1 = j;
}
function rehash($this, newHashSize) {
  registerModification($this);
  if ($this.q3_1 > $this.t3_1) {
    compact($this, false);
  }
  $this.o3_1 = new Int32Array(newHashSize);
  $this.r3_1 = computeShift(Companion_instance_2, newHashSize);
  var i = 0;
  while (i < $this.q3_1) {
    var _unary__edvuaz = i;
    i = _unary__edvuaz + 1 | 0;
    if (!putRehash($this, _unary__edvuaz)) {
      throw IllegalStateException_init_$Create$_0('This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?');
    }
  }
}
function putRehash($this, i) {
  var hash_0 = hash($this, $this.l3_1[i]);
  var probesLeft = $this.p3_1;
  while (true) {
    var index = $this.o3_1[hash_0];
    if (index === 0) {
      $this.o3_1[hash_0] = i + 1 | 0;
      $this.n3_1[i] = hash_0;
      return true;
    }
    probesLeft = probesLeft - 1 | 0;
    if (probesLeft < 0)
      return false;
    var _unary__edvuaz = hash_0;
    hash_0 = _unary__edvuaz - 1 | 0;
    if (_unary__edvuaz === 0)
      hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
  }
}
function findKey($this, key) {
  var hash_0 = hash($this, key);
  var probesLeft = $this.p3_1;
  while (true) {
    var index = $this.o3_1[hash_0];
    if (index === 0)
      return -1;
    if (equals($this.l3_1[index - 1 | 0], key))
      return index - 1 | 0;
    probesLeft = probesLeft - 1 | 0;
    if (probesLeft < 0)
      return -1;
    var _unary__edvuaz = hash_0;
    hash_0 = _unary__edvuaz - 1 | 0;
    if (_unary__edvuaz === 0)
      hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
  }
}
function findValue($this, value) {
  var i = $this.q3_1;
  $l$loop: while (true) {
    i = i - 1 | 0;
    if (!(i >= 0)) {
      break $l$loop;
    }
    if ($this.n3_1[i] >= 0 && equals(ensureNotNull($this.m3_1)[i], value))
      return i;
  }
  return -1;
}
function addKey($this, key) {
  $this.b3();
  retry: while (true) {
    var hash_0 = hash($this, key);
    var tentativeMaxProbeDistance = coerceAtMost(imul_0($this.p3_1, 2), _get_hashSize__tftcho($this) / 2 | 0);
    var probeDistance = 0;
    while (true) {
      var index = $this.o3_1[hash_0];
      if (index === 0) {
        if ($this.q3_1 >= _get_capacity__a9k9f3($this)) {
          ensureExtraCapacity($this, 1);
          continue retry;
        }
        var _unary__edvuaz = $this.q3_1;
        $this.q3_1 = _unary__edvuaz + 1 | 0;
        var putIndex = _unary__edvuaz;
        $this.l3_1[putIndex] = key;
        $this.n3_1[putIndex] = hash_0;
        $this.o3_1[hash_0] = putIndex + 1 | 0;
        $this.t3_1 = $this.t3_1 + 1 | 0;
        registerModification($this);
        if (probeDistance > $this.p3_1)
          $this.p3_1 = probeDistance;
        return putIndex;
      }
      if (equals($this.l3_1[index - 1 | 0], key)) {
        return -index | 0;
      }
      probeDistance = probeDistance + 1 | 0;
      if (probeDistance > tentativeMaxProbeDistance) {
        rehash($this, imul_0(_get_hashSize__tftcho($this), 2));
        continue retry;
      }
      var _unary__edvuaz_0 = hash_0;
      hash_0 = _unary__edvuaz_0 - 1 | 0;
      if (_unary__edvuaz_0 === 0)
        hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
    }
  }
}
function contentEquals($this, other) {
  return $this.t3_1 === other.j() && $this.i3(other.b1());
}
function Companion_2() {
  this.z3_1 = -1640531527;
  this.a4_1 = 8;
  this.b4_1 = 2;
  this.c4_1 = -1;
}
var Companion_instance_2;
function Companion_getInstance_2() {
  return Companion_instance_2;
}
function Itr(map) {
  this.d4_1 = map;
  this.e4_1 = 0;
  this.f4_1 = -1;
  this.g4_1 = this.d4_1.s3_1;
  this.h4();
}
protoOf(Itr).h4 = function () {
  while (this.e4_1 < this.d4_1.q3_1 && this.d4_1.n3_1[this.e4_1] < 0) {
    this.e4_1 = this.e4_1 + 1 | 0;
  }
};
protoOf(Itr).f = function () {
  return this.e4_1 < this.d4_1.q3_1;
};
protoOf(Itr).i4 = function () {
  if (!(this.d4_1.s3_1 === this.g4_1))
    throw ConcurrentModificationException_init_$Create$();
};
function ValuesItr(map) {
  Itr.call(this, map);
}
protoOf(ValuesItr).g = function () {
  this.i4();
  if (this.e4_1 >= this.d4_1.q3_1)
    throw NoSuchElementException_init_$Create$();
  var tmp = this;
  var _unary__edvuaz = this.e4_1;
  this.e4_1 = _unary__edvuaz + 1 | 0;
  tmp.f4_1 = _unary__edvuaz;
  var result = ensureNotNull(this.d4_1.m3_1)[this.f4_1];
  this.h4();
  return result;
};
function EntriesItr(map) {
  Itr.call(this, map);
}
protoOf(EntriesItr).g = function () {
  this.i4();
  if (this.e4_1 >= this.d4_1.q3_1)
    throw NoSuchElementException_init_$Create$();
  var tmp = this;
  var _unary__edvuaz = this.e4_1;
  this.e4_1 = _unary__edvuaz + 1 | 0;
  tmp.f4_1 = _unary__edvuaz;
  var result = new EntryRef(this.d4_1, this.f4_1);
  this.h4();
  return result;
};
protoOf(EntriesItr).r4 = function () {
  if (this.e4_1 >= this.d4_1.q3_1)
    throw NoSuchElementException_init_$Create$();
  var tmp = this;
  var _unary__edvuaz = this.e4_1;
  this.e4_1 = _unary__edvuaz + 1 | 0;
  tmp.f4_1 = _unary__edvuaz;
  // Inline function 'kotlin.hashCode' call
  var tmp0_safe_receiver = this.d4_1.l3_1[this.f4_1];
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode_0(tmp0_safe_receiver);
  var tmp_0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  // Inline function 'kotlin.hashCode' call
  var tmp0_safe_receiver_0 = ensureNotNull(this.d4_1.m3_1)[this.f4_1];
  var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode_0(tmp0_safe_receiver_0);
  var result = tmp_0 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  this.h4();
  return result;
};
protoOf(EntriesItr).s4 = function (sb) {
  if (this.e4_1 >= this.d4_1.q3_1)
    throw NoSuchElementException_init_$Create$();
  var tmp = this;
  var _unary__edvuaz = this.e4_1;
  this.e4_1 = _unary__edvuaz + 1 | 0;
  tmp.f4_1 = _unary__edvuaz;
  var key = this.d4_1.l3_1[this.f4_1];
  if (equals(key, this.d4_1))
    sb.v4('(this Map)');
  else
    sb.u4(key);
  sb.w4(_Char___init__impl__6a9atx(61));
  var value = ensureNotNull(this.d4_1.m3_1)[this.f4_1];
  if (equals(value, this.d4_1))
    sb.v4('(this Map)');
  else
    sb.u4(value);
  this.h4();
};
function EntryRef(map, index) {
  this.v3_1 = map;
  this.w3_1 = index;
  this.x3_1 = this.v3_1.s3_1;
}
protoOf(EntryRef).v = function () {
  checkForComodification(this);
  return this.v3_1.l3_1[this.w3_1];
};
protoOf(EntryRef).w = function () {
  checkForComodification(this);
  return ensureNotNull(this.v3_1.m3_1)[this.w3_1];
};
protoOf(EntryRef).equals = function (other) {
  var tmp;
  var tmp_0;
  if (!(other == null) ? isInterface(other, Entry) : false) {
    tmp_0 = equals(other.v(), this.v());
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = equals(other.w(), this.w());
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(EntryRef).hashCode = function () {
  // Inline function 'kotlin.hashCode' call
  var tmp0_safe_receiver = this.v();
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode_0(tmp0_safe_receiver);
  var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  // Inline function 'kotlin.hashCode' call
  var tmp0_safe_receiver_0 = this.w();
  var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode_0(tmp0_safe_receiver_0);
  return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
};
protoOf(EntryRef).toString = function () {
  return toString_0(this.v()) + '=' + toString_0(this.w());
};
function InternalHashMap(keysArray, valuesArray, presenceArray, hashArray, maxProbeDistance, length) {
  this.l3_1 = keysArray;
  this.m3_1 = valuesArray;
  this.n3_1 = presenceArray;
  this.o3_1 = hashArray;
  this.p3_1 = maxProbeDistance;
  this.q3_1 = length;
  this.r3_1 = computeShift(Companion_instance_2, _get_hashSize__tftcho(this));
  this.s3_1 = 0;
  this.t3_1 = 0;
  this.u3_1 = false;
}
protoOf(InternalHashMap).j = function () {
  return this.t3_1;
};
protoOf(InternalHashMap).y = function (value) {
  return findValue(this, value) >= 0;
};
protoOf(InternalHashMap).z = function (key) {
  var index = findKey(this, key);
  if (index < 0)
    return null;
  return ensureNotNull(this.m3_1)[index];
};
protoOf(InternalHashMap).v2 = function (key) {
  return findKey(this, key) >= 0;
};
protoOf(InternalHashMap).e2 = function (key, value) {
  var index = addKey(this, key);
  var valuesArray = allocateValuesArray(this);
  if (index < 0) {
    var oldValue = valuesArray[(-index | 0) - 1 | 0];
    valuesArray[(-index | 0) - 1 | 0] = value;
    return oldValue;
  } else {
    valuesArray[index] = value;
    return null;
  }
};
protoOf(InternalHashMap).equals = function (other) {
  var tmp;
  if (other === this) {
    tmp = true;
  } else {
    var tmp_0;
    if (!(other == null) ? isInterface(other, KtMap) : false) {
      tmp_0 = contentEquals(this, other);
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(InternalHashMap).hashCode = function () {
  var result = 0;
  var it = this.e3();
  while (it.f()) {
    result = result + it.r4() | 0;
  }
  return result;
};
protoOf(InternalHashMap).toString = function () {
  var sb = StringBuilder_init_$Create$(2 + imul_0(this.t3_1, 3) | 0);
  sb.v4('{');
  var i = 0;
  var it = this.e3();
  while (it.f()) {
    if (i > 0) {
      sb.v4(', ');
    }
    it.s4(sb);
    i = i + 1 | 0;
  }
  sb.v4('}');
  return sb.toString();
};
protoOf(InternalHashMap).b3 = function () {
  if (this.u3_1)
    throw UnsupportedOperationException_init_$Create$();
};
protoOf(InternalHashMap).h3 = function (entry) {
  var index = findKey(this, entry.v());
  if (index < 0)
    return false;
  return equals(ensureNotNull(this.m3_1)[index], entry.w());
};
protoOf(InternalHashMap).x4 = function (entry) {
  return this.h3(isInterface(entry, Entry) ? entry : THROW_CCE());
};
protoOf(InternalHashMap).a3 = function () {
  return new ValuesItr(this);
};
protoOf(InternalHashMap).e3 = function () {
  return new EntriesItr(this);
};
function InternalMap() {
}
function LinkedHashMap_init_$Init$($this) {
  HashMap_init_$Init$_0($this);
  LinkedHashMap.call($this);
  return $this;
}
function LinkedHashMap_init_$Create$() {
  return LinkedHashMap_init_$Init$(objectCreate(protoOf(LinkedHashMap)));
}
function LinkedHashMap_init_$Init$_0(initialCapacity, $this) {
  HashMap_init_$Init$_2(initialCapacity, $this);
  LinkedHashMap.call($this);
  return $this;
}
function LinkedHashMap_init_$Create$_0(initialCapacity) {
  return LinkedHashMap_init_$Init$_0(initialCapacity, objectCreate(protoOf(LinkedHashMap)));
}
protoOf(LinkedHashMap).p1 = function () {
  return this.t2_1.b3();
};
function LinkedHashMap() {
}
function UnsupportedOperationException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  UnsupportedOperationException.call($this);
  return $this;
}
function UnsupportedOperationException_init_$Create$() {
  var tmp = UnsupportedOperationException_init_$Init$(objectCreate(protoOf(UnsupportedOperationException)));
  captureStack(tmp, UnsupportedOperationException_init_$Create$);
  return tmp;
}
function UnsupportedOperationException_init_$Init$_0(message, $this) {
  RuntimeException_init_$Init$_0(message, $this);
  UnsupportedOperationException.call($this);
  return $this;
}
function UnsupportedOperationException_init_$Create$_0(message) {
  var tmp = UnsupportedOperationException_init_$Init$_0(message, objectCreate(protoOf(UnsupportedOperationException)));
  captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
  return tmp;
}
function UnsupportedOperationException() {
  captureStack(this, UnsupportedOperationException);
}
function IllegalStateException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  IllegalStateException.call($this);
  return $this;
}
function IllegalStateException_init_$Create$() {
  var tmp = IllegalStateException_init_$Init$(objectCreate(protoOf(IllegalStateException)));
  captureStack(tmp, IllegalStateException_init_$Create$);
  return tmp;
}
function IllegalStateException_init_$Init$_0(message, $this) {
  RuntimeException_init_$Init$_0(message, $this);
  IllegalStateException.call($this);
  return $this;
}
function IllegalStateException_init_$Create$_0(message) {
  var tmp = IllegalStateException_init_$Init$_0(message, objectCreate(protoOf(IllegalStateException)));
  captureStack(tmp, IllegalStateException_init_$Create$_0);
  return tmp;
}
function IllegalStateException() {
  captureStack(this, IllegalStateException);
}
function IllegalArgumentException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  IllegalArgumentException.call($this);
  return $this;
}
function IllegalArgumentException_init_$Create$() {
  var tmp = IllegalArgumentException_init_$Init$(objectCreate(protoOf(IllegalArgumentException)));
  captureStack(tmp, IllegalArgumentException_init_$Create$);
  return tmp;
}
function IllegalArgumentException_init_$Init$_0(message, $this) {
  RuntimeException_init_$Init$_0(message, $this);
  IllegalArgumentException.call($this);
  return $this;
}
function IllegalArgumentException_init_$Create$_0(message) {
  var tmp = IllegalArgumentException_init_$Init$_0(message, objectCreate(protoOf(IllegalArgumentException)));
  captureStack(tmp, IllegalArgumentException_init_$Create$_0);
  return tmp;
}
function IllegalArgumentException() {
  captureStack(this, IllegalArgumentException);
}
function RuntimeException_init_$Init$($this) {
  Exception_init_$Init$($this);
  RuntimeException.call($this);
  return $this;
}
function RuntimeException_init_$Create$() {
  var tmp = RuntimeException_init_$Init$(objectCreate(protoOf(RuntimeException)));
  captureStack(tmp, RuntimeException_init_$Create$);
  return tmp;
}
function RuntimeException_init_$Init$_0(message, $this) {
  Exception_init_$Init$_0(message, $this);
  RuntimeException.call($this);
  return $this;
}
function RuntimeException_init_$Create$_0(message) {
  var tmp = RuntimeException_init_$Init$_0(message, objectCreate(protoOf(RuntimeException)));
  captureStack(tmp, RuntimeException_init_$Create$_0);
  return tmp;
}
function RuntimeException() {
  captureStack(this, RuntimeException);
}
function Exception_init_$Init$($this) {
  extendThrowable($this);
  Exception.call($this);
  return $this;
}
function Exception_init_$Create$() {
  var tmp = Exception_init_$Init$(objectCreate(protoOf(Exception)));
  captureStack(tmp, Exception_init_$Create$);
  return tmp;
}
function Exception_init_$Init$_0(message, $this) {
  extendThrowable($this, message);
  Exception.call($this);
  return $this;
}
function Exception_init_$Create$_0(message) {
  var tmp = Exception_init_$Init$_0(message, objectCreate(protoOf(Exception)));
  captureStack(tmp, Exception_init_$Create$_0);
  return tmp;
}
function Exception() {
  captureStack(this, Exception);
}
function NoSuchElementException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  NoSuchElementException.call($this);
  return $this;
}
function NoSuchElementException_init_$Create$() {
  var tmp = NoSuchElementException_init_$Init$(objectCreate(protoOf(NoSuchElementException)));
  captureStack(tmp, NoSuchElementException_init_$Create$);
  return tmp;
}
function NoSuchElementException_init_$Init$_0(message, $this) {
  RuntimeException_init_$Init$_0(message, $this);
  NoSuchElementException.call($this);
  return $this;
}
function NoSuchElementException_init_$Create$_0(message) {
  var tmp = NoSuchElementException_init_$Init$_0(message, objectCreate(protoOf(NoSuchElementException)));
  captureStack(tmp, NoSuchElementException_init_$Create$_0);
  return tmp;
}
function NoSuchElementException() {
  captureStack(this, NoSuchElementException);
}
function IndexOutOfBoundsException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  IndexOutOfBoundsException.call($this);
  return $this;
}
function IndexOutOfBoundsException_init_$Create$() {
  var tmp = IndexOutOfBoundsException_init_$Init$(objectCreate(protoOf(IndexOutOfBoundsException)));
  captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
  return tmp;
}
function IndexOutOfBoundsException_init_$Init$_0(message, $this) {
  RuntimeException_init_$Init$_0(message, $this);
  IndexOutOfBoundsException.call($this);
  return $this;
}
function IndexOutOfBoundsException_init_$Create$_0(message) {
  var tmp = IndexOutOfBoundsException_init_$Init$_0(message, objectCreate(protoOf(IndexOutOfBoundsException)));
  captureStack(tmp, IndexOutOfBoundsException_init_$Create$_0);
  return tmp;
}
function IndexOutOfBoundsException() {
  captureStack(this, IndexOutOfBoundsException);
}
function ArithmeticException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  ArithmeticException.call($this);
  return $this;
}
function ArithmeticException_init_$Create$() {
  var tmp = ArithmeticException_init_$Init$(objectCreate(protoOf(ArithmeticException)));
  captureStack(tmp, ArithmeticException_init_$Create$);
  return tmp;
}
function ArithmeticException_init_$Init$_0(message, $this) {
  RuntimeException_init_$Init$_0(message, $this);
  ArithmeticException.call($this);
  return $this;
}
function ArithmeticException_init_$Create$_0(message) {
  var tmp = ArithmeticException_init_$Init$_0(message, objectCreate(protoOf(ArithmeticException)));
  captureStack(tmp, ArithmeticException_init_$Create$_0);
  return tmp;
}
function ArithmeticException() {
  captureStack(this, ArithmeticException);
}
function NumberFormatException_init_$Init$($this) {
  IllegalArgumentException_init_$Init$($this);
  NumberFormatException.call($this);
  return $this;
}
function NumberFormatException_init_$Create$() {
  var tmp = NumberFormatException_init_$Init$(objectCreate(protoOf(NumberFormatException)));
  captureStack(tmp, NumberFormatException_init_$Create$);
  return tmp;
}
function NumberFormatException_init_$Init$_0(message, $this) {
  IllegalArgumentException_init_$Init$_0(message, $this);
  NumberFormatException.call($this);
  return $this;
}
function NumberFormatException_init_$Create$_0(message) {
  var tmp = NumberFormatException_init_$Init$_0(message, objectCreate(protoOf(NumberFormatException)));
  captureStack(tmp, NumberFormatException_init_$Create$_0);
  return tmp;
}
function NumberFormatException() {
  captureStack(this, NumberFormatException);
}
function ConcurrentModificationException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  ConcurrentModificationException.call($this);
  return $this;
}
function ConcurrentModificationException_init_$Create$() {
  var tmp = ConcurrentModificationException_init_$Init$(objectCreate(protoOf(ConcurrentModificationException)));
  captureStack(tmp, ConcurrentModificationException_init_$Create$);
  return tmp;
}
function ConcurrentModificationException_init_$Init$_0(message, $this) {
  RuntimeException_init_$Init$_0(message, $this);
  ConcurrentModificationException.call($this);
  return $this;
}
function ConcurrentModificationException_init_$Create$_0(message) {
  var tmp = ConcurrentModificationException_init_$Init$_0(message, objectCreate(protoOf(ConcurrentModificationException)));
  captureStack(tmp, ConcurrentModificationException_init_$Create$_0);
  return tmp;
}
function ConcurrentModificationException() {
  captureStack(this, ConcurrentModificationException);
}
function NoWhenBranchMatchedException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  NoWhenBranchMatchedException.call($this);
  return $this;
}
function NoWhenBranchMatchedException_init_$Create$() {
  var tmp = NoWhenBranchMatchedException_init_$Init$(objectCreate(protoOf(NoWhenBranchMatchedException)));
  captureStack(tmp, NoWhenBranchMatchedException_init_$Create$);
  return tmp;
}
function NoWhenBranchMatchedException() {
  captureStack(this, NoWhenBranchMatchedException);
}
function NullPointerException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  NullPointerException.call($this);
  return $this;
}
function NullPointerException_init_$Create$() {
  var tmp = NullPointerException_init_$Init$(objectCreate(protoOf(NullPointerException)));
  captureStack(tmp, NullPointerException_init_$Create$);
  return tmp;
}
function NullPointerException() {
  captureStack(this, NullPointerException);
}
function ClassCastException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  ClassCastException.call($this);
  return $this;
}
function ClassCastException_init_$Create$() {
  var tmp = ClassCastException_init_$Init$(objectCreate(protoOf(ClassCastException)));
  captureStack(tmp, ClassCastException_init_$Create$);
  return tmp;
}
function ClassCastException() {
  captureStack(this, ClassCastException);
}
function fillFrom(src, dst) {
  var srcLen = src.length;
  var dstLen = dst.length;
  var index = 0;
  // Inline function 'kotlin.js.unsafeCast' call
  var arr = dst;
  while (index < srcLen && index < dstLen) {
    var tmp = index;
    var _unary__edvuaz = index;
    index = _unary__edvuaz + 1 | 0;
    arr[tmp] = src[_unary__edvuaz];
  }
  return dst;
}
function arrayCopyResize(source, newSize, defaultValue) {
  // Inline function 'kotlin.js.unsafeCast' call
  var result = source.slice(0, newSize);
  // Inline function 'kotlin.copyArrayType' call
  if (source.$type$ !== undefined) {
    result.$type$ = source.$type$;
  }
  var index = source.length;
  if (newSize > index) {
    // Inline function 'kotlin.js.asDynamic' call
    result.length = newSize;
    while (index < newSize) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      result[_unary__edvuaz] = defaultValue;
    }
  }
  return result;
}
var INV_2_26;
var INV_2_53;
function defaultPlatformRandom() {
  _init_properties_PlatformRandom_kt__6kjv62();
  // Inline function 'kotlin.js.unsafeCast' call
  var tmp$ret$0 = Math.random() * Math.pow(2, 32) | 0;
  return Random_1(tmp$ret$0);
}
var properties_initialized_PlatformRandom_kt_uibhw8;
function _init_properties_PlatformRandom_kt__6kjv62() {
  if (!properties_initialized_PlatformRandom_kt_uibhw8) {
    properties_initialized_PlatformRandom_kt_uibhw8 = true;
    // Inline function 'kotlin.math.pow' call
    INV_2_26 = Math.pow(2.0, -26);
    // Inline function 'kotlin.math.pow' call
    INV_2_53 = Math.pow(2.0, -53);
  }
}
function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
  KClassImpl.call(this);
  this.g5_1 = jClass;
  this.h5_1 = givenSimpleName;
  this.i5_1 = isInstanceFunction;
}
protoOf(PrimitiveKClassImpl).j5 = function () {
  return this.g5_1;
};
protoOf(PrimitiveKClassImpl).equals = function (other) {
  if (!(other instanceof PrimitiveKClassImpl))
    return false;
  return protoOf(KClassImpl).equals.call(this, other) && this.h5_1 === other.h5_1;
};
protoOf(PrimitiveKClassImpl).k5 = function () {
  return this.h5_1;
};
function KClassImpl() {
}
protoOf(KClassImpl).equals = function (other) {
  var tmp;
  if (other instanceof NothingKClassImpl) {
    tmp = false;
  } else {
    if (other instanceof KClassImpl) {
      tmp = equals(this.j5(), other.j5());
    } else {
      tmp = false;
    }
  }
  return tmp;
};
protoOf(KClassImpl).hashCode = function () {
  var tmp0_safe_receiver = this.k5();
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
  return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
};
protoOf(KClassImpl).toString = function () {
  return 'class ' + this.k5();
};
function NothingKClassImpl() {
}
function StringBuilder_init_$Init$(capacity, $this) {
  StringBuilder_init_$Init$_0($this);
  return $this;
}
function StringBuilder_init_$Create$(capacity) {
  return StringBuilder_init_$Init$(capacity, objectCreate(protoOf(StringBuilder)));
}
function StringBuilder_init_$Init$_0($this) {
  StringBuilder.call($this, '');
  return $this;
}
function StringBuilder_init_$Create$_0() {
  return StringBuilder_init_$Init$_0(objectCreate(protoOf(StringBuilder)));
}
function StringBuilder(content) {
  this.t4_1 = content;
}
protoOf(StringBuilder).a = function () {
  // Inline function 'kotlin.js.asDynamic' call
  return this.t4_1.length;
};
protoOf(StringBuilder).b = function (index) {
  // Inline function 'kotlin.text.getOrElse' call
  var this_0 = this.t4_1;
  var tmp;
  if (0 <= index ? index <= (charSequenceLength(this_0) - 1 | 0) : false) {
    tmp = charSequenceGet(this_0, index);
  } else {
    throw IndexOutOfBoundsException_init_$Create$_0('index: ' + index + ', length: ' + this.a() + '}');
  }
  return tmp;
};
protoOf(StringBuilder).w4 = function (value) {
  this.t4_1 = this.t4_1 + toString(value);
  return this;
};
protoOf(StringBuilder).d = function (value) {
  this.t4_1 = this.t4_1 + toString_0(value);
  return this;
};
protoOf(StringBuilder).u4 = function (value) {
  this.t4_1 = this.t4_1 + toString_0(value);
  return this;
};
protoOf(StringBuilder).v4 = function (value) {
  var tmp = this;
  var tmp_0 = this.t4_1;
  tmp.t4_1 = tmp_0 + (value == null ? 'null' : value);
  return this;
};
protoOf(StringBuilder).toString = function () {
  return this.t4_1;
};
function uppercaseChar(_this__u8e3s4) {
  // Inline function 'kotlin.text.uppercase' call
  // Inline function 'kotlin.js.asDynamic' call
  // Inline function 'kotlin.js.unsafeCast' call
  var uppercase = toString(_this__u8e3s4).toUpperCase();
  return uppercase.length > 1 ? _this__u8e3s4 : charCodeAt(uppercase, 0);
}
function isWhitespace(_this__u8e3s4) {
  return isWhitespaceImpl(_this__u8e3s4);
}
function checkRadix(radix) {
  if (!(2 <= radix ? radix <= 36 : false)) {
    throw IllegalArgumentException_init_$Create$_0('radix ' + radix + ' was not in valid range 2..36');
  }
  return radix;
}
function toInt(_this__u8e3s4) {
  var tmp0_elvis_lhs = toIntOrNull(_this__u8e3s4);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    numberFormatError(_this__u8e3s4);
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function digitOf(char, radix) {
  // Inline function 'kotlin.let' call
  var it = Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(48)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(57)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(48)) : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(90)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65)) + 10 | 0 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(97)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(122)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(97)) + 10 | 0 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(128)) < 0 ? -1 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65313)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65338)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65313)) + 10 | 0 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65345)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65370)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65345)) + 10 | 0 : digitToIntImpl(char);
  return it >= radix ? -1 : it;
}
var STRING_CASE_INSENSITIVE_ORDER;
function substring(_this__u8e3s4, startIndex) {
  _init_properties_stringJs_kt__bg7zye();
  // Inline function 'kotlin.js.asDynamic' call
  return _this__u8e3s4.substring(startIndex);
}
function compareTo_0(_this__u8e3s4, other, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  _init_properties_stringJs_kt__bg7zye();
  if (ignoreCase) {
    var n1 = _this__u8e3s4.length;
    var n2 = other.length;
    // Inline function 'kotlin.comparisons.minOf' call
    var min = Math.min(n1, n2);
    if (min === 0)
      return n1 - n2 | 0;
    var inductionVariable = 0;
    if (inductionVariable < min)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var thisChar = charCodeAt(_this__u8e3s4, index);
        var otherChar = charCodeAt(other, index);
        if (!(thisChar === otherChar)) {
          thisChar = uppercaseChar(thisChar);
          otherChar = uppercaseChar(otherChar);
          if (!(thisChar === otherChar)) {
            // Inline function 'kotlin.text.lowercaseChar' call
            // Inline function 'kotlin.text.lowercase' call
            var this_0 = thisChar;
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$2 = toString(this_0).toLowerCase();
            thisChar = charCodeAt(tmp$ret$2, 0);
            // Inline function 'kotlin.text.lowercaseChar' call
            // Inline function 'kotlin.text.lowercase' call
            var this_1 = otherChar;
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$6 = toString(this_1).toLowerCase();
            otherChar = charCodeAt(tmp$ret$6, 0);
            if (!(thisChar === otherChar)) {
              return Char__compareTo_impl_ypi4mb(thisChar, otherChar);
            }
          }
        }
      }
       while (inductionVariable < min);
    return n1 - n2 | 0;
  } else {
    return compareTo(_this__u8e3s4, other);
  }
}
function sam$kotlin_Comparator$0(function_0) {
  this.l5_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0).m5 = function (a, b) {
  return this.l5_1(a, b);
};
protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
  return this.m5(a, b);
};
protoOf(sam$kotlin_Comparator$0).m1 = function () {
  return this.l5_1;
};
protoOf(sam$kotlin_Comparator$0).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, Comparator) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.m1(), other.m1());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlin_Comparator$0).hashCode = function () {
  return hashCode_0(this.m1());
};
function STRING_CASE_INSENSITIVE_ORDER$lambda(a, b) {
  _init_properties_stringJs_kt__bg7zye();
  return compareTo_0(a, b, true);
}
var properties_initialized_stringJs_kt_nta8o4;
function _init_properties_stringJs_kt__bg7zye() {
  if (!properties_initialized_stringJs_kt_nta8o4) {
    properties_initialized_stringJs_kt_nta8o4 = true;
    var tmp = STRING_CASE_INSENSITIVE_ORDER$lambda;
    STRING_CASE_INSENSITIVE_ORDER = new sam$kotlin_Comparator$0(tmp);
  }
}
function startsWith(_this__u8e3s4, prefix, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  if (!ignoreCase) {
    // Inline function 'kotlin.text.nativeStartsWith' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.startsWith(prefix, 0);
  } else
    return regionMatches(_this__u8e3s4, 0, prefix, 0, prefix.length, ignoreCase);
}
function regionMatches(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  return regionMatchesImpl(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase);
}
function AbstractCollection$toString$lambda(this$0) {
  return function (it) {
    return it === this$0 ? '(this Collection)' : toString_0(it);
  };
}
function AbstractCollection() {
}
protoOf(AbstractCollection).t = function (element) {
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.any' call
    var tmp;
    if (isInterface(this, Collection)) {
      tmp = this.i();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = false;
      break $l$block_0;
    }
    var _iterator__ex2g4s = this.e();
    while (_iterator__ex2g4s.f()) {
      var element_0 = _iterator__ex2g4s.g();
      if (equals(element_0, element)) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
    }
    tmp$ret$0 = false;
  }
  return tmp$ret$0;
};
protoOf(AbstractCollection).u = function (elements) {
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.all' call
    var tmp;
    if (isInterface(elements, Collection)) {
      tmp = elements.i();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_0;
    }
    var _iterator__ex2g4s = elements.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      if (!this.t(element)) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    tmp$ret$0 = true;
  }
  return tmp$ret$0;
};
protoOf(AbstractCollection).i = function () {
  return this.j() === 0;
};
protoOf(AbstractCollection).toString = function () {
  return joinToString_0(this, ', ', '[', ']', VOID, VOID, AbstractCollection$toString$lambda(this));
};
protoOf(AbstractCollection).toArray = function () {
  return collectionToArray(this);
};
function IteratorImpl_0($outer) {
  this.o5_1 = $outer;
  this.n5_1 = 0;
}
protoOf(IteratorImpl_0).f = function () {
  return this.n5_1 < this.o5_1.j();
};
protoOf(IteratorImpl_0).g = function () {
  if (!this.f())
    throw NoSuchElementException_init_$Create$();
  var _unary__edvuaz = this.n5_1;
  this.n5_1 = _unary__edvuaz + 1 | 0;
  return this.o5_1.h(_unary__edvuaz);
};
function Companion_3() {
  this.w1_1 = 2147483639;
}
protoOf(Companion_3).l2 = function (index, size) {
  if (index < 0 || index >= size) {
    throw IndexOutOfBoundsException_init_$Create$_0('index: ' + index + ', size: ' + size);
  }
};
protoOf(Companion_3).m2 = function (index, size) {
  if (index < 0 || index > size) {
    throw IndexOutOfBoundsException_init_$Create$_0('index: ' + index + ', size: ' + size);
  }
};
protoOf(Companion_3).y3 = function (oldCapacity, minCapacity) {
  var newCapacity = oldCapacity + (oldCapacity >> 1) | 0;
  if ((newCapacity - minCapacity | 0) < 0)
    newCapacity = minCapacity;
  if ((newCapacity - 2147483639 | 0) > 0)
    newCapacity = minCapacity > 2147483639 ? 2147483647 : 2147483639;
  return newCapacity;
};
protoOf(Companion_3).y1 = function (c) {
  var hashCode = 1;
  var _iterator__ex2g4s = c.e();
  while (_iterator__ex2g4s.f()) {
    var e = _iterator__ex2g4s.g();
    var tmp = imul_0(31, hashCode);
    var tmp1_elvis_lhs = e == null ? null : hashCode_0(e);
    hashCode = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  }
  return hashCode;
};
protoOf(Companion_3).x1 = function (c, other) {
  if (!(c.j() === other.j()))
    return false;
  var otherIterator = other.e();
  var _iterator__ex2g4s = c.e();
  while (_iterator__ex2g4s.f()) {
    var elem = _iterator__ex2g4s.g();
    var elemOther = otherIterator.g();
    if (!equals(elem, elemOther)) {
      return false;
    }
  }
  return true;
};
var Companion_instance_3;
function Companion_getInstance_3() {
  return Companion_instance_3;
}
function AbstractList() {
  AbstractCollection.call(this);
}
protoOf(AbstractList).e = function () {
  return new IteratorImpl_0(this);
};
protoOf(AbstractList).equals = function (other) {
  if (other === this)
    return true;
  if (!(!(other == null) ? isInterface(other, KtList) : false))
    return false;
  return Companion_instance_3.x1(this, other);
};
protoOf(AbstractList).hashCode = function () {
  return Companion_instance_3.y1(this);
};
function AbstractMap$values$1$iterator$1($entryIterator) {
  this.p5_1 = $entryIterator;
}
protoOf(AbstractMap$values$1$iterator$1).f = function () {
  return this.p5_1.f();
};
protoOf(AbstractMap$values$1$iterator$1).g = function () {
  return this.p5_1.g().w();
};
function toString_2($this, entry) {
  return toString_3($this, entry.v()) + '=' + toString_3($this, entry.w());
}
function toString_3($this, o) {
  return o === $this ? '(this Map)' : toString_0(o);
}
function implFindEntry($this, key) {
  var tmp0 = $this.b1();
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      if (equals(element.v(), key)) {
        tmp$ret$0 = element;
        break $l$block;
      }
    }
    tmp$ret$0 = null;
  }
  return tmp$ret$0;
}
function Companion_4() {
}
var Companion_instance_4;
function Companion_getInstance_4() {
  return Companion_instance_4;
}
function AbstractMap$toString$lambda(this$0) {
  return function (it) {
    return toString_2(this$0, it);
  };
}
function AbstractMap$values$1(this$0) {
  this.q5_1 = this$0;
  AbstractCollection.call(this);
}
protoOf(AbstractMap$values$1).x2 = function (element) {
  return this.q5_1.y(element);
};
protoOf(AbstractMap$values$1).t = function (element) {
  if (!true)
    return false;
  return this.x2(element);
};
protoOf(AbstractMap$values$1).e = function () {
  var entryIterator = this.q5_1.b1().e();
  return new AbstractMap$values$1$iterator$1(entryIterator);
};
protoOf(AbstractMap$values$1).j = function () {
  return this.q5_1.j();
};
function AbstractMap() {
  this.f2_1 = null;
  this.g2_1 = null;
}
protoOf(AbstractMap).x = function (key) {
  return !(implFindEntry(this, key) == null);
};
protoOf(AbstractMap).y = function (value) {
  var tmp0 = this.b1();
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.any' call
    var tmp;
    if (isInterface(tmp0, Collection)) {
      tmp = tmp0.i();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = false;
      break $l$block_0;
    }
    var _iterator__ex2g4s = tmp0.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      if (equals(element.w(), value)) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
    }
    tmp$ret$0 = false;
  }
  return tmp$ret$0;
};
protoOf(AbstractMap).h2 = function (entry) {
  if (!(!(entry == null) ? isInterface(entry, Entry) : false))
    return false;
  var key = entry.v();
  var value = entry.w();
  // Inline function 'kotlin.collections.get' call
  var ourValue = (isInterface(this, KtMap) ? this : THROW_CCE()).z(key);
  if (!equals(value, ourValue)) {
    return false;
  }
  var tmp;
  if (ourValue == null) {
    // Inline function 'kotlin.collections.containsKey' call
    tmp = !(isInterface(this, KtMap) ? this : THROW_CCE()).x(key);
  } else {
    tmp = false;
  }
  if (tmp) {
    return false;
  }
  return true;
};
protoOf(AbstractMap).equals = function (other) {
  if (other === this)
    return true;
  if (!(!(other == null) ? isInterface(other, KtMap) : false))
    return false;
  if (!(this.j() === other.j()))
    return false;
  var tmp0 = other.b1();
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.all' call
    var tmp;
    if (isInterface(tmp0, Collection)) {
      tmp = tmp0.i();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_0;
    }
    var _iterator__ex2g4s = tmp0.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      if (!this.h2(element)) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    tmp$ret$0 = true;
  }
  return tmp$ret$0;
};
protoOf(AbstractMap).z = function (key) {
  var tmp0_safe_receiver = implFindEntry(this, key);
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w();
};
protoOf(AbstractMap).hashCode = function () {
  return hashCode_0(this.b1());
};
protoOf(AbstractMap).j = function () {
  return this.b1().j();
};
protoOf(AbstractMap).toString = function () {
  var tmp = this.b1();
  return joinToString_0(tmp, ', ', '{', '}', VOID, VOID, AbstractMap$toString$lambda(this));
};
protoOf(AbstractMap).a1 = function () {
  if (this.g2_1 == null) {
    var tmp = this;
    tmp.g2_1 = new AbstractMap$values$1(this);
  }
  return ensureNotNull(this.g2_1);
};
function Companion_5() {
}
protoOf(Companion_5).j2 = function (c) {
  var hashCode = 0;
  var _iterator__ex2g4s = c.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    var tmp = hashCode;
    var tmp1_elvis_lhs = element == null ? null : hashCode_0(element);
    hashCode = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  }
  return hashCode;
};
protoOf(Companion_5).i2 = function (c, other) {
  if (!(c.j() === other.j()))
    return false;
  return c.u(other);
};
var Companion_instance_5;
function Companion_getInstance_5() {
  return Companion_instance_5;
}
function collectionToArrayCommonImpl(collection) {
  if (collection.i()) {
    // Inline function 'kotlin.emptyArray' call
    return [];
  }
  // Inline function 'kotlin.arrayOfNulls' call
  var size = collection.j();
  var destination = Array(size);
  var iterator = collection.e();
  var index = 0;
  while (iterator.f()) {
    var _unary__edvuaz = index;
    index = _unary__edvuaz + 1 | 0;
    destination[_unary__edvuaz] = iterator.g();
  }
  return destination;
}
function emptyList() {
  return EmptyList_getInstance();
}
function arrayListOf(elements) {
  var tmp;
  if (elements.length === 0) {
    tmp = ArrayList_init_$Create$();
  } else {
    // Inline function 'kotlin.collections.asArrayList' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = new ArrayList(elements);
  }
  return tmp;
}
function listOf_0(elements) {
  return elements.length > 0 ? asList(elements) : emptyList();
}
function optimizeReadOnlyList(_this__u8e3s4) {
  switch (_this__u8e3s4.j()) {
    case 0:
      return emptyList();
    case 1:
      return listOf(_this__u8e3s4.h(0));
    default:
      return _this__u8e3s4;
  }
}
function throwIndexOverflow() {
  throw ArithmeticException_init_$Create$_0('Index overflow has happened.');
}
function EmptyList() {
  EmptyList_instance = this;
  this.r5_1 = new Long(-1478467534, -1720727600);
}
protoOf(EmptyList).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, KtList) : false) {
    tmp = other.i();
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(EmptyList).hashCode = function () {
  return 1;
};
protoOf(EmptyList).toString = function () {
  return '[]';
};
protoOf(EmptyList).j = function () {
  return 0;
};
protoOf(EmptyList).i = function () {
  return true;
};
protoOf(EmptyList).s5 = function (element) {
  return false;
};
protoOf(EmptyList).t = function (element) {
  if (!false)
    return false;
  var tmp;
  if (false) {
    tmp = element;
  } else {
    tmp = THROW_CCE();
  }
  return this.s5(tmp);
};
protoOf(EmptyList).h = function (index) {
  throw IndexOutOfBoundsException_init_$Create$_0("Empty list doesn't contain element at index " + index + '.');
};
protoOf(EmptyList).e = function () {
  return EmptyIterator_instance;
};
var EmptyList_instance;
function EmptyList_getInstance() {
  if (EmptyList_instance == null)
    new EmptyList();
  return EmptyList_instance;
}
function EmptyIterator() {
}
protoOf(EmptyIterator).f = function () {
  return false;
};
protoOf(EmptyIterator).g = function () {
  throw NoSuchElementException_init_$Create$();
};
var EmptyIterator_instance;
function EmptyIterator_getInstance() {
  return EmptyIterator_instance;
}
function get_lastIndex_0(_this__u8e3s4) {
  return _this__u8e3s4.j() - 1 | 0;
}
function collectionSizeOrDefault(_this__u8e3s4, default_0) {
  var tmp;
  if (isInterface(_this__u8e3s4, Collection)) {
    tmp = _this__u8e3s4.j();
  } else {
    tmp = default_0;
  }
  return tmp;
}
function getOrImplicitDefault(_this__u8e3s4, key) {
  if (isInterface(_this__u8e3s4, MapWithDefault))
    return _this__u8e3s4.t5(key);
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.getOrElseNullable' call
    var value = _this__u8e3s4.z(key);
    if (value == null && !_this__u8e3s4.x(key)) {
      throw NoSuchElementException_init_$Create$_0('Key ' + toString_0(key) + ' is missing in the map.');
    } else {
      tmp$ret$0 = value;
      break $l$block_0;
    }
  }
  return tmp$ret$0;
}
function MapWithDefault() {
}
function getValue(_this__u8e3s4, key) {
  return getOrImplicitDefault(_this__u8e3s4, key);
}
function addAll(_this__u8e3s4, elements) {
  if (isInterface(elements, Collection))
    return _this__u8e3s4.n(elements);
  else {
    var result = false;
    var _iterator__ex2g4s = elements.e();
    while (_iterator__ex2g4s.f()) {
      var item = _iterator__ex2g4s.g();
      if (_this__u8e3s4.p(item))
        result = true;
    }
    return result;
  }
}
function calcNext($this) {
  while ($this.u5_1.f()) {
    var item = $this.u5_1.g();
    if ($this.x5_1.a6_1(item) === $this.x5_1.z5_1) {
      $this.w5_1 = item;
      $this.v5_1 = 1;
      return Unit_instance;
    }
  }
  $this.v5_1 = 0;
}
function FilteringSequence$iterator$1(this$0) {
  this.x5_1 = this$0;
  this.u5_1 = this$0.y5_1.e();
  this.v5_1 = -1;
  this.w5_1 = null;
}
protoOf(FilteringSequence$iterator$1).g = function () {
  if (this.v5_1 === -1) {
    calcNext(this);
  }
  if (this.v5_1 === 0)
    throw NoSuchElementException_init_$Create$();
  var result = this.w5_1;
  this.w5_1 = null;
  this.v5_1 = -1;
  return result;
};
protoOf(FilteringSequence$iterator$1).f = function () {
  if (this.v5_1 === -1) {
    calcNext(this);
  }
  return this.v5_1 === 1;
};
function FilteringSequence(sequence, sendWhen, predicate) {
  sendWhen = sendWhen === VOID ? true : sendWhen;
  this.y5_1 = sequence;
  this.z5_1 = sendWhen;
  this.a6_1 = predicate;
}
protoOf(FilteringSequence).e = function () {
  return new FilteringSequence$iterator$1(this);
};
function TransformingSequence$iterator$1(this$0) {
  this.c6_1 = this$0;
  this.b6_1 = this$0.d6_1.e();
}
protoOf(TransformingSequence$iterator$1).g = function () {
  return this.c6_1.e6_1(this.b6_1.g());
};
protoOf(TransformingSequence$iterator$1).f = function () {
  return this.b6_1.f();
};
function TransformingSequence(sequence, transformer) {
  this.d6_1 = sequence;
  this.e6_1 = transformer;
}
protoOf(TransformingSequence).e = function () {
  return new TransformingSequence$iterator$1(this);
};
function compareValues(a, b) {
  if (a === b)
    return 0;
  if (a == null)
    return -1;
  if (b == null)
    return 1;
  return compareTo((!(a == null) ? isComparable(a) : false) ? a : THROW_CCE(), b);
}
function EnumEntriesList(entries) {
  AbstractList.call(this);
  this.f6_1 = entries;
}
protoOf(EnumEntriesList).j = function () {
  return this.f6_1.length;
};
protoOf(EnumEntriesList).h = function (index) {
  Companion_instance_3.l2(index, this.f6_1.length);
  return this.f6_1[index];
};
protoOf(EnumEntriesList).g6 = function (element) {
  if (element === null)
    return false;
  var target = getOrNull(this.f6_1, element.d1_1);
  return target === element;
};
protoOf(EnumEntriesList).t = function (element) {
  if (!(element instanceof Enum))
    return false;
  return this.g6(element instanceof Enum ? element : THROW_CCE());
};
function enumEntries(entries) {
  return new EnumEntriesList(entries);
}
function Default() {
  Default_instance = this;
  Random.call(this);
  this.h6_1 = defaultPlatformRandom();
}
protoOf(Default).i6 = function (bitCount) {
  return this.h6_1.i6(bitCount);
};
protoOf(Default).j6 = function () {
  return this.h6_1.j6();
};
protoOf(Default).o = function (until) {
  return this.h6_1.o(until);
};
protoOf(Default).k6 = function (from, until) {
  return this.h6_1.k6(from, until);
};
var Default_instance;
function Default_getInstance() {
  if (Default_instance == null)
    new Default();
  return Default_instance;
}
function Random() {
  Default_getInstance();
}
protoOf(Random).j6 = function () {
  return this.i6(32);
};
protoOf(Random).o = function (until) {
  return this.k6(0, until);
};
protoOf(Random).k6 = function (from, until) {
  checkRangeBounds(from, until);
  var n = until - from | 0;
  if (n > 0 || n === -2147483648) {
    var tmp;
    if ((n & (-n | 0)) === n) {
      var bitCount = fastLog2(n);
      tmp = this.i6(bitCount);
    } else {
      var v;
      do {
        var bits = this.j6() >>> 1 | 0;
        v = bits % n | 0;
      }
       while (((bits - v | 0) + (n - 1 | 0) | 0) < 0);
      tmp = v;
    }
    var rnd = tmp;
    return from + rnd | 0;
  } else {
    while (true) {
      var rnd_0 = this.j6();
      if (from <= rnd_0 ? rnd_0 < until : false)
        return rnd_0;
    }
  }
};
function Random_0(seed) {
  return XorWowRandom_init_$Create$(convertToInt(seed), convertToInt(shiftRight(seed, 32)));
}
function checkRangeBounds(from, until) {
  // Inline function 'kotlin.require' call
  if (!(until > from)) {
    var message = boundsErrorMessage(from, until);
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  return Unit_instance;
}
function fastLog2(value) {
  // Inline function 'kotlin.countLeadingZeroBits' call
  return 31 - clz32(value) | 0;
}
function boundsErrorMessage(from, until) {
  return 'Random range is empty: [' + toString_1(from) + ', ' + toString_1(until) + ').';
}
function Random_1(seed) {
  return XorWowRandom_init_$Create$(seed, seed >> 31);
}
function takeUpperBits(_this__u8e3s4, bitCount) {
  return (_this__u8e3s4 >>> (32 - bitCount | 0) | 0) & (-bitCount | 0) >> 31;
}
function XorWowRandom_init_$Init$(seed1, seed2, $this) {
  XorWowRandom.call($this, seed1, seed2, 0, 0, ~seed1, seed1 << 10 ^ (seed2 >>> 4 | 0));
  return $this;
}
function XorWowRandom_init_$Create$(seed1, seed2) {
  return XorWowRandom_init_$Init$(seed1, seed2, objectCreate(protoOf(XorWowRandom)));
}
function checkInvariants($this) {
  // Inline function 'kotlin.require' call
  if (!!(($this.l6_1 | $this.m6_1 | $this.n6_1 | $this.o6_1 | $this.p6_1) === 0)) {
    var message = 'Initial state must have at least one non-zero element.';
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
}
function Companion_6() {
  Companion_instance_6 = this;
  this.r6_1 = new Long(0, 0);
}
var Companion_instance_6;
function Companion_getInstance_6() {
  if (Companion_instance_6 == null)
    new Companion_6();
  return Companion_instance_6;
}
function XorWowRandom(x, y, z, w, v, addend) {
  Companion_getInstance_6();
  Random.call(this);
  this.l6_1 = x;
  this.m6_1 = y;
  this.n6_1 = z;
  this.o6_1 = w;
  this.p6_1 = v;
  this.q6_1 = addend;
  checkInvariants(this);
  // Inline function 'kotlin.repeat' call
  var inductionVariable = 0;
  if (inductionVariable < 64)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      this.j6();
    }
     while (inductionVariable < 64);
}
protoOf(XorWowRandom).j6 = function () {
  var t = this.l6_1;
  t = t ^ (t >>> 2 | 0);
  this.l6_1 = this.m6_1;
  this.m6_1 = this.n6_1;
  this.n6_1 = this.o6_1;
  var v0 = this.p6_1;
  this.o6_1 = v0;
  t = t ^ t << 1 ^ v0 ^ v0 << 4;
  this.p6_1 = t;
  this.q6_1 = this.q6_1 + 362437 | 0;
  return t + this.q6_1 | 0;
};
protoOf(XorWowRandom).i6 = function (bitCount) {
  return takeUpperBits(this.j6(), bitCount);
};
function appendElement(_this__u8e3s4, element, transform) {
  if (!(transform == null))
    _this__u8e3s4.d(transform(element));
  else {
    if (element == null ? true : isCharSequence(element))
      _this__u8e3s4.d(element);
    else {
      if (element instanceof Char)
        _this__u8e3s4.w4(element.s6_1);
      else {
        _this__u8e3s4.d(toString_1(element));
      }
    }
  }
}
function equals_0(_this__u8e3s4, other, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  if (_this__u8e3s4 === other)
    return true;
  if (!ignoreCase)
    return false;
  var thisUpper = uppercaseChar(_this__u8e3s4);
  var otherUpper = uppercaseChar(other);
  var tmp;
  if (thisUpper === otherUpper) {
    tmp = true;
  } else {
    // Inline function 'kotlin.text.lowercaseChar' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$1 = toString(thisUpper).toLowerCase();
    var tmp_0 = charCodeAt(tmp$ret$1, 0);
    // Inline function 'kotlin.text.lowercaseChar' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$5 = toString(otherUpper).toLowerCase();
    tmp = tmp_0 === charCodeAt(tmp$ret$5, 0);
  }
  return tmp;
}
function toIntOrNull(_this__u8e3s4) {
  return toIntOrNull_0(_this__u8e3s4, 10);
}
function numberFormatError(input) {
  throw NumberFormatException_init_$Create$_0("Invalid number format: '" + input + "'");
}
function toIntOrNull_0(_this__u8e3s4, radix) {
  checkRadix(radix);
  var length = _this__u8e3s4.length;
  if (length === 0)
    return null;
  var start;
  var isNegative;
  var limit;
  var firstChar = charCodeAt(_this__u8e3s4, 0);
  if (Char__compareTo_impl_ypi4mb(firstChar, _Char___init__impl__6a9atx(48)) < 0) {
    if (length === 1)
      return null;
    start = 1;
    if (firstChar === _Char___init__impl__6a9atx(45)) {
      isNegative = true;
      limit = -2147483648;
    } else if (firstChar === _Char___init__impl__6a9atx(43)) {
      isNegative = false;
      limit = -2147483647;
    } else
      return null;
  } else {
    start = 0;
    isNegative = false;
    limit = -2147483647;
  }
  var limitForMaxRadix = -59652323;
  var limitBeforeMul = limitForMaxRadix;
  var result = 0;
  var inductionVariable = start;
  if (inductionVariable < length)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var digit = digitOf(charCodeAt(_this__u8e3s4, i), radix);
      if (digit < 0)
        return null;
      if (result < limitBeforeMul) {
        if (limitBeforeMul === limitForMaxRadix) {
          limitBeforeMul = limit / radix | 0;
          if (result < limitBeforeMul) {
            return null;
          }
        } else {
          return null;
        }
      }
      result = imul_0(result, radix);
      if (result < (limit + digit | 0))
        return null;
      result = result - digit | 0;
    }
     while (inductionVariable < length);
  return isNegative ? result : -result | 0;
}
function removePrefix(_this__u8e3s4, prefix) {
  if (startsWith_0(_this__u8e3s4, prefix)) {
    return substring(_this__u8e3s4, charSequenceLength(prefix));
  }
  return _this__u8e3s4;
}
function isBlank(_this__u8e3s4) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.text.all' call
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(_this__u8e3s4)) {
      var element = charSequenceGet(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (!isWhitespace(element)) {
        tmp$ret$0 = false;
        break $l$block;
      }
    }
    tmp$ret$0 = true;
  }
  return tmp$ret$0;
}
function startsWith_0(_this__u8e3s4, prefix, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  var tmp;
  var tmp_0;
  if (!ignoreCase) {
    tmp_0 = typeof _this__u8e3s4 === 'string';
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = typeof prefix === 'string';
  } else {
    tmp = false;
  }
  if (tmp)
    return startsWith(_this__u8e3s4, prefix);
  else {
    return regionMatchesImpl(_this__u8e3s4, 0, prefix, 0, charSequenceLength(prefix), ignoreCase);
  }
}
function regionMatchesImpl(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase) {
  if (otherOffset < 0 || thisOffset < 0 || thisOffset > (charSequenceLength(_this__u8e3s4) - length | 0) || otherOffset > (charSequenceLength(other) - length | 0)) {
    return false;
  }
  var inductionVariable = 0;
  if (inductionVariable < length)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (!equals_0(charSequenceGet(_this__u8e3s4, thisOffset + index | 0), charSequenceGet(other, otherOffset + index | 0), ignoreCase))
        return false;
    }
     while (inductionVariable < length);
  return true;
}
function Pair(first, second) {
  this.t6_1 = first;
  this.u6_1 = second;
}
protoOf(Pair).toString = function () {
  return '(' + toString_0(this.t6_1) + ', ' + toString_0(this.u6_1) + ')';
};
protoOf(Pair).v6 = function () {
  return this.t6_1;
};
protoOf(Pair).w6 = function () {
  return this.u6_1;
};
protoOf(Pair).hashCode = function () {
  var result = this.t6_1 == null ? 0 : hashCode_0(this.t6_1);
  result = imul_0(result, 31) + (this.u6_1 == null ? 0 : hashCode_0(this.u6_1)) | 0;
  return result;
};
protoOf(Pair).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Pair))
    return false;
  if (!equals(this.t6_1, other.t6_1))
    return false;
  if (!equals(this.u6_1, other.u6_1))
    return false;
  return true;
};
function to(_this__u8e3s4, that) {
  return new Pair(_this__u8e3s4, that);
}
function Triple(first, second, third) {
  this.x6_1 = first;
  this.y6_1 = second;
  this.z6_1 = third;
}
protoOf(Triple).toString = function () {
  return '(' + toString_0(this.x6_1) + ', ' + toString_0(this.y6_1) + ', ' + toString_0(this.z6_1) + ')';
};
protoOf(Triple).hashCode = function () {
  var result = this.x6_1 == null ? 0 : hashCode_0(this.x6_1);
  result = imul_0(result, 31) + (this.y6_1 == null ? 0 : hashCode_0(this.y6_1)) | 0;
  result = imul_0(result, 31) + (this.z6_1 == null ? 0 : hashCode_0(this.z6_1)) | 0;
  return result;
};
protoOf(Triple).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Triple))
    return false;
  if (!equals(this.x6_1, other.x6_1))
    return false;
  if (!equals(this.y6_1, other.y6_1))
    return false;
  if (!equals(this.z6_1, other.z6_1))
    return false;
  return true;
};
function planPanels(input) {
  var sheet = input.sheet;
  var stock = new SheetStock('sheet', num(sheet.length), num(sheet.width), VOID, VOID, sheet.grain == true ? Grain_ALONG_LENGTH_getInstance() : Grain_NONE_getInstance());
  // Inline function 'kotlin.collections.mapIndexed' call
  var this_0 = list(input.parts);
  // Inline function 'kotlin.collections.mapIndexedTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var index = 0;
  var _iterator__ex2g4s = this_0.e();
  while (_iterator__ex2g4s.f()) {
    var item = _iterator__ex2g4s.g();
    var _unary__edvuaz = index;
    index = _unary__edvuaz + 1 | 0;
    var i = checkIndexOverflow(_unary__edvuaz);
    var tmp = 'p' + i;
    var tmp_0 = num(item.length);
    var tmp_1 = num(item.width);
    var tmp_2 = numberToInt(num(item.quantity, 1.0));
    var tmp_3 = item.label;
    var tmp0_safe_receiver = (!(tmp_3 == null) ? typeof tmp_3 === 'string' : false) ? tmp_3 : null;
    var tmp_4;
    if (tmp0_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_5;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(tmp0_safe_receiver)) {
        tmp_5 = tmp0_safe_receiver;
      } else {
        tmp_5 = null;
      }
      tmp_4 = tmp_5;
    }
    var tmp1_elvis_lhs = tmp_4;
    var tmp$ret$2 = new PanelPart(tmp, tmp_0, tmp_1, tmp_2, tmp1_elvis_lhs == null ? '' + (i + 1 | 0) : tmp1_elvis_lhs, item.grain == true ? Grain_ALONG_LENGTH_getInstance() : Grain_NONE_getInstance());
    destination.p(tmp$ret$2);
  }
  var parts = destination;
  var tmp_6 = num(input.kerf, 3.2);
  var tmp_7 = Companion_instance_9.a7(num(input.trim));
  var tmp_8 = num(input.minOffcutLength, 200.0);
  var tmp_9 = num(input.minOffcutWidth, 100.0);
  var tmp_10 = input.thorough == true ? Effort_THOROUGH_getInstance() : Effort_NORMAL_getInstance();
  var tmp0_subject = input.firstCut;
  var settings = new PanelSettings(tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, VOID, tmp0_subject == 'length' ? CutDirection_ALONG_LENGTH_getInstance() : tmp0_subject == 'width' ? CutDirection_ALONG_WIDTH_getInstance() : null, input.priority == 'cuts' ? Priority_FEWEST_CUTS_getInstance() : Priority_LEAST_WASTE_getInstance());
  var result = PanelOptimizer_instance.b7(listOf(stock), parts, settings);
  // Inline function 'kotlin.collections.associate' call
  var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(parts, 10)), 16);
  // Inline function 'kotlin.collections.associateTo' call
  var destination_0 = LinkedHashMap_init_$Create$_0(capacity);
  var _iterator__ex2g4s_0 = parts.e();
  while (_iterator__ex2g4s_0.f()) {
    var element = _iterator__ex2g4s_0.g();
    // Inline function 'kotlin.collections.plusAssign' call
    var pair = to(element.c7_1, element.g7_1);
    destination_0.e2(pair.t6_1, pair.u6_1);
  }
  var labels = destination_0;
  var out = obj();
  out.sheetCount = result.s7();
  out.utilization = result.t7();
  out.totalArea = result.u7();
  out.usedArea = result.v7();
  // Inline function 'kotlin.collections.sumOf' call
  var sum = 0;
  var _iterator__ex2g4s_1 = result.w7().e();
  while (_iterator__ex2g4s_1.f()) {
    var element_0 = _iterator__ex2g4s_1.g();
    var tmp_11 = sum;
    sum = tmp_11 + element_0.b8();
  }
  out.offcutArea = sum;
  // Inline function 'kotlin.collections.sumOf' call
  var sum_0 = 0;
  var _iterator__ex2g4s_2 = result.p7_1.e();
  while (_iterator__ex2g4s_2.f()) {
    var element_1 = _iterator__ex2g4s_2.g();
    var tmp_12 = sum_0;
    sum_0 = tmp_12 + element_1.e8_1.j() | 0;
  }
  out.cutCount = sum_0;
  out.cutLength = result.g8();
  // Inline function 'kotlin.collections.map' call
  var this_1 = result.p7_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
  var _iterator__ex2g4s_3 = this_1.e();
  while (_iterator__ex2g4s_3.f()) {
    var item_0 = _iterator__ex2g4s_3.g();
    var o = obj();
    o.length = item_0.c8_1.i8_1;
    o.width = item_0.c8_1.j8_1;
    o.utilization = item_0.t7();
    // Inline function 'kotlin.collections.sumOf' call
    var sum_1 = 0;
    var _iterator__ex2g4s_4 = item_0.f8_1.e();
    while (_iterator__ex2g4s_4.f()) {
      var element_2 = _iterator__ex2g4s_4.g();
      var tmp_13 = sum_1;
      sum_1 = tmp_13 + element_2.b8();
    }
    o.offcutArea = sum_1;
    // Inline function 'kotlin.collections.map' call
    var this_2 = item_0.d8_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s_5 = this_2.e();
    while (_iterator__ex2g4s_5.f()) {
      var item_1 = _iterator__ex2g4s_5.g();
      var q = obj();
      q.part = toInt(removePrefix(item_1.p8_1, 'p'));
      q.label = item_1.q8_1;
      q.x = item_1.r8_1;
      q.y = item_1.s8_1;
      q.length = item_1.t8_1;
      q.width = item_1.u8_1;
      q.rotated = item_1.v8_1;
      destination_2.p(q);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    o.placements = copyToArray(destination_2);
    // Inline function 'kotlin.collections.map' call
    var this_3 = item_0.f8_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_3 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_3, 10));
    var _iterator__ex2g4s_6 = this_3.e();
    while (_iterator__ex2g4s_6.f()) {
      var item_2 = _iterator__ex2g4s_6.g();
      var q_0 = obj();
      q_0.x = item_2.x7_1;
      q_0.y = item_2.y7_1;
      q_0.length = item_2.z7_1;
      q_0.width = item_2.a8_1;
      destination_3.p(q_0);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    o.offcuts = copyToArray(destination_3);
    // Inline function 'kotlin.collections.map' call
    var this_4 = item_0.e8_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_4 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_4, 10));
    var _iterator__ex2g4s_7 = this_4.e();
    while (_iterator__ex2g4s_7.f()) {
      var item_3 = _iterator__ex2g4s_7.g();
      var q_1 = obj();
      q_1.order = item_3.b9_1;
      q_1.alongLength = item_3.c9_1.equals(CutDirection_ALONG_LENGTH_getInstance());
      q_1.position = item_3.d9_1;
      q_1.from = item_3.e9_1;
      q_1.to = item_3.f9_1;
      destination_4.p(q_1);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    o.cuts = copyToArray(destination_4);
    destination_1.p(o);
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  out.sheets = copyToArray(destination_1);
  // Inline function 'kotlin.collections.map' call
  var this_5 = result.q7_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination_5 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_5, 10));
  var _iterator__ex2g4s_8 = this_5.e();
  while (_iterator__ex2g4s_8.f()) {
    var item_4 = _iterator__ex2g4s_8.g();
    var q_2 = obj();
    var tmp0_elvis_lhs = labels.z(item_4.k9_1);
    q_2.label = tmp0_elvis_lhs == null ? item_4.l9_1 : tmp0_elvis_lhs;
    q_2.count = item_4.m9_1;
    q_2.reason = item_4.n9_1.c1_1;
    destination_5.p(q_2);
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  out.unplaced = copyToArray(destination_5);
  return out;
}
function planBars(input) {
  var stock = new BarStock('bar', num(input.stock.length));
  // Inline function 'kotlin.collections.mapIndexed' call
  var this_0 = list(input.parts);
  // Inline function 'kotlin.collections.mapIndexedTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var index = 0;
  var _iterator__ex2g4s = this_0.e();
  while (_iterator__ex2g4s.f()) {
    var item = _iterator__ex2g4s.g();
    var _unary__edvuaz = index;
    index = _unary__edvuaz + 1 | 0;
    var i = checkIndexOverflow(_unary__edvuaz);
    var tmp = 'p' + i;
    var tmp_0 = num(item.length);
    var tmp_1 = numberToInt(num(item.quantity, 1.0));
    var tmp_2 = item.label;
    var tmp0_safe_receiver = (!(tmp_2 == null) ? typeof tmp_2 === 'string' : false) ? tmp_2 : null;
    var tmp_3;
    if (tmp0_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_4;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(tmp0_safe_receiver)) {
        tmp_4 = tmp0_safe_receiver;
      } else {
        tmp_4 = null;
      }
      tmp_3 = tmp_4;
    }
    var tmp1_elvis_lhs = tmp_3;
    var tmp$ret$2 = new LinearPart(tmp, tmp_0, tmp_1, tmp1_elvis_lhs == null ? '' + (i + 1 | 0) : tmp1_elvis_lhs);
    destination.p(tmp$ret$2);
  }
  var parts = destination;
  var trim = num(input.trim);
  var settings = new LinearSettings(num(input.kerf, 3.2), trim, trim, num(input.minOffcutLength, 300.0));
  var result = LinearOptimizer_instance.p9(listOf(stock), parts, settings);
  // Inline function 'kotlin.collections.associate' call
  var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(parts, 10)), 16);
  // Inline function 'kotlin.collections.associateTo' call
  var destination_0 = LinkedHashMap_init_$Create$_0(capacity);
  var _iterator__ex2g4s_0 = parts.e();
  while (_iterator__ex2g4s_0.f()) {
    var element = _iterator__ex2g4s_0.g();
    // Inline function 'kotlin.collections.plusAssign' call
    var pair = to(element.q9_1, element.t9_1);
    destination_0.e2(pair.t6_1, pair.u6_1);
  }
  var labels = destination_0;
  var out = obj();
  out.barCount = result.x9();
  out.utilization = result.t7();
  out.totalLength = result.y9();
  out.usedLength = result.z9();
  // Inline function 'kotlin.collections.map' call
  var this_1 = result.v9_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
  var _iterator__ex2g4s_1 = this_1.e();
  while (_iterator__ex2g4s_1.f()) {
    var item_0 = _iterator__ex2g4s_1.g();
    var o = obj();
    o.length = item_0.ga_1.ba_1;
    o.utilization = item_0.t7();
    o.leftover = item_0.ja_1;
    o.reusableOffcut = item_0.ka_1;
    // Inline function 'kotlin.collections.map' call
    var this_2 = item_0.ha_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s_2 = this_2.e();
    while (_iterator__ex2g4s_2.f()) {
      var item_1 = _iterator__ex2g4s_2.g();
      var q = obj();
      q.part = toInt(removePrefix(item_1.la_1, 'p'));
      q.label = item_1.ma_1;
      q.start = item_1.na_1;
      q.length = item_1.oa_1;
      destination_2.p(q);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    o.pieces = copyToArray(destination_2);
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_3 = item_0.ia_1;
    o.cuts = copyToArray(this_3);
    destination_1.p(o);
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  out.bars = copyToArray(destination_1);
  // Inline function 'kotlin.collections.map' call
  var this_4 = result.w9_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination_3 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_4, 10));
  var _iterator__ex2g4s_3 = this_4.e();
  while (_iterator__ex2g4s_3.f()) {
    var item_2 = _iterator__ex2g4s_3.g();
    var q_0 = obj();
    var tmp0_elvis_lhs = labels.z(item_2.k9_1);
    q_0.label = tmp0_elvis_lhs == null ? item_2.l9_1 : tmp0_elvis_lhs;
    q_0.count = item_2.m9_1;
    q_0.reason = item_2.n9_1.c1_1;
    destination_3.p(q_0);
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  out.unplaced = copyToArray(destination_3);
  return out;
}
function obj() {
  return {};
}
function num(value, fallback) {
  fallback = fallback === VOID ? 0.0 : fallback;
  // Inline function 'kotlin.js.unsafeCast' call
  var tmp;
  if (value == null) {
    return fallback;
  } else {
    tmp = value;
  }
  var d = tmp;
  return isNaN_0(d) ? fallback : d;
}
function list(value) {
  var tmp;
  if (value == null || value == undefined) {
    tmp = emptyList();
  } else {
    // Inline function 'kotlin.js.unsafeCast' call
    tmp = toList(value);
  }
  return tmp;
}
function node($this, x, y, w, h) {
  // Inline function 'kotlin.also' call
  var this_0 = new FreeRect(x, y, w, h, $this.za_1.j());
  // Inline function 'kotlin.collections.plusAssign' call
  $this.za_1.p(this_0);
  return this_0;
}
function splitFree($this, r, w, h, rule) {
  var lw = r.db_1 - w;
  var lh = r.eb_1 - h;
  var tmp0_subject = $this.qa_1.mb_1;
  var tmp;
  switch (tmp0_subject == null ? -1 : tmp0_subject.d1_1) {
    case 0:
      // Inline function 'kotlin.takeIf' call

      var tmp_0;
      if (r.bb_1 <= 1.0E-6 && r.db_1 >= $this.ua_1 - 1.0E-6) {
        tmp_0 = true;
      } else {
        tmp_0 = null;
      }

      tmp = tmp_0;
      break;
    case 1:
      // Inline function 'kotlin.takeIf' call

      var tmp_1;
      if (r.cb_1 <= 1.0E-6 && r.eb_1 >= $this.va_1 - 1.0E-6) {
        tmp_1 = false;
      } else {
        tmp_1 = null;
      }

      tmp = tmp_1;
      break;
    case -1:
      tmp = null;
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  var forced = tmp;
  var tmp_2;
  if (forced == null) {
    var tmp_3;
    switch (rule.d1_1) {
      case 0:
        tmp_3 = lw <= lh;
        break;
      case 1:
        tmp_3 = lw > lh;
        break;
      case 2:
        tmp_3 = w * lh > lw * h;
        break;
      case 3:
        tmp_3 = w * lh <= lw * h;
        break;
      case 4:
        tmp_3 = r.db_1 <= r.eb_1;
        break;
      case 5:
        tmp_3 = r.db_1 > r.eb_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    tmp_2 = tmp_3;
  } else {
    tmp_2 = forced;
  }
  var fullWidthFirst = tmp_2;
  var piece = r;
  if (fullWidthFirst) {
    if (lh > 1.0E-6) {
      var near = node($this, r.bb_1, r.cb_1, r.db_1, h);
      var rest = node($this, r.bb_1, r.cb_1 + h, r.db_1, lh);
      addCut($this, CutDirection_ALONG_LENGTH_getInstance(), r.cb_1 + h, r.bb_1, r.bb_1 + r.db_1, piece, near, rest);
      piece = near;
    }
    if (lw > 1.0E-6) {
      var near_0 = node($this, r.bb_1, r.cb_1, w, h);
      var rest_0 = node($this, r.bb_1 + w, r.cb_1, lw, h);
      addCut($this, CutDirection_ALONG_WIDTH_getInstance(), r.bb_1 + w, r.cb_1, r.cb_1 + h, piece, near_0, rest_0);
    }
  } else {
    if (lw > 1.0E-6) {
      var near_1 = node($this, r.bb_1, r.cb_1, w, r.eb_1);
      var rest_1 = node($this, r.bb_1 + w, r.cb_1, lw, r.eb_1);
      addCut($this, CutDirection_ALONG_WIDTH_getInstance(), r.bb_1 + w, r.cb_1, r.cb_1 + r.eb_1, piece, near_1, rest_1);
      piece = near_1;
    }
    if (lh > 1.0E-6) {
      var near_2 = node($this, r.bb_1, r.cb_1, w, h);
      var rest_2 = node($this, r.bb_1, r.cb_1 + h, w, lh);
      addCut($this, CutDirection_ALONG_LENGTH_getInstance(), r.cb_1 + h, r.bb_1, r.bb_1 + w, piece, near_2, rest_2);
    }
  }
}
function addCut($this, direction, boundary, from, to, piece, near, rest) {
  var tmp0 = $this.ya_1;
  // Inline function 'kotlin.collections.plusAssign' call
  var element = new RawCut(direction, boundary, from, to, piece.fb_1, near.fb_1, rest.fb_1);
  tmp0.p(element);
  if (rest.db_1 > $this.ra_1 + 1.0E-6 && rest.eb_1 > $this.ra_1 + 1.0E-6) {
    // Inline function 'kotlin.collections.plusAssign' call
    $this.wa_1.p(rest);
  }
}
function sequence($this) {
  // Inline function 'kotlin.collections.associateBy' call
  var this_0 = $this.ya_1;
  var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
  // Inline function 'kotlin.collections.associateByTo' call
  var destination = LinkedHashMap_init_$Create$_0(capacity);
  var _iterator__ex2g4s = this_0.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    var tmp$ret$2 = element.sb_1;
    destination.e2(tmp$ret$2, element);
  }
  var byNode = destination;
  var out = ArrayList_init_$Create$_0($this.ya_1.j());
  sequence$visit(byNode, $this, out, 0, 1);
  return out;
}
function Companion_7() {
  Companion_instance_7 = this;
  var tmp = this;
  // Inline function 'kotlin.booleanArrayOf' call
  tmp.vb_1 = booleanArrayOf([false, true]);
  var tmp_0 = this;
  // Inline function 'kotlin.booleanArrayOf' call
  tmp_0.wb_1 = booleanArrayOf([false]);
}
var Companion_instance_7;
function Companion_getInstance_7() {
  if (Companion_instance_7 == null)
    new Companion_7();
  return Companion_instance_7;
}
function sam$kotlin_Comparator$0_0(function_0) {
  this.xb_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0_0).m5 = function (a, b) {
  return this.xb_1(a, b);
};
protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
  return this.m5(a, b);
};
protoOf(sam$kotlin_Comparator$0_0).m1 = function () {
  return this.xb_1;
};
protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, Comparator) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.m1(), other.m1());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlin_Comparator$0_0).hashCode = function () {
  return hashCode_0(this.m1());
};
function sam$kotlin_Comparator$0_1(function_0) {
  this.yb_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0_1).m5 = function (a, b) {
  return this.yb_1(a, b);
};
protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
  return this.m5(a, b);
};
protoOf(sam$kotlin_Comparator$0_1).m1 = function () {
  return this.yb_1;
};
protoOf(sam$kotlin_Comparator$0_1).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, Comparator) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.m1(), other.m1());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlin_Comparator$0_1).hashCode = function () {
  return hashCode_0(this.m1());
};
function GuillotineSheet$toLayout$lambda(this$0) {
  return function (it) {
    return new Offcut(this$0.sa_1 + it.bb_1, this$0.ta_1 + it.cb_1, it.db_1 - this$0.ra_1, it.eb_1 - this$0.ra_1);
  };
}
function GuillotineSheet$toLayout$lambda_0(this$0) {
  return function (o) {
    var tmp0 = o.z7_1;
    // Inline function 'kotlin.math.max' call
    var b = o.a8_1;
    var long = Math.max(tmp0, b);
    var tmp0_0 = o.z7_1;
    // Inline function 'kotlin.math.min' call
    var b_0 = o.a8_1;
    var short = Math.min(tmp0_0, b_0);
    return long + 1.0E-6 >= this$0.qa_1.ib_1 && short + 1.0E-6 >= this$0.qa_1.jb_1;
  };
}
function GuillotineSheet$toLayout$lambda_1(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = b.b8();
  var tmp$ret$2 = a.b8();
  return compareValues(tmp, tmp$ret$2);
}
function sequence$visit$collect(byNode, direction, group, strips, n) {
  var c = byNode.z(n);
  if (!(c == null) && c.ob_1.equals(direction)) {
    // Inline function 'kotlin.collections.plusAssign' call
    group.p(c);
    sequence$visit$collect(byNode, direction, group, strips, c.tb_1);
    sequence$visit$collect(byNode, direction, group, strips, c.ub_1);
  } else {
    // Inline function 'kotlin.collections.plusAssign' call
    strips.p(n);
  }
}
function GuillotineSheet$sequence$visit$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = a.pb_1;
  var tmp$ret$2 = b.pb_1;
  return compareValues(tmp, tmp$ret$2);
}
function GuillotineSheet$sequence$visit$lambda_0($alongY, this$0) {
  return function (a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = $alongY ? this$0.za_1.h(a).cb_1 : this$0.za_1.h(a).bb_1;
    var tmp$ret$2 = $alongY ? this$0.za_1.h(b).cb_1 : this$0.za_1.h(b).bb_1;
    return compareValues(tmp, tmp$ret$2);
  };
}
function sequence$visit(byNode, this$0, out, node, stage) {
  var tmp0_safe_receiver = byNode.z(node);
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ob_1;
  var tmp;
  if (tmp1_elvis_lhs == null) {
    return Unit_instance;
  } else {
    tmp = tmp1_elvis_lhs;
  }
  var direction = tmp;
  var group = ArrayList_init_$Create$();
  var strips = ArrayList_init_$Create$();
  sequence$visit$collect(byNode, direction, group, strips, node);
  // Inline function 'kotlin.collections.sortBy' call
  if (group.j() > 1) {
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = GuillotineSheet$sequence$visit$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0_1(tmp_0);
    sortWith_0(group, tmp$ret$1);
  }
  var rect = this$0.za_1.h(node);
  var alongY = direction.equals(CutDirection_ALONG_LENGTH_getInstance());
  var axisOrigin = alongY ? this$0.ta_1 : this$0.sa_1;
  var otherOrigin = alongY ? this$0.sa_1 : this$0.ta_1;
  var start = alongY ? rect.cb_1 : rect.bb_1;
  var end = start + (alongY ? rect.eb_1 : rect.db_1);
  var _iterator__ex2g4s = group.e();
  while (_iterator__ex2g4s.f()) {
    var c = _iterator__ex2g4s.g();
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new Cut(out.j() + 1 | 0, direction, axisOrigin + c.pb_1 - this$0.ra_1 / 2, otherOrigin + c.qb_1, otherOrigin + c.rb_1 - this$0.ra_1, stage, axisOrigin + start, axisOrigin + end - this$0.ra_1, c.pb_1 - this$0.ra_1 - start);
    out.p(element);
    start = c.pb_1;
  }
  // Inline function 'kotlin.collections.sortBy' call
  if (strips.j() > 1) {
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_1 = GuillotineSheet$sequence$visit$lambda_0(alongY, this$0);
    var tmp$ret$4 = new sam$kotlin_Comparator$0_1(tmp_1);
    sortWith_0(strips, tmp$ret$4);
  }
  var _iterator__ex2g4s_0 = strips.e();
  while (_iterator__ex2g4s_0.f()) {
    var strip = _iterator__ex2g4s_0.g();
    sequence$visit(byNode, this$0, out, strip, stage + 1 | 0);
  }
}
function GuillotineSheet(stock, settings) {
  Companion_getInstance_7();
  this.pa_1 = stock;
  this.qa_1 = settings;
  this.ra_1 = this.qa_1.gb_1;
  this.sa_1 = this.qa_1.hb_1.zb_1;
  this.ta_1 = this.qa_1.hb_1.bc_1;
  this.ua_1 = this.pa_1.i8_1 - this.qa_1.hb_1.zb_1 - this.qa_1.hb_1.ac_1 + this.ra_1;
  this.va_1 = this.pa_1.j8_1 - this.qa_1.hb_1.bc_1 - this.qa_1.hb_1.cc_1 + this.ra_1;
  this.wa_1 = ArrayList_init_$Create$();
  this.xa_1 = ArrayList_init_$Create$();
  this.ya_1 = ArrayList_init_$Create$();
  this.za_1 = ArrayList_init_$Create$();
  this.ab_1 = 0.0;
  var root = node(this, 0.0, 0.0, this.ua_1, this.va_1);
  if (this.ua_1 > this.ra_1 + 1.0E-6 && this.va_1 > this.ra_1 + 1.0E-6) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.wa_1.p(root);
  }
}
protoOf(GuillotineSheet).dc = function () {
  return this.xa_1.j();
};
protoOf(GuillotineSheet).ec = function (part) {
  return !(part.h7_1.equals(Grain_ALONG_LENGTH_getInstance()) && this.pa_1.m8_1.equals(Grain_ALONG_LENGTH_getInstance()));
};
protoOf(GuillotineSheet).fc = function (part) {
  var tmp0_elvis_lhs = firstOrNull(this.wa_1);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return false;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var r = tmp;
  var w = part.d7_1 + this.ra_1;
  var h = part.e7_1 + this.ra_1;
  if (w <= r.db_1 + 1.0E-6 && h <= r.eb_1 + 1.0E-6)
    return true;
  return this.ec(part) && h <= r.db_1 + 1.0E-6 && w <= r.eb_1 + 1.0E-6;
};
protoOf(GuillotineSheet).gc = function (part, choice, split) {
  var pw = part.d7_1 + this.ra_1;
  var ph = part.e7_1 + this.ra_1;
  var tmp;
  if (this.ec(part)) {
    // Inline function 'kotlin.math.abs' call
    var x = part.d7_1 - part.e7_1;
    tmp = Math.abs(x) > 1.0E-6;
  } else {
    tmp = false;
  }
  var rotatable = tmp;
  var bestIndex = -1;
  var bestRotated = false;
  var best1 = 1.7976931348623157E308;
  var best2 = 1.7976931348623157E308;
  var inductionVariable = 0;
  var last = this.wa_1.j() - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var r = this.wa_1.h(i);
      var indexedObject = rotatable ? Companion_getInstance_7().vb_1 : Companion_getInstance_7().wb_1;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject.length;
      $l$loop: while (inductionVariable_0 < last_0) {
        var rotated = indexedObject[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var w = rotated ? ph : pw;
        var h = rotated ? pw : ph;
        if (w > r.db_1 + 1.0E-6 || h > r.eb_1 + 1.0E-6)
          continue $l$loop;
        var lw = r.db_1 - w;
        var lh = r.eb_1 - h;
        var s1;
        var s2;
        switch (choice.d1_1) {
          case 0:
            s1 = r.db_1 * r.eb_1 - w * h;
            // Inline function 'kotlin.math.min' call

            s2 = Math.min(lw, lh);
            break;
          case 1:
            // Inline function 'kotlin.math.min' call

            s1 = Math.min(lw, lh);
            // Inline function 'kotlin.math.max' call

            s2 = Math.max(lw, lh);
            break;
          case 2:
            // Inline function 'kotlin.math.max' call

            s1 = Math.max(lw, lh);
            // Inline function 'kotlin.math.min' call

            s2 = Math.min(lw, lh);
            break;
          case 3:
            s1 = r.cb_1;
            s2 = r.bb_1;
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        if (s1 < best1 - 1.0E-6 || (s1 <= best1 + 1.0E-6 && s2 < best2 - 1.0E-6)) {
          best1 = s1;
          best2 = s2;
          bestIndex = i;
          bestRotated = rotated;
        }
      }
    }
     while (inductionVariable <= last);
  if (bestIndex < 0)
    return false;
  var r_0 = this.wa_1.n2(bestIndex);
  var w_0 = bestRotated ? ph : pw;
  var h_0 = bestRotated ? pw : ph;
  var x_0 = this.sa_1 + r_0.bb_1;
  var y = this.ta_1 + r_0.cb_1;
  var tmp0 = this.xa_1;
  // Inline function 'kotlin.collections.plusAssign' call
  var element = new Placement(part.c7_1, part.g7_1, x_0, y, bestRotated ? part.e7_1 : part.d7_1, bestRotated ? part.d7_1 : part.e7_1, bestRotated, part.k7_1, part.l7_1, Shapes_instance.hc(part.m7_1, x_0, y, part.e7_1, bestRotated), part.n7_1, part.o7_1);
  tmp0.p(element);
  this.ab_1 = this.ab_1 + part.d7_1 * part.e7_1;
  splitFree(this, r_0, w_0, h_0, split);
  return true;
};
protoOf(GuillotineSheet).ic = function () {
  var tmp = asSequence(this.wa_1);
  var tmp_0 = map(tmp, GuillotineSheet$toLayout$lambda(this));
  // Inline function 'kotlin.sequences.sortedByDescending' call
  var this_0 = filter(tmp_0, GuillotineSheet$toLayout$lambda_0(this));
  // Inline function 'kotlin.comparisons.compareByDescending' call
  var tmp_1 = GuillotineSheet$toLayout$lambda_1;
  var tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp_1);
  var tmp$ret$0 = sortedWith_0(this_0, tmp$ret$1);
  var offcuts = toList_1(tmp$ret$0);
  return new SheetLayout(this.pa_1, toList_0(this.xa_1), sequence(this), offcuts);
};
function FreeRect(x, y, w, h, node) {
  this.bb_1 = x;
  this.cb_1 = y;
  this.db_1 = w;
  this.eb_1 = h;
  this.fb_1 = node;
}
protoOf(FreeRect).toString = function () {
  return 'FreeRect(x=' + this.bb_1 + ', y=' + this.cb_1 + ', w=' + this.db_1 + ', h=' + this.eb_1 + ', node=' + this.fb_1 + ')';
};
protoOf(FreeRect).hashCode = function () {
  var result = getNumberHashCode(this.bb_1);
  result = imul_0(result, 31) + getNumberHashCode(this.cb_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.db_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.eb_1) | 0;
  result = imul_0(result, 31) + this.fb_1 | 0;
  return result;
};
protoOf(FreeRect).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof FreeRect))
    return false;
  if (!equals(this.bb_1, other.bb_1))
    return false;
  if (!equals(this.cb_1, other.cb_1))
    return false;
  if (!equals(this.db_1, other.db_1))
    return false;
  if (!equals(this.eb_1, other.eb_1))
    return false;
  if (!(this.fb_1 === other.fb_1))
    return false;
  return true;
};
function RawCut(direction, boundary, from, to, node, near, rest) {
  this.ob_1 = direction;
  this.pb_1 = boundary;
  this.qb_1 = from;
  this.rb_1 = to;
  this.sb_1 = node;
  this.tb_1 = near;
  this.ub_1 = rest;
}
var FreeChoice_BEST_AREA_instance;
var FreeChoice_BEST_SHORT_SIDE_instance;
var FreeChoice_BEST_LONG_SIDE_instance;
var FreeChoice_TOP_LEFT_instance;
function values() {
  return [FreeChoice_BEST_AREA_getInstance(), FreeChoice_BEST_SHORT_SIDE_getInstance(), FreeChoice_BEST_LONG_SIDE_getInstance(), FreeChoice_TOP_LEFT_getInstance()];
}
function get_entries() {
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var FreeChoice_entriesInitialized;
function FreeChoice_initEntries() {
  if (FreeChoice_entriesInitialized)
    return Unit_instance;
  FreeChoice_entriesInitialized = true;
  FreeChoice_BEST_AREA_instance = new FreeChoice('BEST_AREA', 0);
  FreeChoice_BEST_SHORT_SIDE_instance = new FreeChoice('BEST_SHORT_SIDE', 1);
  FreeChoice_BEST_LONG_SIDE_instance = new FreeChoice('BEST_LONG_SIDE', 2);
  FreeChoice_TOP_LEFT_instance = new FreeChoice('TOP_LEFT', 3);
}
var $ENTRIES;
function FreeChoice(name, ordinal) {
  Enum.call(this, name, ordinal);
}
var SplitRule_SHORTER_LEFTOVER_AXIS_instance;
var SplitRule_LONGER_LEFTOVER_AXIS_instance;
var SplitRule_MIN_AREA_instance;
var SplitRule_MAX_AREA_instance;
var SplitRule_SHORTER_AXIS_instance;
var SplitRule_LONGER_AXIS_instance;
function values_0() {
  return [SplitRule_SHORTER_LEFTOVER_AXIS_getInstance(), SplitRule_LONGER_LEFTOVER_AXIS_getInstance(), SplitRule_MIN_AREA_getInstance(), SplitRule_MAX_AREA_getInstance(), SplitRule_SHORTER_AXIS_getInstance(), SplitRule_LONGER_AXIS_getInstance()];
}
function get_entries_0() {
  if ($ENTRIES_0 == null)
    $ENTRIES_0 = enumEntries(values_0());
  return $ENTRIES_0;
}
var SplitRule_entriesInitialized;
function SplitRule_initEntries() {
  if (SplitRule_entriesInitialized)
    return Unit_instance;
  SplitRule_entriesInitialized = true;
  SplitRule_SHORTER_LEFTOVER_AXIS_instance = new SplitRule('SHORTER_LEFTOVER_AXIS', 0);
  SplitRule_LONGER_LEFTOVER_AXIS_instance = new SplitRule('LONGER_LEFTOVER_AXIS', 1);
  SplitRule_MIN_AREA_instance = new SplitRule('MIN_AREA', 2);
  SplitRule_MAX_AREA_instance = new SplitRule('MAX_AREA', 3);
  SplitRule_SHORTER_AXIS_instance = new SplitRule('SHORTER_AXIS', 4);
  SplitRule_LONGER_AXIS_instance = new SplitRule('LONGER_AXIS', 5);
}
var $ENTRIES_0;
function SplitRule(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function FreeChoice_BEST_AREA_getInstance() {
  FreeChoice_initEntries();
  return FreeChoice_BEST_AREA_instance;
}
function FreeChoice_BEST_SHORT_SIDE_getInstance() {
  FreeChoice_initEntries();
  return FreeChoice_BEST_SHORT_SIDE_instance;
}
function FreeChoice_BEST_LONG_SIDE_getInstance() {
  FreeChoice_initEntries();
  return FreeChoice_BEST_LONG_SIDE_instance;
}
function FreeChoice_TOP_LEFT_getInstance() {
  FreeChoice_initEntries();
  return FreeChoice_TOP_LEFT_instance;
}
function SplitRule_SHORTER_LEFTOVER_AXIS_getInstance() {
  SplitRule_initEntries();
  return SplitRule_SHORTER_LEFTOVER_AXIS_instance;
}
function SplitRule_LONGER_LEFTOVER_AXIS_getInstance() {
  SplitRule_initEntries();
  return SplitRule_LONGER_LEFTOVER_AXIS_instance;
}
function SplitRule_MIN_AREA_getInstance() {
  SplitRule_initEntries();
  return SplitRule_MIN_AREA_instance;
}
function SplitRule_MAX_AREA_getInstance() {
  SplitRule_initEntries();
  return SplitRule_MAX_AREA_instance;
}
function SplitRule_SHORTER_AXIS_getInstance() {
  SplitRule_initEntries();
  return SplitRule_SHORTER_AXIS_instance;
}
function SplitRule_LONGER_AXIS_getInstance() {
  SplitRule_initEntries();
  return SplitRule_LONGER_AXIS_instance;
}
function BarStock(id, length, quantity, costPerBar, isOffcut, material) {
  quantity = quantity === VOID ? null : quantity;
  costPerBar = costPerBar === VOID ? 0.0 : costPerBar;
  isOffcut = isOffcut === VOID ? false : isOffcut;
  material = material === VOID ? '' : material;
  this.aa_1 = id;
  this.ba_1 = length;
  this.ca_1 = quantity;
  this.da_1 = costPerBar;
  this.ea_1 = isOffcut;
  this.fa_1 = material;
  // Inline function 'kotlin.require' call
  if (!(this.ba_1 > 0)) {
    var message = 'Boy pozitif olmal\u0131: ' + this.aa_1;
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  // Inline function 'kotlin.require' call
  if (!(this.ca_1 == null || this.ca_1 >= 0)) {
    var message_0 = 'Adet negatif olamaz: ' + this.aa_1;
    throw IllegalArgumentException_init_$Create$_0(toString_1(message_0));
  }
}
protoOf(BarStock).jc = function (id, length, quantity, costPerBar, isOffcut, material) {
  return new BarStock(id, length, quantity, costPerBar, isOffcut, material);
};
protoOf(BarStock).kc = function (id, length, quantity, costPerBar, isOffcut, material, $super) {
  id = id === VOID ? this.aa_1 : id;
  length = length === VOID ? this.ba_1 : length;
  quantity = quantity === VOID ? this.ca_1 : quantity;
  costPerBar = costPerBar === VOID ? this.da_1 : costPerBar;
  isOffcut = isOffcut === VOID ? this.ea_1 : isOffcut;
  material = material === VOID ? this.fa_1 : material;
  return $super === VOID ? this.jc(id, length, quantity, costPerBar, isOffcut, material) : $super.jc.call(this, id, length, quantity, costPerBar, isOffcut, material);
};
protoOf(BarStock).toString = function () {
  return 'BarStock(id=' + this.aa_1 + ', length=' + this.ba_1 + ', quantity=' + this.ca_1 + ', costPerBar=' + this.da_1 + ', isOffcut=' + this.ea_1 + ', material=' + this.fa_1 + ')';
};
protoOf(BarStock).hashCode = function () {
  var result = getStringHashCode(this.aa_1);
  result = imul_0(result, 31) + getNumberHashCode(this.ba_1) | 0;
  result = imul_0(result, 31) + (this.ca_1 == null ? 0 : this.ca_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.da_1) | 0;
  result = imul_0(result, 31) + getBooleanHashCode(this.ea_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.fa_1) | 0;
  return result;
};
protoOf(BarStock).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof BarStock))
    return false;
  if (!(this.aa_1 === other.aa_1))
    return false;
  if (!equals(this.ba_1, other.ba_1))
    return false;
  if (!(this.ca_1 == other.ca_1))
    return false;
  if (!equals(this.da_1, other.da_1))
    return false;
  if (!(this.ea_1 === other.ea_1))
    return false;
  if (!(this.fa_1 === other.fa_1))
    return false;
  return true;
};
function LinearPart(id, length, quantity, label, material) {
  quantity = quantity === VOID ? 1 : quantity;
  label = label === VOID ? id : label;
  material = material === VOID ? null : material;
  this.q9_1 = id;
  this.r9_1 = length;
  this.s9_1 = quantity;
  this.t9_1 = label;
  this.u9_1 = material;
  // Inline function 'kotlin.require' call
  if (!(this.r9_1 > 0)) {
    var message = 'Par\xE7a boyu pozitif olmal\u0131: ' + this.q9_1;
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  // Inline function 'kotlin.require' call
  if (!(this.s9_1 >= 0)) {
    var message_0 = 'Par\xE7a adedi negatif olamaz: ' + this.q9_1;
    throw IllegalArgumentException_init_$Create$_0(toString_1(message_0));
  }
}
protoOf(LinearPart).toString = function () {
  return 'LinearPart(id=' + this.q9_1 + ', length=' + this.r9_1 + ', quantity=' + this.s9_1 + ', label=' + this.t9_1 + ', material=' + this.u9_1 + ')';
};
protoOf(LinearPart).hashCode = function () {
  var result = getStringHashCode(this.q9_1);
  result = imul_0(result, 31) + getNumberHashCode(this.r9_1) | 0;
  result = imul_0(result, 31) + this.s9_1 | 0;
  result = imul_0(result, 31) + getStringHashCode(this.t9_1) | 0;
  result = imul_0(result, 31) + (this.u9_1 == null ? 0 : getStringHashCode(this.u9_1)) | 0;
  return result;
};
protoOf(LinearPart).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof LinearPart))
    return false;
  if (!(this.q9_1 === other.q9_1))
    return false;
  if (!equals(this.r9_1, other.r9_1))
    return false;
  if (!(this.s9_1 === other.s9_1))
    return false;
  if (!(this.t9_1 === other.t9_1))
    return false;
  if (!(this.u9_1 == other.u9_1))
    return false;
  return true;
};
function LinearSettings(kerf, trimStart, trimEnd, minOffcutLength) {
  kerf = kerf === VOID ? 3.0 : kerf;
  trimStart = trimStart === VOID ? 0.0 : trimStart;
  trimEnd = trimEnd === VOID ? 0.0 : trimEnd;
  minOffcutLength = minOffcutLength === VOID ? 300.0 : minOffcutLength;
  this.lc_1 = kerf;
  this.mc_1 = trimStart;
  this.nc_1 = trimEnd;
  this.oc_1 = minOffcutLength;
  // Inline function 'kotlin.require' call
  if (!(this.lc_1 >= 0 && this.mc_1 >= 0 && this.nc_1 >= 0)) {
    var message = 'Paylar negatif olamaz';
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
}
protoOf(LinearSettings).toString = function () {
  return 'LinearSettings(kerf=' + this.lc_1 + ', trimStart=' + this.mc_1 + ', trimEnd=' + this.nc_1 + ', minOffcutLength=' + this.oc_1 + ')';
};
protoOf(LinearSettings).hashCode = function () {
  var result = getNumberHashCode(this.lc_1);
  result = imul_0(result, 31) + getNumberHashCode(this.mc_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.nc_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.oc_1) | 0;
  return result;
};
protoOf(LinearSettings).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof LinearSettings))
    return false;
  if (!equals(this.lc_1, other.lc_1))
    return false;
  if (!equals(this.mc_1, other.mc_1))
    return false;
  if (!equals(this.nc_1, other.nc_1))
    return false;
  if (!equals(this.oc_1, other.oc_1))
    return false;
  return true;
};
function BarPiece(partId, label, start, length) {
  this.la_1 = partId;
  this.ma_1 = label;
  this.na_1 = start;
  this.oa_1 = length;
}
protoOf(BarPiece).toString = function () {
  return 'BarPiece(partId=' + this.la_1 + ', label=' + this.ma_1 + ', start=' + this.na_1 + ', length=' + this.oa_1 + ')';
};
protoOf(BarPiece).hashCode = function () {
  var result = getStringHashCode(this.la_1);
  result = imul_0(result, 31) + getStringHashCode(this.ma_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.na_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.oa_1) | 0;
  return result;
};
protoOf(BarPiece).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof BarPiece))
    return false;
  if (!(this.la_1 === other.la_1))
    return false;
  if (!(this.ma_1 === other.ma_1))
    return false;
  if (!equals(this.na_1, other.na_1))
    return false;
  if (!equals(this.oa_1, other.oa_1))
    return false;
  return true;
};
function BarLayout(stock, pieces, cutPositions, leftover, reusableOffcut) {
  this.ga_1 = stock;
  this.ha_1 = pieces;
  this.ia_1 = cutPositions;
  this.ja_1 = leftover;
  this.ka_1 = reusableOffcut;
}
protoOf(BarLayout).z9 = function () {
  // Inline function 'kotlin.collections.sumOf' call
  var sum = 0;
  var _iterator__ex2g4s = this.ha_1.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    var tmp = sum;
    sum = tmp + element.oa_1;
  }
  return sum;
};
protoOf(BarLayout).t7 = function () {
  return this.z9() / this.ga_1.ba_1;
};
protoOf(BarLayout).toString = function () {
  return 'BarLayout(stock=' + this.ga_1.toString() + ', pieces=' + toString_1(this.ha_1) + ', cutPositions=' + toString_1(this.ia_1) + ', leftover=' + this.ja_1 + ', reusableOffcut=' + this.ka_1 + ')';
};
protoOf(BarLayout).hashCode = function () {
  var result = this.ga_1.hashCode();
  result = imul_0(result, 31) + hashCode_0(this.ha_1) | 0;
  result = imul_0(result, 31) + hashCode_0(this.ia_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.ja_1) | 0;
  result = imul_0(result, 31) + (this.ka_1 == null ? 0 : getNumberHashCode(this.ka_1)) | 0;
  return result;
};
protoOf(BarLayout).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof BarLayout))
    return false;
  if (!this.ga_1.equals(other.ga_1))
    return false;
  if (!equals(this.ha_1, other.ha_1))
    return false;
  if (!equals(this.ia_1, other.ia_1))
    return false;
  if (!equals(this.ja_1, other.ja_1))
    return false;
  if (!equals(this.ka_1, other.ka_1))
    return false;
  return true;
};
function LinearResult(bars, unplaced) {
  this.v9_1 = bars;
  this.w9_1 = unplaced;
}
protoOf(LinearResult).x9 = function () {
  return this.v9_1.j();
};
protoOf(LinearResult).y9 = function () {
  // Inline function 'kotlin.collections.sumOf' call
  var sum = 0;
  var _iterator__ex2g4s = this.v9_1.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    var tmp = sum;
    sum = tmp + element.ga_1.ba_1;
  }
  return sum;
};
protoOf(LinearResult).z9 = function () {
  // Inline function 'kotlin.collections.sumOf' call
  var sum = 0;
  var _iterator__ex2g4s = this.v9_1.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    var tmp = sum;
    sum = tmp + element.z9();
  }
  return sum;
};
protoOf(LinearResult).t7 = function () {
  return this.y9() > 0 ? this.z9() / this.y9() : 0.0;
};
protoOf(LinearResult).toString = function () {
  return 'LinearResult(bars=' + toString_1(this.v9_1) + ', unplaced=' + toString_1(this.w9_1) + ')';
};
protoOf(LinearResult).hashCode = function () {
  var result = hashCode_0(this.v9_1);
  result = imul_0(result, 31) + hashCode_0(this.w9_1) | 0;
  return result;
};
protoOf(LinearResult).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof LinearResult))
    return false;
  if (!equals(this.v9_1, other.v9_1))
    return false;
  if (!equals(this.w9_1, other.w9_1))
    return false;
  return true;
};
function optimizeGroup($this, stocks, parts, settings) {
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination = ArrayList_init_$Create$();
  var _iterator__ex2g4s = stocks.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    if (element.ca_1 == null || element.ca_1 > 0) {
      destination.p(element);
    }
  }
  var usable = destination;
  var tmp$ret$3;
  $l$block: {
    // Inline function 'kotlin.collections.maxOfOrNull' call
    var iterator = usable.e();
    if (!iterator.f()) {
      tmp$ret$3 = null;
      break $l$block;
    }
    var it = iterator.g();
    var maxValue = capacity(LinearOptimizer_instance, it, settings);
    while (iterator.f()) {
      var it_0 = iterator.g();
      var v = capacity(LinearOptimizer_instance, it_0, settings);
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = maxValue;
      maxValue = Math.max(a, v);
    }
    tmp$ret$3 = maxValue;
  }
  var tmp0_elvis_lhs = tmp$ret$3;
  var longest = tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs;
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination_0 = ArrayList_init_$Create$();
  var _iterator__ex2g4s_0 = parts.e();
  while (_iterator__ex2g4s_0.f()) {
    var element_0 = _iterator__ex2g4s_0.g();
    if (element_0.s9_1 > 0 && element_0.r9_1 + settings.lc_1 > longest + 1.0E-6) {
      destination_0.p(element_0);
    }
  }
  var tooLong = destination_0;
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination_1 = ArrayList_init_$Create$();
  var _iterator__ex2g4s_1 = parts.e();
  while (_iterator__ex2g4s_1.f()) {
    var element_1 = _iterator__ex2g4s_1.g();
    if (element_1.s9_1 > 0 && !tooLong.t(element_1)) {
      destination_1.p(element_1);
    }
  }
  var active = destination_1;
  var bestFill = runBestFill($this, usable, active, settings);
  var firstFit = runFirstFitDecreasing($this, usable, active, settings);
  var chosen = compare_0($this, bestFill, firstFit, usable) <= 0 ? bestFill : firstFit;
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination_2 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tooLong, 10));
  var _iterator__ex2g4s_2 = tooLong.e();
  while (_iterator__ex2g4s_2.f()) {
    var item = _iterator__ex2g4s_2.g();
    var tmp$ret$15 = new UnplacedPart(item.q9_1, item.t9_1, item.s9_1, UnplacedReason_TOO_LARGE_getInstance());
    destination_2.p(tmp$ret$15);
  }
  var tmp = destination_2;
  // Inline function 'kotlin.collections.filter' call
  var tmp0 = chosen.qc_1;
  // Inline function 'kotlin.collections.filterTo' call
  var destination_3 = LinkedHashMap_init_$Create$();
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s_3 = tmp0.b1().e();
  while (_iterator__ex2g4s_3.f()) {
    var element_2 = _iterator__ex2g4s_3.g();
    if (element_2.w() > 0) {
      destination_3.e2(element_2.v(), element_2.w());
    }
  }
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination_4 = ArrayList_init_$Create$_0(destination_3.j());
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s_4 = destination_3.b1().e();
  while (_iterator__ex2g4s_4.f()) {
    var item_0 = _iterator__ex2g4s_4.g();
    // Inline function 'kotlin.collections.component1' call
    var part = item_0.v();
    // Inline function 'kotlin.collections.component2' call
    var count = item_0.w();
    var tmp$ret$23 = new UnplacedPart(part.q9_1, part.t9_1, count, UnplacedReason_NO_STOCK_LEFT_getInstance());
    destination_4.p(tmp$ret$23);
  }
  var unplaced = plus(tmp, destination_4);
  // Inline function 'kotlin.collections.map' call
  var this_0 = chosen.pc_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination_5 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s_5 = this_0.e();
  while (_iterator__ex2g4s_5.f()) {
    var item_1 = _iterator__ex2g4s_5.g();
    var tmp$ret$28 = layout(LinearOptimizer_instance, item_1.t6_1, item_1.u6_1, settings);
    destination_5.p(tmp$ret$28);
  }
  return new LinearResult(destination_5, unplaced);
}
function capacity($this, stock, s) {
  return stock.ba_1 - s.mc_1 - s.nc_1 + s.lc_1;
}
function Run(bars, remaining) {
  this.pc_1 = bars;
  this.qc_1 = remaining;
}
function stockOrder($this, stocks) {
  // Inline function 'kotlin.comparisons.compareByDescending' call
  var tmp = LinearOptimizer$stockOrder$lambda;
  // Inline function 'kotlin.comparisons.thenByDescending' call
  var this_0 = new sam$kotlin_Comparator$0_3(tmp);
  var tmp_0 = LinearOptimizer$stockOrder$lambda_0(this_0);
  // Inline function 'kotlin.comparisons.thenBy' call
  var this_1 = new sam$kotlin_Comparator$0_3(tmp_0);
  var tmp_1 = LinearOptimizer$stockOrder$lambda_1(this_1);
  var tmp$ret$2 = new sam$kotlin_Comparator$0_3(tmp_1);
  return sortedWith(stocks, tmp$ret$2);
}
function runBestFill($this, stocks, parts, s) {
  // Inline function 'kotlin.apply' call
  var this_0 = LinkedHashMap_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = parts.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    this_0.e2(element, element.s9_1);
  }
  var remaining = this_0;
  // Inline function 'kotlin.apply' call
  var this_1 = HashMap_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s_0 = stocks.e();
  while (_iterator__ex2g4s_0.f()) {
    var element_0 = _iterator__ex2g4s_0.g();
    this_1.e2(element_0.aa_1, element_0.ca_1);
  }
  var counts = this_1;
  var bars = ArrayList_init_$Create$();
  $l$loop_2: while (true) {
    var tmp0 = remaining.a1();
    var tmp$ret$8;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.i();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$8 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_1 = tmp0.e();
      while (_iterator__ex2g4s_1.f()) {
        var element_1 = _iterator__ex2g4s_1.g();
        if (element_1 > 0) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
      }
      tmp$ret$8 = false;
    }
    if (!tmp$ret$8) {
      break $l$loop_2;
    }
    var best = null;
    var bestUsed = 0.0;
    var _iterator__ex2g4s_2 = stockOrder($this, stocks).e();
    $l$loop_1: while (_iterator__ex2g4s_2.f()) {
      var stock = _iterator__ex2g4s_2.g();
      var left = counts.z(stock.aa_1);
      if (!(left == null) && left <= 0)
        continue $l$loop_1;
      var chosen = fillBar($this, capacity($this, stock, s), remaining, s.lc_1);
      if (chosen.i())
        continue $l$loop_1;
      // Inline function 'kotlin.collections.sumOf' call
      var sum = 0;
      var _iterator__ex2g4s_3 = chosen.e();
      while (_iterator__ex2g4s_3.f()) {
        var element_2 = _iterator__ex2g4s_3.g();
        var tmp_0 = sum;
        sum = tmp_0 + element_2.r9_1;
      }
      var used = sum;
      var current = best;
      var better = current == null ? true : !(current.t6_1.ea_1 === stock.ea_1) ? stock.ea_1 : used / stock.ba_1 > bestUsed / current.t6_1.ba_1 + 1.0E-6;
      if (better) {
        best = to(stock, chosen);
        bestUsed = used;
      }
    }
    var tmp0_elvis_lhs = best;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      break $l$loop_2;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    var pick = tmp_1;
    // Inline function 'kotlin.collections.plusAssign' call
    bars.p(pick);
    var tmp1_safe_receiver = counts.z(pick.t6_1.aa_1);
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp2 = pick.t6_1.aa_1;
      // Inline function 'kotlin.collections.set' call
      var value = tmp1_safe_receiver - 1 | 0;
      counts.e2(tmp2, value);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_4 = pick.u6_1.e();
    while (_iterator__ex2g4s_4.f()) {
      var element_3 = _iterator__ex2g4s_4.g();
      // Inline function 'kotlin.collections.set' call
      var value_0 = getValue(remaining, element_3) - 1 | 0;
      remaining.e2(element_3, value_0);
    }
  }
  return new Run(bars, remaining);
}
function fillBar($this, capacity, remaining, kerf) {
  // Inline function 'kotlin.math.floor' call
  var x = capacity * 10.0 + 1.0E-6;
  var tmp$ret$0 = Math.floor(x);
  var cap = numberToInt(tmp$ret$0);
  if (cap <= 0)
    return emptyList();
  var groups = ArrayList_init_$Create$();
  var weights = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s = remaining.b1().e();
  $l$loop_0: while (_iterator__ex2g4s.f()) {
    var _destruct__k2r9zo = _iterator__ex2g4s.g();
    // Inline function 'kotlin.collections.component1' call
    var part = _destruct__k2r9zo.v();
    // Inline function 'kotlin.collections.component2' call
    var count = _destruct__k2r9zo.w();
    if (count <= 0)
      continue $l$loop_0;
    // Inline function 'kotlin.math.ceil' call
    var x_0 = (part.r9_1 + kerf) * 10.0 - 1.0E-6;
    var tmp$ret$4 = Math.ceil(x_0);
    var w = numberToInt(tmp$ret$4);
    if (w > cap)
      continue $l$loop_0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = cap / w | 0;
    var left = Math.min(count, b);
    var chunk = 1;
    while (left > 0) {
      var tmp0 = chunk;
      // Inline function 'kotlin.comparisons.minOf' call
      var b_0 = left;
      var take = Math.min(tmp0, b_0);
      // Inline function 'kotlin.collections.plusAssign' call
      var element = to(part, take);
      groups.p(element);
      // Inline function 'kotlin.collections.plusAssign' call
      var element_0 = imul_0(w, take);
      weights.p(element_0);
      left = left - take | 0;
      chunk = imul_0(chunk, 2);
    }
  }
  if (groups.i())
    return emptyList();
  var tmp = 0;
  var tmp_0 = cap + 1 | 0;
  var tmp_1 = new Int32Array(tmp_0);
  while (tmp < tmp_0) {
    tmp_1[tmp] = -1;
    tmp = tmp + 1 | 0;
  }
  var prev = tmp_1;
  var tmp_2 = 0;
  var tmp_3 = cap + 1 | 0;
  var tmp_4 = new Int32Array(tmp_3);
  while (tmp_2 < tmp_3) {
    tmp_4[tmp_2] = -1;
    tmp_2 = tmp_2 + 1 | 0;
  }
  var via = tmp_4;
  prev[0] = 0;
  var bestC = 0;
  var inductionVariable = 0;
  var last = groups.j() - 1 | 0;
  if (inductionVariable <= last)
    $l$loop_1: do {
      var g = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var w_0 = weights.h(g);
      var inductionVariable_0 = cap;
      if (w_0 <= inductionVariable_0)
        do {
          var c = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          if (prev[c] === -1 && ((c - w_0 | 0) === 0 || !(prev[c - w_0 | 0] === -1))) {
            prev[c] = c - w_0 | 0;
            via[c] = g;
            if (c > bestC)
              bestC = c;
          }
        }
         while (!(c === w_0));
    }
     while (bestC !== cap && inductionVariable <= last);
  var chosen = ArrayList_init_$Create$();
  var c_0 = bestC;
  while (c_0 > 0) {
    var _destruct__k2r9zo_0 = groups.h(via[c_0]);
    var part_0 = _destruct__k2r9zo_0.v6();
    var take_0 = _destruct__k2r9zo_0.w6();
    // Inline function 'kotlin.repeat' call
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < take_0)
      do {
        var index = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        chosen.p(part_0);
      }
       while (inductionVariable_1 < take_0);
    c_0 = prev[c_0];
  }
  // Inline function 'kotlin.collections.sortedByDescending' call
  // Inline function 'kotlin.comparisons.compareByDescending' call
  var tmp_5 = LinearOptimizer$fillBar$lambda;
  var tmp$ret$15 = new sam$kotlin_Comparator$0_4(tmp_5);
  return sortedWith(chosen, tmp$ret$15);
}
function runFirstFitDecreasing($this, stocks, parts, s) {
  // Inline function 'kotlin.collections.flatMap' call
  // Inline function 'kotlin.collections.flatMapTo' call
  var destination = ArrayList_init_$Create$();
  var _iterator__ex2g4s = parts.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = element.s9_1;
    var list = ArrayList_init_$Create$_0(size);
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        list.p(element);
      }
       while (inductionVariable < size);
    var list_0 = list;
    addAll(destination, list_0);
  }
  // Inline function 'kotlin.collections.sortedByDescending' call
  // Inline function 'kotlin.comparisons.compareByDescending' call
  var tmp = LinearOptimizer$runFirstFitDecreasing$lambda;
  var tmp$ret$9 = new sam$kotlin_Comparator$0_5(tmp);
  var instances = sortedWith(destination, tmp$ret$9);
  // Inline function 'kotlin.apply' call
  var this_0 = HashMap_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s_0 = stocks.e();
  while (_iterator__ex2g4s_0.f()) {
    var element_0 = _iterator__ex2g4s_0.g();
    this_0.e2(element_0.aa_1, element_0.ca_1);
  }
  var counts = this_0;
  var open = ArrayList_init_$Create$();
  var remaining = LinkedHashMap_init_$Create$();
  var _iterator__ex2g4s_1 = instances.e();
  $l$loop_0: while (_iterator__ex2g4s_1.f()) {
    var part = _iterator__ex2g4s_1.g();
    var need = part.r9_1 + s.lc_1;
    var tmp$ret$14;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_2 = open.e();
      while (_iterator__ex2g4s_2.f()) {
        var element_1 = _iterator__ex2g4s_2.g();
        if (element_1.z6_1[0] + 1.0E-6 >= need) {
          tmp$ret$14 = element_1;
          break $l$block;
        }
      }
      tmp$ret$14 = null;
    }
    var bar = tmp$ret$14;
    if (!(bar == null)) {
      // Inline function 'kotlin.collections.plusAssign' call
      bar.y6_1.p(part);
      var _array__4zh2yp = bar.z6_1;
      _array__4zh2yp[0] = _array__4zh2yp[0] - need;
      continue $l$loop_0;
    }
    var tmp0 = stockOrder($this, stocks);
    var tmp$ret$17;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_3 = tmp0.e();
      while (_iterator__ex2g4s_3.f()) {
        var element_2 = _iterator__ex2g4s_3.g();
        var left = counts.z(element_2.aa_1);
        if ((left == null || left > 0) && capacity(LinearOptimizer_instance, element_2, s) + 1.0E-6 >= need) {
          tmp$ret$17 = element_2;
          break $l$block_0;
        }
      }
      tmp$ret$17 = null;
    }
    var stock = tmp$ret$17;
    if (stock == null) {
      var tmp0_elvis_lhs = remaining.z(part);
      // Inline function 'kotlin.collections.set' call
      var value = (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) + 1 | 0;
      remaining.e2(part, value);
      continue $l$loop_0;
    }
    var tmp1_safe_receiver = counts.z(stock.aa_1);
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp2 = stock.aa_1;
      // Inline function 'kotlin.collections.set' call
      var value_0 = tmp1_safe_receiver - 1 | 0;
      counts.e2(tmp2, value_0);
    }
    var tmp_0 = arrayListOf([part]);
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp$ret$23 = new Float64Array([capacity($this, stock, s) - need]);
    // Inline function 'kotlin.collections.plusAssign' call
    var element_3 = new Triple(stock, tmp_0, tmp$ret$23);
    open.p(element_3);
  }
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(open, 10));
  var _iterator__ex2g4s_4 = open.e();
  while (_iterator__ex2g4s_4.f()) {
    var item = _iterator__ex2g4s_4.g();
    var tmp$ret$27 = to(item.x6_1, toList_0(item.y6_1));
    destination_0.p(tmp$ret$27);
  }
  return new Run(destination_0, remaining);
}
function compare_0($this, a, b, stocks) {
  var ua = sum(a.qc_1.a1());
  var ub = sum(b.qc_1.a1());
  if (!(ua === ub))
    return compareTo(ua, ub);
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination = ArrayList_init_$Create$();
  var _iterator__ex2g4s = stocks.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    if (!element.ea_1) {
      destination.p(element);
    }
  }
  // Inline function 'kotlin.let' call
  var tmp;
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!destination.i()) {
    var tmp$ret$6;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp_0;
      if (isInterface(destination, Collection)) {
        tmp_0 = destination.i();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$6 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = destination.e();
      while (_iterator__ex2g4s_0.f()) {
        var element_0 = _iterator__ex2g4s_0.g();
        if (!(element_0.da_1 > 0)) {
          tmp$ret$6 = false;
          break $l$block_0;
        }
      }
      tmp$ret$6 = true;
    }
    tmp = tmp$ret$6;
  } else {
    tmp = false;
  }
  var costMode = tmp;
  var ma = compare$material(costMode, a);
  var mb = compare$material(costMode, b);
  if (ma < mb - 1.0E-6)
    return -1;
  if (ma > mb + 1.0E-6)
    return 1;
  return compareTo(compare$longestLeftover(b), compare$longestLeftover(a));
}
function layout($this, stock, parts, s) {
  var pieces = ArrayList_init_$Create$();
  var cuts = ArrayList_init_$Create$();
  var pos = s.mc_1;
  if (s.mc_1 > 1.0E-6) {
    // Inline function 'kotlin.collections.plusAssign' call
    var element = s.mc_1 - s.lc_1 / 2;
    cuts.p(element);
  }
  var usableEnd = stock.ba_1 - s.nc_1;
  // Inline function 'kotlin.collections.sortedByDescending' call
  // Inline function 'kotlin.comparisons.compareByDescending' call
  var tmp = LinearOptimizer$layout$lambda;
  var tmp$ret$2 = new sam$kotlin_Comparator$0_6(tmp);
  var _iterator__ex2g4s = sortedWith(parts, tmp$ret$2).e();
  while (_iterator__ex2g4s.f()) {
    var part = _iterator__ex2g4s.g();
    // Inline function 'kotlin.collections.plusAssign' call
    var element_0 = new BarPiece(part.q9_1, part.t9_1, pos, part.r9_1);
    pieces.p(element_0);
    pos = pos + part.r9_1;
    if (usableEnd - pos > 1.0E-6) {
      // Inline function 'kotlin.collections.plusAssign' call
      var element_1 = pos + s.lc_1 / 2;
      cuts.p(element_1);
    }
    pos = pos + s.lc_1;
  }
  // Inline function 'kotlin.comparisons.maxOf' call
  var b = stock.ba_1 - s.nc_1 - pos;
  var leftover = Math.max(0.0, b);
  // Inline function 'kotlin.takeIf' call
  var tmp_0;
  if (leftover + 1.0E-6 >= s.oc_1) {
    tmp_0 = leftover;
  } else {
    tmp_0 = null;
  }
  var reusable = tmp_0;
  return new BarLayout(stock, pieces, cuts, leftover, reusable);
}
function sam$kotlin_Comparator$0_2(function_0) {
  this.rc_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0_2).m5 = function (a, b) {
  return this.rc_1(a, b);
};
protoOf(sam$kotlin_Comparator$0_2).compare = function (a, b) {
  return this.m5(a, b);
};
protoOf(sam$kotlin_Comparator$0_2).m1 = function () {
  return this.rc_1;
};
protoOf(sam$kotlin_Comparator$0_2).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, Comparator) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.m1(), other.m1());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlin_Comparator$0_2).hashCode = function () {
  return hashCode_0(this.m1());
};
function sam$kotlin_Comparator$0_3(function_0) {
  this.sc_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0_3).m5 = function (a, b) {
  return this.sc_1(a, b);
};
protoOf(sam$kotlin_Comparator$0_3).compare = function (a, b) {
  return this.m5(a, b);
};
protoOf(sam$kotlin_Comparator$0_3).m1 = function () {
  return this.sc_1;
};
protoOf(sam$kotlin_Comparator$0_3).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, Comparator) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.m1(), other.m1());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlin_Comparator$0_3).hashCode = function () {
  return hashCode_0(this.m1());
};
function sam$kotlin_Comparator$0_4(function_0) {
  this.tc_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0_4).m5 = function (a, b) {
  return this.tc_1(a, b);
};
protoOf(sam$kotlin_Comparator$0_4).compare = function (a, b) {
  return this.m5(a, b);
};
protoOf(sam$kotlin_Comparator$0_4).m1 = function () {
  return this.tc_1;
};
protoOf(sam$kotlin_Comparator$0_4).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, Comparator) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.m1(), other.m1());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlin_Comparator$0_4).hashCode = function () {
  return hashCode_0(this.m1());
};
function sam$kotlin_Comparator$0_5(function_0) {
  this.uc_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0_5).m5 = function (a, b) {
  return this.uc_1(a, b);
};
protoOf(sam$kotlin_Comparator$0_5).compare = function (a, b) {
  return this.m5(a, b);
};
protoOf(sam$kotlin_Comparator$0_5).m1 = function () {
  return this.uc_1;
};
protoOf(sam$kotlin_Comparator$0_5).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, Comparator) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.m1(), other.m1());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlin_Comparator$0_5).hashCode = function () {
  return hashCode_0(this.m1());
};
function sam$kotlin_Comparator$0_6(function_0) {
  this.vc_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0_6).m5 = function (a, b) {
  return this.vc_1(a, b);
};
protoOf(sam$kotlin_Comparator$0_6).compare = function (a, b) {
  return this.m5(a, b);
};
protoOf(sam$kotlin_Comparator$0_6).m1 = function () {
  return this.vc_1;
};
protoOf(sam$kotlin_Comparator$0_6).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, Comparator) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.m1(), other.m1());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlin_Comparator$0_6).hashCode = function () {
  return hashCode_0(this.m1());
};
function LinearOptimizer$optimize$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = a.v() == null;
  var tmp$ret$2 = b.v() == null;
  return compareValues(tmp, tmp$ret$2);
}
function LinearOptimizer$stockOrder$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = b.ea_1;
  var tmp$ret$2 = a.ea_1;
  return compareValues(tmp, tmp$ret$2);
}
function LinearOptimizer$stockOrder$lambda_0($this) {
  return function (a, b) {
    var previousCompare = $this.compare(a, b);
    var tmp;
    if (!(previousCompare === 0)) {
      tmp = previousCompare;
    } else {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      var tmp_0 = b.ba_1;
      var tmp$ret$2 = a.ba_1;
      tmp = compareValues(tmp_0, tmp$ret$2);
    }
    return tmp;
  };
}
function LinearOptimizer$stockOrder$lambda_1($this) {
  return function (a, b) {
    var previousCompare = $this.compare(a, b);
    var tmp;
    if (!(previousCompare === 0)) {
      tmp = previousCompare;
    } else {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      var tmp_0 = a.aa_1;
      var tmp$ret$2 = b.aa_1;
      tmp = compareValues(tmp_0, tmp$ret$2);
    }
    return tmp;
  };
}
function LinearOptimizer$fillBar$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = b.r9_1;
  var tmp$ret$2 = a.r9_1;
  return compareValues(tmp, tmp$ret$2);
}
function LinearOptimizer$runFirstFitDecreasing$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = b.r9_1;
  var tmp$ret$2 = a.r9_1;
  return compareValues(tmp, tmp$ret$2);
}
function compare$material(costMode, r) {
  // Inline function 'kotlin.collections.sumOf' call
  var sum = 0;
  var _iterator__ex2g4s = r.pc_1.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    var tmp = sum;
    var st = element.v6();
    sum = tmp + (costMode ? st.da_1 : st.ea_1 ? 0.0 : st.ba_1);
  }
  return sum;
}
function compare$longestLeftover(r) {
  var tmp0 = r.pc_1;
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.collections.maxOfOrNull' call
    var iterator = tmp0.e();
    if (!iterator.f()) {
      tmp$ret$0 = null;
      break $l$block;
    }
    var destruct = iterator.g();
    var st = destruct.v6();
    var ps = destruct.w6();
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = ps.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      var tmp = sum;
      sum = tmp + element.r9_1;
    }
    var tmp$ret$2 = sum;
    var maxValue = st.ba_1 - tmp$ret$2;
    while (iterator.f()) {
      var destruct_0 = iterator.g();
      var st_0 = destruct_0.v6();
      var ps_0 = destruct_0.w6();
      // Inline function 'kotlin.collections.sumOf' call
      var sum_0 = 0;
      var _iterator__ex2g4s_0 = ps_0.e();
      while (_iterator__ex2g4s_0.f()) {
        var element_0 = _iterator__ex2g4s_0.g();
        var tmp_0 = sum_0;
        sum_0 = tmp_0 + element_0.r9_1;
      }
      var tmp$ret$5 = sum_0;
      var v = st_0.ba_1 - tmp$ret$5;
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = maxValue;
      maxValue = Math.max(a, v);
    }
    tmp$ret$0 = maxValue;
  }
  var tmp0_elvis_lhs = tmp$ret$0;
  return tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs;
}
function LinearOptimizer$layout$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = b.r9_1;
  var tmp$ret$2 = a.r9_1;
  return compareValues(tmp, tmp$ret$2);
}
function LinearOptimizer() {
  this.o9_1 = 10.0;
}
protoOf(LinearOptimizer).p9 = function (stocks, parts, settings) {
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.all' call
    var tmp;
    if (isInterface(parts, Collection)) {
      tmp = parts.i();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_0;
    }
    var _iterator__ex2g4s = parts.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      if (!(element.u9_1 == null)) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    tmp$ret$0 = true;
  }
  if (tmp$ret$0)
    return optimizeGroup(this, stocks, parts, settings);
  // Inline function 'kotlin.apply' call
  var this_0 = HashMap_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s_0 = stocks.e();
  while (_iterator__ex2g4s_0.f()) {
    var element_0 = _iterator__ex2g4s_0.g();
    this_0.e2(element_0.aa_1, element_0.ca_1);
  }
  var left = this_0;
  var bars = ArrayList_init_$Create$();
  var unplaced = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.groupBy' call
  // Inline function 'kotlin.collections.groupByTo' call
  var destination = LinkedHashMap_init_$Create$();
  var _iterator__ex2g4s_1 = parts.e();
  while (_iterator__ex2g4s_1.f()) {
    var element_1 = _iterator__ex2g4s_1.g();
    var key = element_1.u9_1;
    // Inline function 'kotlin.collections.getOrPut' call
    var value = destination.z(key);
    var tmp_0;
    if (value == null) {
      var answer = ArrayList_init_$Create$();
      destination.e2(key, answer);
      tmp_0 = answer;
    } else {
      tmp_0 = value;
    }
    var list = tmp_0;
    list.p(element_1);
  }
  // Inline function 'kotlin.collections.sortedBy' call
  var this_1 = destination.b1();
  // Inline function 'kotlin.comparisons.compareBy' call
  var tmp_1 = LinearOptimizer$optimize$lambda;
  var tmp$ret$12 = new sam$kotlin_Comparator$0_2(tmp_1);
  var _iterator__ex2g4s_2 = sortedWith(this_1, tmp$ret$12).e();
  $l$loop: while (_iterator__ex2g4s_2.f()) {
    var _destruct__k2r9zo = _iterator__ex2g4s_2.g();
    // Inline function 'kotlin.collections.component1' call
    var material = _destruct__k2r9zo.v();
    // Inline function 'kotlin.collections.component2' call
    var group = _destruct__k2r9zo.w();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_3 = stocks.e();
    while (_iterator__ex2g4s_3.f()) {
      var element_2 = _iterator__ex2g4s_3.g();
      if (material == null || element_2.fa_1 === material) {
        destination_0.p(element_2);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination_0, 10));
    var _iterator__ex2g4s_4 = destination_0.e();
    while (_iterator__ex2g4s_4.f()) {
      var item = _iterator__ex2g4s_4.g();
      var tmp$ret$20 = item.kc(VOID, VOID, left.z(item.aa_1));
      destination_1.p(tmp$ret$20);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_2 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_5 = destination_1.e();
    while (_iterator__ex2g4s_5.f()) {
      var element_3 = _iterator__ex2g4s_5.g();
      if (element_3.ca_1 == null || element_3.ca_1 > 0) {
        destination_2.p(element_3);
      }
    }
    var candidates = destination_2;
    if (candidates.i()) {
      var tmp_2;
      var tmp$ret$24;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_3;
        if (isInterface(stocks, Collection)) {
          tmp_3 = stocks.i();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$24 = false;
          break $l$block_2;
        }
        var _iterator__ex2g4s_6 = stocks.e();
        while (_iterator__ex2g4s_6.f()) {
          var element_4 = _iterator__ex2g4s_6.g();
          if (material == null || element_4.fa_1 === material) {
            tmp$ret$24 = true;
            break $l$block_2;
          }
        }
        tmp$ret$24 = false;
      }
      if (tmp$ret$24) {
        tmp_2 = UnplacedReason_NO_STOCK_LEFT_getInstance();
      } else {
        tmp_2 = UnplacedReason_NO_MATCHING_STOCK_getInstance();
      }
      var reason = tmp_2;
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_3 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_7 = group.e();
      while (_iterator__ex2g4s_7.f()) {
        var element_5 = _iterator__ex2g4s_7.g();
        if (element_5.s9_1 > 0) {
          destination_3.p(element_5);
        }
      }
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_4 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination_3, 10));
      var _iterator__ex2g4s_8 = destination_3.e();
      while (_iterator__ex2g4s_8.f()) {
        var item_0 = _iterator__ex2g4s_8.g();
        var tmp$ret$31 = new UnplacedPart(item_0.q9_1, item_0.t9_1, item_0.s9_1, reason);
        destination_4.p(tmp$ret$31);
      }
      // Inline function 'kotlin.collections.plusAssign' call
      addAll(unplaced, destination_4);
      continue $l$loop;
    }
    var result = optimizeGroup(this, candidates, group, settings);
    var _iterator__ex2g4s_9 = result.v9_1.e();
    while (_iterator__ex2g4s_9.f()) {
      var bar = _iterator__ex2g4s_9.g();
      var tmp0_safe_receiver = left.z(bar.ga_1.aa_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp2 = bar.ga_1.aa_1;
        // Inline function 'kotlin.collections.set' call
        var value_0 = tmp0_safe_receiver - 1 | 0;
        left.e2(tmp2, value_0);
      }
    }
    // Inline function 'kotlin.collections.plusAssign' call
    var elements = result.v9_1;
    addAll(bars, elements);
    // Inline function 'kotlin.collections.plusAssign' call
    var elements_0 = result.w9_1;
    addAll(unplaced, elements_0);
  }
  return new LinearResult(bars, unplaced);
};
var LinearOptimizer_instance;
function LinearOptimizer_getInstance() {
  return LinearOptimizer_instance;
}
var Grain_NONE_instance;
var Grain_ALONG_LENGTH_instance;
var Grain_entriesInitialized;
function Grain_initEntries() {
  if (Grain_entriesInitialized)
    return Unit_instance;
  Grain_entriesInitialized = true;
  Grain_NONE_instance = new Grain('NONE', 0);
  Grain_ALONG_LENGTH_instance = new Grain('ALONG_LENGTH', 1);
}
function Grain(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function Companion_8() {
  Companion_instance_8 = this;
  this.wc_1 = new Edges();
  this.xc_1 = new Edges(true, true, true, true);
}
var Companion_instance_8;
function Companion_getInstance_8() {
  if (Companion_instance_8 == null)
    new Companion_8();
  return Companion_instance_8;
}
function Edges(length1, length2, width1, width2) {
  Companion_getInstance_8();
  length1 = length1 === VOID ? false : length1;
  length2 = length2 === VOID ? false : length2;
  width1 = width1 === VOID ? false : width1;
  width2 = width2 === VOID ? false : width2;
  this.yc_1 = length1;
  this.zc_1 = length2;
  this.ad_1 = width1;
  this.bd_1 = width2;
}
protoOf(Edges).cd = function () {
  return (this.yc_1 ? 1 : 0) + (this.zc_1 ? 1 : 0) | 0;
};
protoOf(Edges).dd = function () {
  return (this.ad_1 ? 1 : 0) + (this.bd_1 ? 1 : 0) | 0;
};
protoOf(Edges).ed = function () {
  return this.cd() + this.dd() | 0;
};
protoOf(Edges).toString = function () {
  return 'Edges(length1=' + this.yc_1 + ', length2=' + this.zc_1 + ', width1=' + this.ad_1 + ', width2=' + this.bd_1 + ')';
};
protoOf(Edges).hashCode = function () {
  var result = getBooleanHashCode(this.yc_1);
  result = imul_0(result, 31) + getBooleanHashCode(this.zc_1) | 0;
  result = imul_0(result, 31) + getBooleanHashCode(this.ad_1) | 0;
  result = imul_0(result, 31) + getBooleanHashCode(this.bd_1) | 0;
  return result;
};
protoOf(Edges).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Edges))
    return false;
  if (!(this.yc_1 === other.yc_1))
    return false;
  if (!(this.zc_1 === other.zc_1))
    return false;
  if (!(this.ad_1 === other.ad_1))
    return false;
  if (!(this.bd_1 === other.bd_1))
    return false;
  return true;
};
function SheetStock(id, length, width, quantity, costPerSheet, grain, isOffcut, material) {
  quantity = quantity === VOID ? null : quantity;
  costPerSheet = costPerSheet === VOID ? 0.0 : costPerSheet;
  grain = grain === VOID ? Grain_NONE_getInstance() : grain;
  isOffcut = isOffcut === VOID ? false : isOffcut;
  material = material === VOID ? '' : material;
  this.h8_1 = id;
  this.i8_1 = length;
  this.j8_1 = width;
  this.k8_1 = quantity;
  this.l8_1 = costPerSheet;
  this.m8_1 = grain;
  this.n8_1 = isOffcut;
  this.o8_1 = material;
  // Inline function 'kotlin.require' call
  if (!(this.i8_1 > 0 && this.j8_1 > 0)) {
    var message = 'Levha \xF6l\xE7\xFCleri pozitif olmal\u0131: ' + this.h8_1;
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  // Inline function 'kotlin.require' call
  if (!(this.k8_1 == null || this.k8_1 >= 0)) {
    var message_0 = 'Levha adedi negatif olamaz: ' + this.h8_1;
    throw IllegalArgumentException_init_$Create$_0(toString_1(message_0));
  }
}
protoOf(SheetStock).fd = function (id, length, width, quantity, costPerSheet, grain, isOffcut, material) {
  return new SheetStock(id, length, width, quantity, costPerSheet, grain, isOffcut, material);
};
protoOf(SheetStock).gd = function (id, length, width, quantity, costPerSheet, grain, isOffcut, material, $super) {
  id = id === VOID ? this.h8_1 : id;
  length = length === VOID ? this.i8_1 : length;
  width = width === VOID ? this.j8_1 : width;
  quantity = quantity === VOID ? this.k8_1 : quantity;
  costPerSheet = costPerSheet === VOID ? this.l8_1 : costPerSheet;
  grain = grain === VOID ? this.m8_1 : grain;
  isOffcut = isOffcut === VOID ? this.n8_1 : isOffcut;
  material = material === VOID ? this.o8_1 : material;
  return $super === VOID ? this.fd(id, length, width, quantity, costPerSheet, grain, isOffcut, material) : $super.fd.call(this, id, length, width, quantity, costPerSheet, grain, isOffcut, material);
};
protoOf(SheetStock).toString = function () {
  return 'SheetStock(id=' + this.h8_1 + ', length=' + this.i8_1 + ', width=' + this.j8_1 + ', quantity=' + this.k8_1 + ', costPerSheet=' + this.l8_1 + ', grain=' + this.m8_1.toString() + ', isOffcut=' + this.n8_1 + ', material=' + this.o8_1 + ')';
};
protoOf(SheetStock).hashCode = function () {
  var result = getStringHashCode(this.h8_1);
  result = imul_0(result, 31) + getNumberHashCode(this.i8_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.j8_1) | 0;
  result = imul_0(result, 31) + (this.k8_1 == null ? 0 : this.k8_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.l8_1) | 0;
  result = imul_0(result, 31) + this.m8_1.hashCode() | 0;
  result = imul_0(result, 31) + getBooleanHashCode(this.n8_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.o8_1) | 0;
  return result;
};
protoOf(SheetStock).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof SheetStock))
    return false;
  if (!(this.h8_1 === other.h8_1))
    return false;
  if (!equals(this.i8_1, other.i8_1))
    return false;
  if (!equals(this.j8_1, other.j8_1))
    return false;
  if (!(this.k8_1 == other.k8_1))
    return false;
  if (!equals(this.l8_1, other.l8_1))
    return false;
  if (!this.m8_1.equals(other.m8_1))
    return false;
  if (!(this.n8_1 === other.n8_1))
    return false;
  if (!(this.o8_1 === other.o8_1))
    return false;
  return true;
};
function PanelPart(id, length, width, quantity, label, grain, edges, material, shape, pieces, outlines, shapeLength, shapeWidth) {
  quantity = quantity === VOID ? 1 : quantity;
  label = label === VOID ? id : label;
  grain = grain === VOID ? Grain_NONE_getInstance() : grain;
  edges = edges === VOID ? Companion_getInstance_8().wc_1 : edges;
  material = material === VOID ? null : material;
  shape = shape === VOID ? PartShape_RECTANGLE_getInstance() : shape;
  pieces = pieces === VOID ? 1 : pieces;
  outlines = outlines === VOID ? emptyList() : outlines;
  shapeLength = shapeLength === VOID ? length : shapeLength;
  shapeWidth = shapeWidth === VOID ? width : shapeWidth;
  this.c7_1 = id;
  this.d7_1 = length;
  this.e7_1 = width;
  this.f7_1 = quantity;
  this.g7_1 = label;
  this.h7_1 = grain;
  this.i7_1 = edges;
  this.j7_1 = material;
  this.k7_1 = shape;
  this.l7_1 = pieces;
  this.m7_1 = outlines;
  this.n7_1 = shapeLength;
  this.o7_1 = shapeWidth;
  // Inline function 'kotlin.require' call
  if (!(this.d7_1 > 0 && this.e7_1 > 0)) {
    var message = 'Par\xE7a \xF6l\xE7\xFCleri pozitif olmal\u0131: ' + this.c7_1;
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  // Inline function 'kotlin.require' call
  if (!(this.f7_1 >= 0)) {
    var message_0 = 'Par\xE7a adedi negatif olamaz: ' + this.c7_1;
    throw IllegalArgumentException_init_$Create$_0(toString_1(message_0));
  }
  // Inline function 'kotlin.require' call
  if (!(this.l7_1 >= 1)) {
    var message_1 = 'Taslaktan en az bir par\xE7a \xE7\u0131kmal\u0131: ' + this.c7_1;
    throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
  }
}
protoOf(PanelPart).hd = function (id, length, width, quantity, label, grain, edges, material, shape, pieces, outlines, shapeLength, shapeWidth) {
  return new PanelPart(id, length, width, quantity, label, grain, edges, material, shape, pieces, outlines, shapeLength, shapeWidth);
};
protoOf(PanelPart).id = function (id, length, width, quantity, label, grain, edges, material, shape, pieces, outlines, shapeLength, shapeWidth, $super) {
  id = id === VOID ? this.c7_1 : id;
  length = length === VOID ? this.d7_1 : length;
  width = width === VOID ? this.e7_1 : width;
  quantity = quantity === VOID ? this.f7_1 : quantity;
  label = label === VOID ? this.g7_1 : label;
  grain = grain === VOID ? this.h7_1 : grain;
  edges = edges === VOID ? this.i7_1 : edges;
  material = material === VOID ? this.j7_1 : material;
  shape = shape === VOID ? this.k7_1 : shape;
  pieces = pieces === VOID ? this.l7_1 : pieces;
  outlines = outlines === VOID ? this.m7_1 : outlines;
  shapeLength = shapeLength === VOID ? this.n7_1 : shapeLength;
  shapeWidth = shapeWidth === VOID ? this.o7_1 : shapeWidth;
  return $super === VOID ? this.hd(id, length, width, quantity, label, grain, edges, material, shape, pieces, outlines, shapeLength, shapeWidth) : $super.hd.call(this, id, length, width, quantity, label, grain, edges, material, shape, pieces, outlines, shapeLength, shapeWidth);
};
protoOf(PanelPart).toString = function () {
  return 'PanelPart(id=' + this.c7_1 + ', length=' + this.d7_1 + ', width=' + this.e7_1 + ', quantity=' + this.f7_1 + ', label=' + this.g7_1 + ', grain=' + this.h7_1.toString() + ', edges=' + this.i7_1.toString() + ', material=' + this.j7_1 + ', shape=' + this.k7_1.toString() + ', pieces=' + this.l7_1 + ', outlines=' + toString_1(this.m7_1) + ', shapeLength=' + this.n7_1 + ', shapeWidth=' + this.o7_1 + ')';
};
protoOf(PanelPart).hashCode = function () {
  var result = getStringHashCode(this.c7_1);
  result = imul_0(result, 31) + getNumberHashCode(this.d7_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.e7_1) | 0;
  result = imul_0(result, 31) + this.f7_1 | 0;
  result = imul_0(result, 31) + getStringHashCode(this.g7_1) | 0;
  result = imul_0(result, 31) + this.h7_1.hashCode() | 0;
  result = imul_0(result, 31) + this.i7_1.hashCode() | 0;
  result = imul_0(result, 31) + (this.j7_1 == null ? 0 : getStringHashCode(this.j7_1)) | 0;
  result = imul_0(result, 31) + this.k7_1.hashCode() | 0;
  result = imul_0(result, 31) + this.l7_1 | 0;
  result = imul_0(result, 31) + hashCode_0(this.m7_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.n7_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.o7_1) | 0;
  return result;
};
protoOf(PanelPart).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof PanelPart))
    return false;
  if (!(this.c7_1 === other.c7_1))
    return false;
  if (!equals(this.d7_1, other.d7_1))
    return false;
  if (!equals(this.e7_1, other.e7_1))
    return false;
  if (!(this.f7_1 === other.f7_1))
    return false;
  if (!(this.g7_1 === other.g7_1))
    return false;
  if (!this.h7_1.equals(other.h7_1))
    return false;
  if (!this.i7_1.equals(other.i7_1))
    return false;
  if (!(this.j7_1 == other.j7_1))
    return false;
  if (!this.k7_1.equals(other.k7_1))
    return false;
  if (!(this.l7_1 === other.l7_1))
    return false;
  if (!equals(this.m7_1, other.m7_1))
    return false;
  if (!equals(this.n7_1, other.n7_1))
    return false;
  if (!equals(this.o7_1, other.o7_1))
    return false;
  return true;
};
function Companion_9() {
}
protoOf(Companion_9).a7 = function (value) {
  return new Trim(value, value, value, value);
};
var Companion_instance_9;
function Companion_getInstance_9() {
  return Companion_instance_9;
}
function Trim(left, right, top, bottom) {
  left = left === VOID ? 0.0 : left;
  right = right === VOID ? 0.0 : right;
  top = top === VOID ? 0.0 : top;
  bottom = bottom === VOID ? 0.0 : bottom;
  this.zb_1 = left;
  this.ac_1 = right;
  this.bc_1 = top;
  this.cc_1 = bottom;
}
protoOf(Trim).toString = function () {
  return 'Trim(left=' + this.zb_1 + ', right=' + this.ac_1 + ', top=' + this.bc_1 + ', bottom=' + this.cc_1 + ')';
};
protoOf(Trim).hashCode = function () {
  var result = getNumberHashCode(this.zb_1);
  result = imul_0(result, 31) + getNumberHashCode(this.ac_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.bc_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.cc_1) | 0;
  return result;
};
protoOf(Trim).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Trim))
    return false;
  if (!equals(this.zb_1, other.zb_1))
    return false;
  if (!equals(this.ac_1, other.ac_1))
    return false;
  if (!equals(this.bc_1, other.bc_1))
    return false;
  if (!equals(this.cc_1, other.cc_1))
    return false;
  return true;
};
var Priority_LEAST_WASTE_instance;
var Priority_FEWEST_CUTS_instance;
var Priority_entriesInitialized;
function Priority_initEntries() {
  if (Priority_entriesInitialized)
    return Unit_instance;
  Priority_entriesInitialized = true;
  Priority_LEAST_WASTE_instance = new Priority('LEAST_WASTE', 0);
  Priority_FEWEST_CUTS_instance = new Priority('FEWEST_CUTS', 1);
}
function Priority(name, ordinal) {
  Enum.call(this, name, ordinal);
}
var Effort_FAST_instance;
var Effort_NORMAL_instance;
var Effort_THOROUGH_instance;
var Effort_entriesInitialized;
function Effort_initEntries() {
  if (Effort_entriesInitialized)
    return Unit_instance;
  Effort_entriesInitialized = true;
  Effort_FAST_instance = new Effort('FAST', 0);
  Effort_NORMAL_instance = new Effort('NORMAL', 1);
  Effort_THOROUGH_instance = new Effort('THOROUGH', 2);
}
function Effort(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function PanelSettings(kerf, trim, minOffcutLength, minOffcutWidth, effort, seed, firstCut, priority) {
  kerf = kerf === VOID ? 3.2 : kerf;
  trim = trim === VOID ? new Trim() : trim;
  minOffcutLength = minOffcutLength === VOID ? 200.0 : minOffcutLength;
  minOffcutWidth = minOffcutWidth === VOID ? 100.0 : minOffcutWidth;
  effort = effort === VOID ? Effort_NORMAL_getInstance() : effort;
  seed = seed === VOID ? new Long(1, 0) : seed;
  firstCut = firstCut === VOID ? null : firstCut;
  priority = priority === VOID ? Priority_LEAST_WASTE_getInstance() : priority;
  this.gb_1 = kerf;
  this.hb_1 = trim;
  this.ib_1 = minOffcutLength;
  this.jb_1 = minOffcutWidth;
  this.kb_1 = effort;
  this.lb_1 = seed;
  this.mb_1 = firstCut;
  this.nb_1 = priority;
  // Inline function 'kotlin.require' call
  if (!(this.gb_1 >= 0)) {
    var message = 'Testere pay\u0131 negatif olamaz';
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
}
protoOf(PanelSettings).jd = function (kerf, trim, minOffcutLength, minOffcutWidth, effort, seed, firstCut, priority) {
  return new PanelSettings(kerf, trim, minOffcutLength, minOffcutWidth, effort, seed, firstCut, priority);
};
protoOf(PanelSettings).kd = function (kerf, trim, minOffcutLength, minOffcutWidth, effort, seed, firstCut, priority, $super) {
  kerf = kerf === VOID ? this.gb_1 : kerf;
  trim = trim === VOID ? this.hb_1 : trim;
  minOffcutLength = minOffcutLength === VOID ? this.ib_1 : minOffcutLength;
  minOffcutWidth = minOffcutWidth === VOID ? this.jb_1 : minOffcutWidth;
  effort = effort === VOID ? this.kb_1 : effort;
  seed = seed === VOID ? this.lb_1 : seed;
  firstCut = firstCut === VOID ? this.mb_1 : firstCut;
  priority = priority === VOID ? this.nb_1 : priority;
  return $super === VOID ? this.jd(kerf, trim, minOffcutLength, minOffcutWidth, effort, seed, firstCut, priority) : $super.jd.call(this, kerf, trim, minOffcutLength, minOffcutWidth, effort, seed, firstCut, priority);
};
protoOf(PanelSettings).toString = function () {
  return 'PanelSettings(kerf=' + this.gb_1 + ', trim=' + this.hb_1.toString() + ', minOffcutLength=' + this.ib_1 + ', minOffcutWidth=' + this.jb_1 + ', effort=' + this.kb_1.toString() + ', seed=' + this.lb_1.toString() + ', firstCut=' + toString_0(this.mb_1) + ', priority=' + this.nb_1.toString() + ')';
};
protoOf(PanelSettings).hashCode = function () {
  var result = getNumberHashCode(this.gb_1);
  result = imul_0(result, 31) + this.hb_1.hashCode() | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.ib_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.jb_1) | 0;
  result = imul_0(result, 31) + this.kb_1.hashCode() | 0;
  result = imul_0(result, 31) + this.lb_1.hashCode() | 0;
  result = imul_0(result, 31) + (this.mb_1 == null ? 0 : this.mb_1.hashCode()) | 0;
  result = imul_0(result, 31) + this.nb_1.hashCode() | 0;
  return result;
};
protoOf(PanelSettings).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof PanelSettings))
    return false;
  if (!equals(this.gb_1, other.gb_1))
    return false;
  if (!this.hb_1.equals(other.hb_1))
    return false;
  if (!equals(this.ib_1, other.ib_1))
    return false;
  if (!equals(this.jb_1, other.jb_1))
    return false;
  if (!this.kb_1.equals(other.kb_1))
    return false;
  if (!equalsLong(this.lb_1, other.lb_1))
    return false;
  if (!equals(this.mb_1, other.mb_1))
    return false;
  if (!this.nb_1.equals(other.nb_1))
    return false;
  return true;
};
function Placement(partId, label, x, y, length, width, rotated, shape, pieces, outlines, shapeLength, shapeWidth) {
  shape = shape === VOID ? PartShape_RECTANGLE_getInstance() : shape;
  pieces = pieces === VOID ? 1 : pieces;
  outlines = outlines === VOID ? emptyList() : outlines;
  shapeLength = shapeLength === VOID ? rotated ? width : length : shapeLength;
  shapeWidth = shapeWidth === VOID ? rotated ? length : width : shapeWidth;
  this.p8_1 = partId;
  this.q8_1 = label;
  this.r8_1 = x;
  this.s8_1 = y;
  this.t8_1 = length;
  this.u8_1 = width;
  this.v8_1 = rotated;
  this.w8_1 = shape;
  this.x8_1 = pieces;
  this.y8_1 = outlines;
  this.z8_1 = shapeLength;
  this.a9_1 = shapeWidth;
}
protoOf(Placement).toString = function () {
  return 'Placement(partId=' + this.p8_1 + ', label=' + this.q8_1 + ', x=' + this.r8_1 + ', y=' + this.s8_1 + ', length=' + this.t8_1 + ', width=' + this.u8_1 + ', rotated=' + this.v8_1 + ', shape=' + this.w8_1.toString() + ', pieces=' + this.x8_1 + ', outlines=' + toString_1(this.y8_1) + ', shapeLength=' + this.z8_1 + ', shapeWidth=' + this.a9_1 + ')';
};
protoOf(Placement).hashCode = function () {
  var result = getStringHashCode(this.p8_1);
  result = imul_0(result, 31) + getStringHashCode(this.q8_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.r8_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.s8_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.t8_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.u8_1) | 0;
  result = imul_0(result, 31) + getBooleanHashCode(this.v8_1) | 0;
  result = imul_0(result, 31) + this.w8_1.hashCode() | 0;
  result = imul_0(result, 31) + this.x8_1 | 0;
  result = imul_0(result, 31) + hashCode_0(this.y8_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.z8_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.a9_1) | 0;
  return result;
};
protoOf(Placement).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Placement))
    return false;
  if (!(this.p8_1 === other.p8_1))
    return false;
  if (!(this.q8_1 === other.q8_1))
    return false;
  if (!equals(this.r8_1, other.r8_1))
    return false;
  if (!equals(this.s8_1, other.s8_1))
    return false;
  if (!equals(this.t8_1, other.t8_1))
    return false;
  if (!equals(this.u8_1, other.u8_1))
    return false;
  if (!(this.v8_1 === other.v8_1))
    return false;
  if (!this.w8_1.equals(other.w8_1))
    return false;
  if (!(this.x8_1 === other.x8_1))
    return false;
  if (!equals(this.y8_1, other.y8_1))
    return false;
  if (!equals(this.z8_1, other.z8_1))
    return false;
  if (!equals(this.a9_1, other.a9_1))
    return false;
  return true;
};
var CutDirection_ALONG_LENGTH_instance;
var CutDirection_ALONG_WIDTH_instance;
var CutDirection_entriesInitialized;
function CutDirection_initEntries() {
  if (CutDirection_entriesInitialized)
    return Unit_instance;
  CutDirection_entriesInitialized = true;
  CutDirection_ALONG_LENGTH_instance = new CutDirection('ALONG_LENGTH', 0);
  CutDirection_ALONG_WIDTH_instance = new CutDirection('ALONG_WIDTH', 1);
}
function CutDirection(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function Cut(order, direction, position, from, to, stage, pieceStart, pieceEnd, strip) {
  stage = stage === VOID ? 1 : stage;
  pieceStart = pieceStart === VOID ? 0.0 : pieceStart;
  pieceEnd = pieceEnd === VOID ? 0.0 : pieceEnd;
  strip = strip === VOID ? 0.0 : strip;
  this.b9_1 = order;
  this.c9_1 = direction;
  this.d9_1 = position;
  this.e9_1 = from;
  this.f9_1 = to;
  this.g9_1 = stage;
  this.h9_1 = pieceStart;
  this.i9_1 = pieceEnd;
  this.j9_1 = strip;
}
protoOf(Cut).a = function () {
  return this.f9_1 - this.e9_1;
};
protoOf(Cut).toString = function () {
  return 'Cut(order=' + this.b9_1 + ', direction=' + this.c9_1.toString() + ', position=' + this.d9_1 + ', from=' + this.e9_1 + ', to=' + this.f9_1 + ', stage=' + this.g9_1 + ', pieceStart=' + this.h9_1 + ', pieceEnd=' + this.i9_1 + ', strip=' + this.j9_1 + ')';
};
protoOf(Cut).hashCode = function () {
  var result = this.b9_1;
  result = imul_0(result, 31) + this.c9_1.hashCode() | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.d9_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.e9_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.f9_1) | 0;
  result = imul_0(result, 31) + this.g9_1 | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.h9_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.i9_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.j9_1) | 0;
  return result;
};
protoOf(Cut).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Cut))
    return false;
  if (!(this.b9_1 === other.b9_1))
    return false;
  if (!this.c9_1.equals(other.c9_1))
    return false;
  if (!equals(this.d9_1, other.d9_1))
    return false;
  if (!equals(this.e9_1, other.e9_1))
    return false;
  if (!equals(this.f9_1, other.f9_1))
    return false;
  if (!(this.g9_1 === other.g9_1))
    return false;
  if (!equals(this.h9_1, other.h9_1))
    return false;
  if (!equals(this.i9_1, other.i9_1))
    return false;
  if (!equals(this.j9_1, other.j9_1))
    return false;
  return true;
};
function Offcut(x, y, length, width) {
  this.x7_1 = x;
  this.y7_1 = y;
  this.z7_1 = length;
  this.a8_1 = width;
}
protoOf(Offcut).b8 = function () {
  return this.z7_1 * this.a8_1;
};
protoOf(Offcut).toString = function () {
  return 'Offcut(x=' + this.x7_1 + ', y=' + this.y7_1 + ', length=' + this.z7_1 + ', width=' + this.a8_1 + ')';
};
protoOf(Offcut).hashCode = function () {
  var result = getNumberHashCode(this.x7_1);
  result = imul_0(result, 31) + getNumberHashCode(this.y7_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.z7_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.a8_1) | 0;
  return result;
};
protoOf(Offcut).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Offcut))
    return false;
  if (!equals(this.x7_1, other.x7_1))
    return false;
  if (!equals(this.y7_1, other.y7_1))
    return false;
  if (!equals(this.z7_1, other.z7_1))
    return false;
  if (!equals(this.a8_1, other.a8_1))
    return false;
  return true;
};
function SheetLayout(stock, placements, cuts, offcuts) {
  this.c8_1 = stock;
  this.d8_1 = placements;
  this.e8_1 = cuts;
  this.f8_1 = offcuts;
}
protoOf(SheetLayout).b8 = function () {
  return this.c8_1.i8_1 * this.c8_1.j8_1;
};
protoOf(SheetLayout).v7 = function () {
  // Inline function 'kotlin.collections.sumOf' call
  var sum = 0;
  var _iterator__ex2g4s = this.d8_1.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    var tmp = sum;
    sum = tmp + get_area(element);
  }
  return sum;
};
protoOf(SheetLayout).t7 = function () {
  return this.v7() / this.b8();
};
protoOf(SheetLayout).ld = function () {
  // Inline function 'kotlin.collections.sumOf' call
  var sum = 0;
  var _iterator__ex2g4s = this.e8_1.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    var tmp = sum;
    sum = tmp + element.a();
  }
  return sum;
};
protoOf(SheetLayout).toString = function () {
  return 'SheetLayout(stock=' + this.c8_1.toString() + ', placements=' + toString_1(this.d8_1) + ', cuts=' + toString_1(this.e8_1) + ', offcuts=' + toString_1(this.f8_1) + ')';
};
protoOf(SheetLayout).hashCode = function () {
  var result = this.c8_1.hashCode();
  result = imul_0(result, 31) + hashCode_0(this.d8_1) | 0;
  result = imul_0(result, 31) + hashCode_0(this.e8_1) | 0;
  result = imul_0(result, 31) + hashCode_0(this.f8_1) | 0;
  return result;
};
protoOf(SheetLayout).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof SheetLayout))
    return false;
  if (!this.c8_1.equals(other.c8_1))
    return false;
  if (!equals(this.d8_1, other.d8_1))
    return false;
  if (!equals(this.e8_1, other.e8_1))
    return false;
  if (!equals(this.f8_1, other.f8_1))
    return false;
  return true;
};
var UnplacedReason_TOO_LARGE_instance;
var UnplacedReason_NO_STOCK_LEFT_instance;
var UnplacedReason_NO_MATCHING_STOCK_instance;
var UnplacedReason_entriesInitialized;
function UnplacedReason_initEntries() {
  if (UnplacedReason_entriesInitialized)
    return Unit_instance;
  UnplacedReason_entriesInitialized = true;
  UnplacedReason_TOO_LARGE_instance = new UnplacedReason('TOO_LARGE', 0);
  UnplacedReason_NO_STOCK_LEFT_instance = new UnplacedReason('NO_STOCK_LEFT', 1);
  UnplacedReason_NO_MATCHING_STOCK_instance = new UnplacedReason('NO_MATCHING_STOCK', 2);
}
function UnplacedReason(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function UnplacedPart(partId, label, count, reason) {
  this.k9_1 = partId;
  this.l9_1 = label;
  this.m9_1 = count;
  this.n9_1 = reason;
}
protoOf(UnplacedPart).toString = function () {
  return 'UnplacedPart(partId=' + this.k9_1 + ', label=' + this.l9_1 + ', count=' + this.m9_1 + ', reason=' + this.n9_1.toString() + ')';
};
protoOf(UnplacedPart).hashCode = function () {
  var result = getStringHashCode(this.k9_1);
  result = imul_0(result, 31) + getStringHashCode(this.l9_1) | 0;
  result = imul_0(result, 31) + this.m9_1 | 0;
  result = imul_0(result, 31) + this.n9_1.hashCode() | 0;
  return result;
};
protoOf(UnplacedPart).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof UnplacedPart))
    return false;
  if (!(this.k9_1 === other.k9_1))
    return false;
  if (!(this.l9_1 === other.l9_1))
    return false;
  if (!(this.m9_1 === other.m9_1))
    return false;
  if (!this.n9_1.equals(other.n9_1))
    return false;
  return true;
};
function PanelResult(sheets, unplaced, edgeBandingLength) {
  this.p7_1 = sheets;
  this.q7_1 = unplaced;
  this.r7_1 = edgeBandingLength;
}
protoOf(PanelResult).s7 = function () {
  return this.p7_1.j();
};
protoOf(PanelResult).u7 = function () {
  // Inline function 'kotlin.collections.sumOf' call
  var sum = 0;
  var _iterator__ex2g4s = this.p7_1.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    var tmp = sum;
    sum = tmp + element.b8();
  }
  return sum;
};
protoOf(PanelResult).v7 = function () {
  // Inline function 'kotlin.collections.sumOf' call
  var sum = 0;
  var _iterator__ex2g4s = this.p7_1.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    var tmp = sum;
    sum = tmp + element.v7();
  }
  return sum;
};
protoOf(PanelResult).t7 = function () {
  return this.u7() > 0 ? this.v7() / this.u7() : 0.0;
};
protoOf(PanelResult).g8 = function () {
  // Inline function 'kotlin.collections.sumOf' call
  var sum = 0;
  var _iterator__ex2g4s = this.p7_1.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    var tmp = sum;
    sum = tmp + element.ld();
  }
  return sum;
};
protoOf(PanelResult).w7 = function () {
  // Inline function 'kotlin.collections.flatMap' call
  var tmp0 = this.p7_1;
  // Inline function 'kotlin.collections.flatMapTo' call
  var destination = ArrayList_init_$Create$();
  var _iterator__ex2g4s = tmp0.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    var list = element.f8_1;
    addAll(destination, list);
  }
  return destination;
};
protoOf(PanelResult).toString = function () {
  return 'PanelResult(sheets=' + toString_1(this.p7_1) + ', unplaced=' + toString_1(this.q7_1) + ', edgeBandingLength=' + this.r7_1 + ')';
};
protoOf(PanelResult).hashCode = function () {
  var result = hashCode_0(this.p7_1);
  result = imul_0(result, 31) + hashCode_0(this.q7_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.r7_1) | 0;
  return result;
};
protoOf(PanelResult).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof PanelResult))
    return false;
  if (!equals(this.p7_1, other.p7_1))
    return false;
  if (!equals(this.q7_1, other.q7_1))
    return false;
  if (!equals(this.r7_1, other.r7_1))
    return false;
  return true;
};
function EdgeBanding() {
}
protoOf(EdgeBanding).md = function (parts, allowancePerEdge) {
  // Inline function 'kotlin.collections.sumOf' call
  var sum = 0;
  var _iterator__ex2g4s = parts.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    var tmp = sum;
    sum = tmp + element.f7_1 * (Shapes_instance.nd(element.k7_1, element.d7_1, element.e7_1, element.i7_1) + Shapes_instance.od(element.k7_1, element.i7_1) * allowancePerEdge);
  }
  return sum;
};
protoOf(EdgeBanding).pd = function (parts, allowancePerEdge, $super) {
  allowancePerEdge = allowancePerEdge === VOID ? 0.0 : allowancePerEdge;
  return $super === VOID ? this.md(parts, allowancePerEdge) : $super.md.call(this, parts, allowancePerEdge);
};
var EdgeBanding_instance;
function EdgeBanding_getInstance() {
  return EdgeBanding_instance;
}
function Grain_NONE_getInstance() {
  Grain_initEntries();
  return Grain_NONE_instance;
}
function Grain_ALONG_LENGTH_getInstance() {
  Grain_initEntries();
  return Grain_ALONG_LENGTH_instance;
}
function Priority_LEAST_WASTE_getInstance() {
  Priority_initEntries();
  return Priority_LEAST_WASTE_instance;
}
function Priority_FEWEST_CUTS_getInstance() {
  Priority_initEntries();
  return Priority_FEWEST_CUTS_instance;
}
function Effort_NORMAL_getInstance() {
  Effort_initEntries();
  return Effort_NORMAL_instance;
}
function Effort_THOROUGH_getInstance() {
  Effort_initEntries();
  return Effort_THOROUGH_instance;
}
function CutDirection_ALONG_LENGTH_getInstance() {
  CutDirection_initEntries();
  return CutDirection_ALONG_LENGTH_instance;
}
function CutDirection_ALONG_WIDTH_getInstance() {
  CutDirection_initEntries();
  return CutDirection_ALONG_WIDTH_instance;
}
function UnplacedReason_TOO_LARGE_getInstance() {
  UnplacedReason_initEntries();
  return UnplacedReason_TOO_LARGE_instance;
}
function UnplacedReason_NO_STOCK_LEFT_getInstance() {
  UnplacedReason_initEntries();
  return UnplacedReason_NO_STOCK_LEFT_instance;
}
function UnplacedReason_NO_MATCHING_STOCK_getInstance() {
  UnplacedReason_initEntries();
  return UnplacedReason_NO_MATCHING_STOCK_instance;
}
function optimizeGroup_0($this, stocks, parts, settings, shouldStop) {
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination = ArrayList_init_$Create$();
  var _iterator__ex2g4s = stocks.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    if (element.k8_1 == null || element.k8_1 > 0) {
      destination.p(element);
    }
  }
  var usableStocks = destination;
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(usableStocks, 10));
  var _iterator__ex2g4s_0 = usableStocks.e();
  while (_iterator__ex2g4s_0.f()) {
    var item = _iterator__ex2g4s_0.g();
    var tmp$ret$5 = new GuillotineSheet(item, settings);
    destination_0.p(tmp$ret$5);
  }
  var probes = destination_0;
  // Inline function 'kotlin.collections.flatMap' call
  // Inline function 'kotlin.collections.flatMapTo' call
  var destination_1 = ArrayList_init_$Create$();
  var _iterator__ex2g4s_1 = parts.e();
  while (_iterator__ex2g4s_1.f()) {
    var element_0 = _iterator__ex2g4s_1.g();
    var tmp = Shapes_instance;
    var list = tmp.qd(element_0, settings.gb_1, PanelOptimizer$optimizeGroup$lambda(probes));
    addAll(destination_1, list);
  }
  var blanks = destination_1;
  var fitting = ArrayList_init_$Create$();
  var tooLarge = ArrayList_init_$Create$();
  var _iterator__ex2g4s_2 = blanks.e();
  while (_iterator__ex2g4s_2.f()) {
    var part = _iterator__ex2g4s_2.g();
    var tmp$ret$9;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(probes, Collection)) {
        tmp_0 = probes.i();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$9 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_3 = probes.e();
      while (_iterator__ex2g4s_3.f()) {
        var element_1 = _iterator__ex2g4s_3.g();
        if (element_1.fc(part)) {
          tmp$ret$9 = true;
          break $l$block_0;
        }
      }
      tmp$ret$9 = false;
    }
    var fits = tmp$ret$9;
    // Inline function 'kotlin.repeat' call
    var times = part.f7_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (fits) {
          // Inline function 'kotlin.collections.plusAssign' call
          fitting.p(part);
        } else {
          // Inline function 'kotlin.collections.plusAssign' call
          tooLarge.p(part);
        }
      }
       while (inductionVariable < times);
  }
  var plan_0 = plan(settings.kb_1);
  var best = {_v: null};
  var judge = new Search(usableStocks, settings);
  var tmp_1;
  if (settings.mb_1 == null) {
    tmp_1 = listOf_0([null, CutDirection_ALONG_LENGTH_getInstance(), CutDirection_ALONG_WIDTH_getInstance()]);
  } else {
    tmp_1 = listOf(settings.mb_1);
  }
  var variants = tmp_1;
  if (fitting.i()) {
    optimizeGroup$consider(best, judge, new Solution(emptyList(), emptyList()));
  } else {
    var _iterator__ex2g4s_4 = variants.e();
    search: while (_iterator__ex2g4s_4.f()) {
      var variant = _iterator__ex2g4s_4.g();
      var search = new Search(usableStocks, settings.kd(VOID, VOID, VOID, VOID, VOID, VOID, variant));
      var _iterator__ex2g4s_5 = plan_0.rd_1.e();
      while (_iterator__ex2g4s_5.f()) {
        var order = _iterator__ex2g4s_5.g();
        var sorted = sortParts(fitting, order);
        var _iterator__ex2g4s_6 = plan_0.sd_1.e();
        while (_iterator__ex2g4s_6.f()) {
          var choice = _iterator__ex2g4s_6.g();
          var _iterator__ex2g4s_7 = plan_0.td_1.e();
          while (_iterator__ex2g4s_7.f()) {
            var split = _iterator__ex2g4s_7.g();
            optimizeGroup$consider(best, judge, search.ae(sorted, choice, split));
            if (shouldStop())
              break search;
          }
        }
      }
      if (plan_0.ud_1) {
        var tmp0_safe_receiver = search.be(fitting, plan_0, shouldStop);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          optimizeGroup$consider(best, judge, tmp0_safe_receiver);
        }
      }
      var random_0 = Random_0(settings.lb_1);
      var inductionVariable_0 = 0;
      var last = plan_0.vd_1;
      if (inductionVariable_0 < last)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (shouldStop())
            break search;
          var perturbed = perturb($this, sortParts(fitting, random(plan_0.rd_1, random_0)), random_0);
          optimizeGroup$consider(best, judge, search.ae(perturbed, random(plan_0.sd_1, random_0), random(plan_0.td_1, random_0)));
        }
         while (inductionVariable_0 < last);
    }
  }
  var solution = ensureNotNull(best._v);
  var unplaced = plus(group($this, tooLarge, UnplacedReason_TOO_LARGE_getInstance()), group($this, solution.de_1, UnplacedReason_NO_STOCK_LEFT_getInstance()));
  return new PanelResult(solution.ce_1, unplaced, EdgeBanding_instance.pd(parts));
}
function group($this, parts, reason) {
  // Inline function 'kotlin.collections.groupBy' call
  // Inline function 'kotlin.collections.groupByTo' call
  var destination = LinkedHashMap_init_$Create$();
  var _iterator__ex2g4s = parts.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    var key = element.c7_1;
    // Inline function 'kotlin.collections.getOrPut' call
    var value = destination.z(key);
    var tmp;
    if (value == null) {
      var answer = ArrayList_init_$Create$();
      destination.e2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var list = tmp;
    list.p(element);
  }
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination_0 = ArrayList_init_$Create$_0(destination.j());
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s_0 = destination.b1().e();
  while (_iterator__ex2g4s_0.f()) {
    var item = _iterator__ex2g4s_0.g();
    // Inline function 'kotlin.collections.component1' call
    var id = item.v();
    // Inline function 'kotlin.collections.component2' call
    var list_0 = item.w();
    var tmp_0 = first(list_0).g7_1;
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s_1 = list_0.e();
    while (_iterator__ex2g4s_1.f()) {
      var element_0 = _iterator__ex2g4s_1.g();
      var tmp_1 = sum;
      sum = tmp_1 + element_0.l7_1 | 0;
    }
    var tmp$ret$11 = sum;
    var tmp$ret$8 = new UnplacedPart(id, tmp_0, tmp$ret$11, reason);
    destination_0.p(tmp$ret$8);
  }
  return destination_0;
}
function perturb($this, list, random) {
  if (list.j() < 2)
    return list;
  var out = toMutableList(list);
  // Inline function 'kotlin.math.max' call
  var b = out.j() / 4 | 0;
  // Inline function 'kotlin.repeat' call
  var times = Math.max(1, b);
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var i = random.o(out.j());
      var tmp0 = out.j() - 1 | 0;
      // Inline function 'kotlin.math.min' call
      var b_0 = (i + 1 | 0) + random.o(3) | 0;
      var j = Math.min(tmp0, b_0);
      var tmp = out.h(i);
      out.o1(i, out.h(j));
      out.o1(j, tmp);
    }
     while (inductionVariable < times);
  return out;
}
function sam$kotlin_Comparator$0_7(function_0) {
  this.he_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0_7).m5 = function (a, b) {
  return this.he_1(a, b);
};
protoOf(sam$kotlin_Comparator$0_7).compare = function (a, b) {
  return this.m5(a, b);
};
protoOf(sam$kotlin_Comparator$0_7).m1 = function () {
  return this.he_1;
};
protoOf(sam$kotlin_Comparator$0_7).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, Comparator) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.m1(), other.m1());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlin_Comparator$0_7).hashCode = function () {
  return hashCode_0(this.m1());
};
function PanelOptimizer$optimize$lambda() {
  return false;
}
function PanelOptimizer$optimize$lambda_0(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = a.v() == null;
  var tmp$ret$2 = b.v() == null;
  return compareValues(tmp, tmp$ret$2);
}
function PanelOptimizer$optimizeGroup$lambda($probes) {
  return function (b) {
    var tmp0 = $probes;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.i();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.e();
      while (_iterator__ex2g4s.f()) {
        var element = _iterator__ex2g4s.g();
        if (element.fc(b)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
}
function optimizeGroup$consider(best, judge, candidate) {
  var current = best._v;
  if (current == null || judge.ie(candidate, current) < 0) {
    best._v = candidate;
  }
}
function PanelOptimizer() {
}
protoOf(PanelOptimizer).je = function (stocks, parts, settings, shouldStop) {
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.all' call
    var tmp;
    if (isInterface(parts, Collection)) {
      tmp = parts.i();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_0;
    }
    var _iterator__ex2g4s = parts.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      if (!(element.j7_1 == null)) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    tmp$ret$0 = true;
  }
  if (tmp$ret$0)
    return optimizeGroup_0(this, stocks, parts, settings, shouldStop);
  // Inline function 'kotlin.apply' call
  var this_0 = HashMap_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s_0 = stocks.e();
  while (_iterator__ex2g4s_0.f()) {
    var element_0 = _iterator__ex2g4s_0.g();
    this_0.e2(element_0.h8_1, element_0.k8_1);
  }
  var left = this_0;
  var sheets = ArrayList_init_$Create$();
  var unplaced = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.groupBy' call
  // Inline function 'kotlin.collections.groupByTo' call
  var destination = LinkedHashMap_init_$Create$();
  var _iterator__ex2g4s_1 = parts.e();
  while (_iterator__ex2g4s_1.f()) {
    var element_1 = _iterator__ex2g4s_1.g();
    var key = element_1.j7_1;
    // Inline function 'kotlin.collections.getOrPut' call
    var value = destination.z(key);
    var tmp_0;
    if (value == null) {
      var answer = ArrayList_init_$Create$();
      destination.e2(key, answer);
      tmp_0 = answer;
    } else {
      tmp_0 = value;
    }
    var list = tmp_0;
    list.p(element_1);
  }
  // Inline function 'kotlin.collections.sortedBy' call
  var this_1 = destination.b1();
  // Inline function 'kotlin.comparisons.compareBy' call
  var tmp_1 = PanelOptimizer$optimize$lambda_0;
  var tmp$ret$12 = new sam$kotlin_Comparator$0_7(tmp_1);
  var groups = sortedWith(this_1, tmp$ret$12);
  var _iterator__ex2g4s_2 = groups.e();
  $l$loop: while (_iterator__ex2g4s_2.f()) {
    var _destruct__k2r9zo = _iterator__ex2g4s_2.g();
    // Inline function 'kotlin.collections.component1' call
    var material = _destruct__k2r9zo.v();
    // Inline function 'kotlin.collections.component2' call
    var group_0 = _destruct__k2r9zo.w();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_3 = stocks.e();
    while (_iterator__ex2g4s_3.f()) {
      var element_2 = _iterator__ex2g4s_3.g();
      if (material == null || element_2.o8_1 === material) {
        destination_0.p(element_2);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination_0, 10));
    var _iterator__ex2g4s_4 = destination_0.e();
    while (_iterator__ex2g4s_4.f()) {
      var item = _iterator__ex2g4s_4.g();
      var tmp$ret$20 = item.gd(VOID, VOID, VOID, left.z(item.h8_1));
      destination_1.p(tmp$ret$20);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_2 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_5 = destination_1.e();
    while (_iterator__ex2g4s_5.f()) {
      var element_3 = _iterator__ex2g4s_5.g();
      if (element_3.k8_1 == null || element_3.k8_1 > 0) {
        destination_2.p(element_3);
      }
    }
    var candidates = destination_2;
    if (candidates.i()) {
      var tmp_2;
      var tmp$ret$24;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_3;
        if (isInterface(stocks, Collection)) {
          tmp_3 = stocks.i();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$24 = false;
          break $l$block_2;
        }
        var _iterator__ex2g4s_6 = stocks.e();
        while (_iterator__ex2g4s_6.f()) {
          var element_4 = _iterator__ex2g4s_6.g();
          if (material == null || element_4.o8_1 === material) {
            tmp$ret$24 = true;
            break $l$block_2;
          }
        }
        tmp$ret$24 = false;
      }
      if (tmp$ret$24) {
        tmp_2 = UnplacedReason_NO_STOCK_LEFT_getInstance();
      } else {
        tmp_2 = UnplacedReason_NO_MATCHING_STOCK_getInstance();
      }
      var reason = tmp_2;
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.flatMapTo' call
      var destination_3 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_7 = group_0.e();
      while (_iterator__ex2g4s_7.f()) {
        var element_5 = _iterator__ex2g4s_7.g();
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var size = element_5.f7_1;
        var list_0 = ArrayList_init_$Create$_0(size);
        // Inline function 'kotlin.repeat' call
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            list_0.p(element_5);
          }
           while (inductionVariable < size);
        var list_1 = list_0;
        addAll(destination_3, list_1);
      }
      // Inline function 'kotlin.collections.plusAssign' call
      var elements = group(this, destination_3, reason);
      addAll(unplaced, elements);
      continue $l$loop;
    }
    var result = optimizeGroup_0(this, candidates, group_0, settings, shouldStop);
    var _iterator__ex2g4s_8 = result.p7_1.e();
    while (_iterator__ex2g4s_8.f()) {
      var sheet = _iterator__ex2g4s_8.g();
      var tmp0_safe_receiver = left.z(sheet.c8_1.h8_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp2 = sheet.c8_1.h8_1;
        // Inline function 'kotlin.collections.set' call
        var value_0 = tmp0_safe_receiver - 1 | 0;
        left.e2(tmp2, value_0);
      }
    }
    // Inline function 'kotlin.collections.plusAssign' call
    var elements_0 = result.p7_1;
    addAll(sheets, elements_0);
    // Inline function 'kotlin.collections.plusAssign' call
    var elements_1 = result.q7_1;
    addAll(unplaced, elements_1);
  }
  return new PanelResult(sheets, unplaced, EdgeBanding_instance.pd(parts));
};
protoOf(PanelOptimizer).b7 = function (stocks, parts, settings, shouldStop, $super) {
  settings = settings === VOID ? new PanelSettings() : settings;
  var tmp;
  if (shouldStop === VOID) {
    tmp = PanelOptimizer$optimize$lambda;
  } else {
    tmp = shouldStop;
  }
  shouldStop = tmp;
  return $super === VOID ? this.je(stocks, parts, settings, shouldStop) : $super.je.call(this, stocks, parts, settings, shouldStop);
};
var PanelOptimizer_instance;
function PanelOptimizer_getInstance() {
  return PanelOptimizer_instance;
}
var Order_AREA_instance;
var Order_LONG_SIDE_instance;
var Order_SHORT_SIDE_instance;
var Order_PERIMETER_instance;
var Order_LENGTH_instance;
function values_1() {
  return [Order_AREA_getInstance(), Order_LONG_SIDE_getInstance(), Order_SHORT_SIDE_getInstance(), Order_PERIMETER_getInstance(), Order_LENGTH_getInstance()];
}
function get_entries_1() {
  if ($ENTRIES_1 == null)
    $ENTRIES_1 = enumEntries(values_1());
  return $ENTRIES_1;
}
var Order_entriesInitialized;
function Order_initEntries() {
  if (Order_entriesInitialized)
    return Unit_instance;
  Order_entriesInitialized = true;
  Order_AREA_instance = new Order('AREA', 0);
  Order_LONG_SIDE_instance = new Order('LONG_SIDE', 1);
  Order_SHORT_SIDE_instance = new Order('SHORT_SIDE', 2);
  Order_PERIMETER_instance = new Order('PERIMETER', 3);
  Order_LENGTH_instance = new Order('LENGTH', 4);
}
var $ENTRIES_1;
function Order(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function sortParts(parts, order) {
  var tmp;
  switch (order.d1_1) {
    case 0:
      tmp = sortParts$lambda;
      break;
    case 1:
      tmp = sortParts$lambda_0;
      break;
    case 2:
      tmp = sortParts$lambda_1;
      break;
    case 3:
      tmp = sortParts$lambda_2;
      break;
    case 4:
      tmp = sortParts$lambda_3;
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  var key = tmp;
  // Inline function 'kotlin.comparisons.compareByDescending' call
  var tmp_0 = sortParts$lambda_4(key);
  // Inline function 'kotlin.comparisons.thenByDescending' call
  var this_0 = new sam$kotlin_Comparator$0_9(tmp_0);
  var tmp_1 = sortParts$lambda_5(this_0);
  // Inline function 'kotlin.comparisons.thenByDescending' call
  var this_1 = new sam$kotlin_Comparator$0_9(tmp_1);
  var tmp_2 = sortParts$lambda_6(this_1);
  // Inline function 'kotlin.comparisons.thenBy' call
  var this_2 = new sam$kotlin_Comparator$0_9(tmp_2);
  var tmp_3 = sortParts$lambda_7(this_2);
  var tmp$ret$3 = new sam$kotlin_Comparator$0_9(tmp_3);
  return sortedWith(parts, tmp$ret$3);
}
function SearchPlan(orders, choices, splits, perSheet, randomRestarts) {
  this.rd_1 = orders;
  this.sd_1 = choices;
  this.td_1 = splits;
  this.ud_1 = perSheet;
  this.vd_1 = randomRestarts;
}
function plan(_this__u8e3s4) {
  var tmp;
  switch (_this__u8e3s4.d1_1) {
    case 0:
      tmp = new SearchPlan(listOf_0([Order_AREA_getInstance(), Order_LONG_SIDE_getInstance()]), listOf_0([FreeChoice_BEST_AREA_getInstance(), FreeChoice_BEST_SHORT_SIDE_getInstance()]), listOf_0([SplitRule_SHORTER_LEFTOVER_AXIS_getInstance(), SplitRule_MIN_AREA_getInstance()]), false, 0);
      break;
    case 1:
      tmp = new SearchPlan(get_entries_1(), get_entries(), get_entries_0(), true, 40);
      break;
    case 2:
      tmp = new SearchPlan(get_entries_1(), get_entries(), get_entries_0(), true, 300);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function Solution(sheets, outOfStock) {
  this.ce_1 = sheets;
  this.de_1 = outOfStock;
  var tmp = this;
  var tmp0 = this.ce_1;
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.collections.maxOfOrNull' call
    var iterator = tmp0.e();
    if (!iterator.f()) {
      tmp$ret$0 = null;
      break $l$block;
    }
    var tmp0_0 = iterator.g().f8_1;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxOfOrNull' call
      var iterator_0 = tmp0_0.e();
      if (!iterator_0.f()) {
        tmp$ret$2 = null;
        break $l$block_0;
      }
      var maxValue = iterator_0.g().b8();
      while (iterator_0.f()) {
        var v = iterator_0.g().b8();
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = maxValue;
        maxValue = Math.max(a, v);
      }
      tmp$ret$2 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$2;
    var maxValue_0 = tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs;
    while (iterator.f()) {
      var tmp0_1 = iterator.g().f8_1;
      var tmp$ret$7;
      $l$block_1: {
        // Inline function 'kotlin.collections.maxOfOrNull' call
        var iterator_1 = tmp0_1.e();
        if (!iterator_1.f()) {
          tmp$ret$7 = null;
          break $l$block_1;
        }
        var maxValue_1 = iterator_1.g().b8();
        while (iterator_1.f()) {
          var v_0 = iterator_1.g().b8();
          // Inline function 'kotlin.comparisons.maxOf' call
          var a_0 = maxValue_1;
          maxValue_1 = Math.max(a_0, v_0);
        }
        tmp$ret$7 = maxValue_1;
      }
      var tmp0_elvis_lhs_0 = tmp$ret$7;
      var v_1 = tmp0_elvis_lhs_0 == null ? 0.0 : tmp0_elvis_lhs_0;
      // Inline function 'kotlin.comparisons.maxOf' call
      var a_1 = maxValue_0;
      maxValue_0 = Math.max(a_1, v_1);
    }
    tmp$ret$0 = maxValue_0;
  }
  var tmp0_elvis_lhs_1 = tmp$ret$0;
  tmp.ee_1 = tmp0_elvis_lhs_1 == null ? 0.0 : tmp0_elvis_lhs_1;
  var tmp_0 = this;
  // Inline function 'kotlin.collections.sumOf' call
  var sum = 0;
  var _iterator__ex2g4s = this.ce_1.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    var tmp_1 = sum;
    sum = tmp_1 + element.ld();
  }
  tmp_0.fe_1 = sum;
  var tmp_2 = this;
  // Inline function 'kotlin.collections.sumOf' call
  var sum_0 = 0;
  var _iterator__ex2g4s_0 = this.ce_1.e();
  while (_iterator__ex2g4s_0.f()) {
    var element_0 = _iterator__ex2g4s_0.g();
    var tmp_3 = sum_0;
    sum_0 = tmp_3 + element_0.e8_1.j() | 0;
  }
  tmp_2.ge_1 = sum_0;
}
function material($this, solution) {
  // Inline function 'kotlin.collections.sumOf' call
  var sum = 0;
  var _iterator__ex2g4s = solution.ce_1.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    var tmp = sum;
    sum = tmp + ($this.zd_1 ? element.c8_1.l8_1 : element.c8_1.n8_1 ? 0.0 : element.b8());
  }
  return sum;
}
function better($this, a, b) {
  if (!(a.pa_1.n8_1 === b.pa_1.n8_1))
    return a.pa_1.n8_1;
  var ea = a.ab_1 / (a.pa_1.i8_1 * a.pa_1.j8_1);
  var eb = b.ab_1 / (b.pa_1.i8_1 * b.pa_1.j8_1);
  if (ea > eb + 1.0E-6)
    return true;
  if (ea < eb - 1.0E-6)
    return false;
  return a.ab_1 > b.ab_1 + 1.0E-6;
}
function initialCounts($this) {
  // Inline function 'kotlin.apply' call
  var this_0 = HashMap_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = $this.wd_1.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    this_0.e2(element.h8_1, element.k8_1);
  }
  return this_0;
}
function available($this, counts, stock) {
  var left = counts.z(stock.h8_1);
  return left == null || left > 0;
}
function consume($this, counts, stock) {
  var tmp0_elvis_lhs = counts.z(stock.h8_1);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return Unit_instance;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var left = tmp;
  var tmp2 = stock.h8_1;
  // Inline function 'kotlin.collections.set' call
  var value = left - 1 | 0;
  counts.e2(tmp2, value);
}
function sam$kotlin_Comparator$0_8(function_0) {
  this.ke_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0_8).m5 = function (a, b) {
  return this.ke_1(a, b);
};
protoOf(sam$kotlin_Comparator$0_8).compare = function (a, b) {
  return this.m5(a, b);
};
protoOf(sam$kotlin_Comparator$0_8).m1 = function () {
  return this.ke_1;
};
protoOf(sam$kotlin_Comparator$0_8).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, Comparator) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.m1(), other.m1());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlin_Comparator$0_8).hashCode = function () {
  return hashCode_0(this.m1());
};
function Search$stockOrder$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = b.n8_1;
  var tmp$ret$2 = a.n8_1;
  return compareValues(tmp, tmp$ret$2);
}
function Search$stockOrder$lambda_0($this) {
  return function (a, b) {
    var previousCompare = $this.compare(a, b);
    var tmp;
    if (!(previousCompare === 0)) {
      tmp = previousCompare;
    } else {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      var tmp_0 = b.i8_1 * b.j8_1;
      var tmp$ret$2 = a.i8_1 * a.j8_1;
      tmp = compareValues(tmp_0, tmp$ret$2);
    }
    return tmp;
  };
}
function Search$stockOrder$lambda_1($this) {
  return function (a, b) {
    var previousCompare = $this.compare(a, b);
    var tmp;
    if (!(previousCompare === 0)) {
      tmp = previousCompare;
    } else {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      var tmp_0 = a.h8_1;
      var tmp$ret$2 = b.h8_1;
      tmp = compareValues(tmp_0, tmp$ret$2);
    }
    return tmp;
  };
}
function Search(stocks, settings) {
  this.wd_1 = stocks;
  this.xd_1 = settings;
  var tmp = this;
  // Inline function 'kotlin.comparisons.compareByDescending' call
  var tmp_0 = Search$stockOrder$lambda;
  // Inline function 'kotlin.comparisons.thenByDescending' call
  var this_0 = new sam$kotlin_Comparator$0_8(tmp_0);
  var tmp_1 = Search$stockOrder$lambda_0(this_0);
  // Inline function 'kotlin.comparisons.thenBy' call
  var this_1 = new sam$kotlin_Comparator$0_8(tmp_1);
  var tmp_2 = Search$stockOrder$lambda_1(this_1);
  var tmp$ret$2 = new sam$kotlin_Comparator$0_8(tmp_2);
  tmp.yd_1 = sortedWith(this.wd_1, tmp$ret$2);
  var tmp_3 = this;
  // Inline function 'kotlin.collections.filter' call
  var tmp0 = this.wd_1;
  // Inline function 'kotlin.collections.filterTo' call
  var destination = ArrayList_init_$Create$();
  var _iterator__ex2g4s = tmp0.e();
  while (_iterator__ex2g4s.f()) {
    var element = _iterator__ex2g4s.g();
    if (!element.n8_1) {
      destination.p(element);
    }
  }
  // Inline function 'kotlin.let' call
  var tmp_4;
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!destination.i()) {
    var tmp$ret$9;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp_5;
      if (isInterface(destination, Collection)) {
        tmp_5 = destination.i();
      } else {
        tmp_5 = false;
      }
      if (tmp_5) {
        tmp$ret$9 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = destination.e();
      while (_iterator__ex2g4s_0.f()) {
        var element_0 = _iterator__ex2g4s_0.g();
        if (!(element_0.l8_1 > 0)) {
          tmp$ret$9 = false;
          break $l$block_0;
        }
      }
      tmp$ret$9 = true;
    }
    tmp_4 = tmp$ret$9;
  } else {
    tmp_4 = false;
  }
  tmp_3.zd_1 = tmp_4;
}
protoOf(Search).ie = function (a, b) {
  if (!(a.de_1.j() === b.de_1.j()))
    return compareTo(a.de_1.j(), b.de_1.j());
  var ma = material(this, a);
  var mb = material(this, b);
  if (ma < mb - 1.0E-6)
    return -1;
  if (ma > mb + 1.0E-6)
    return 1;
  if (this.xd_1.nb_1.equals(Priority_FEWEST_CUTS_getInstance()) && !(a.ge_1 === b.ge_1))
    return compareTo(a.ge_1, b.ge_1);
  if (a.ee_1 > b.ee_1 + 1.0E-6)
    return -1;
  if (a.ee_1 < b.ee_1 - 1.0E-6)
    return 1;
  return compareTo(a.fe_1, b.fe_1);
};
protoOf(Search).ae = function (ordered, choice, split) {
  var remaining = ordered;
  var counts = initialCounts(this);
  var sheets = ArrayList_init_$Create$();
  $l$loop_2: while (true) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!!remaining.i()) {
      break $l$loop_2;
    }
    var bestSheet = null;
    var bestMask = null;
    var _iterator__ex2g4s = this.yd_1.e();
    $l$loop_1: while (_iterator__ex2g4s.f()) {
      var stock = _iterator__ex2g4s.g();
      if (!available(this, counts, stock))
        continue $l$loop_1;
      var sheet = new GuillotineSheet(stock, this.xd_1);
      var mask = booleanArray(remaining.j());
      var inductionVariable = 0;
      var last = remaining.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (sheet.gc(remaining.h(i), choice, split)) {
            mask[i] = true;
          }
        }
         while (inductionVariable <= last);
      if (sheet.dc() === 0)
        continue $l$loop_1;
      if (bestSheet == null || better(this, sheet, bestSheet)) {
        bestSheet = sheet;
        bestMask = mask;
      }
    }
    if (bestSheet == null)
      break $l$loop_2;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = bestSheet.ic();
    sheets.p(element);
    consume(this, counts, bestSheet.pa_1);
    var mask_0 = ensureNotNull(bestMask);
    // Inline function 'kotlin.collections.filterIndexed' call
    var tmp0 = remaining;
    // Inline function 'kotlin.collections.filterIndexedTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s_0 = tmp0.e();
    while (_iterator__ex2g4s_0.f()) {
      var item = _iterator__ex2g4s_0.g();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      if (!mask_0[checkIndexOverflow(_unary__edvuaz)]) {
        destination.p(item);
      }
    }
    remaining = destination;
  }
  return new Solution(sheets, remaining);
};
protoOf(Search).be = function (parts, plan, shouldStop) {
  var remaining = parts;
  var counts = initialCounts(this);
  var sheets = ArrayList_init_$Create$();
  $l$loop_2: while (true) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!!remaining.i()) {
      break $l$loop_2;
    }
    if (shouldStop())
      return null;
    var bestSheet = null;
    var bestMask = null;
    var bestOrder = null;
    var _iterator__ex2g4s = this.yd_1.e();
    $l$loop_0: while (_iterator__ex2g4s.f()) {
      var stock = _iterator__ex2g4s.g();
      if (!available(this, counts, stock))
        continue $l$loop_0;
      var _iterator__ex2g4s_0 = plan.rd_1.e();
      while (_iterator__ex2g4s_0.f()) {
        var order = _iterator__ex2g4s_0.g();
        var sorted = sortParts(remaining, order);
        var _iterator__ex2g4s_1 = plan.sd_1.e();
        while (_iterator__ex2g4s_1.f()) {
          var choice = _iterator__ex2g4s_1.g();
          var _iterator__ex2g4s_2 = plan.td_1.e();
          $l$loop_1: while (_iterator__ex2g4s_2.f()) {
            var split = _iterator__ex2g4s_2.g();
            var sheet = new GuillotineSheet(stock, this.xd_1);
            var mask = booleanArray(sorted.j());
            var inductionVariable = 0;
            var last = sorted.j() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                if (sheet.gc(sorted.h(i), choice, split)) {
                  mask[i] = true;
                }
              }
               while (inductionVariable <= last);
            if (sheet.dc() === 0)
              continue $l$loop_1;
            if (bestSheet == null || better(this, sheet, bestSheet)) {
              bestSheet = sheet;
              bestMask = mask;
              bestOrder = sorted;
            }
          }
        }
      }
    }
    if (bestSheet == null)
      break $l$loop_2;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = bestSheet.ic();
    sheets.p(element);
    consume(this, counts, bestSheet.pa_1);
    var mask_0 = ensureNotNull(bestMask);
    // Inline function 'kotlin.collections.filterIndexed' call
    var tmp0 = ensureNotNull(bestOrder);
    // Inline function 'kotlin.collections.filterIndexedTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s_3 = tmp0.e();
    while (_iterator__ex2g4s_3.f()) {
      var item = _iterator__ex2g4s_3.g();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      if (!mask_0[checkIndexOverflow(_unary__edvuaz)]) {
        destination.p(item);
      }
    }
    remaining = destination;
  }
  return new Solution(sheets, remaining);
};
function sam$kotlin_Comparator$0_9(function_0) {
  this.le_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0_9).m5 = function (a, b) {
  return this.le_1(a, b);
};
protoOf(sam$kotlin_Comparator$0_9).compare = function (a, b) {
  return this.m5(a, b);
};
protoOf(sam$kotlin_Comparator$0_9).m1 = function () {
  return this.le_1;
};
protoOf(sam$kotlin_Comparator$0_9).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, Comparator) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.m1(), other.m1());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlin_Comparator$0_9).hashCode = function () {
  return hashCode_0(this.m1());
};
function sortParts$lambda(p) {
  return p.d7_1 * p.e7_1;
}
function sortParts$lambda_0(p) {
  var tmp0 = p.d7_1;
  // Inline function 'kotlin.math.max' call
  var b = p.e7_1;
  return Math.max(tmp0, b);
}
function sortParts$lambda_1(p) {
  var tmp0 = p.d7_1;
  // Inline function 'kotlin.math.min' call
  var b = p.e7_1;
  return Math.min(tmp0, b);
}
function sortParts$lambda_2(p) {
  return p.d7_1 + p.e7_1;
}
function sortParts$lambda_3(p) {
  return p.d7_1;
}
function sortParts$lambda_4($selector) {
  return function (a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    return compareValues($selector(b), $selector(a));
  };
}
function sortParts$lambda_5($this) {
  return function (a, b) {
    var previousCompare = $this.compare(a, b);
    var tmp;
    if (!(previousCompare === 0)) {
      tmp = previousCompare;
    } else {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      var tmp_0 = b.d7_1 * b.e7_1;
      var tmp$ret$2 = a.d7_1 * a.e7_1;
      tmp = compareValues(tmp_0, tmp$ret$2);
    }
    return tmp;
  };
}
function sortParts$lambda_6($this) {
  return function (a, b) {
    var previousCompare = $this.compare(a, b);
    var tmp;
    if (!(previousCompare === 0)) {
      tmp = previousCompare;
    } else {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      var tmp0 = b.d7_1;
      // Inline function 'kotlin.math.max' call
      var b_0 = b.e7_1;
      var tmp_0 = Math.max(tmp0, b_0);
      var tmp0_0 = a.d7_1;
      // Inline function 'kotlin.math.max' call
      var b_1 = a.e7_1;
      var tmp$ret$3 = Math.max(tmp0_0, b_1);
      tmp = compareValues(tmp_0, tmp$ret$3);
    }
    return tmp;
  };
}
function sortParts$lambda_7($this) {
  return function (a, b) {
    var previousCompare = $this.compare(a, b);
    var tmp;
    if (!(previousCompare === 0)) {
      tmp = previousCompare;
    } else {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      var tmp_0 = a.c7_1;
      var tmp$ret$2 = b.c7_1;
      tmp = compareValues(tmp_0, tmp$ret$2);
    }
    return tmp;
  };
}
function Order_AREA_getInstance() {
  Order_initEntries();
  return Order_AREA_instance;
}
function Order_LONG_SIDE_getInstance() {
  Order_initEntries();
  return Order_LONG_SIDE_instance;
}
function Order_SHORT_SIDE_getInstance() {
  Order_initEntries();
  return Order_SHORT_SIDE_instance;
}
function Order_PERIMETER_getInstance() {
  Order_initEntries();
  return Order_PERIMETER_instance;
}
function Order_LENGTH_getInstance() {
  Order_initEntries();
  return Order_LENGTH_instance;
}
var PartShape_RECTANGLE_instance;
var PartShape_RIGHT_TRIANGLE_instance;
var PartShape_ISOSCELES_TRIANGLE_instance;
var PartShape_CIRCLE_instance;
var PartShape_entriesInitialized;
function PartShape_initEntries() {
  if (PartShape_entriesInitialized)
    return Unit_instance;
  PartShape_entriesInitialized = true;
  PartShape_RECTANGLE_instance = new PartShape('RECTANGLE', 0);
  PartShape_RIGHT_TRIANGLE_instance = new PartShape('RIGHT_TRIANGLE', 1);
  PartShape_ISOSCELES_TRIANGLE_instance = new PartShape('ISOSCELES_TRIANGLE', 2);
  PartShape_CIRCLE_instance = new PartShape('CIRCLE', 3);
}
function PartShape(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function get_isTriangle(_this__u8e3s4) {
  return _this__u8e3s4.equals(PartShape_RIGHT_TRIANGLE_getInstance()) || _this__u8e3s4.equals(PartShape_ISOSCELES_TRIANGLE_getInstance());
}
function Point(x, y) {
  this.me_1 = x;
  this.ne_1 = y;
}
protoOf(Point).toString = function () {
  return 'Point(x=' + this.me_1 + ', y=' + this.ne_1 + ')';
};
protoOf(Point).hashCode = function () {
  var result = getNumberHashCode(this.me_1);
  result = imul_0(result, 31) + getNumberHashCode(this.ne_1) | 0;
  return result;
};
protoOf(Point).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Point))
    return false;
  if (!equals(this.me_1, other.me_1))
    return false;
  if (!equals(this.ne_1, other.ne_1))
    return false;
  return true;
};
function Blank(length, width, outlines) {
  this.oe_1 = length;
  this.pe_1 = width;
  this.qe_1 = outlines;
}
protoOf(Blank).toString = function () {
  return 'Blank(length=' + this.oe_1 + ', width=' + this.pe_1 + ', outlines=' + toString_1(this.qe_1) + ')';
};
protoOf(Blank).hashCode = function () {
  var result = getNumberHashCode(this.oe_1);
  result = imul_0(result, 31) + getNumberHashCode(this.pe_1) | 0;
  result = imul_0(result, 31) + hashCode_0(this.qe_1) | 0;
  return result;
};
protoOf(Blank).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Blank))
    return false;
  if (!equals(this.oe_1, other.oe_1))
    return false;
  if (!equals(this.pe_1, other.pe_1))
    return false;
  if (!equals(this.qe_1, other.qe_1))
    return false;
  return true;
};
function Shapes$blank$lambda($minY) {
  return function (pts) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(pts, 10));
    var _iterator__ex2g4s = pts.e();
    while (_iterator__ex2g4s.f()) {
      var item = _iterator__ex2g4s.g();
      var tmp$ret$2 = new Point(item.me_1, item.ne_1 - $minY);
      destination.p(tmp$ret$2);
    }
    return destination;
  };
}
function blanks$of($part, $kerf, pieces, quantity) {
  var blank = Shapes_instance.re($part.k7_1, $part.d7_1, $part.e7_1, pieces, $kerf);
  return $part.id(VOID, blank.oe_1, blank.pe_1, quantity, VOID, VOID, VOID, VOID, VOID, pieces, blank.qe_1, $part.d7_1, $part.e7_1);
}
function Shapes() {
}
protoOf(Shapes).se = function (shape, base) {
  return shape.equals(PartShape_ISOSCELES_TRIANGLE_getInstance()) ? base / 2 : 0.0;
};
protoOf(Shapes).te = function (shape, base, height) {
  var p = this.se(shape, base);
  // Inline function 'kotlin.math.hypot' call
  var tmp = hypot(p, height);
  // Inline function 'kotlin.math.hypot' call
  var x = base - p;
  var tmp$ret$1 = hypot(x, height);
  return listOf_0([base, tmp, tmp$ret$1]);
};
protoOf(Shapes).nd = function (shape, length, width, edges) {
  var tmp;
  switch (shape.d1_1) {
    case 0:
      tmp = edges.cd() * length + edges.dd() * width;
      break;
    case 3:
      tmp = edges.yc_1 ? 3.141592653589793 * length : 0.0;
      break;
    case 1:
    case 2:
      var _destruct__k2r9zo = this.te(shape, length, width);
      // Inline function 'kotlin.collections.component1' call

      var base = _destruct__k2r9zo.h(0);
      // Inline function 'kotlin.collections.component2' call

      var left = _destruct__k2r9zo.h(1);
      // Inline function 'kotlin.collections.component3' call

      var right = _destruct__k2r9zo.h(2);
      tmp = (edges.yc_1 ? base : 0.0) + (edges.ad_1 ? left : 0.0) + (edges.bd_1 ? right : 0.0);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
};
protoOf(Shapes).od = function (shape, edges) {
  var tmp;
  switch (shape.d1_1) {
    case 0:
      tmp = edges.ed();
      break;
    case 3:
      tmp = edges.yc_1 ? 1 : 0;
      break;
    case 1:
    case 2:
      tmp = ((edges.yc_1 ? 1 : 0) + (edges.ad_1 ? 1 : 0) | 0) + (edges.bd_1 ? 1 : 0) | 0;
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
};
protoOf(Shapes).re = function (shape, length, width, pieces, kerf) {
  if (!get_isTriangle(shape))
    return new Blank(length, width, emptyList());
  var b = length;
  var h = width;
  var p = this.se(shape, b);
  var up = listOf_0([new Point(0.0, h), new Point(b, h), new Point(p, 0.0)]);
  if (pieces < 2)
    return new Blank(b, h, listOf(up));
  // Inline function 'kotlin.math.hypot' call
  var x = b - p;
  var side = hypot(x, h);
  var nx = h / side * kerf;
  var ny = (p - b) / side * kerf;
  // Inline function 'kotlin.collections.map' call
  var this_0 = listOf_0([new Point(p, 0.0), new Point(b, h), new Point(b + p, 0.0)]);
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.e();
  while (_iterator__ex2g4s.f()) {
    var item = _iterator__ex2g4s.g();
    var tmp$ret$3 = new Point(item.me_1 + nx, item.ne_1 + ny);
    destination.p(tmp$ret$3);
  }
  var down = destination;
  var all = plus(up, down);
  // Inline function 'kotlin.collections.minOf' call
  var iterator = all.e();
  if (!iterator.f())
    throw NoSuchElementException_init_$Create$();
  var minValue = iterator.g().ne_1;
  while (iterator.f()) {
    var v = iterator.g().ne_1;
    // Inline function 'kotlin.comparisons.minOf' call
    var a = minValue;
    minValue = Math.min(a, v);
  }
  var minY = minValue;
  var shift = Shapes$blank$lambda(minY);
  // Inline function 'kotlin.collections.maxOf' call
  var iterator_0 = all.e();
  if (!iterator_0.f())
    throw NoSuchElementException_init_$Create$();
  var maxValue = iterator_0.g().me_1;
  while (iterator_0.f()) {
    var v_0 = iterator_0.g().me_1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var a_0 = maxValue;
    maxValue = Math.max(a_0, v_0);
  }
  var tmp = maxValue;
  // Inline function 'kotlin.collections.maxOf' call
  var iterator_1 = all.e();
  if (!iterator_1.f())
    throw NoSuchElementException_init_$Create$();
  var maxValue_0 = iterator_1.g().ne_1;
  while (iterator_1.f()) {
    var v_1 = iterator_1.g().ne_1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var a_1 = maxValue_0;
    maxValue_0 = Math.max(a_1, v_1);
  }
  var tmp$ret$12 = maxValue_0;
  return new Blank(tmp, tmp$ret$12 - minY, listOf_0([shift(up), shift(down)]));
};
protoOf(Shapes).qd = function (part, kerf, fits) {
  if (!get_isTriangle(part.k7_1))
    return listOf(part);
  var single = blanks$of(part, kerf, 1, part.f7_1);
  if (part.f7_1 < 2)
    return listOf(single);
  var pair = blanks$of(part, kerf, 2, part.f7_1 / 2 | 0);
  if (!fits(pair))
    return listOf(single);
  return (part.f7_1 % 2 | 0) === 0 ? listOf(pair) : listOf_0([pair, single.id(VOID, VOID, VOID, 1)]);
};
protoOf(Shapes).hc = function (outlines, x, y, blankWidth, rotated) {
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(outlines, 10));
  var _iterator__ex2g4s = outlines.e();
  while (_iterator__ex2g4s.f()) {
    var item = _iterator__ex2g4s.g();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(item, 10));
    var _iterator__ex2g4s_0 = item.e();
    while (_iterator__ex2g4s_0.f()) {
      var item_0 = _iterator__ex2g4s_0.g();
      var tmp$ret$5 = rotated ? new Point(x + blankWidth - item_0.ne_1, y + item_0.me_1) : new Point(x + item_0.me_1, y + item_0.ne_1);
      destination_0.p(tmp$ret$5);
    }
    destination.p(destination_0);
  }
  return destination;
};
protoOf(Shapes).ue = function (points) {
  var sum = 0.0;
  var inductionVariable = 0;
  var last = points.j() - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var a = points.h(i);
      var b = points.h((i + 1 | 0) % points.j() | 0);
      sum = sum + (a.me_1 * b.ne_1 - b.me_1 * a.ne_1);
    }
     while (inductionVariable <= last);
  // Inline function 'kotlin.math.abs' call
  var x = sum;
  return Math.abs(x) / 2;
};
var Shapes_instance;
function Shapes_getInstance() {
  return Shapes_instance;
}
function get_area(_this__u8e3s4) {
  var tmp;
  switch (_this__u8e3s4.w8_1.d1_1) {
    case 0:
      tmp = _this__u8e3s4.t8_1 * _this__u8e3s4.u8_1;
      break;
    case 3:
      var tmp0 = _this__u8e3s4.t8_1;
      // Inline function 'kotlin.math.min' call

      var b = _this__u8e3s4.u8_1;
      var tmp_0 = 3.141592653589793 * Math.min(tmp0, b);
      var tmp0_0 = _this__u8e3s4.t8_1;
      // Inline function 'kotlin.math.min' call

      var b_0 = _this__u8e3s4.u8_1;
      tmp = tmp_0 * Math.min(tmp0_0, b_0) / 4;
      break;
    case 1:
    case 2:
      // Inline function 'kotlin.collections.sumOf' call

      var sum = 0;
      var _iterator__ex2g4s = _this__u8e3s4.y8_1.e();
      while (_iterator__ex2g4s.f()) {
        var element = _iterator__ex2g4s.g();
        var tmp_1 = sum;
        sum = tmp_1 + Shapes_instance.ue(element);
      }

      tmp = sum;
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function PartShape_RECTANGLE_getInstance() {
  PartShape_initEntries();
  return PartShape_RECTANGLE_instance;
}
function PartShape_RIGHT_TRIANGLE_getInstance() {
  PartShape_initEntries();
  return PartShape_RIGHT_TRIANGLE_instance;
}
function PartShape_ISOSCELES_TRIANGLE_getInstance() {
  PartShape_initEntries();
  return PartShape_ISOSCELES_TRIANGLE_instance;
}
//region block: post-declaration
protoOf(InternalHashMap).i3 = containsAllEntries;
//endregion
//region block: init
Companion_instance = new Companion();
Unit_instance = new Unit();
_stableSortingIsSupported = null;
Companion_instance_2 = new Companion_2();
Companion_instance_3 = new Companion_3();
Companion_instance_4 = new Companion_4();
Companion_instance_5 = new Companion_5();
EmptyIterator_instance = new EmptyIterator();
LinearOptimizer_instance = new LinearOptimizer();
Companion_instance_9 = new Companion_9();
EdgeBanding_instance = new EdgeBanding();
PanelOptimizer_instance = new PanelOptimizer();
Shapes_instance = new Shapes();
//endregion
//region block: exports
export {
  planPanels as planPanels,
  planBars as planBars,
};
//endregion

//# sourceMappingURL=0x-web.mjs.map
