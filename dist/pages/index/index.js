(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/arrayLikeToArray.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/arrayLikeToArray.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/arrayWithHoles.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/arrayWithHoles.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/arrayWithoutHoles.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/assertThisInitialized.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/assertThisInitialized.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/classCallCheck.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/classCallCheck.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/createClass.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/createClass.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/defineProperty.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/defineProperty.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/get.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/get.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/getPrototypeOf.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/getPrototypeOf.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/inherits.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/inherits.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/iterableToArray.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/iterableToArray.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/iterableToArrayLimit.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/nonIterableRest.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/nonIterableRest.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/nonIterableSpread.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/nonIterableSpread.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/setPrototypeOf.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/setPrototypeOf.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/slicedToArray.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/slicedToArray.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/superPropBase.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/superPropBase.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/toConsumableArray.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./src/pages/index/index.tsx":
/*!***************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.1@babel-loader/lib!./src/pages/index/index.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var _Users_heymie_taro_RouterParam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_heymie_taro_RouterParam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_heymie_taro_RouterParam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_heymie_taro_RouterParam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/with-weapp */ "./node_modules/_@tarojs_with-weapp@3.2.9@@tarojs/with-weapp/index.js");
/* harmony import */ var _tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_plugin-platform-weapp@3.2.9@@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);





var _dec, _class;






var page = {
  onLoad: function onLoad(options) {
    console.error('onLoad', options);
    options.a = '1';
  },
  onShow: function onShow() {
    console.error('onShow');
  }
};
var Index = (_dec = _tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_5___default()(page), _dec(_class = /*#__PURE__*/function (_Component) {
  Object(_Users_heymie_taro_RouterParam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Index, _Component);

  var _super = Object(_Users_heymie_taro_RouterParam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index);

  function Index() {
    Object(_Users_heymie_taro_RouterParam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Index);

    return _super.apply(this, arguments);
  }

  Object(_Users_heymie_taro_RouterParam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Index, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "b"], {
        className: "index",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "a"], {
          children: "Hello world!"
        })
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"])) || _class);


/***/ }),

/***/ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! exports used: jsx */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


__webpack_require__(/*! object-assign */ "./node_modules/_object-assign@4.1.1@object-assign/index.js");

var f = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js"),
    g = 60103;

exports.Fragment = 60107;

if ("function" === typeof Symbol && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  exports.Fragment = h("react.fragment");
}

var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    n = Object.prototype.hasOwnProperty,
    p = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function q(c, a, k) {
  var b,
      d = {},
      e = null,
      l = null;
  void 0 !== k && (e = "" + k);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (l = a.ref);

  for (b in a) {
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  }

  if (c && c.defaultProps) for (b in a = c.defaultProps, a) {
    void 0 === d[b] && (d[b] = a[b]);
  }
  return {
    $$typeof: g,
    type: c,
    key: e,
    ref: l,
    props: d,
    _owner: m.current
  };
}

exports.jsx = q;
exports.jsxs = q;

/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.9@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.2.1@babel-loader/lib!./index.tsx */ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"首页"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/index/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map