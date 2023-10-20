(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[9372],{

/***/ 1107:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(84856), createBaseEach = __webpack_require__(52593);
var baseEach = createBaseEach(baseForOwn);
module.exports = baseEach;


/***/ }),

/***/ 92403:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(1107), isArrayLike = __webpack_require__(47727);
function baseMap(collection, iteratee) {
  var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
module.exports = baseMap;


/***/ }),

/***/ 16429:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(36393), baseGet = __webpack_require__(82393), baseIteratee = __webpack_require__(90040), baseMap = __webpack_require__(92403), baseSortBy = __webpack_require__(63135), baseUnary = __webpack_require__(20435), compareMultiple = __webpack_require__(9998), identity = __webpack_require__(51339), isArray = __webpack_require__(26126);
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        };
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }
  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
  var result = baseMap(collection, function(value, key, collection2) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { "criteria": criteria, "index": ++index, "value": value };
  });
  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}
module.exports = baseOrderBy;


/***/ }),

/***/ 58200:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePickBy = __webpack_require__(31507), hasIn = __webpack_require__(55164);
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}
module.exports = basePick;


/***/ }),

/***/ 31507:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(82393), baseSet = __webpack_require__(67937), castPath = __webpack_require__(37345);
function basePickBy(object, paths, predicate) {
  var index = -1, length = paths.length, result = {};
  while (++index < length) {
    var path = paths[index], value = baseGet(object, path);
    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}
module.exports = basePickBy;


/***/ }),

/***/ 63135:
/***/ ((module) => {

function baseSortBy(array, comparer) {
  var length = array.length;
  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}
module.exports = baseSortBy;


/***/ }),

/***/ 17654:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(85194);
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
    var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
    if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
      return 1;
    }
    if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}
module.exports = compareAscending;


/***/ }),

/***/ 9998:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compareAscending = __webpack_require__(17654);
function compareMultiple(object, other, orders) {
  var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == "desc" ? -1 : 1);
    }
  }
  return object.index - other.index;
}
module.exports = compareMultiple;


/***/ }),

/***/ 52593:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(47727);
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
module.exports = createBaseEach;


/***/ }),

/***/ 25003:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(62186), isObject = __webpack_require__(3243);
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, void 0, customDefaultsMerge, stack);
    stack["delete"](srcValue);
  }
  return objValue;
}
module.exports = customDefaultsMerge;


/***/ }),

/***/ 75719:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(51751), baseRest = __webpack_require__(52431), customDefaultsMerge = __webpack_require__(25003), mergeWith = __webpack_require__(2897);
var defaultsDeep = baseRest(function(args) {
  args.push(void 0, customDefaultsMerge);
  return apply(mergeWith, void 0, args);
});
module.exports = defaultsDeep;


/***/ }),

/***/ 2897:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(62186), createAssigner = __webpack_require__(48205);
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});
module.exports = mergeWith;


/***/ }),

/***/ 47184:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePick = __webpack_require__(58200), flatRest = __webpack_require__(16065);
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});
module.exports = pick;


/***/ }),

/***/ 8243:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(93367), baseOrderBy = __webpack_require__(16429), baseRest = __webpack_require__(52431), isIterateeCall = __webpack_require__(65145);
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});
module.exports = sortBy;


/***/ }),

/***/ 42982:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseUnset = __webpack_require__(83470);
function unset(object, path) {
  return object == null ? true : baseUnset(object, path);
}
module.exports = unset;


/***/ }),

/***/ 9217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ provider)
});

// UNUSED EXPORTS: createIntl

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(48627);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(12439);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/utils.js
var utils = __webpack_require__(80174);
// EXTERNAL MODULE: ./node_modules/@formatjs/ecma402-abstract/lib/utils.js
var lib_utils = __webpack_require__(58471);
// EXTERNAL MODULE: ./node_modules/intl-messageformat/lib/src/core.js
var core = __webpack_require__(89651);
// EXTERNAL MODULE: ./node_modules/@formatjs/intl/lib/src/error.js
var error = __webpack_require__(20466);
// EXTERNAL MODULE: ./node_modules/@formatjs/icu-messageformat-parser/lib/index.js + 9 modules
var lib = __webpack_require__(71285);
;// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/message.js





function setTimeZoneInOptions(opts, timeZone) {
  return Object.keys(opts).reduce(function(all, k) {
    all[k] = (0,tslib_es6/* __assign */.pi)({ timeZone }, opts[k]);
    return all;
  }, {});
}
function deepMergeOptions(opts1, opts2) {
  var keys = Object.keys((0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, opts1), opts2));
  return keys.reduce(function(all, k) {
    all[k] = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, opts1[k] || {}), opts2[k] || {});
    return all;
  }, {});
}
function deepMergeFormatsAndSetTimeZone(f1, timeZone) {
  if (!timeZone) {
    return f1;
  }
  var mfFormats = core/* IntlMessageFormat */.C.formats;
  return (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, mfFormats), f1), { date: deepMergeOptions(setTimeZoneInOptions(mfFormats.date, timeZone), setTimeZoneInOptions(f1.date || {}, timeZone)), time: deepMergeOptions(setTimeZoneInOptions(mfFormats.time, timeZone), setTimeZoneInOptions(f1.time || {}, timeZone)) });
}
var formatMessage = function(_a, state, messageDescriptor, values, opts) {
  var locale = _a.locale, formats = _a.formats, messages = _a.messages, defaultLocale = _a.defaultLocale, defaultFormats = _a.defaultFormats, fallbackOnEmptyString = _a.fallbackOnEmptyString, onError = _a.onError, timeZone = _a.timeZone, defaultRichTextElements = _a.defaultRichTextElements;
  if (messageDescriptor === void 0) {
    messageDescriptor = { id: "" };
  }
  var msgId = messageDescriptor.id, defaultMessage = messageDescriptor.defaultMessage;
  (0,lib_utils/* invariant */.kG)(!!msgId, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var id = String(msgId);
  var message = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    messages && Object.prototype.hasOwnProperty.call(messages, id) && messages[id]
  );
  if (Array.isArray(message) && message.length === 1 && message[0].type === lib/* TYPE */.wD.literal) {
    return message[0].value;
  }
  if (!values && message && typeof message === "string" && !defaultRichTextElements) {
    return message.replace(/'\{(.*?)\}'/gi, "{$1}");
  }
  values = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, defaultRichTextElements), values || {});
  formats = deepMergeFormatsAndSetTimeZone(formats, timeZone);
  defaultFormats = deepMergeFormatsAndSetTimeZone(defaultFormats, timeZone);
  if (!message) {
    if (fallbackOnEmptyString === false && message === "") {
      return message;
    }
    if (!defaultMessage || locale && locale.toLowerCase() !== defaultLocale.toLowerCase()) {
      onError(new error/* MissingTranslationError */.$6(messageDescriptor, locale));
    }
    if (defaultMessage) {
      try {
        var formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts);
        return formatter.format(values);
      } catch (e) {
        onError(new error/* MessageFormatError */.X9('Error formatting default message for: "'.concat(id, '", rendering default message verbatim'), locale, messageDescriptor, e));
        return typeof defaultMessage === "string" ? defaultMessage : id;
      }
    }
    return id;
  }
  try {
    var formatter = state.getMessageFormat(message, locale, formats, (0,tslib_es6/* __assign */.pi)({ formatters: state }, opts || {}));
    return formatter.format(values);
  } catch (e) {
    onError(new error/* MessageFormatError */.X9('Error formatting message: "'.concat(id, '", using ').concat(defaultMessage ? "default message" : "id", " as fallback."), locale, messageDescriptor, e));
  }
  if (defaultMessage) {
    try {
      var formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts);
      return formatter.format(values);
    } catch (e) {
      onError(new error/* MessageFormatError */.X9('Error formatting the default message for: "'.concat(id, '", rendering message verbatim'), locale, messageDescriptor, e));
    }
  }
  if (typeof message === "string") {
    return message;
  }
  if (typeof defaultMessage === "string") {
    return defaultMessage;
  }
  return id;
};

// EXTERNAL MODULE: ./node_modules/@formatjs/intl/lib/src/utils.js
var src_utils = __webpack_require__(26054);
;// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/number.js


var NUMBER_FORMAT_OPTIONS = [
  "style",
  "currency",
  "currencyDisplay",
  "unit",
  "unitDisplay",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  // ES2020 NumberFormat
  "compactDisplay",
  "currencyDisplay",
  "currencySign",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "numberingSystem"
];
function getFormatter(_a, getNumberFormat, options) {
  var locale = _a.locale, formats = _a.formats, onError = _a.onError;
  if (options === void 0) {
    options = {};
  }
  var format = options.format;
  var defaults = format && (0,src_utils/* getNamedFormat */.TB)(formats, "number", format, onError) || {};
  var filteredOptions = (0,src_utils/* filterProps */.L6)(options, NUMBER_FORMAT_OPTIONS, defaults);
  return getNumberFormat(locale, filteredOptions);
}
function formatNumber(config, getNumberFormat, value, options) {
  if (options === void 0) {
    options = {};
  }
  try {
    return getFormatter(config, getNumberFormat, options).format(value);
  } catch (e) {
    config.onError(new error/* IntlFormatError */.Qe("Error formatting number.", config.locale, e));
  }
  return String(value);
}
function formatNumberToParts(config, getNumberFormat, value, options) {
  if (options === void 0) {
    options = {};
  }
  try {
    return getFormatter(config, getNumberFormat, options).formatToParts(value);
  } catch (e) {
    config.onError(new error/* IntlFormatError */.Qe("Error formatting number.", config.locale, e));
  }
  return [];
}

// EXTERNAL MODULE: ./node_modules/intl-messageformat/lib/src/error.js
var src_error = __webpack_require__(35993);
;// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/relativeTime.js



var RELATIVE_TIME_FORMAT_OPTIONS = ["numeric", "style"];
function relativeTime_getFormatter(_a, getRelativeTimeFormat, options) {
  var locale = _a.locale, formats = _a.formats, onError = _a.onError;
  if (options === void 0) {
    options = {};
  }
  var format = options.format;
  var defaults = !!format && (0,src_utils/* getNamedFormat */.TB)(formats, "relative", format, onError) || {};
  var filteredOptions = (0,src_utils/* filterProps */.L6)(options, RELATIVE_TIME_FORMAT_OPTIONS, defaults);
  return getRelativeTimeFormat(locale, filteredOptions);
}
function formatRelativeTime(config, getRelativeTimeFormat, value, unit, options) {
  if (options === void 0) {
    options = {};
  }
  if (!unit) {
    unit = "second";
  }
  var RelativeTimeFormat = Intl.RelativeTimeFormat;
  if (!RelativeTimeFormat) {
    config.onError(new src_error/* FormatError */.u_('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', src_error/* ErrorCode */.jK.MISSING_INTL_API));
  }
  try {
    return relativeTime_getFormatter(config, getRelativeTimeFormat, options).format(value, unit);
  } catch (e) {
    config.onError(new error/* IntlFormatError */.Qe("Error formatting relative time.", config.locale, e));
  }
  return String(value);
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/dateTime.js



var DATE_TIME_FORMAT_OPTIONS = [
  "formatMatcher",
  "timeZone",
  "hour12",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "hourCycle",
  "dateStyle",
  "timeStyle",
  "calendar",
  // 'dayPeriod',
  "numberingSystem",
  "fractionalSecondDigits"
];
function dateTime_getFormatter(_a, type, getDateTimeFormat, options) {
  var locale = _a.locale, formats = _a.formats, onError = _a.onError, timeZone = _a.timeZone;
  if (options === void 0) {
    options = {};
  }
  var format = options.format;
  var defaults = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, timeZone && { timeZone }), format && (0,src_utils/* getNamedFormat */.TB)(formats, type, format, onError));
  var filteredOptions = (0,src_utils/* filterProps */.L6)(options, DATE_TIME_FORMAT_OPTIONS, defaults);
  if (type === "time" && !filteredOptions.hour && !filteredOptions.minute && !filteredOptions.second && !filteredOptions.timeStyle && !filteredOptions.dateStyle) {
    filteredOptions = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, filteredOptions), { hour: "numeric", minute: "numeric" });
  }
  return getDateTimeFormat(locale, filteredOptions);
}
function formatDate(config, getDateTimeFormat) {
  var _a = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    _a[_i - 2] = arguments[_i];
  }
  var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
  var date = typeof value === "string" ? new Date(value || 0) : value;
  try {
    return dateTime_getFormatter(config, "date", getDateTimeFormat, options).format(date);
  } catch (e) {
    config.onError(new error/* IntlFormatError */.Qe("Error formatting date.", config.locale, e));
  }
  return String(date);
}
function formatTime(config, getDateTimeFormat) {
  var _a = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    _a[_i - 2] = arguments[_i];
  }
  var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
  var date = typeof value === "string" ? new Date(value || 0) : value;
  try {
    return dateTime_getFormatter(config, "time", getDateTimeFormat, options).format(date);
  } catch (e) {
    config.onError(new error/* IntlFormatError */.Qe("Error formatting time.", config.locale, e));
  }
  return String(date);
}
function formatDateTimeRange(config, getDateTimeFormat) {
  var _a = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    _a[_i - 2] = arguments[_i];
  }
  var from = _a[0], to = _a[1], _b = _a[2], options = _b === void 0 ? {} : _b;
  var timeZone = config.timeZone, locale = config.locale, onError = config.onError;
  var filteredOptions = (0,src_utils/* filterProps */.L6)(options, DATE_TIME_FORMAT_OPTIONS, timeZone ? { timeZone } : {});
  try {
    return getDateTimeFormat(locale, filteredOptions).formatRange(from, to);
  } catch (e) {
    onError(new error/* IntlFormatError */.Qe("Error formatting date time range.", config.locale, e));
  }
  return String(from);
}
function formatDateToParts(config, getDateTimeFormat) {
  var _a = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    _a[_i - 2] = arguments[_i];
  }
  var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
  var date = typeof value === "string" ? new Date(value || 0) : value;
  try {
    return dateTime_getFormatter(config, "date", getDateTimeFormat, options).formatToParts(date);
  } catch (e) {
    config.onError(new error/* IntlFormatError */.Qe("Error formatting date.", config.locale, e));
  }
  return [];
}
function formatTimeToParts(config, getDateTimeFormat) {
  var _a = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    _a[_i - 2] = arguments[_i];
  }
  var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
  var date = typeof value === "string" ? new Date(value || 0) : value;
  try {
    return dateTime_getFormatter(config, "time", getDateTimeFormat, options).formatToParts(date);
  } catch (e) {
    config.onError(new error/* IntlFormatError */.Qe("Error formatting time.", config.locale, e));
  }
  return [];
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/plural.js



var PLURAL_FORMAT_OPTIONS = ["type"];
function formatPlural(_a, getPluralRules, value, options) {
  var locale = _a.locale, onError = _a.onError;
  if (options === void 0) {
    options = {};
  }
  if (!Intl.PluralRules) {
    onError(new src_error/* FormatError */.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', src_error/* ErrorCode */.jK.MISSING_INTL_API));
  }
  var filteredOptions = (0,src_utils/* filterProps */.L6)(options, PLURAL_FORMAT_OPTIONS);
  try {
    return getPluralRules(locale, filteredOptions).select(value);
  } catch (e) {
    onError(new error/* IntlFormatError */.Qe("Error formatting plural.", locale, e));
  }
  return "other";
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/list.js




var LIST_FORMAT_OPTIONS = [
  "type",
  "style"
];
var now = Date.now();
function generateToken(i) {
  return "".concat(now, "_").concat(i, "_").concat(now);
}
function formatList(opts, getListFormat, values, options) {
  if (options === void 0) {
    options = {};
  }
  var results = formatListToParts(opts, getListFormat, values, options).reduce(function(all, el) {
    var val = el.value;
    if (typeof val !== "string") {
      all.push(val);
    } else if (typeof all[all.length - 1] === "string") {
      all[all.length - 1] += val;
    } else {
      all.push(val);
    }
    return all;
  }, []);
  return results.length === 1 ? results[0] : results.length === 0 ? "" : results;
}
function formatListToParts(_a, getListFormat, values, options) {
  var locale = _a.locale, onError = _a.onError;
  if (options === void 0) {
    options = {};
  }
  var ListFormat = Intl.ListFormat;
  if (!ListFormat) {
    onError(new src_error/* FormatError */.u_('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', src_error/* ErrorCode */.jK.MISSING_INTL_API));
  }
  var filteredOptions = (0,src_utils/* filterProps */.L6)(options, LIST_FORMAT_OPTIONS);
  try {
    var richValues_1 = {};
    var serializedValues = values.map(function(v, i) {
      if (typeof v === "object") {
        var id = generateToken(i);
        richValues_1[id] = v;
        return id;
      }
      return String(v);
    });
    return getListFormat(locale, filteredOptions).formatToParts(serializedValues).map(function(part) {
      return part.type === "literal" ? part : (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, part), { value: richValues_1[part.value] || part.value });
    });
  } catch (e) {
    onError(new error/* IntlFormatError */.Qe("Error formatting list.", locale, e));
  }
  return values;
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/displayName.js



var DISPLAY_NAMES_OPTONS = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function formatDisplayName(_a, getDisplayNames, value, options) {
  var locale = _a.locale, onError = _a.onError;
  var DisplayNames = Intl.DisplayNames;
  if (!DisplayNames) {
    onError(new src_error/* FormatError */.u_('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', src_error/* ErrorCode */.jK.MISSING_INTL_API));
  }
  var filteredOptions = (0,src_utils/* filterProps */.L6)(options, DISPLAY_NAMES_OPTONS);
  try {
    return getDisplayNames(locale, filteredOptions).of(value);
  } catch (e) {
    onError(new error/* IntlFormatError */.Qe("Error formatting display name.", locale, e));
  }
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/create-intl.js










function messagesContainString(messages) {
  var firstMessage = messages ? messages[Object.keys(messages)[0]] : void 0;
  return typeof firstMessage === "string";
}
function verifyConfigMessages(config) {
  if (config.onWarn && config.defaultRichTextElements && messagesContainString(config.messages || {})) {
    config.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution');
  }
}
function createIntl(config, cache) {
  var formatters = (0,src_utils/* createFormatters */.ax)(cache);
  var resolvedConfig = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, src_utils/* DEFAULT_INTL_CONFIG */.Z0), config);
  var locale = resolvedConfig.locale, defaultLocale = resolvedConfig.defaultLocale, onError = resolvedConfig.onError;
  if (!locale) {
    if (onError) {
      onError(new error/* InvalidConfigError */.OV('"locale" was not configured, using "'.concat(defaultLocale, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details')));
    }
    resolvedConfig.locale = resolvedConfig.defaultLocale || "en";
  } else if (!Intl.NumberFormat.supportedLocalesOf(locale).length && onError) {
    onError(new error/* MissingDataError */.gb('Missing locale data for locale: "'.concat(locale, '" in Intl.NumberFormat. Using default locale: "').concat(defaultLocale, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')));
  } else if (!Intl.DateTimeFormat.supportedLocalesOf(locale).length && onError) {
    onError(new error/* MissingDataError */.gb('Missing locale data for locale: "'.concat(locale, '" in Intl.DateTimeFormat. Using default locale: "').concat(defaultLocale, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')));
  }
  verifyConfigMessages(resolvedConfig);
  return (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, resolvedConfig), {
    formatters,
    formatNumber: formatNumber.bind(null, resolvedConfig, formatters.getNumberFormat),
    formatNumberToParts: formatNumberToParts.bind(null, resolvedConfig, formatters.getNumberFormat),
    formatRelativeTime: formatRelativeTime.bind(null, resolvedConfig, formatters.getRelativeTimeFormat),
    formatDate: formatDate.bind(null, resolvedConfig, formatters.getDateTimeFormat),
    formatDateToParts: formatDateToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat),
    formatTime: formatTime.bind(null, resolvedConfig, formatters.getDateTimeFormat),
    formatDateTimeRange: formatDateTimeRange.bind(null, resolvedConfig, formatters.getDateTimeFormat),
    formatTimeToParts: formatTimeToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat),
    formatPlural: formatPlural.bind(null, resolvedConfig, formatters.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: formatMessage.bind(null, resolvedConfig, formatters),
    // @ts-expect-error TODO: will get to this later
    $t: formatMessage.bind(null, resolvedConfig, formatters),
    formatList: formatList.bind(null, resolvedConfig, formatters.getListFormat),
    formatListToParts: formatListToParts.bind(null, resolvedConfig, formatters.getListFormat),
    formatDisplayName: formatDisplayName.bind(null, resolvedConfig, formatters.getDisplayNames)
  });
}

// EXTERNAL MODULE: ./node_modules/intl-messageformat/lib/src/formatters.js
var formatters = __webpack_require__(97340);
;// CONCATENATED MODULE: ./node_modules/react-intl/lib/src/components/provider.js






function processIntlConfig(config) {
  return {
    locale: config.locale,
    timeZone: config.timeZone,
    fallbackOnEmptyString: config.fallbackOnEmptyString,
    formats: config.formats,
    textComponent: config.textComponent,
    messages: config.messages,
    defaultLocale: config.defaultLocale,
    defaultFormats: config.defaultFormats,
    onError: config.onError,
    onWarn: config.onWarn,
    wrapRichTextChunksInFragment: config.wrapRichTextChunksInFragment,
    defaultRichTextElements: config.defaultRichTextElements
  };
}
function assignUniqueKeysToFormatXMLElementFnArgument(values) {
  if (!values) {
    return values;
  }
  return Object.keys(values).reduce(function(acc, k) {
    var v = values[k];
    acc[k] = (0,formatters/* isFormatXMLElementFn */.Gt)(v) ? (0,utils/* assignUniqueKeysToParts */.dt)(v) : v;
    return acc;
  }, {});
}
var provider_formatMessage = function(config, formatters, descriptor, rawValues) {
  var rest = [];
  for (var _i = 4; _i < arguments.length; _i++) {
    rest[_i - 4] = arguments[_i];
  }
  var values = assignUniqueKeysToFormatXMLElementFnArgument(rawValues);
  var chunks = formatMessage.apply(void 0, (0,tslib_es6/* __spreadArray */.ev)([
    config,
    formatters,
    descriptor,
    values
  ], rest, false));
  if (Array.isArray(chunks)) {
    return react.Children.toArray(chunks);
  }
  return chunks;
};
var provider_createIntl = function(_a, cache) {
  var rawDefaultRichTextElements = _a.defaultRichTextElements, config = (0,tslib_es6/* __rest */._T)(_a, ["defaultRichTextElements"]);
  var defaultRichTextElements = assignUniqueKeysToFormatXMLElementFnArgument(rawDefaultRichTextElements);
  var coreIntl = createIntl((0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, utils/* DEFAULT_INTL_CONFIG */.Z0), config), { defaultRichTextElements }), cache);
  var resolvedConfig = {
    locale: coreIntl.locale,
    timeZone: coreIntl.timeZone,
    fallbackOnEmptyString: coreIntl.fallbackOnEmptyString,
    formats: coreIntl.formats,
    defaultLocale: coreIntl.defaultLocale,
    defaultFormats: coreIntl.defaultFormats,
    messages: coreIntl.messages,
    onError: coreIntl.onError,
    defaultRichTextElements
  };
  return (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, coreIntl), {
    // @ts-expect-error fix this
    formatMessage: provider_formatMessage.bind(null, resolvedConfig, coreIntl.formatters),
    // @ts-expect-error fix this
    $t: provider_formatMessage.bind(null, resolvedConfig, coreIntl.formatters)
  });
};
var IntlProvider = (
  /** @class */
  function(_super) {
    (0,tslib_es6/* __extends */.ZT)(IntlProvider2, _super);
    function IntlProvider2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.cache = (0,src_utils/* createIntlCache */.Sn)();
      _this.state = {
        cache: _this.cache,
        intl: provider_createIntl(processIntlConfig(_this.props), _this.cache),
        prevConfig: processIntlConfig(_this.props)
      };
      return _this;
    }
    IntlProvider2.getDerivedStateFromProps = function(props, _a) {
      var prevConfig = _a.prevConfig, cache = _a.cache;
      var config = processIntlConfig(props);
      if (!(0,utils/* shallowEqual */.wU)(prevConfig, config)) {
        return {
          intl: provider_createIntl(config, cache),
          prevConfig: config
        };
      }
      return null;
    };
    IntlProvider2.prototype.render = function() {
      (0,utils/* invariantIntlContext */.lq)(this.state.intl);
      return react.createElement(injectIntl/* Provider */.zt, { value: this.state.intl }, this.props.children);
    };
    IntlProvider2.displayName = "IntlProvider";
    IntlProvider2.defaultProps = utils/* DEFAULT_INTL_CONFIG */.Z0;
    return IntlProvider2;
  }(react.PureComponent)
);
/* harmony default export */ const provider = (IntlProvider);


/***/ }),

/***/ 57150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P1: () => (/* binding */ createSelector)
});

// UNUSED EXPORTS: createSelectorCreator, createStructuredSelector, defaultEqualityCheck, defaultMemoize

;// CONCATENATED MODULE: ./node_modules/reselect/es/defaultMemoize.js
var NOT_FOUND = "NOT_FOUND";
function createSingletonCache(equals) {
  var entry;
  return {
    get: function get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }
      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key,
        value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear() {
      entry = void 0;
    }
  };
}
function createLruCache(maxSize, equals) {
  var entries = [];
  function get(key) {
    var cacheIndex = entries.findIndex(function(entry2) {
      return equals(key, entry2.key);
    });
    if (cacheIndex > -1) {
      var entry = entries[cacheIndex];
      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }
      return entry.value;
    }
    return NOT_FOUND;
  }
  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      entries.unshift({
        key,
        value
      });
      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }
  function getEntries() {
    return entries;
  }
  function clear() {
    entries = [];
  }
  return {
    get,
    put,
    getEntries,
    clear
  };
}
var defaultEqualityCheck = function defaultEqualityCheck2(a, b) {
  return a === b;
};
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }
    var length = prev.length;
    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }
    return true;
  };
}
function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck, equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa, _providedOptions$maxS = providedOptions.maxSize, maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS, resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
  function memoized() {
    var value = cache.get(arguments);
    if (value === NOT_FOUND) {
      value = func.apply(null, arguments);
      if (resultEqualityCheck) {
        var entries = cache.getEntries();
        var matchingEntry = entries.find(function(entry) {
          return resultEqualityCheck(entry.value, value);
        });
        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }
      cache.put(arguments, value);
    }
    return value;
  }
  memoized.clearCache = function() {
    return cache.clear();
  };
  return memoized;
}

;// CONCATENATED MODULE: ./node_modules/reselect/es/index.js


function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
  if (!dependencies.every(function(dep) {
    return typeof dep === "function";
  })) {
    var dependencyTypes = dependencies.map(function(dep) {
      return typeof dep === "function" ? "function " + (dep.name || "unnamed") + "()" : typeof dep;
    }).join(", ");
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }
  return dependencies;
}
function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }
  var createSelector2 = function createSelector3() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }
    var _recomputations = 0;
    var _lastResult;
    var directlyPassedOptions = {
      memoizeOptions: void 0
    };
    var resultFunc = funcs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = funcs.pop();
    }
    if (typeof resultFunc !== "function") {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    }
    var _directlyPassedOption = directlyPassedOptions, _directlyPassedOption2 = _directlyPassedOption.memoizeOptions, memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2;
    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
      _recomputations++;
      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions));
    var selector = memoize(function dependenciesChecker() {
      var params = [];
      var length = dependencies.length;
      for (var i = 0; i < length; i++) {
        params.push(dependencies[i].apply(null, arguments));
      }
      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  };
  return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(defaultMemoize);
var createStructuredSelector = function createStructuredSelector2(selectors, selectorCreator) {
  if (selectorCreator === void 0) {
    selectorCreator = createSelector;
  }
  if (typeof selectors !== "object") {
    throw new Error("createStructuredSelector expects first argument to be an object " + ("where each property is a selector, instead received a " + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  var resultSelector = selectorCreator(
    // @ts-ignore
    objectKeys.map(function(key) {
      return selectors[key];
    }),
    function() {
      for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        values[_key3] = arguments[_key3];
      }
      return values.reduce(function(composition, value, index) {
        composition[objectKeys[index]] = value;
        return composition;
      }, {});
    }
  );
  return resultSelector;
};


/***/ }),

/***/ 74758:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ ContentLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93415);


const ContentLayout = ({ children }) => {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .x, { paddingLeft: 10, paddingRight: 10, children });
};



/***/ }),

/***/ 27875:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ HeaderLayout)
});

// UNUSED EXPORTS: BaseHeaderLayout

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74081);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useElementOnScreen.mjs

const useElementOnScreen = (options) => {
  const containerRef = (0,react.useRef)(null);
  const [isVisible, setIsVisible] = (0,react.useState)(true);
  const callback = ([entry]) => {
    setIsVisible(entry.isIntersecting);
  };
  (0,react.useEffect)(() => {
    const containerEl = containerRef.current;
    const observer = new IntersectionObserver(callback, options);
    if (containerEl) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerEl) {
        observer.disconnect();
      }
    };
  }, [containerRef, options]);
  return [containerRef, isVisible];
};


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var dist = __webpack_require__(66705);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useResizeObserver.mjs


const useResizeObserver = (sources, onResize) => {
  const handleResize = (0,dist/* useCallbackRef */.W)(onResize);
  (0,react.useLayoutEffect)(() => {
    const resizeObs = new ResizeObserver(handleResize);
    if (Array.isArray(sources)) {
      sources.forEach((source) => {
        if (source.current) {
          resizeObs.observe(source.current);
        }
      });
    } else if (sources.current) {
      resizeObs.observe(sources.current);
    }
    return () => {
      resizeObs.disconnect();
    };
  }, [sources, handleResize]);
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs








const HeaderLayout = (props) => {
  const baseHeaderLayoutRef = (0,react.useRef)(null);
  const [headerSize, setHeaderSize] = (0,react.useState)(null);
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  useResizeObserver(containerRef, () => {
    if (containerRef.current) {
      setHeaderSize(containerRef.current.getBoundingClientRect());
    }
  });
  (0,react.useEffect)(() => {
    if (baseHeaderLayoutRef.current) {
      setHeaderSize(baseHeaderLayoutRef.current.getBoundingClientRect());
    }
  }, [baseHeaderLayoutRef]);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("div", { style: { height: headerSize?.height }, ref: containerRef, children: isVisible && (0,jsx_runtime.jsx)(BaseHeaderLayout, { ref: baseHeaderLayoutRef, ...props }) }), !isVisible && (0,jsx_runtime.jsx)(BaseHeaderLayout, { ...props, sticky: true, width: headerSize?.width })] });
};
HeaderLayout.displayName = "HeaderLayout";
const StickyBox = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  width: ${({ width }) => width ? `${width / 16}rem` : void 0};
  z-index: ${({ theme }) => theme.zIndices[1]};
`;
const BaseHeaderLayout = react.forwardRef(({ navigationAction, primaryAction, secondaryAction, subtitle, title, sticky, width, ...props }, ref) => {
  const isSubtitleString = typeof subtitle === "string";
  if (sticky) {
    return (0,jsx_runtime.jsx)(StickyBox, { paddingLeft: 6, paddingRight: 6, paddingTop: 3, paddingBottom: 3, position: "fixed", top: 0, right: 0, background: "neutral0", shadow: "tableShadow", width, "data-strapi-header-sticky": true, children: (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { children: [navigationAction && (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingRight: 3, children: navigationAction }), (0,jsx_runtime.jsxs)(Box/* Box */.x, { children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "beta", as: "h1", ...props, children: title }), isSubtitleString ? (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600", children: subtitle }) : subtitle] }), secondaryAction ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: secondaryAction }) : null] }), (0,jsx_runtime.jsx)(Flex/* Flex */.k, { children: primaryAction ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 2, children: primaryAction }) : void 0 })] }) });
  }
  return (0,jsx_runtime.jsxs)(Box/* Box */.x, { ref, paddingLeft: 10, paddingRight: 10, paddingBottom: 8, paddingTop: navigationAction ? 6 : 8, background: "neutral100", "data-strapi-header": true, children: [navigationAction ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingBottom: 2, children: navigationAction }) : null, (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { minWidth: 0, children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { as: "h1", variant: "alpha", ...props, children: title }), secondaryAction ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: secondaryAction }) : null] }), primaryAction] }), isSubtitleString ? (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600", as: "p", children: subtitle }) : subtitle] });
});



/***/ }),

/***/ 73354:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37652);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93415);



const MainWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x))`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`;
const Main = ({ labelledBy = "main-content-title", ...props }) => {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MainWrapper, { "aria-labelledby": labelledBy, as: "main", id: "main-content", tabIndex: -1, ...props });
};



/***/ }),

/***/ 23886:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ SkipToContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37652);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93415);



const AnchorBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x))`
  text-decoration: none;

  &:focus {
    left: ${({ theme }) => theme.spaces[3]};
    top: ${({ theme }) => theme.spaces[3]};
  }
`;
const SkipToContent = ({ children }) => {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AnchorBox, { as: "a", href: "#main-content", background: "primary600", color: "neutral0", left: "-100%", padding: 3, position: "absolute", top: "-100%", hasRadius: true, zIndex: 9999, children });
};



/***/ }),

/***/ 4855:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ darkTheme)
});

;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/themes/darkTheme/dark-colors.mjs
const darkColorTokenObject = {
  color: {
    alternative100: "#181826",
    alternative200: "#4a4a6a",
    alternative500: "#ac73e6",
    alternative600: "#ac73e6",
    alternative700: "#e0c1f4",
    buttonNeutral0: "#ffffff",
    buttonPrimary500: "#7b79ff",
    buttonPrimary600: "#4945ff",
    danger100: "#181826",
    danger200: "#4a4a6a",
    danger500: "#ee5e52",
    danger600: "#ee5e52",
    danger700: "#ee5e52",
    neutral0: "#212134",
    neutral100: "#181826",
    neutral1000: "#ffffff",
    neutral150: "#32324d",
    neutral200: "#4a4a6a",
    neutral300: "#666687",
    neutral400: "#a5a5ba",
    neutral500: "#c0c0cf",
    neutral600: "#a5a5ba",
    neutral700: "#eaeaef",
    neutral800: "#ffffff",
    neutral900: "#ffffff",
    primary100: "#181826",
    primary200: "#4a4a6a",
    primary500: "#4945ff",
    primary600: "#7b79ff",
    primary700: "#7b79ff",
    secondary100: "#181826",
    secondary200: "#4a4a6a",
    secondary500: "#66b7f1",
    secondary600: "#66b7f1",
    secondary700: "#b8e1ff",
    success100: "#181826",
    success200: "#4a4a6a",
    success500: "#5cb176",
    success600: "#5cb176",
    success700: "#c6f0c2",
    warning100: "#181826",
    warning200: "#4a4a6a",
    warning500: "#f29d41",
    warning600: "#f29d41",
    warning700: "#fae7b9"
  }
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/themes/darkTheme/dark-shadows.mjs
const darkShadowTokenObject = {
  shadow: {
    filterShadow: "1px 1px 10px rgba(3, 3, 5, 0.35)",
    focus: "inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",
    focusShadow: "0px 0px 6px rgba(76, 191, 255, 0.75)",
    popupShadow: "1px 1px 10px rgba(3, 3, 5, 0.35)",
    tableShadow: "1px 1px 10px rgba(3, 3, 5, 0.2)"
  }
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/themes/common-theme.mjs + 1 modules
var common_theme = __webpack_require__(33106);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/themes/darkTheme/index.mjs



const darkTheme = {
  colors: darkColorTokenObject.color,
  shadows: darkShadowTokenObject.shadow,
  ...common_theme/* commonTheme */.x
};



/***/ }),

/***/ 53274:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const o = (r) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...r, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    d: "M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z"
  }
) }), h = o;



/***/ }),

/***/ 35318:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const c = (a) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...a, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    fillRule: "evenodd",
    d: "M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",
    clipRule: "evenodd"
  }
) }), o = c;



/***/ }),

/***/ 72535:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const a = (e) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 25 25", ...e, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    fillRule: "evenodd",
    d: "m13.58.448 3.177 3.176L18.66 1.72a3.267 3.267 0 1 1 4.62 4.62l-1.904 1.904 3.175 3.175a1.528 1.528 0 0 1 0 2.162l-3.175 3.175L20.2 15.58a3.267 3.267 0 1 0-4.62 4.62l1.177 1.177-3.176 3.176a1.528 1.528 0 0 1-2.162 0l-3.175-3.175-1.902 1.902a3.267 3.267 0 1 1-4.62-4.62l1.902-1.902-3.176-3.176a1.528 1.528 0 0 1 0-2.162l3.176-3.176L4.8 9.42a3.267 3.267 0 0 0 4.62-4.62L8.244 3.623 11.419.448a1.528 1.528 0 0 1 2.162 0Z",
    clipRule: "evenodd"
  }
) }), t = a;



/***/ }),

/***/ 86874:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const o = (l) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...l, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    fillRule: "evenodd",
    d: "M23.12 3.907c-.025 0-.055-.005-.087-.011a.72.72 0 0 0-.13-.016H5.929l-.27-1.805A2.413 2.413 0 0 0 3.26 0H1.078C.485 0 0 .485 0 1.078c0 .593.485 1.078 1.078 1.078H3.26c.135 0 .243.107.27.242L5.2 13.77a2.954 2.954 0 0 0 2.91 2.506h11.21c1.401 0 2.614-.997 2.91-2.371l1.752-8.757a1.065 1.065 0 0 0-.863-1.24Zm-4.932 13.927a2.8 2.8 0 0 0-2.802 2.802 2.8 2.8 0 0 0 2.802 2.802 2.8 2.8 0 0 0 2.803-2.802c-.027-1.536-1.267-2.802-2.803-2.802Zm-9.646 0a2.786 2.786 0 0 1 2.775 2.667c.081 1.536-1.132 2.83-2.667 2.91h-.054a2.762 2.762 0 0 1-2.749-2.667 2.819 2.819 0 0 1 2.695-2.91Z",
    clipRule: "evenodd"
  }
) }), a = o;



/***/ })

}]);