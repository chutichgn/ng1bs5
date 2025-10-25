(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["ng1bs5"] = factory(require("angular"));
	else
		root["ng1bs5"] = factory(root["angular"]);
})(this, (__WEBPACK_EXTERNAL_MODULE_angular__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/toast/toast.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/toast/toast.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * Bootstrap 5 Toast Component - Minimal Required Styles
 * Bootstrap 5 handles all toast styling - we only add positioning
 */

/* Toast container positioning and layering */
.toast-container {
    z-index: 1090 !important;
    pointer-events: none;
}

.toast-container .toast {
    pointer-events: auto;
    margin-bottom: 0.5rem;
}

.toast-container .toast:last-child {
    margin-bottom: 0;
}

/* Position variants for toast container */
.toast-container.top-start {
    top: 0;
    left: 0;
}

.toast-container.top-center {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

.toast-container.top-end {
    top: 0;
    right: 0;
}

.toast-container.middle-start {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}

.toast-container.middle-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.toast-container.middle-end {
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}

.toast-container.bottom-start {
    bottom: 0;
    left: 0;
}

.toast-container.bottom-center {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.toast-container.bottom-end {
    bottom: 0;
    right: 0;
}`, "",{"version":3,"sources":["webpack://./src/components/toast/toast.css"],"names":[],"mappings":"AAAA;;;EAGE;;AAEF,6CAA6C;AAC7C;IACI,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;AACpB;;AAEA,0CAA0C;AAC1C;IACI,MAAM;IACN,OAAO;AACX;;AAEA;IACI,MAAM;IACN,SAAS;IACT,2BAA2B;AAC/B;;AAEA;IACI,MAAM;IACN,QAAQ;AACZ;;AAEA;IACI,QAAQ;IACR,OAAO;IACP,2BAA2B;AAC/B;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,QAAQ;IACR,QAAQ;IACR,2BAA2B;AAC/B;;AAEA;IACI,SAAS;IACT,OAAO;AACX;;AAEA;IACI,SAAS;IACT,SAAS;IACT,2BAA2B;AAC/B;;AAEA;IACI,SAAS;IACT,QAAQ;AACZ","sourcesContent":["/**\n * Bootstrap 5 Toast Component - Minimal Required Styles\n * Bootstrap 5 handles all toast styling - we only add positioning\n */\n\n/* Toast container positioning and layering */\n.toast-container {\n    z-index: 1090 !important;\n    pointer-events: none;\n}\n\n.toast-container .toast {\n    pointer-events: auto;\n    margin-bottom: 0.5rem;\n}\n\n.toast-container .toast:last-child {\n    margin-bottom: 0;\n}\n\n/* Position variants for toast container */\n.toast-container.top-start {\n    top: 0;\n    left: 0;\n}\n\n.toast-container.top-center {\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.toast-container.top-end {\n    top: 0;\n    right: 0;\n}\n\n.toast-container.middle-start {\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n}\n\n.toast-container.middle-center {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.toast-container.middle-end {\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n}\n\n.toast-container.bottom-start {\n    bottom: 0;\n    left: 0;\n}\n\n.toast-container.bottom-center {\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.toast-container.bottom-end {\n    bottom: 0;\n    right: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Angular Bootstrap 5 - Custom Styles */

/* Autocomplete List */
bs5-autocomplete-list {
    position: absolute;
    overflow-x: hidden;
    z-index: 9999;
}

bs5-autocomplete-list li {
    cursor: pointer;
}

/* Calendar/Datepicker */
.calendar {
    position: absolute;
    border: 1px solid #000;
    z-index: 9999;
}

/* Rating */
bs5-rating {
    display: inline-block;
}

[bs5-rating]:not(.readonly) > *,
bs5-rating:not(.readonly) > * {
    cursor: pointer;
}

[bs5-rating].disabled > *,
bs5-rating.disabled > * {
    cursor: not-allowed;
    filter: grayscale(60%);
    opacity: 0.17;
}

bs5-rating-partial > span {
    position: relative;
}

bs5-rating-partial > span > span {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    overflow: hidden;
}

/* Tabset */
.bs5-tabset {
    /* Add custom tabset styles as needed */
}
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA,wCAAwC;;AAExC,sBAAsB;AACtB;IACI,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA,wBAAwB;AACxB;IACI,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;AACjB;;AAEA,WAAW;AACX;IACI,qBAAqB;AACzB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;;IAEI,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,QAAQ;IACR,gBAAgB;AACpB;;AAEA,WAAW;AACX;IACI,uCAAuC;AAC3C","sourcesContent":["/* Angular Bootstrap 5 - Custom Styles */\n\n/* Autocomplete List */\nbs5-autocomplete-list {\n    position: absolute;\n    overflow-x: hidden;\n    z-index: 9999;\n}\n\nbs5-autocomplete-list li {\n    cursor: pointer;\n}\n\n/* Calendar/Datepicker */\n.calendar {\n    position: absolute;\n    border: 1px solid #000;\n    z-index: 9999;\n}\n\n/* Rating */\nbs5-rating {\n    display: inline-block;\n}\n\n[bs5-rating]:not(.readonly) > *,\nbs5-rating:not(.readonly) > * {\n    cursor: pointer;\n}\n\n[bs5-rating].disabled > *,\nbs5-rating.disabled > * {\n    cursor: not-allowed;\n    filter: grayscale(60%);\n    opacity: 0.17;\n}\n\nbs5-rating-partial > span {\n    position: relative;\n}\n\nbs5-rating-partial > span > span {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 0;\n    overflow: hidden;\n}\n\n/* Tabset */\n.bs5-tabset {\n    /* Add custom tabset styles as needed */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/accordion/accordion.module.js":
/*!******************************************************!*\
  !*** ./src/components/accordion/accordion.module.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_dom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dom.service */ "./src/services/dom.service.js");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var ACCORDION_CONFIG = {
  closeOthers: true
};
var ACCORDION_TEMPLATE = "\n<div class=\"accordion\">\n    <ng-transclude></ng-transclude>\n</div>";
var ACCORDION_GROUP_TEMPLATE = "\n<div class=\"accordion-item\">\n    <h2 class=\"accordion-header\">\n        <button type=\"button\" \n                ng-click=\"toggleOpen()\" \n                ng-class=\"{collapsed: !isOpen}\" \n                class=\"accordion-button\" \n                bs5-accordion-transclude=\"heading\">\n            <span bs5-accordion-header>{{heading}}</span>\n        </button>\n    </h2>\n    <div class=\"accordion-collapse\" bs5-collapse=\"!isOpen\">\n        <div class=\"accordion-body\">\n            <ng-transclude></ng-transclude>\n        </div>\n    </div>\n</div>";
var AccordionController = /*#__PURE__*/function () {
  AccordionController.$inject = ["$scope", "$attrs"];
  function AccordionController($scope, $attrs) {
    'ngInject';

    _classCallCheck(this, AccordionController);
    this.$scope = $scope;
    this.$attrs = $attrs;
    this.groups = [];
  }
  return _createClass(AccordionController, [{
    key: "closeOthers",
    value: function closeOthers(openGroup) {
      var closeOthers = angular__WEBPACK_IMPORTED_MODULE_0___default().isDefined(this.$attrs.closeOthers) ? this.$scope.$eval(this.$attrs.closeOthers) : ACCORDION_CONFIG.closeOthers;
      if (closeOthers) {
        angular__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.groups, function (group) {
          if (group !== openGroup) {
            group.isOpen = false;
          }
        });
      }
    }
  }, {
    key: "addGroup",
    value: function addGroup(groupScope) {
      var _this = this;
      this.groups.push(groupScope);
      groupScope.$on('$destroy', function () {
        _this.removeGroup(groupScope);
      });
    }
  }, {
    key: "removeGroup",
    value: function removeGroup(group) {
      var index = this.groups.indexOf(group);
      if (index >= 0) {
        this.groups.splice(index, 1);
      }
    }
  }]);
}();
var AccordionDirective = /*#__PURE__*/_createClass(function AccordionDirective() {
  _classCallCheck(this, AccordionDirective);
  this.restrict = 'E';
  this.transclude = true;
  this.replace = true;
  this.template = ACCORDION_TEMPLATE;
  this.controller = AccordionController;
  this.controllerAs = 'accordion';
});
var AccordionGroupController = /*#__PURE__*/function () {
  function AccordionGroupController() {
    _classCallCheck(this, AccordionGroupController);
    this.heading = null;
  }
  return _createClass(AccordionGroupController, [{
    key: "setHeading",
    value: function setHeading(elm) {
      this.heading = elm;
    }
  }]);
}();
var AccordionGroupDirective = /*#__PURE__*/_createClass(function AccordionGroupDirective() {
  _classCallCheck(this, AccordionGroupDirective);
  _defineProperty(this, "link", function (scope, elm, attrs, accordionCtrl) {
    accordionCtrl.addGroup(scope);
    scope.$watch('isOpen', function (value) {
      if (value) {
        accordionCtrl.closeOthers(scope);
      }
    });
    scope.toggleOpen = function (event) {
      if (!scope.isDisabled) {
        if (!event || event.which === 32) {
          scope.isOpen = !scope.isOpen;
        }
      }
    };
  });
  this.restrict = 'E';
  this.transclude = true;
  this.replace = true;
  this.require = '^bs5Accordion';
  this.template = ACCORDION_GROUP_TEMPLATE;
  this.controller = AccordionGroupController;
  this.scope = {
    heading: '@',
    isOpen: '=?',
    isDisabled: '=?'
  };
});
var AccordionHeadingDirective = /*#__PURE__*/_createClass(function AccordionHeadingDirective() {
  _classCallCheck(this, AccordionHeadingDirective);
  _defineProperty(this, "link", function (scope, elm, attrs, accordionGroup, transclude) {
    accordionGroup.setHeading(transclude(scope, (angular__WEBPACK_IMPORTED_MODULE_0___default().noop)));
  });
  this.require = '^bs5AccordionGroup';
  this.transclude = true;
  this.template = '';
  this.replace = true;
});
var AccordionTranscludeDirective = /*#__PURE__*/_createClass(function AccordionTranscludeDirective() {
  _classCallCheck(this, AccordionTranscludeDirective);
  _defineProperty(this, "link", function (scope, elm, attrs, accordionGroup) {
    scope.$watch(function () {
      return accordionGroup[attrs.bs5AccordionTransclude];
    }, function (heading) {
      if (heading) {
        var elem = angular__WEBPACK_IMPORTED_MODULE_0___default().element(elm[0].querySelector('bs5-accordion-header, data-bs5-accordion-header, [bs5-accordion-header], [data-bs5-accordion-header]'));
        elem.html('');
        elem.append(heading);
      }
    });
  });
  this.require = '^bs5AccordionGroup';
});
var MODULE_NAME = 'ng1bs5.accordion';
angular__WEBPACK_IMPORTED_MODULE_0___default().module(MODULE_NAME, [_services_dom_service__WEBPACK_IMPORTED_MODULE_1__["default"]]).constant('bs5AccordionConfig', ACCORDION_CONFIG).controller('Bs5AccordionController', AccordionController).directive('bs5Accordion', function () {
  return new AccordionDirective();
}).directive('bs5AccordionGroup', function () {
  return new AccordionGroupDirective();
}).directive('bs5AccordionHeading', function () {
  return new AccordionHeadingDirective();
}).directive('bs5AccordionTransclude', function () {
  return new AccordionTranscludeDirective();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MODULE_NAME);

/***/ }),

/***/ "./src/components/alert/alert.module.js":
/*!**********************************************!*\
  !*** ./src/components/alert/alert.module.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var TEMPLATE = "\n<div class=\"alert alert-{{type}} alert-dismissible d-flex align-items-center\" role=\"alert\">\n    <ng-transclude></ng-transclude>\n    <button ng-if=\"dismissible\" ng-click=\"close()\" type=\"button\" class=\"btn-close\"></button>\n</div>";
var AlertDirective = /*#__PURE__*/_createClass(function AlertDirective($timeout) {
  var _this = this;
  _classCallCheck(this, AlertDirective);
  _defineProperty(this, "link", function (scope, elm) {
    var destroyed = false;
    var timeout = null;
    scope.type = scope.type || 'light';
    scope.close = function () {
      if (!destroyed) {
        if (timeout) {
          _this.$timeout.cancel(timeout);
        }
        elm.remove();
        scope.$destroy();
        destroyed = true;
      }
    };
    if (angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(scope.timeout)) {
      timeout = _this.$timeout(scope.close, scope.timeout, false);
    }
  });
  this.$timeout = $timeout;
  this.restrict = 'E';
  this.transclude = true;
  this.template = TEMPLATE;
  this.scope = {
    type: '@?',
    dismissible: '=?',
    timeout: '=?',
    onDestroy: '&?'
  };
});
_defineProperty(AlertDirective, "$inject", ['$timeout']);
var MODULE_NAME = 'ng1bs5.alert';
angular__WEBPACK_IMPORTED_MODULE_0___default().module(MODULE_NAME, []).directive('bs5Alert', function () {
  return _construct(AlertDirective, _toConsumableArray(AlertDirective.$inject));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MODULE_NAME);

/***/ }),

/***/ "./src/components/autocomplete/autocomplete.module.js":
/*!************************************************************!*\
  !*** ./src/components/autocomplete/autocomplete.module.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_dom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dom.service */ "./src/services/dom.service.js");
/* harmony import */ var _services_position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/position.service */ "./src/services/position.service.js");




// TODO: Implement Autocomplete component following the pattern from the original ES5 code
// Key features:
// - bs5Autocomplete directive for input fields
// - bs5AutocompleteList directive for displaying results
// - Remote and local datasource support
// - Keyboard navigation

var MODULE_NAME = 'ng1bs5.autocomplete';
angular__WEBPACK_IMPORTED_MODULE_0___default().module(MODULE_NAME, [_services_dom_service__WEBPACK_IMPORTED_MODULE_1__["default"], _services_position_service__WEBPACK_IMPORTED_MODULE_2__["default"]]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MODULE_NAME);

/***/ }),

/***/ "./src/components/collapse/collapse.module.js":
/*!****************************************************!*\
  !*** ./src/components/collapse/collapse.module.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
collapseDirectiveFactory.$inject = ["$timeout", "$animate"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var CollapseDirective = /*#__PURE__*/_createClass(["$timeout", "$animate", function CollapseDirective($timeout, $animate) {
  'ngInject';

  var _this = this;
  _classCallCheck(this, CollapseDirective);
  _defineProperty(this, "link", function (scope, elm, attrs) {
    elm.addClass('collapse');
    var horizontal = scope.$eval(attrs.horizontal);
    if (horizontal) {
      elm.addClass('collapse-horizontal');
    }
    var width = null;
    var height = null;
    elm.addClass('show');
    _this.$timeout(function () {
      width = elm[0].offsetWidth;
      height = elm[0].offsetHeight;
      if (scope.collapsed) {
        elm.removeClass('show');
      }
    }, 0, false);
    scope.$watch(function () {
      return elm[0].offsetHeight;
    }, function (value) {
      if (elm.hasClass('show') && !elm.hasClass('collapsing') && value !== height) {
        height = value;
      }
    });
    var animate = function animate(fn) {
      if (horizontal) {
        elm[0].style.height = height + 'px';
        if (scope.collapsed) {
          elm[0].style.width = width + 'px';
          elm.addClass('collapsing show');
          _this.$timeout(function () {
            elm[0].style.width = null;
            var d = window.getComputedStyle(elm[0]).transitionDuration;
            var duration = d.endsWith('ms') ? parseFloat(d.substring(0, d.length - 2)) : parseFloat(d.substring(0, d.length - 1)) * 1000;
            _this.$timeout(function () {
              elm.removeClass('collapsing show');
              elm[0].style.height = null;
              fn();
            }, duration, false);
          }, 0, false);
        } else {
          elm.addClass('collapsing show');
          _this.$timeout(function () {
            elm[0].style.width = width + 'px';
            var d = window.getComputedStyle(elm[0]).transitionDuration;
            var duration = d.endsWith('ms') ? parseFloat(d.substring(0, d.length - 2)) : parseFloat(d.substring(0, d.length - 1)) * 1000;
            _this.$timeout(function () {
              elm.removeClass('collapsing');
              elm[0].style.width = null;
              elm[0].style.height = null;
              fn();
            }, duration, false);
          }, 0, false);
        }
      } else {
        if (scope.collapsed) {
          elm[0].style.height = height + 'px';
          elm.addClass('collapsing show');
          _this.$timeout(function () {
            elm[0].style.height = null;
            var d = window.getComputedStyle(elm[0]).transitionDuration;
            var duration = d.endsWith('ms') ? parseFloat(d.substring(0, d.length - 2)) : parseFloat(d.substring(0, d.length - 1)) * 1000;
            _this.$timeout(function () {
              elm.removeClass('collapsing show');
              fn();
            }, duration, false);
          }, 0, false);
        } else {
          elm.addClass('collapsing show');
          _this.$timeout(function () {
            elm[0].style.height = height + 'px';
            var d = window.getComputedStyle(elm[0]).transitionDuration;
            var duration = d.endsWith('ms') ? parseFloat(d.substring(0, d.length - 2)) : parseFloat(d.substring(0, d.length - 1)) * 1000;
            _this.$timeout(function () {
              elm.removeClass('collapsing');
              elm[0].style.height = null;
              fn();
            }, duration, false);
          }, 0, false);
        }
      }
    };
    scope.$watch('collapsed', function ($new, $old) {
      if (!angular__WEBPACK_IMPORTED_MODULE_0___default().equals($new, $old)) {
        if (!elm.hasClass('collapsing')) {
          if ($new && angular__WEBPACK_IMPORTED_MODULE_0___default().isDefined($old)) {
            scope.onCollapse();
            animate(scope.onCollapsed);
          } else if (angular__WEBPACK_IMPORTED_MODULE_0___default().isDefined($old)) {
            scope.onExpand();
            animate(scope.onExpanded);
          }
        }
      }
    });
  });
  this.$timeout = $timeout;
  this.$animate = $animate;
  this.restrict = 'A';
  this.scope = {
    collapsed: '=bs5Collapse',
    onCollapsed: '&',
    onExpanded: '&',
    onExpand: '&',
    onCollapse: '&'
  };
}]);
var MODULE_NAME = 'ng1bs5.collapse';

// Factory function - babel-plugin-angularjs-annotate will handle DI
function collapseDirectiveFactory($timeout, $animate) {
  'ngInject';

  return new CollapseDirective($timeout, $animate);
}
angular__WEBPACK_IMPORTED_MODULE_0___default().module(MODULE_NAME, []).directive('bs5Collapse', collapseDirectiveFactory);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MODULE_NAME);

/***/ }),

/***/ "./src/components/datepicker/datepicker.module.js":
/*!********************************************************!*\
  !*** ./src/components/datepicker/datepicker.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_dom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dom.service */ "./src/services/dom.service.js");
/* harmony import */ var _services_position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/position.service */ "./src/services/position.service.js");




// TODO: Implement Datepicker component following the pattern from the original ES5 code
// Key features:
// - Calendar widget with month/year navigation
// - Date selection with min/max date support
// - Input field integration

var MODULE_NAME = 'ng1bs5.datepicker';
angular__WEBPACK_IMPORTED_MODULE_0___default().module(MODULE_NAME, [_services_dom_service__WEBPACK_IMPORTED_MODULE_1__["default"], _services_position_service__WEBPACK_IMPORTED_MODULE_2__["default"]]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MODULE_NAME);

/***/ }),

/***/ "./src/components/dropdown/dropdown_module.js":
/*!****************************************************!*\
  !*** ./src/components/dropdown/dropdown_module.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * bs5 Dropdown Component
 * Bootstrap 5 Dropdown for AngularJS
 *
 * Based on Bootstrap 5.0 Dropdown API
 * https://getbootstrap.com/docs/5.0/components/dropdowns/
 */


var MODULE_NAME = 'ng1bs5.dropdown';

/**
 * Dropdown Directive
 * Main dropdown container directive
 *
 * @usage:
 * <div bs5-dropdown>
 *   <button bs5-dropdown-toggle>Toggle</button>
 *   <ul bs5-dropdown-menu>
 *     <li><a class="dropdown-item" href="#">Action</a></li>
 *   </ul>
 * </div>
 */
var DropdownDirective = /*#__PURE__*/function () {
  function DropdownDirective() {
    'ngInject';

    _classCallCheck(this, DropdownDirective);
    this.restrict = 'A';
    this.controller = DropdownController;
    this.controllerAs = '$dropdown';
    this.bindToController = true;
    this.scope = {
      autoClose: '@?bs5DropdownAutoClose',
      offset: '@?bs5DropdownOffset',
      boundary: '@?bs5DropdownBoundary',
      reference: '@?bs5DropdownReference',
      display: '@?bs5DropdownDisplay',
      onShow: '&?bs5DropdownOnShow',
      onShown: '&?bs5DropdownOnShown',
      onHide: '&?bs5DropdownOnHide',
      onHidden: '&?bs5DropdownOnHidden'
    };
  }
  return _createClass(DropdownDirective, null, [{
    key: "factory",
    value: function factory() {
      return new DropdownDirective();
    }
  }]);
}();
/**
 * Dropdown Controller
 * Manages dropdown state and behavior
 */
var DropdownController = /*#__PURE__*/function () {
  DropdownController.$inject = ["$element", "$scope", "$document", "$timeout"];
  function DropdownController($element, $scope, $document, $timeout) {
    'ngInject';

    _classCallCheck(this, DropdownController);
    this.$element = $element;
    this.$scope = $scope;
    this.$document = $document;
    this.$timeout = $timeout;
    this.isOpen = false;
    this.toggleElement = null;
    this.menuElement = null;
    this.documentClickHandler = null;
    this.keydownHandler = null;

    // Configuration
    this.config = {
      autoClose: this.autoClose || 'true',
      offset: this.offset || '0,2',
      boundary: this.boundary || 'clippingParents',
      reference: this.reference || 'toggle',
      display: this.display || 'dynamic'
    };

    // Add dropdown class
    this.$element.addClass('dropdown');
  }
  return _createClass(DropdownController, [{
    key: "$onDestroy",
    value: function $onDestroy() {
      this.hide();
      this.removeEventListeners();
    }

    /**
     * Register toggle element
     */
  }, {
    key: "registerToggle",
    value: function registerToggle(element) {
      this.toggleElement = element;
    }

    /**
     * Register menu element
     */
  }, {
    key: "registerMenu",
    value: function registerMenu(element) {
      this.menuElement = element;
    }

    /**
     * Toggle dropdown visibility
     */
  }, {
    key: "toggle",
    value: function toggle(event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (this.isOpen) {
        this.hide();
      } else {
        this.show();
      }
    }

    /**
     * Show dropdown
     */
  }, {
    key: "show",
    value: function show() {
      var _this = this;
      if (this.isOpen || !this.menuElement) return;

      // Fire show event
      if (this.onShow) {
        this.onShow();
      }
      this.isOpen = true;

      // Update aria attributes
      if (this.toggleElement) {
        this.toggleElement.attr('aria-expanded', 'true');
      }

      // Show menu
      this.menuElement.addClass('show');
      this.$element.addClass('show');

      // Position menu
      this.positionMenu();

      // Setup event listeners
      this.setupEventListeners();

      // Fire shown event after transition
      this.$timeout(function () {
        if (_this.onShown) {
          _this.onShown();
        }
      }, 150);
      this.$scope.$applyAsync();
    }

    /**
     * Hide dropdown
     */
  }, {
    key: "hide",
    value: function hide() {
      var _this2 = this;
      if (!this.isOpen) return;

      // Fire hide event
      if (this.onHide) {
        this.onHide();
      }
      this.isOpen = false;

      // Update aria attributes
      if (this.toggleElement) {
        this.toggleElement.attr('aria-expanded', 'false');
      }

      // Hide menu
      this.menuElement.removeClass('show');
      this.$element.removeClass('show');

      // Remove event listeners
      this.removeEventListeners();

      // Fire hidden event after transition
      this.$timeout(function () {
        if (_this2.onHidden) {
          _this2.onHidden();
        }
      }, 150);
      this.$scope.$applyAsync();
    }

    /**
     * Position menu relative to toggle
     */
  }, {
    key: "positionMenu",
    value: function positionMenu() {
      if (!this.menuElement || this.config.display === 'static') return;
      var toggle = this.toggleElement[0];
      var menu = this.menuElement[0];
      if (!toggle || !menu) return;

      // Get direction classes
      var isDropup = this.$element.hasClass('dropup');
      var isDropend = this.$element.hasClass('dropend');
      var isDropstart = this.$element.hasClass('dropstart');

      // Reset positioning
      menu.style.top = '';
      menu.style.left = '';
      menu.style.right = '';
      menu.style.bottom = '';

      // Simple positioning without Popper
      var toggleRect = toggle.getBoundingClientRect();
      var menuRect = menu.getBoundingClientRect();
      if (isDropup) {
        // Position above
        menu.style.bottom = '100%';
      } else if (isDropend) {
        // Position to right
        menu.style.left = '100%';
        menu.style.top = '0';
      } else if (isDropstart) {
        // Position to left
        menu.style.right = '100%';
        menu.style.top = '0';
      } else {
        // Default: position below
        menu.style.top = '100%';
      }

      // Apply offset if specified
      if (this.config.offset && this.config.offset !== '0,2') {
        var _this$config$offset$s = this.config.offset.split(',').map(function (v) {
            return parseInt(v.trim());
          }),
          _this$config$offset$s2 = _slicedToArray(_this$config$offset$s, 2),
          x = _this$config$offset$s2[0],
          y = _this$config$offset$s2[1];
        if (x) menu.style.marginLeft = "".concat(x, "px");
        if (y) menu.style.marginTop = "".concat(y, "px");
      }
    }

    /**
     * Setup document click and keyboard handlers
     */
  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this3 = this;
      // Document click handler
      this.documentClickHandler = function (event) {
        var target = angular__WEBPACK_IMPORTED_MODULE_0___default().element(event.target);
        var clickedInside = _this3.$element[0].contains(event.target);
        var clickedOnToggle = _this3.toggleElement && _this3.toggleElement[0].contains(event.target);
        var clickedOnMenu = _this3.menuElement && _this3.menuElement[0].contains(event.target);

        // Handle autoClose behavior
        var autoClose = _this3.config.autoClose;
        if (autoClose === 'false') {
          // Manual close only
          return;
        } else if (autoClose === 'outside') {
          // Close only on outside clicks
          if (!clickedInside) {
            _this3.hide();
          }
        } else if (autoClose === 'inside') {
          // Close only on inside clicks
          if (clickedOnMenu && !clickedOnToggle) {
            _this3.hide();
          }
        } else {
          // Default: close on any click (true)
          if (!clickedOnToggle) {
            _this3.hide();
          }
        }
      };

      // Keyboard handler
      this.keydownHandler = function (event) {
        if (!_this3.isOpen) return;

        // ESC key closes dropdown
        if (event.key === 'Escape' || event.keyCode === 27) {
          event.preventDefault();
          _this3.hide();
          if (_this3.toggleElement) {
            _this3.toggleElement[0].focus();
          }
          return;
        }

        // Arrow navigation
        var items = _this3.menuElement[0].querySelectorAll('.dropdown-item:not(.disabled):not(:disabled)');
        if (items.length === 0) return;
        var currentIndex = Array.from(items).findIndex(function (item) {
          return item === document.activeElement;
        });
        if (event.key === 'ArrowDown' || event.keyCode === 40) {
          event.preventDefault();
          var nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
          items[nextIndex].focus();
        } else if (event.key === 'ArrowUp' || event.keyCode === 38) {
          event.preventDefault();
          var prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
          items[prevIndex].focus();
        }
      };

      // Delay to prevent immediate trigger
      this.$timeout(function () {
        _this3.$document.on('click', _this3.documentClickHandler);
        _this3.$document.on('keydown', _this3.keydownHandler);
      }, 0);
    }

    /**
     * Remove event listeners
     */
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      if (this.documentClickHandler) {
        this.$document.off('click', this.documentClickHandler);
        this.documentClickHandler = null;
      }
      if (this.keydownHandler) {
        this.$document.off('keydown', this.keydownHandler);
        this.keydownHandler = null;
      }
    }

    /**
     * Update dropdown position
     */
  }, {
    key: "update",
    value: function update() {
      if (this.isOpen) {
        this.positionMenu();
      }
    }
  }]);
}();
/**
 * Dropdown Toggle Directive
 * Marks the toggle button/link
 *
 * @usage:
 * <button bs5-dropdown-toggle>Toggle</button>
 */
var DropdownToggleDirective = /*#__PURE__*/function () {
  function DropdownToggleDirective() {
    'ngInject';

    _classCallCheck(this, DropdownToggleDirective);
    this.restrict = 'A';
    this.require = '^bs5Dropdown';
  }
  return _createClass(DropdownToggleDirective, [{
    key: "link",
    value: function link(scope, element, attrs, dropdownCtrl) {
      // Register with parent dropdown
      dropdownCtrl.registerToggle(element);

      // Add dropdown-toggle class
      element.addClass('dropdown-toggle');

      // Set initial aria-expanded
      element.attr('aria-expanded', 'false');

      // Click handler
      element.on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        dropdownCtrl.toggle(event);
      });

      // Cleanup
      scope.$on('$destroy', function () {
        element.off('click');
      });
    }
  }], [{
    key: "factory",
    value: function factory() {
      return new DropdownToggleDirective();
    }
  }]);
}();
/**
 * Dropdown Menu Directive
 * Marks the dropdown menu container
 *
 * @usage:
 * <ul bs5-dropdown-menu>
 *   <li><a class="dropdown-item" href="#">Item</a></li>
 * </ul>
 */
var DropdownMenuDirective = /*#__PURE__*/function () {
  function DropdownMenuDirective() {
    'ngInject';

    _classCallCheck(this, DropdownMenuDirective);
    this.restrict = 'A';
    this.require = '^bs5Dropdown';
  }
  return _createClass(DropdownMenuDirective, [{
    key: "link",
    value: function link(scope, element, attrs, dropdownCtrl) {
      // Register with parent dropdown
      dropdownCtrl.registerMenu(element);

      // Add dropdown-menu class
      element.addClass('dropdown-menu');

      // Handle menu item clicks based on autoClose
      var clickHandler = function clickHandler(event) {
        var target = event.target;
        var isDropdownItem = target.classList.contains('dropdown-item') || target.closest('.dropdown-item');
        if (isDropdownItem) {
          var autoClose = dropdownCtrl.config.autoClose;

          // Don't close if autoClose is false or outside
          if (autoClose === 'false' || autoClose === 'outside') {
            event.stopPropagation();
          }
        }
      };
      element.on('click', clickHandler);

      // Cleanup
      scope.$on('$destroy', function () {
        element.off('click', clickHandler);
      });
    }
  }], [{
    key: "factory",
    value: function factory() {
      return new DropdownMenuDirective();
    }
  }]);
}();
/**
 * Register module
 */
angular__WEBPACK_IMPORTED_MODULE_0___default().module(MODULE_NAME, []).directive('bs5Dropdown', DropdownDirective.factory).directive('bs5DropdownToggle', DropdownToggleDirective.factory).directive('bs5DropdownMenu', DropdownMenuDirective.factory);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MODULE_NAME);

/***/ }),

/***/ "./src/components/icons/icons.module.js":
/*!**********************************************!*\
  !*** ./src/components/icons/icons.module.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var IconDirective = /*#__PURE__*/_createClass(function IconDirective($http, $cacheFactory) {
  var _this = this;
  _classCallCheck(this, IconDirective);
  _defineProperty(this, "link", function (scope, elm, attrs) {
    var svg = null;
    var promise = null;
    var cache = _this.$cacheFactory.get('icons') || _this.$cacheFactory('icons');
    var load = function load(icon) {
      var doRemote = function doRemote() {
        return _this.$http({
          url: "https://icons.getbootstrap.com/assets/icons/".concat(icon, ".svg")
        }).then(function (res) {
          if (svg) {
            svg.remove();
          }
          svg = angular__WEBPACK_IMPORTED_MODULE_0___default().element(res.data);
          svg.css({
            width: scope.size + 'px',
            height: scope.size + 'px'
          });
          elm.append(svg);
          cache.put(icon, res.data);
        }, function () {
          console.error("Icon '".concat(icon, "' does not exist"));
        });
      };
      if (svg) {
        svg.remove();
      }
      var html = cache.get(icon);
      if (html) {
        svg = angular__WEBPACK_IMPORTED_MODULE_0___default().element(html);
        svg.css({
          width: scope.size + 'px',
          height: scope.size + 'px'
        });
        elm.append(svg);
      } else {
        promise = promise ? promise.then(doRemote) : doRemote();
      }
    };
    attrs.$observe('color', function (color) {
      elm.css('color', color);
    });
    attrs.$observe('icon', function (icon) {
      icon = icon.replace(/^(bi|bi-|bi bi-)/g, '');
      load(icon);
    });
    scope.$watch('size', function ($new, $old) {
      if (!angular__WEBPACK_IMPORTED_MODULE_0___default().equals($new, $old) && svg && angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber($new)) {
        svg.css({
          width: $new + 'px',
          height: $new + 'px'
        });
      }
    });
  });
  this.$http = $http;
  this.$cacheFactory = $cacheFactory;
  this.restrict = 'E';
  this.scope = {
    size: '=?'
  };
});
_defineProperty(IconDirective, "$inject", ['$http', '$cacheFactory']);
var MODULE_NAME = 'ng1bs5.icons';
angular__WEBPACK_IMPORTED_MODULE_0___default().module(MODULE_NAME, []).directive('bs5Icon', function () {
  return _construct(IconDirective, _toConsumableArray(IconDirective.$inject));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MODULE_NAME);

/***/ }),

/***/ "./src/components/loading-overlay/loading-overlay.module.js":
/*!******************************************************************!*\
  !*** ./src/components/loading-overlay/loading-overlay.module.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);


// TODO: Implement Loading Overlay component following the pattern from the completed components
// Key features:
// - $bs5LoadingOverlay service for programmatic control
// - bs5LoadingOverlay directive for declarative use
// - Full-screen and container-specific overlays
// - Customizable spinner styles
// - Custom loading messages
// - z-index management
// - Multiple overlays support
// - Promise integration (show during async operations)
// - Backdrop blur/opacity options

var MODULE_NAME = 'ng1bs5.loadingOverlay';
angular__WEBPACK_IMPORTED_MODULE_0___default().module(MODULE_NAME, []);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MODULE_NAME);

/***/ }),

/***/ "./src/components/modal/modal.module.js":
/*!**********************************************!*\
  !*** ./src/components/modal/modal.module.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_dom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dom.service */ "./src/services/dom.service.js");
/* harmony import */ var _services_position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/position.service */ "./src/services/position.service.js");




// TODO: Implement Modal component following the pattern from the original ES5 code
// Key features:
// - $bs5Modal service factory
// - $$modalStack and $$modalBackdrop services
// - Support for templateUrl and template
// - Controller binding
// - Promise-based API

var MODULE_NAME = 'ng1bs5.modal';
angular__WEBPACK_IMPORTED_MODULE_0___default().module(MODULE_NAME, [_services_dom_service__WEBPACK_IMPORTED_MODULE_1__["default"], _services_position_service__WEBPACK_IMPORTED_MODULE_2__["default"]]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MODULE_NAME);

/***/ }),

/***/ "./src/components/offcanvas/offcanvas.module.js":
/*!******************************************************!*\
  !*** ./src/components/offcanvas/offcanvas.module.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_dom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dom.service */ "./src/services/dom.service.js");



// TODO: Implement Offcanvas component following the pattern from the completed components
// Key features:
// - $bs5Offcanvas service factory
// - Four placement options (start, end, top, bottom)
// - Backdrop support (static, clickable, none)
// - Keyboard support (ESC to close)
// - Body scroll behavior
// - Template and templateUrl support
// - Controller binding
// - Promise-based API
// - Animation support

var MODULE_NAME = 'ng1bs5.offcanvas';
angular__WEBPACK_IMPORTED_MODULE_0___default().module(MODULE_NAME, [_services_dom_service__WEBPACK_IMPORTED_MODULE_1__["default"]]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MODULE_NAME);

/***/ }),

/***/ "./src/components/pagination/pagination.module.js":
/*!********************************************************!*\
  !*** ./src/components/pagination/pagination.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var PAGINATION_CONFIG = {
  displayPagesRange: 5,
  firstPageText: '<<',
  previousPageText: '<',
  nextPageText: '>',
  lastPageText: '>>',
  withFirstLast: true,
  withPreviousNext: true,
  size: null,
  align: 'left',
  useIcons: true,
  lastPageIcon: 'chevron-bar-right',
  firstPageIcon: 'chevron-bar-left',
  previousPageIcon: 'chevron-left',
  nextPageIcon: 'chevron-right',
  pivot: false
};
var TEMPLATE = "\n<nav>\n    <ul class=\"pagination {{size === 'lg' || size === 'sm' ? 'pagination-' + size : ''}}\" \n        ng-class=\"{'justify-content-center': align === 'center', 'justify-content-end': align === 'right'}\">\n        <li class=\"page-item\" \n            ng-if=\"withFirstLast && numberPages > pageRange\" \n            ng-disabled=\"currentPage <= 1\" \n            ng-class=\"{disabled: currentPage <= 1}\">\n            <a class=\"page-link\" href=\"#\" ng-click=\"changePage(1, $event)\">{{firstPageText}}</a>\n        </li>\n        <li class=\"page-item\" \n            ng-if=\"withPreviousNext\" \n            ng-disabled=\"currentPage <= 1\" \n            ng-class=\"{disabled: currentPage <= 1}\">\n            <a class=\"page-link\" href=\"#\" ng-click=\"changePage(currentPage - 1, $event)\">{{previousPageText}}</a>\n        </li>\n        <li class=\"page-item\" ng-repeat-start=\"page in pages\" ng-if=\"page !== currentPage\">\n            <a class=\"page-link\" href=\"#\" ng-click=\"changePage(page, $event)\">{{page}}</a>\n        </li>\n        <li class=\"page-item active\" ng-repeat-end ng-if=\"page === currentPage\">\n            <a class=\"page-link\" href=\"#\" ng-click=\"$event.preventDefault()\">{{page}}</a>\n        </li>\n        <li class=\"page-item\" \n            ng-if=\"withPreviousNext\" \n            ng-disabled=\"currentPage >= numberPages\" \n            ng-class=\"{disabled: currentPage >= numberPages}\">\n            <a class=\"page-link\" href=\"#\" ng-click=\"changePage(currentPage + 1, $event)\">{{nextPageText}}</a>\n        </li>\n        <li class=\"page-item\" \n            ng-if=\"withFirstLast && numberPages > pageRange\" \n            ng-disabled=\"currentPage >= numberPages\" \n            ng-class=\"{disabled: currentPage >= numberPages}\">\n            <a class=\"page-link\" href=\"#\" ng-click=\"changePage(numberPages, $event)\">{{lastPageText}}</a>\n        </li>\n    </ul>\n</nav>";
var PaginationDirective = /*#__PURE__*/_createClass(function PaginationDirective(bs5PaginationConfig) {
  var _this = this;
  _classCallCheck(this, PaginationDirective);
  _defineProperty(this, "link", function (scope) {
    scope.pageRange = scope.pageRange || _this.config.displayPagesRange;
    scope.withFirstLast = angular__WEBPACK_IMPORTED_MODULE_0___default().isDefined(scope.withFirstLast) ? scope.withFirstLast : _this.config.withFirstLast;
    scope.withPreviousNext = angular__WEBPACK_IMPORTED_MODULE_0___default().isDefined(scope.withPreviousNext) ? scope.withPreviousNext : _this.config.withPreviousNext;
    scope.pageSize = angular__WEBPACK_IMPORTED_MODULE_0___default().isDefined(scope.pageSize) ? scope.pageSize : _this.config.pageSize;
    scope.firstPageText = scope.firstPageText || _this.config.firstPageText;
    scope.previousPageText = scope.previousPageText || _this.config.previousPageText;
    scope.nextPageText = scope.nextPageText || _this.config.nextPageText;
    scope.lastPageText = scope.lastPageText || _this.config.lastPageText;
    scope.size = scope.size || _this.config.size;
    scope.align = scope.align || _this.config.align;
    scope.numberPages = Math.ceil(scope.numberItems / scope.pageSize);
    scope.pages = [];
    scope.pivot = angular__WEBPACK_IMPORTED_MODULE_0___default().isDefined(scope.pivot) ? scope.pivot : _this.config.pivot;
    var range = function range(r1, r2) {
      var ret = [];
      for (var i = r1; i < r2; i++) {
        ret.push(i);
      }
      return ret;
    };
    var pagesLtRange = function pagesLtRange() {
      return scope.numberPages < scope.pageRange;
    };
    var displayPages = function displayPages() {
      var page = scope.currentPage;
      var r = page % scope.pageRange;
      var r2 = page + (scope.pageRange - r);
      var r1 = page - r;
      if (pagesLtRange()) {
        r1 = 0;
        r2 = scope.numberPages;
      } else if (r2 > scope.numberPages) {
        r2 = scope.numberPages;
        r1 = r2 - scope.pageRange;
      }
      if (!pagesLtRange() && scope.pivot) {
        var pivot = Math.ceil(scope.pageRange / 2);
        if (page >= pivot) {
          r1 = pagesLtRange() ? 0 : page - pivot;
          r2 = r1 + (pagesLtRange() ? scope.numberPages : scope.pageRange);
          if (r2 > scope.numberPages) {
            r2 = scope.numberPages;
            r1 = r2 - (pagesLtRange() ? scope.numberPages : scope.pageRange);
          }
        }
      }
      scope.pages = range(r1 + 1, r2 + 1);
    };
    scope.$watch('numberItems', function (value, old) {
      if (!angular__WEBPACK_IMPORTED_MODULE_0___default().equals(value, old)) {
        scope.numberPages = Math.ceil(scope.numberItems / scope.pageSize);
        if (scope.currentPage > scope.numberPages) {
          scope.pages = [];
          scope.currentPage = scope.numberPages;
          displayPages();
        }
        if (scope.pageChange) {
          scope.pageChange({
            $page: scope.currentPage,
            $pageSize: scope.pageSize
          });
        }
      }
    });
    scope.$watch('pageSize', function (value, old) {
      if (!angular__WEBPACK_IMPORTED_MODULE_0___default().equals(value, old)) {
        scope.numberPages = Math.ceil(scope.numberItems / scope.pageSize);
        if (scope.currentPage > scope.numberPages) {
          displayPages();
        }
        if (scope.pageChange) {
          scope.pageChange({
            $page: scope.currentPage,
            $pageSize: scope.pageSize
          });
        }
      }
    });
    scope.$watch('currentPage', function (value, old) {
      if (!angular__WEBPACK_IMPORTED_MODULE_0___default().equals(value, old)) {
        displayPages();
        if (scope.pageChange) {
          scope.pageChange({
            $page: scope.currentPage,
            $pageSize: scope.pageSize
          });
        }
      }
    });
    scope.changePage = function (page, evt) {
      evt.preventDefault();
      scope.currentPage = page;
    };
    displayPages();
  });
  this.config = bs5PaginationConfig;
  this.restrict = 'E';
  this.template = TEMPLATE;
  this.scope = {
    pageChange: '&?',
    currentPage: '=',
    numberItems: '=',
    pageSize: '=',
    pageRange: '=?',
    withFirstLast: '=?',
    withPreviousNext: '=?',
    firstPageText: '@?',
    lastPageText: '@?',
    previousPageText: '@?',
    nextPageText: '@?',
    size: '@?',
    icons: '=?',
    firstPageIcon: '@?',
    lastPageIcon: '@?',
    nextPageIcon: '@?',
    previousPageIcon: '@?',
    align: '@?',
    pivot: '=?'
  };
});
_defineProperty(PaginationDirective, "$inject", ['bs5PaginationConfig']);
var MODULE_NAME = 'ng1bs5.pagination';
angular__WEBPACK_IMPORTED_MODULE_0___default().module(MODULE_NAME, []).constant('bs5PaginationConfig', PAGINATION_CONFIG).directive('bs5Pagination', function () {
  return _construct(PaginationDirective, _toConsumableArray(PaginationDirective.$inject));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MODULE_NAME);

/***/ }),

/***/ "./src/components/popover/popover.module.js":
/*!**************************************************!*\
  !*** ./src/components/popover/popover.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_dom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dom.service */ "./src/services/dom.service.js");
/* harmony import */ var _services_position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/position.service */ "./src/services/position.service.js");
popoverDirectiveFactory.$inject = ["$templateCache", "$compile", "$http", "$q", "$timeout", "$bs5Position", "$bs5DOM", "$controller"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var POPOVER_TEMPLATE = "\n<div class=\"popover\">\n    <div class=\"popover-arrow\"></div>\n    <div class=\"popover-header\">{{title}}</div>\n    <div class=\"popover-body\"></div>\n</div>";

/**
 * Popover class to manage individual popover instances
 */
var Popover = /*#__PURE__*/function () {
  function Popover(popoverEl, services, config) {
    _classCallCheck(this, Popover);
    this.popoverEl = popoverEl;
    this.services = services;
    this.config = config;
    this.el = null;
    this.isVisible = false;
  }
  return _createClass(Popover, [{
    key: "show",
    value: function show() {
      var _this = this;
      this.services.$timeout(function () {
        _this.el = angular__WEBPACK_IMPORTED_MODULE_0___default().copy(_this.popoverEl);
        var arrow = angular__WEBPACK_IMPORTED_MODULE_0___default().element(_this.el[0].querySelector('.popover-arrow'));
        _this.config.scope.popover = _this;
        _this.config.scope.close = function (data) {
          _this.hide();
          _this.config.deferred.resolve(data);
        };
        _this.config.scope.dismiss = function (reason) {
          _this.hide();
          _this.config.deferred.reject(reason);
        };
        _this.services.$compile(_this.el)(_this.config.scope);
        if (_this.config.popoverController) {
          var ctrl = _this.services.$controller(_this.config.popoverController, {
            $scope: _this.config.scope
          });
          if (angular__WEBPACK_IMPORTED_MODULE_0___default().isFunction(ctrl.$onInit)) {
            ctrl.$onInit();
          }
        }
        _this.services.$timeout(function () {
          _this.el.css({
            'position': 'absolute'
          });
          arrow.css('position', 'absolute');
          _this.config.container.append(_this.el);
          _this.services.$timeout(function () {
            var css = _this.services.$bs5Position.translateTooltip(_this.config.elm, _this.el, _this.config.container, _this.config.placement, _this.config.fallbackPlacements, _this.config.offset);
            _this.el.addClass(css.placementClass);
            _this.el.css(css.tip);
            arrow.css(css.arrow);
            if (_this.config.animate) {
              _this.services.$bs5DOM.fade(_this.el);
            }
            _this.isVisible = true;
          });
        });
      }, this.getShowDelay());
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this2 = this;
      var removeEl = function removeEl() {
        if (_this2.el) {
          _this2.el.remove();
          _this2.el = null;
          _this2.isVisible = false;
        }
      };
      if (this.el) {
        this.services.$timeout(function () {
          if (_this2.config.animate) {
            _this2.services.$bs5DOM.fade(_this2.el, removeEl);
          } else {
            removeEl();
          }
        }, this.getHideDelay());
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isVisible) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: "getShowDelay",
    value: function getShowDelay() {
      var delay = this.config.delay;
      return angular__WEBPACK_IMPORTED_MODULE_0___default().isObject(delay) ? angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(delay.show) ? delay.show : 0 : angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(delay) ? delay : 0;
    }
  }, {
    key: "getHideDelay",
    value: function getHideDelay() {
      var delay = this.config.delay;
      return angular__WEBPACK_IMPORTED_MODULE_0___default().isObject(delay) ? angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(delay.hide) ? delay.hide : 0 : angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(delay) ? delay : 0;
    }
  }]);
}();
/**
 * Popover Directive
 * Creates Bootstrap 5 popovers with advanced features
 */
var PopoverDirective = /*#__PURE__*/_createClass(["$templateCache", "$compile", "$http", "$q", "$timeout", "$bs5Position", "$bs5DOM", "$controller", function PopoverDirective($templateCache, $compile, $http, $q, $timeout, $bs5Position, $bs5DOM, $controller) {
  'ngInject';

  var _this3 = this;
  _classCallCheck(this, PopoverDirective);
  _defineProperty(this, "link", function (scope, elm, attrs) {
    var deferred = _this3.$q.defer();

    // Support both bs5-popover and bs-popover directive names
    // Support Bootstrap-style data-bs-* attributes
    var getAttr = function getAttr(name, bsName) {
      return attrs[bsName] || attrs[name] || attrs['bs' + name.charAt(0).toUpperCase() + name.slice(1)];
    };

    // Parse configuration from attributes
    var config = {
      animate: attrs.animate ? scope.$eval(attrs.animate) : true,
      delay: scope.$eval(attrs.delay || attrs.bsDelay),
      html: scope.$eval(attrs.html || attrs.bsHtml) || false,
      placement: ['left', 'top', 'bottom', 'right'].includes(attrs.placement || attrs.bsPlacement) ? attrs.placement || attrs.bsPlacement : 'right',
      title: attrs.title || attrs.bsTitle || '',
      trigger: ['focus', 'hover', 'click'].includes(attrs.trigger || attrs.bsTrigger) ? attrs.trigger || attrs.bsTrigger : 'click',
      offset: scope.$eval(attrs.offset || attrs.bsOffset) || [0, 0],
      fallbackPlacements: scope.$eval(attrs.fallbackPlacements || attrs.bsFallbackPlacements) || ['left', 'right', 'top', 'bottom'],
      container: attrs.container || attrs.bsContainer ? angular__WEBPACK_IMPORTED_MODULE_0___default().element(document.querySelector(attrs.container || attrs.bsContainer)) : angular__WEBPACK_IMPORTED_MODULE_0___default().element(document.body),
      popoverController: attrs.popoverController || attrs.bsController
    };

    // Validate offset
    if (!angular__WEBPACK_IMPORTED_MODULE_0___default().isArray(config.offset) || config.offset.length !== 2 || !angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(config.offset[0]) || !angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(config.offset[1])) {
      config.offset = [0, 0];
    }

    // Load template or content
    // Support multiple attribute names: bs5-popover, bs-popover, bs-content, content
    var contentAttr = attrs.bs5Popover || attrs.bsPopover || attrs.bsContent || attrs.content;
    if (attrs.templateUrl || attrs.bsTemplateUrl) {
      var templateUrl = attrs.templateUrl || attrs.bsTemplateUrl;
      var template = _this3.$templateCache.get(templateUrl);
      if (template) {
        config.html = true;
        deferred.resolve(template);
      } else {
        _this3.$http({
          url: templateUrl,
          method: 'GET'
        }).then(function (r) {
          config.html = true;
          deferred.resolve(r.data);
        }, function () {
          deferred.resolve(contentAttr);
          elm.removeAttr('template-url');
        });
      }
    } else {
      deferred.resolve(contentAttr);
    }

    // Process template and create popover
    deferred.promise.then(function (content) {
      var tpl = POPOVER_TEMPLATE;
      var tplEl = angular__WEBPACK_IMPORTED_MODULE_0___default().element(tpl);
      var body = angular__WEBPACK_IMPORTED_MODULE_0___default().element(tplEl[0].querySelector('.popover-body'));

      // Set body content
      if (config.html) {
        body.html(content);
      } else {
        body.text(content);
      }

      // Add animation class
      if (config.animate) {
        tplEl.addClass('fade');
      } else {
        tplEl.addClass('show');
      }

      // Create popover scope with handler
      var popoverScope = scope.$new();
      popoverScope.title = config.title;
      var handlerDeferred = _this3.$q.defer();
      popoverScope.deferred = handlerDeferred;
      handlerDeferred.promise.then(function (data) {
        if (scope.handler) {
          scope.handler({
            $data: data
          });
        }
      }, (angular__WEBPACK_IMPORTED_MODULE_0___default().noop));

      // Create popover instance
      var popoverConfig = _objectSpread(_objectSpread({}, config), {}, {
        elm: elm,
        scope: popoverScope,
        deferred: handlerDeferred
      });
      var popover = new Popover(tplEl, {
        $timeout: _this3.$timeout,
        $bs5Position: _this3.$bs5Position,
        $bs5DOM: _this3.$bs5DOM,
        $compile: _this3.$compile,
        $controller: _this3.$controller
      }, popoverConfig);

      // Bind triggers
      if (config.trigger === 'hover') {
        elm.on('mouseenter', function () {
          return popover.show();
        });
        elm.on('mouseleave', function () {
          return popover.hide();
        });
      } else if (config.trigger === 'focus') {
        elm.on('focus', function () {
          return popover.show();
        });
        elm.on('blur', function () {
          return popover.hide();
        });
      } else {
        elm.on('click', function () {
          return popover.toggle();
        });
      }

      // Cleanup on destroy
      scope.$on('$destroy', function () {
        if (popover.el) {
          popover.hide();
        }
      });
    });
  });
  this.$templateCache = $templateCache;
  this.$compile = $compile;
  this.$http = $http;
  this.$q = $q;
  this.$timeout = $timeout;
  this.$bs5Position = $bs5Position;
  this.$bs5DOM = $bs5DOM;
  this.$controller = $controller;
  this.restrict = 'A';
  this.scope = {
    handler: '&?'
  };
}]);
var POPOVER_MODULE_NAME = 'ng1bs5.popover';

// Factory function - babel-plugin-angularjs-annotate will handle DI
function popoverDirectiveFactory($templateCache, $compile, $http, $q, $timeout, $bs5Position, $bs5DOM, $controller) {
  'ngInject';

  return new PopoverDirective($templateCache, $compile, $http, $q, $timeout, $bs5Position, $bs5DOM, $controller);
}
angular__WEBPACK_IMPORTED_MODULE_0___default().module(POPOVER_MODULE_NAME, [_services_dom_service__WEBPACK_IMPORTED_MODULE_1__["default"], _services_position_service__WEBPACK_IMPORTED_MODULE_2__["default"]]).directive('bs5Popover', popoverDirectiveFactory).directive('bsPopover', popoverDirectiveFactory);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (POPOVER_MODULE_NAME);

/***/ }),

/***/ "./src/components/progressbar/progressbar.module.js":
/*!**********************************************************!*\
  !*** ./src/components/progressbar/progressbar.module.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var TEMPLATE = "\n<div class=\"progress\">\n    <div class=\"progress-bar {{bgType ? 'bg-' + bgType : ''}}\" \n         ng-class=\"{'progress-bar-striped': stripes, 'progress-bar-animated': animate}\" \n         style=\"width: {{value}}%\" \n         aria-valuenow=\"{{value}}\" \n         aria-valuemin=\"0\" \n         aria-valuemax=\"100\">\n        <span ng-if=\"displayPercent\">{{value}}%</span>\n    </div>\n</div>";
var ProgressbarDirective = /*#__PURE__*/_createClass(function ProgressbarDirective() {
  _classCallCheck(this, ProgressbarDirective);
  _defineProperty(this, "link", function (scope) {
    scope.$watch('value', function (val) {
      if (val < 0) {
        scope.value = 0;
      } else if (val > 100) {
        scope.value = 100;
      }
    });
  });
  this.restrict = 'E';
  this.replace = false;
  this.template = TEMPLATE;
  this.scope = {
    value: '=',
    bgType: '@',
    stripes: '=',
    displayPercent: '=',
    animate: '='
  };
});
var MODULE_NAME = 'ng1bs5.progressbar';
angular__WEBPACK_IMPORTED_MODULE_0___default().module(MODULE_NAME, []).directive('bs5Progressbar', function () {
  return new ProgressbarDirective();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MODULE_NAME);

/***/ }),

/***/ "./src/components/rating/rating.module.js":
/*!************************************************!*\
  !*** ./src/components/rating/rating.module.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/icons.module */ "./src/components/icons/icons.module.js");



// TODO: Implement Rating component following the pattern from the original ES5 code
// Key features:
// - Star rating with customizable states
// - Support for icons or images
// - Readonly and disabled modes
// - Trail effect on hover
// - Form validation integration

var MODULE_NAME = 'ng1bs5.rating';
angular__WEBPACK_IMPORTED_MODULE_0___default().module(MODULE_NAME, [_icons_icons_module__WEBPACK_IMPORTED_MODULE_1__["default"]]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MODULE_NAME);

/***/ }),

/***/ "./src/components/tabs/tabs.directive.js":
/*!***********************************************!*\
  !*** ./src/components/tabs/tabs.directive.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bs5TabDirective: () => (/* binding */ Bs5TabDirective),
/* harmony export */   Bs5TabsetDirective: () => (/* binding */ Bs5TabsetDirective)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/**
 * Bs5TabsetController - Manages a collection of tabs
 * 
 * Supports:
 * - Multiple tab styles (tabs, pills, underline)
 * - Vertical orientation
 * - Justify and fill options
 * - Fade animations
 * - Keyboard navigation
 * - Events (onSelect, onDeselect)
 */
var Bs5TabsetController = /*#__PURE__*/function () {
  function Bs5TabsetController($element, $scope, $timeout, TabsService) {
    _classCallCheck(this, Bs5TabsetController);
    this.$element = $element;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.TabsService = TabsService;
    this.tabs = [];
    this.destroyed = false;
  }
  return _createClass(Bs5TabsetController, [{
    key: "$onInit",
    value: function $onInit() {
      this.element = this.$element[0];

      // Create nav container
      this.navElement = document.createElement('ul');
      this.navElement.className = 'nav';

      // Add tab style classes
      var type = this.type || 'tabs';
      if (type === 'pills') {
        this.navElement.classList.add('nav-pills');
      } else if (type === 'underline') {
        this.navElement.classList.add('nav-underline');
      } else {
        this.navElement.classList.add('nav-tabs');
      }

      // Handle justified/fill options
      if (this.justified === 'true' || this.justified === true) {
        this.navElement.classList.add('nav-justified');
      } else if (this.fill === 'true' || this.fill === true) {
        this.navElement.classList.add('nav-fill');
      }

      // Handle vertical orientation
      if (this.vertical === 'true' || this.vertical === true) {
        this.navElement.classList.add('flex-column');
        this.element.classList.add('d-flex');
      }

      // Add role for accessibility
      this.navElement.setAttribute('role', 'tablist');

      // Create content container
      this.contentElement = document.createElement('div');
      this.contentElement.className = 'tab-content';

      // Apply vertical flex if needed
      if (this.vertical === 'true' || this.vertical === true) {
        this.contentElement.classList.add('flex-grow-1');
      }

      // Insert nav and content elements
      this.element.insertBefore(this.navElement, this.element.firstChild);
      this.element.appendChild(this.contentElement);

      // Register with service if ID provided
      if (this.tabsetId) {
        this.TabsService.register(this.tabsetId, this);
      }

      // Setup keyboard navigation
      this.setupKeyboardNavigation();
    }

    /**
     * Add a tab to the tabset
     * @param {Object} tab - Tab controller instance
     */
  }, {
    key: "addTab",
    value: function addTab(tab) {
      var _this = this;
      this.tabs.push(tab);

      // Create nav item
      var navItem = document.createElement('li');
      navItem.className = 'nav-item';
      navItem.setAttribute('role', 'presentation');

      // Create button/link
      var button = document.createElement('button');
      button.className = 'nav-link';
      button.type = 'button';
      button.setAttribute('role', 'tab');
      button.setAttribute('data-bs-toggle', 'tab');
      if (tab.tabId) {
        button.id = "".concat(tab.tabId, "-tab");
        button.setAttribute('data-bs-target', "#".concat(tab.tabId));
        button.setAttribute('aria-controls', tab.tabId);
      }

      // Set heading text
      button.textContent = tab.heading || 'Tab';

      // Handle disabled state
      if (tab.disabled === 'true' || tab.disabled === true) {
        button.classList.add('disabled');
        button.setAttribute('aria-disabled', 'true');
        button.setAttribute('tabindex', '-1');
      } else {
        button.setAttribute('aria-selected', 'false');
      }

      // Click handler
      button.addEventListener('click', function (event) {
        event.preventDefault();
        if (tab.disabled !== 'true' && tab.disabled !== true) {
          _this.$scope.$apply(function () {
            _this.select(tab);
          });
        }
      });
      navItem.appendChild(button);
      this.navElement.appendChild(navItem);

      // Store references
      tab.navItem = navItem;
      tab.button = button;

      // Create content pane
      var pane = document.createElement('div');
      pane.className = 'tab-pane';
      pane.setAttribute('role', 'tabpanel');
      if (tab.tabId) {
        pane.id = tab.tabId;
        pane.setAttribute('aria-labelledby', "".concat(tab.tabId, "-tab"));
      }

      // Add fade effect if enabled
      if (this.fade === 'true' || this.fade === true) {
        pane.classList.add('fade');
      }

      // Move tab content into pane
      while (tab.element.firstChild) {
        pane.appendChild(tab.element.firstChild);
      }
      this.contentElement.appendChild(pane);
      tab.pane = pane;

      // Select first non-disabled tab or tab marked as active
      if ((tab.active === 'true' || tab.active === true) && tab.disabled !== 'true' && tab.disabled !== true) {
        this.$timeout(function () {
          _this.select(tab, true);
        });
      } else if (this.tabs.length === 1 && tab.disabled !== 'true' && tab.disabled !== true) {
        this.$timeout(function () {
          _this.select(tab, true);
        });
      }
    }

    /**
     * Remove a tab from the tabset
     * @param {Object} tab - Tab controller instance
     */
  }, {
    key: "removeTab",
    value: function removeTab(tab) {
      var index = this.tabs.indexOf(tab);
      if (index !== -1) {
        this.tabs.splice(index, 1);

        // Remove DOM elements
        if (tab.navItem && tab.navItem.parentNode) {
          tab.navItem.parentNode.removeChild(tab.navItem);
        }
        if (tab.pane && tab.pane.parentNode) {
          tab.pane.parentNode.removeChild(tab.pane);
        }

        // If this was the active tab, select another
        if (tab.isActive && this.tabs.length > 0) {
          var nextTab = this.tabs.find(function (t) {
            return t.disabled !== 'true' && t.disabled !== true;
          });
          if (nextTab) {
            this.select(nextTab);
          }
        }
      }
    }

    /**
     * Select a tab
     * @param {Object} tab - Tab to select
     * @param {Boolean} isInitial - Is this the initial selection
     */
  }, {
    key: "select",
    value: function select(tab) {
      var _this2 = this;
      var isInitial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (tab.disabled === 'true' || tab.disabled === true) {
        return;
      }
      var previousTab = this.tabs.find(function (t) {
        return t.isActive;
      });

      // Trigger hide event for previous tab
      if (previousTab && previousTab !== tab) {
        this.triggerEvent(previousTab, 'hide.bs.tab', tab);
      }

      // Trigger show event for new tab
      if (!isInitial) {
        this.triggerEvent(tab, 'show.bs.tab', previousTab);
      }

      // Deselect all tabs
      this.tabs.forEach(function (t) {
        t.isActive = false;
        if (t.button) {
          t.button.classList.remove('active');
          t.button.setAttribute('aria-selected', 'false');
        }
        if (t.pane) {
          t.pane.classList.remove('show', 'active');
        }
      });

      // Select the new tab
      tab.isActive = true;
      if (tab.button) {
        tab.button.classList.add('active');
        tab.button.setAttribute('aria-selected', 'true');
      }
      if (tab.pane) {
        tab.pane.classList.add('active');

        // Add show class for fade effect
        if (this.fade === 'true' || this.fade === true) {
          // Small delay to trigger CSS transition
          this.$timeout(function () {
            if (tab.pane) {
              tab.pane.classList.add('show');
            }
          }, 10);
        } else {
          tab.pane.classList.add('show');
        }
      }

      // Trigger onSelect callback
      if (this.onSelect && !isInitial) {
        this.onSelect({
          tab: tab,
          previousTab: previousTab
        });
      }

      // Trigger hidden event for previous tab
      if (previousTab && previousTab !== tab) {
        this.$timeout(function () {
          _this2.triggerEvent(previousTab, 'hidden.bs.tab', tab);
        }, this.fade === 'true' || this.fade === true ? 150 : 0);
      }

      // Trigger shown event for new tab
      if (!isInitial) {
        this.$timeout(function () {
          _this2.triggerEvent(tab, 'shown.bs.tab', previousTab);
        }, this.fade === 'true' || this.fade === true ? 150 : 0);
      }
    }

    /**
     * Trigger Bootstrap tab events
     * @param {Object} tab - Tab that triggered the event
     * @param {String} eventName - Name of the event
     * @param {Object} relatedTab - Related tab (previous or next)
     */
  }, {
    key: "triggerEvent",
    value: function triggerEvent(tab, eventName, relatedTab) {
      if (!tab.button) return;
      var event = new CustomEvent(eventName, {
        bubbles: true,
        cancelable: true,
        detail: {
          relatedTarget: relatedTab ? relatedTab.button : null
        }
      });
      tab.button.dispatchEvent(event);
    }

    /**
     * Setup keyboard navigation (Arrow keys)
     */
  }, {
    key: "setupKeyboardNavigation",
    value: function setupKeyboardNavigation() {
      var _this3 = this;
      this.navElement.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
          event.preventDefault();
          var currentIndex = _this3.tabs.findIndex(function (t) {
            return t.isActive;
          });
          var nextIndex;
          var isVertical = _this3.vertical === 'true' || _this3.vertical === true;
          var forward = isVertical && event.key === 'ArrowDown' || !isVertical && event.key === 'ArrowRight';
          var backward = isVertical && event.key === 'ArrowUp' || !isVertical && event.key === 'ArrowLeft';
          if (forward) {
            nextIndex = (currentIndex + 1) % _this3.tabs.length;
          } else if (backward) {
            nextIndex = (currentIndex - 1 + _this3.tabs.length) % _this3.tabs.length;
          } else {
            return;
          }

          // Find next non-disabled tab
          var iterations = 0;
          while ((_this3.tabs[nextIndex].disabled === 'true' || _this3.tabs[nextIndex].disabled === true) && iterations < _this3.tabs.length) {
            if (forward) {
              nextIndex = (nextIndex + 1) % _this3.tabs.length;
            } else {
              nextIndex = (nextIndex - 1 + _this3.tabs.length) % _this3.tabs.length;
            }
            iterations++;
          }
          if (iterations < _this3.tabs.length) {
            _this3.$scope.$apply(function () {
              _this3.select(_this3.tabs[nextIndex]);
            });
            _this3.tabs[nextIndex].button.focus();
          }
        }
      });
    }

    /**
     * Get a tab by its ID
     * @param {String} tabId - Tab ID
     * @returns {Object|null} Tab or null
     */
  }, {
    key: "getTabById",
    value: function getTabById(tabId) {
      return this.tabs.find(function (tab) {
        return tab.tabId === tabId;
      }) || null;
    }

    /**
     * Get the currently active tab
     * @returns {Object|null} Active tab or null
     */
  }, {
    key: "getActiveTab",
    value: function getActiveTab() {
      return this.tabs.find(function (tab) {
        return tab.isActive;
      }) || null;
    }
  }, {
    key: "$onDestroy",
    value: function $onDestroy() {
      this.destroyed = true;

      // Unregister from service
      if (this.tabsetId) {
        this.TabsService.unregister(this.tabsetId);
      }

      // Clean up tabs
      this.tabs.forEach(function (tab) {
        if (tab.navItem && tab.navItem.parentNode) {
          tab.navItem.parentNode.removeChild(tab.navItem);
        }
        if (tab.pane && tab.pane.parentNode) {
          tab.pane.parentNode.removeChild(tab.pane);
        }
      });
    }
  }]);
}();
Bs5TabsetController.$inject = ['$element', '$scope', '$timeout', 'TabsService'];

/**
 * Bs5TabController - Individual tab within a tabset
 */
var Bs5TabController = /*#__PURE__*/function () {
  function Bs5TabController($element) {
    _classCallCheck(this, Bs5TabController);
    this.$element = $element;
    this.isActive = false;
  }
  return _createClass(Bs5TabController, [{
    key: "$onInit",
    value: function $onInit() {
      this.element = this.$element[0];
      this.element.style.display = 'none'; // Hide the original element

      // Require parent tabset
      if (this.tabsetCtrl) {
        this.tabsetCtrl.addTab(this);
      } else {
        console.error('bs5Tab must be used within a bs5Tabset');
      }
    }
  }, {
    key: "$onDestroy",
    value: function $onDestroy() {
      if (this.tabsetCtrl && !this.tabsetCtrl.destroyed) {
        this.tabsetCtrl.removeTab(this);
      }
    }
  }]);
}();
Bs5TabController.$inject = ['$element'];

/**
 * Tabset Directive Configuration
 */
var Bs5TabsetDirective = {
  transclude: true,
  bindings: {
    tabsetId: '@',
    // Unique ID for the tabset
    type: '@',
    // 'tabs', 'pills', or 'underline'
    vertical: '@',
    // Vertical orientation
    justified: '@',
    // Justified layout
    fill: '@',
    // Fill layout
    fade: '@',
    // Enable fade animation
    onSelect: '&' // Callback when tab is selected
  },
  controller: Bs5TabsetController,
  template: '<div ng-transclude></div>'
};

/**
 * Tab Directive Configuration
 */
var Bs5TabDirective = {
  transclude: true,
  require: {
    tabsetCtrl: '^^bs5Tabset'
  },
  bindings: {
    tabId: '@',
    // Unique ID for the tab
    heading: '@',
    // Tab heading text
    active: '@',
    // Is this tab active by default
    disabled: '@' // Is this tab disabled
  },
  controller: Bs5TabController,
  template: '<div ng-transclude></div>'
};

/***/ }),

/***/ "./src/components/tabs/tabs.module.js":
/*!********************************************!*\
  !*** ./src/components/tabs/tabs.module.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_dom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dom.service */ "./src/services/dom.service.js");
/* harmony import */ var _tabs_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.directive */ "./src/components/tabs/tabs.directive.js");
/* harmony import */ var _tabs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.service */ "./src/components/tabs/tabs.service.js");




var MODULE_NAME = 'ng1bs5.tabs';
angular__WEBPACK_IMPORTED_MODULE_0___default().module(MODULE_NAME, [_services_dom_service__WEBPACK_IMPORTED_MODULE_1__["default"]]).component('bs5Tabset', _tabs_directive__WEBPACK_IMPORTED_MODULE_2__.Bs5TabsetDirective).component('bs5Tab', _tabs_directive__WEBPACK_IMPORTED_MODULE_2__.Bs5TabDirective).service('TabsService', _tabs_service__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MODULE_NAME);

/***/ }),

/***/ "./src/components/tabs/tabs.service.js":
/*!*********************************************!*\
  !*** ./src/components/tabs/tabs.service.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/**
 * TabsService - Manages tab instances and provides programmatic control
 * 
 * Usage:
 *   TabsService.show(tabsetId, tabId) - Show a specific tab
 *   TabsService.getActiveTab(tabsetId) - Get the currently active tab
 */
var TabsService = /*#__PURE__*/function () {
  function TabsService() {
    _classCallCheck(this, TabsService);
    this.tabsets = new Map();
  }

  /**
   * Register a tabset controller
   * @param {string} id - Tabset ID
   * @param {Object} controller - Tabset controller instance
   */
  return _createClass(TabsService, [{
    key: "register",
    value: function register(id, controller) {
      this.tabsets.set(id, controller);
    }

    /**
     * Unregister a tabset controller
     * @param {string} id - Tabset ID
     */
  }, {
    key: "unregister",
    value: function unregister(id) {
      this.tabsets["delete"](id);
    }

    /**
     * Show a specific tab in a tabset
     * @param {string} tabsetId - Tabset ID
     * @param {string} tabId - Tab ID to show
     */
  }, {
    key: "show",
    value: function show(tabsetId, tabId) {
      var tabset = this.tabsets.get(tabsetId);
      if (tabset) {
        var tab = tabset.getTabById(tabId);
        if (tab) {
          tabset.select(tab);
        }
      }
    }

    /**
     * Get the currently active tab in a tabset
     * @param {string} tabsetId - Tabset ID
     * @returns {Object|null} Active tab or null
     */
  }, {
    key: "getActiveTab",
    value: function getActiveTab(tabsetId) {
      var tabset = this.tabsets.get(tabsetId);
      if (tabset) {
        return tabset.getActiveTab();
      }
      return null;
    }

    /**
     * Get all tabs in a tabset
     * @param {string} tabsetId - Tabset ID
     * @returns {Array} Array of tabs
     */
  }, {
    key: "getTabs",
    value: function getTabs(tabsetId) {
      var tabset = this.tabsets.get(tabsetId);
      if (tabset) {
        return tabset.tabs;
      }
      return [];
    }

    /**
     * Disable a specific tab
     * @param {string} tabsetId - Tabset ID
     * @param {string} tabId - Tab ID to disable
     */
  }, {
    key: "disable",
    value: function disable(tabsetId, tabId) {
      var tabset = this.tabsets.get(tabsetId);
      if (tabset) {
        var tab = tabset.getTabById(tabId);
        if (tab) {
          tab.disabled = true;
        }
      }
    }

    /**
     * Enable a specific tab
     * @param {string} tabsetId - Tabset ID
     * @param {string} tabId - Tab ID to enable
     */
  }, {
    key: "enable",
    value: function enable(tabsetId, tabId) {
      var tabset = this.tabsets.get(tabsetId);
      if (tabset) {
        var tab = tabset.getTabById(tabId);
        if (tab) {
          tab.disabled = false;
        }
      }
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabsService);

/***/ }),

/***/ "./src/components/toast/toast.css":
/*!****************************************!*\
  !*** ./src/components/toast/toast.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_toast_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./toast.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/toast/toast.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_toast_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_toast_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_toast_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_toast_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/toast/toast.directive.js":
/*!*************************************************!*\
  !*** ./src/components/toast/toast.directive.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toastDirective: () => (/* binding */ toastDirective)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toast_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.css */ "./src/components/toast/toast.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var ToastController = /*#__PURE__*/function () {
  function ToastController($element, $scope, $timeout, ToastService) {
    _classCallCheck(this, ToastController);
    this.$element = $element;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.ToastService = ToastService;
    this.isVisible = false;
    this.hideTimeout = null;
  }
  return _createClass(ToastController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;
      this.element = this.$element[0];
      this.element.classList.add('toast');
      this.element.setAttribute('role', 'alert');
      this.element.setAttribute('aria-live', 'assertive');
      this.element.setAttribute('aria-atomic', 'true');

      // Start hidden
      this.element.style.display = 'none';

      // Set default values
      this.autohide = this.autohide !== 'false' && this.autohide !== false;
      this.delay = parseInt(this.delay) || 5000;
      this.animation = this.animation !== 'false' && this.animation !== false;

      // Add animation class
      if (this.animation) {
        this.element.classList.add('fade');
      }

      // Register with service if toastId provided
      if (this.toastId) {
        this.ToastService.register(this.toastId, this);
      }

      // Auto-show if specified
      if (this.autoShow === 'true' || this.autoShow === true) {
        this.$timeout(function () {
          _this.show();
        }, 100);
      }
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;
      if (this.isVisible) return;
      this.isVisible = true;

      // Force display first
      this.element.style.display = 'block';

      // If animation is enabled, add show class with delay for proper fade-in
      if (this.animation) {
        // Small delay to ensure CSS transition triggers
        this.$timeout(function () {
          _this2.element.classList.add('show');
        }, 50);
      } else {
        // No animation, show immediately
        this.element.classList.add('show');
      }
      if (this.onShow) {
        this.$scope.$apply(function () {
          _this2.onShow();
        });
      }

      // Auto-hide after delay
      if (this.autohide) {
        this.hideTimeout = this.$timeout(function () {
          _this2.hide();
        }, this.delay);
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;
      if (!this.isVisible) return;

      // Cancel auto-hide timeout if exists
      if (this.hideTimeout) {
        this.$timeout.cancel(this.hideTimeout);
        this.hideTimeout = null;
      }
      this.isVisible = false;
      this.element.classList.remove('show');

      // Wait for fade-out animation before hiding
      var hideDelay = this.animation ? 150 : 0;
      this.$timeout(function () {
        _this3.element.style.display = 'none';
      }, hideDelay);
      if (this.onHide) {
        this.$scope.$apply(function () {
          _this3.onHide();
        });
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isVisible) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this.hideTimeout) {
        this.$timeout.cancel(this.hideTimeout);
      }
      this.hide();
    }
  }, {
    key: "$onDestroy",
    value: function $onDestroy() {
      this.dispose();
      if (this.toastId) {
        this.ToastService.unregister(this.toastId);
      }
    }
  }]);
}();
ToastController.$inject = ['$element', '$scope', '$timeout', 'ToastService'];
var toastDirective = {
  transclude: true,
  bindings: {
    toastId: '@',
    autohide: '@',
    delay: '@',
    animation: '@',
    autoShow: '@',
    onShow: '&',
    onHide: '&'
  },
  controller: ToastController,
  template: '<div ng-transclude></div>'
};

/***/ }),

/***/ "./src/components/toast/toast.module.js":
/*!**********************************************!*\
  !*** ./src/components/toast/toast.module.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toast_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.directive */ "./src/components/toast/toast.directive.js");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast.service */ "./src/components/toast/toast.service.js");




// TODO: Implement Toast component following the pattern from the completed components
// Key features:
// - bs5Toast service for programmatic toast creation
// - Multiple toast positions (top-left, top-right, bottom-left, bottom-right, etc.)
// - Auto-dismiss with configurable timeout
// - Toast stacking/queuing
// - Different types (success, error, warning, info)
// - Custom templates
// - Animation support

var MODULE_NAME = 'ng1bs5.toast';
angular__WEBPACK_IMPORTED_MODULE_0___default().module(MODULE_NAME, []).component('toast', _toast_directive__WEBPACK_IMPORTED_MODULE_1__.toastDirective).service('ToastService', _toast_service__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MODULE_NAME);

/***/ }),

/***/ "./src/components/toast/toast.service.js":
/*!***********************************************!*\
  !*** ./src/components/toast/toast.service.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var ToastService = /*#__PURE__*/function () {
  function ToastService($rootScope, $timeout, $document) {
    _classCallCheck(this, ToastService);
    this.$rootScope = $rootScope;
    this.$timeout = $timeout;
    this.$document = $document;
    this.containers = new Map();
  }

  /**
   * Create a toast programmatically
   * @param {Object} options - Toast configuration
   * @param {string} options.message - Toast message (required)
   * @param {string} options.title - Toast title (optional)
   * @param {string} options.type - Toast type: success, error, warning, info (optional)
   * @param {number} options.delay - Auto-hide delay in ms (default: 5000)
   * @param {boolean} options.autohide - Auto-hide toast (default: true)
   * @param {string} options.position - Toast position: top-start, top-center, top-end, etc (default: top-end)
   * @param {boolean} options.closeButton - Show close button (default: true)
   * @param {boolean} options.animation - Enable fade animation (default: true)
   * @param {boolean} options.timestamp - Show timestamp (default: false)
   */
  return _createClass(ToastService, [{
    key: "create",
    value: function create(options) {
      var _this = this;
      var defaults = {
        message: '',
        title: '',
        type: 'info',
        delay: 5000,
        autohide: true,
        position: 'top-end',
        closeButton: true,
        animation: true,
        timestamp: false
      };
      var config = _objectSpread(_objectSpread({}, defaults), options);
      if (!config.message) {
        console.error('Toast message is required');
        return;
      }

      // Get or create container for this position
      var containerElement = this.ensureContainer(config.position);

      // Build toast HTML
      var toastHtml = this.buildToastHtml(config);
      var toastElement = angular__WEBPACK_IMPORTED_MODULE_0___default().element(toastHtml);

      // Append to container
      containerElement.append(toastElement);

      // Get the actual DOM element
      var toast = toastElement[0];

      // Show toast with animation
      this.$timeout(function () {
        toast.style.display = 'block';
        if (config.animation) {
          // Trigger fade-in animation
          _this.$timeout(function () {
            toast.classList.add('show');
          }, 50);
        } else {
          toast.classList.add('show');
        }

        // Setup close button handler
        var closeBtn = toast.querySelector('.btn-close');
        if (closeBtn) {
          closeBtn.addEventListener('click', function () {
            _this.hideToast(toast, toastElement, config.animation);
          });
        }

        // Auto-hide after delay
        if (config.autohide) {
          _this.$timeout(function () {
            _this.hideToast(toast, toastElement, config.animation);
          }, config.delay);
        }
      }, 50);
      return {
        element: toastElement,
        hide: function hide() {
          return _this.hideToast(toast, toastElement, config.animation);
        }
      };
    }
  }, {
    key: "hideToast",
    value: function hideToast(toast, toastElement, animation) {
      var _this2 = this;
      if (!toast || !toastElement) return;

      // Remove show class for fade-out
      toast.classList.remove('show');

      // Wait for animation, then remove element
      var hideDelay = animation ? 150 : 0;
      this.$timeout(function () {
        _this2.removeToast(toastElement);
      }, hideDelay);
    }
  }, {
    key: "ensureContainer",
    value: function ensureContainer(position) {
      if (!this.containers.has(position)) {
        var containerHtml = "<div class=\"toast-container position-fixed ".concat(position, " p-3\" style=\"z-index: 1090;\"></div>");
        var containerElement = angular__WEBPACK_IMPORTED_MODULE_0___default().element(containerHtml);
        this.$document.find('body').append(containerElement);
        this.containers.set(position, containerElement);
      }
      return this.containers.get(position);
    }
  }, {
    key: "removeToast",
    value: function removeToast(toastElement) {
      if (toastElement && toastElement.length) {
        toastElement.remove();
      }
    }
  }, {
    key: "buildToastHtml",
    value: function buildToastHtml(config) {
      var typeClasses = {
        success: 'bg-success text-white',
        error: 'bg-danger text-white',
        warning: 'bg-warning text-dark',
        info: 'bg-info text-white'
      };
      var bgClass = typeClasses[config.type] || '';
      var closeButtonWhite = config.type === 'warning' ? '' : 'btn-close-white';

      // Get current timestamp
      var timestamp = config.timestamp ? new Date() : null;
      var timeString = timestamp ? timestamp.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      }) : '';

      // Base toast classes
      var toastClasses = ['toast'];
      if (config.animation) {
        toastClasses.push('fade');
      }

      // If title exists: colored header + white body
      if (config.title) {
        var closeButton = config.closeButton ? "<button type=\"button\" class=\"btn-close ".concat(closeButtonWhite, "\" aria-label=\"Close\"></button>") : '';
        var timestampHtml = config.timestamp ? "<small class=\"text-white-50\">".concat(timeString, "</small>") : '';
        return "\n                <div class=\"".concat(toastClasses.join(' '), "\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" style=\"display: none;\">\n                    <div class=\"toast-header ").concat(bgClass, "\">\n                        <strong class=\"me-auto\">").concat(this.escapeHtml(config.title), "</strong>\n                        ").concat(timestampHtml, "\n                        ").concat(closeButton, "\n                    </div>\n                    <div class=\"toast-body\">\n                        ").concat(this.escapeHtml(config.message), "\n                    </div>\n                </div>\n            ");
      } else {
        // No title: colored body with close button inside
        var _closeButton = config.closeButton ? "<button type=\"button\" class=\"btn-close ".concat(closeButtonWhite, " float-end ms-2\" aria-label=\"Close\"></button>") : '';
        var _timestampHtml = config.timestamp ? "<div class=\"mt-2 pt-2 border-top border-light\" style=\"opacity: 0.7;\"><small>".concat(timeString, "</small></div>") : '';
        toastClasses.push(bgClass);
        return "\n                <div class=\"".concat(toastClasses.join(' '), "\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" style=\"display: none;\">\n                    <div class=\"toast-body ").concat(bgClass, "\">\n                        ").concat(_closeButton, "\n                        ").concat(this.escapeHtml(config.message), "\n                        ").concat(_timestampHtml, "\n                    </div>\n                </div>\n            ");
      }
    }
  }, {
    key: "escapeHtml",
    value: function escapeHtml(text) {
      var div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

    // Convenience methods
  }, {
    key: "success",
    value: function success(message, title) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.create(_objectSpread(_objectSpread({}, options), {}, {
        message: message,
        title: title,
        type: 'success'
      }));
    }
  }, {
    key: "error",
    value: function error(message, title) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.create(_objectSpread(_objectSpread({}, options), {}, {
        message: message,
        title: title,
        type: 'error'
      }));
    }
  }, {
    key: "warning",
    value: function warning(message, title) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.create(_objectSpread(_objectSpread({}, options), {}, {
        message: message,
        title: title,
        type: 'warning'
      }));
    }
  }, {
    key: "info",
    value: function info(message, title) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.create(_objectSpread(_objectSpread({}, options), {}, {
        message: message,
        title: title,
        type: 'info'
      }));
    }
  }]);
}();
ToastService.$inject = ['$rootScope', '$timeout', '$document'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastService);

/***/ }),

/***/ "./src/components/tooltip/tooltip.module.js":
/*!**************************************************!*\
  !*** ./src/components/tooltip/tooltip.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_dom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dom.service */ "./src/services/dom.service.js");
/* harmony import */ var _services_position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/position.service */ "./src/services/position.service.js");
tooltipDirectiveFactory.$inject = ["$templateCache", "$compile", "$http", "$q", "$bs5Position", "$bs5DOM", "$timeout"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var TEMPLATE = "\n<div class=\"tooltip\">\n    <div class=\"tooltip-arrow\"></div>\n    <div class=\"tooltip-inner\"></div>\n</div>";
var TooltipDirective = /*#__PURE__*/_createClass(["$templateCache", "$compile", "$http", "$q", "$bs5Position", "$bs5DOM", "$timeout", function TooltipDirective($templateCache, $compile, $http, $q, $bs5Position, $bs5DOM, $timeout) {
  'ngInject';

  var _this = this;
  _classCallCheck(this, TooltipDirective);
  _defineProperty(this, "link", function (scope, elm, attrs) {
    var deferred = _this.$q.defer();

    // Support Bootstrap-style data-bs-* attributes
    var offset = /^\[ *?\d+?, *?\d+? *?\]$/.test(attrs.offset || attrs.bsOffset) ? scope.$eval(attrs.offset || attrs.bsOffset) : [0, 0];
    var delay = scope.$eval(attrs.delay || attrs.bsDelay);
    var animate = attrs.animate ? scope.$eval(attrs.animate) : true;
    var html = scope.$eval(attrs.html || attrs.bsHtml);
    var placement = ['left', 'bottom', 'right', 'top'].includes(attrs.placement || attrs.bsPlacement) ? attrs.placement || attrs.bsPlacement : 'top';
    var fp = scope.$eval(attrs.fallbackPlacements || attrs.bsFallbackPlacements);
    fp = angular__WEBPACK_IMPORTED_MODULE_0___default().isArray(fp) ? fp : ['left', 'right', 'top', 'bottom'];
    var container = attrs.container || attrs.bsContainer ? angular__WEBPACK_IMPORTED_MODULE_0___default().element(document.querySelector(attrs.container || attrs.bsContainer)) : angular__WEBPACK_IMPORTED_MODULE_0___default().element(document.body);
    if (!(container instanceof (angular__WEBPACK_IMPORTED_MODULE_0___default().element)) || !container.length) {
      throw new DOMException('bs5Tooltip: The specified container could not be found');
    }

    // Support multiple attribute names for content
    var contentAttr = attrs.bs5Tooltip || attrs.bsTooltip || attrs.bsTitle || attrs.title;
    if (attrs.templateUrl || attrs.bsTemplateUrl) {
      var templateUrl = attrs.templateUrl || attrs.bsTemplateUrl;
      _this.$http({
        url: templateUrl,
        method: 'GET'
      }).then(function (r) {
        deferred.resolve(r.data);
      }, function () {
        deferred.resolve(contentAttr);
      });
    } else {
      deferred.resolve(contentAttr);
    }
    deferred.promise.then(function (content) {
      var Tooltip = /*#__PURE__*/function () {
        function Tooltip(tooltipEl, services) {
          _classCallCheck(this, Tooltip);
          this.tooltipEl = tooltipEl;
          this.services = services;
          this.el = null;
          this.visible = false;
        }
        return _createClass(Tooltip, [{
          key: "show",
          value: function show() {
            var _this2 = this;
            this.services.$timeout(function () {
              if (_this2.el) {
                _this2.el.remove();
              }
              _this2.el = angular__WEBPACK_IMPORTED_MODULE_0___default().copy(_this2.tooltipEl);
              var arrow = angular__WEBPACK_IMPORTED_MODULE_0___default().element(_this2.el[0].querySelector('.tooltip-arrow'));
              _this2.el.css({
                'position': 'absolute'
              });
              arrow.css('position', 'absolute');
              container.append(_this2.el);
              _this2.services.$timeout(function () {
                var css = _this2.services.$bs5Position.translateTooltip(elm, _this2.el, container, placement, fp, offset);
                _this2.el.addClass(css.placementClass);
                _this2.el.css(css.tip);
                arrow.css(css.arrow);
                if (animate) {
                  _this2.services.$bs5DOM.fade(_this2.el);
                }
                _this2.visible = true;
              });
            }, angular__WEBPACK_IMPORTED_MODULE_0___default().isObject(delay) ? angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(delay.show) ? delay.show : 0 : angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(delay) ? delay : 0);
          }
        }, {
          key: "hide",
          value: function hide() {
            var _this3 = this;
            var removeEl = function removeEl() {
              _this3.el.remove();
              _this3.visible = false;
            };
            this.services.$timeout(function () {
              if (animate) {
                _this3.services.$bs5DOM.fade(_this3.el, removeEl);
              } else {
                removeEl();
              }
            }, angular__WEBPACK_IMPORTED_MODULE_0___default().isObject(delay) ? angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(delay.hide) ? delay.hide : 0 : angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(delay) ? delay : 0, false);
          }
        }, {
          key: "toggle",
          value: function toggle() {
            if (this.visible) {
              this.hide();
            } else {
              this.show();
            }
          }
        }]);
      }();
      var tplEl = angular__WEBPACK_IMPORTED_MODULE_0___default().element(TEMPLATE);
      tplEl.css('max-width', '200px');
      if (animate) {
        tplEl.addClass('fade');
      } else {
        tplEl.addClass('show');
      }
      var body = angular__WEBPACK_IMPORTED_MODULE_0___default().element(tplEl[0].querySelector('.tooltip-inner'));
      html ? body.html(content) : body.text(content);
      var tooltip = new Tooltip(tplEl, {
        $timeout: _this.$timeout,
        $bs5Position: _this.$bs5Position,
        $bs5DOM: _this.$bs5DOM
      });
      var trigger = attrs.trigger || attrs.bsTrigger || 'hover';
      if (trigger === 'click') {
        elm.on('click', function () {
          return tooltip.toggle();
        });
      } else if (trigger === 'focus') {
        elm.on('focus', function () {
          return tooltip.show();
        });
        elm.on('blur', function () {
          return tooltip.hide();
        });
      } else {
        elm.on('mouseenter', function () {
          return tooltip.show();
        });
        elm.on('mouseleave', function () {
          return tooltip.hide();
        });
      }
    });
  });
  this.$templateCache = $templateCache;
  this.$compile = $compile;
  this.$http = $http;
  this.$q = $q;
  this.$bs5Position = $bs5Position;
  this.$bs5DOM = $bs5DOM;
  this.$timeout = $timeout;
  this.restrict = 'A';
}]);
var MODULE_NAME = 'ng1bs5.tooltip';

// Factory function - babel-plugin-angularjs-annotate will handle DI
function tooltipDirectiveFactory($templateCache, $compile, $http, $q, $bs5Position, $bs5DOM, $timeout) {
  'ngInject';

  return new TooltipDirective($templateCache, $compile, $http, $q, $bs5Position, $bs5DOM, $timeout);
}
angular__WEBPACK_IMPORTED_MODULE_0___default().module(MODULE_NAME, [_services_dom_service__WEBPACK_IMPORTED_MODULE_1__["default"], _services_position_service__WEBPACK_IMPORTED_MODULE_2__["default"]]).directive('bs5Tooltip', tooltipDirectiveFactory).directive('bsTooltip', tooltipDirectiveFactory);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MODULE_NAME);

/***/ }),

/***/ "./src/services/dom.service.js":
/*!*************************************!*\
  !*** ./src/services/dom.service.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMService: () => (/* binding */ DOMService),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var DOMService = /*#__PURE__*/function () {
  function DOMService($q, $animate, $timeout) {
    _classCallCheck(this, DOMService);
    this.$q = $q;
    this.$animate = $animate;
    this.$timeout = $timeout;
  }

  /**
   * Find the nearest relative positioned container
   */
  return _createClass(DOMService, [{
    key: "findRelativeContainer",
    value: function findRelativeContainer(elm) {
      elm = elm instanceof HTMLElement ? angular__WEBPACK_IMPORTED_MODULE_0___default().element(elm) : elm;
      var node = elm;
      var style = window.getComputedStyle(node[0]);
      while (style && style.position !== 'relative') {
        node = node.parent();
        style = node[0] !== document ? window.getComputedStyle(node[0]) : null;
      }
      return style ? node : null;
    }

    /**
     * Find the nearest scrollable element
     */
  }, {
    key: "findScrollableElement",
    value: function findScrollableElement(elm) {
      var node = elm.parent();
      var style = window.getComputedStyle(node[0]);
      var exp = /^(auto|scroll)$/;
      while (!exp.test(style.overflow) && !exp.test(style.overflowX) && !exp.test(style.overflowY) && node.length) {
        node = elm.parent();
        style = window.getComputedStyle(node[0]);
      }
      return node.length ? node : null;
    }

    /**
     * Check if element is contained within another element
     */
  }, {
    key: "contains",
    value: function contains(elm, container) {
      elm = elm instanceof HTMLElement ? angular__WEBPACK_IMPORTED_MODULE_0___default().element(elm) : elm;
      container = container instanceof HTMLElement ? angular__WEBPACK_IMPORTED_MODULE_0___default().element(container) : container;
      var node = elm.parent();
      while (!angular__WEBPACK_IMPORTED_MODULE_0___default().equals(node, container) && node.length) {
        node = node.parent();
      }
      return !!node.length;
    }

    /**
     * Get previous sibling element
     */
  }, {
    key: "prev",
    value: function prev(elm) {
      elm = elm instanceof HTMLElement ? angular__WEBPACK_IMPORTED_MODULE_0___default().element(elm) : elm;
      var children = elm.parent().children();
      var prev = angular__WEBPACK_IMPORTED_MODULE_0___default().element([]);
      for (var i = 1; i < children.length; i++) {
        if (children[i] === elm[0]) {
          prev = angular__WEBPACK_IMPORTED_MODULE_0___default().element(children[i - 1]);
        }
      }
      return prev;
    }

    /**
     * Get CSS time unit in milliseconds
     */
  }, {
    key: "getCssTimeUnitMs",
    value: function getCssTimeUnitMs(elm, property) {
      elm = elm instanceof HTMLElement ? angular__WEBPACK_IMPORTED_MODULE_0___default().element(elm) : elm;
      property = property.replace(/(^[-_]+|[-_]+$)/g, '').replace(/[-_]+/g, '-');
      var split = property.split('-');
      split[0] = split[0].substring(0, 1).toLowerCase() + split[0].substring(1);
      for (var i = 1; i < split.length; i++) {
        split[i] = split[i].substring(0, 1).toUpperCase() + split[i].substring(1);
      }
      property = split.join('');
      property = window.getComputedStyle(elm[0])[property];
      return property.endsWith('ms') ? parseFloat(property.substring(0, property.length - 2)) : property.endsWith('s') ? parseFloat(property.substring(0, property.length - 1)) * 1000 : 0;
    }

    /**
     * Translate element using transform
     */
  }, {
    key: "translate",
    value: function translate(elm, x, y) {
      elm = elm instanceof HTMLElement ? elm : elm[0];
      elm.style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
    }

    /**
     * Fade element in/out
     */
  }, {
    key: "fade",
    value: function fade(elm, callback) {
      var _this = this;
      elm = elm instanceof HTMLElement ? angular__WEBPACK_IMPORTED_MODULE_0___default().element(elm) : elm;
      var d = window.getComputedStyle(elm[0]).transitionDuration;
      d = elm.hasClass('fade') ? d.endsWith('ms') ? parseFloat(d.replace('ms', '')) : parseFloat(d.replace('s', '')) * 1000 : d;
      var fn = function fn() {
        if (elm.hasClass('fade') && typeof callback === 'function') {
          _this.$timeout(callback, d, false);
        } else if (typeof callback === 'function') {
          callback();
        }
      };
      this.$timeout(function () {
        if (elm.hasClass('fade')) {
          if (elm.hasClass('show')) {
            elm.removeClass('show');
            fn();
          } else {
            elm.addClass('show');
            fn();
          }
        } else {
          fn();
        }
      }, 0, false);
    }
  }]);
}();
_defineProperty(DOMService, "$inject", ['$q', '$animate', '$timeout']);
var MODULE_NAME = 'ng1bs5.dom';
angular__WEBPACK_IMPORTED_MODULE_0___default().module(MODULE_NAME, []).service('$bs5DOM', DOMService);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MODULE_NAME);

/***/ }),

/***/ "./src/services/position.service.js":
/*!******************************************!*\
  !*** ./src/services/position.service.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PositionService: () => (/* binding */ PositionService),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.service */ "./src/services/dom.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var PositionService = /*#__PURE__*/function () {
  function PositionService($bs5DOM) {
    _classCallCheck(this, PositionService);
    this.$bs5DOM = $bs5DOM;
  }

  /**
   * Get element offset
   */
  return _createClass(PositionService, [{
    key: "offset",
    value: function offset(elm) {
      elm = elm instanceof HTMLElement ? elm : elm[0];
      var rect = elm.getBoundingClientRect();
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
        width: elm.offsetWidth,
        height: elm.offsetHeight
      };
    }

    /**
     * Get relative offset
     */
  }, {
    key: "relativeOffset",
    value: function relativeOffset(elm) {
      elm = elm instanceof HTMLElement ? angular__WEBPACK_IMPORTED_MODULE_0___default().element(elm) : elm;
      var relativeTo = this.$bs5DOM.findRelativeContainer(elm);
      if (relativeTo) {
        var relOffset = this.offset(relativeTo);
        var elOffset = this.offset(elm);
        return {
          left: elOffset.left - relOffset.left,
          top: elOffset.top - relOffset.top,
          width: elm[0].offsetWidth,
          height: elm[0].offsetHeight,
          container: relativeTo
        };
      }
      return null;
    }

    /**
     * Position target element relative to host element
     */
  }, {
    key: "positionTarget",
    value: function positionTarget(hostElm, targetElm, placement) {
      var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [0, 0];
      hostElm = hostElm instanceof HTMLElement ? angular__WEBPACK_IMPORTED_MODULE_0___default().element(hostElm) : hostElm;
      targetElm = targetElm instanceof HTMLElement ? angular__WEBPACK_IMPORTED_MODULE_0___default().element(targetElm) : targetElm;
      var host = this.offset(hostElm);
      var target = this.offset(targetElm);
      var left = host.left;
      var top = host.top;
      switch (placement) {
        case 'top':
          top = host.top - target.height;
          break;
        case 'left':
          left = host.left - target.width;
          break;
        case 'bottom':
          top = host.top + host.height;
          break;
        case 'right':
          left = host.left + host.width;
          break;
        case 'top-left':
          left = host.left - target.width;
          top = host.top - target.height;
          break;
        case 'top-right':
          left = host.left + host.width;
          top = host.top - target.height;
          break;
        case 'bottom-left':
          left = host.left - target.width;
          top = host.top + host.height;
          break;
        case 'bottom-right':
          left = host.left + host.width;
          top = host.top + host.height;
          break;
        case 'top-center':
          top = host.top - target.height;
          left = host.left + host.width / 2 - target.width / 2;
          break;
        case 'left-center':
          left = host.left - target.width;
          top = host.top + host.height / 2 - target.height / 2;
          break;
        case 'bottom-center':
          top = host.top + host.height;
          left = host.left + host.width / 2 - target.width / 2;
          break;
        case 'right-center':
          left = host.left + host.width;
          top = host.top + host.height / 2 - target.height / 2;
          break;
        default:
          console.error('$bs5Position.positionTarget: Invalid placement');
          left = target.left;
          top = target.top;
      }
      if (angular__WEBPACK_IMPORTED_MODULE_0___default().isArray(offset) && offset.length >= 2) {
        if (angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(offset[0])) left += offset[0];
        if (angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(offset[1])) top += offset[1];
      }
      return {
        left: left,
        top: top
      };
    }

    /**
     * Position target element relative to host element (within relative container)
     */
  }, {
    key: "positionTargetRelative",
    value: function positionTargetRelative(hostElm, targetElm, placement) {
      var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [0, 0];
      hostElm = hostElm instanceof HTMLElement ? angular__WEBPACK_IMPORTED_MODULE_0___default().element(hostElm) : hostElm;
      targetElm = targetElm instanceof HTMLElement ? angular__WEBPACK_IMPORTED_MODULE_0___default().element(targetElm) : targetElm;
      var host = this.relativeOffset(hostElm);
      var target = this.relativeOffset(targetElm);
      if (!host || !target || !angular__WEBPACK_IMPORTED_MODULE_0___default().equals(host.container[0], target.container[0])) {
        return null;
      }
      var _left = host.left;
      var _top = host.top;
      var placements = {
        'right': function right() {
          _left += host.width;
        },
        'bottom': function bottom() {
          _top += host.height;
        },
        'left': function left() {
          _left -= target.width;
        },
        'top': function top() {
          _top -= target.height;
        },
        'top-left': function topLeft() {
          _top -= target.height;
          _left -= target.width;
        },
        'top-right': function topRight() {
          _top -= target.height;
          _left += host.width;
        },
        'bottom-left': function bottomLeft() {
          _top += host.height;
          _left -= target.width;
        },
        'bottom-right': function bottomRight() {
          _top += host.height;
          _left += host.width;
        },
        'top-center': function topCenter() {
          _top -= target.height;
          _left += host.width / 2 - target.width / 2;
        },
        'bottom-center': function bottomCenter() {
          _top += host.height;
          _left += host.width / 2 - target.width / 2;
        },
        'left-center': function leftCenter() {
          _left -= target.width;
          _top += host.height / 2 - target.height / 2;
        },
        'right-center': function rightCenter() {
          _left += host.width;
          _top += host.height / 2 - target.height / 2;
        }
      };
      if (placements[placement]) {
        placements[placement]();
      }
      _left += angular__WEBPACK_IMPORTED_MODULE_0___default().isArray(offset) && offset.length > 0 && angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(offset[0]) ? offset[0] : 0;
      _top += angular__WEBPACK_IMPORTED_MODULE_0___default().isArray(offset) && offset.length > 1 && angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(offset[1]) ? offset[1] : 0;
      return {
        top: _top,
        left: _left,
        bottom: _top + target.height,
        right: _left + target.width
      };
    }

    /**
     * Translate target element relative to host element
     */
  }, {
    key: "translateTarget",
    value: function translateTarget(hostElm, targetElm, placement) {
      var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [0, 0];
      hostElm = hostElm instanceof HTMLElement ? angular__WEBPACK_IMPORTED_MODULE_0___default().element(hostElm) : hostElm;
      targetElm = targetElm instanceof HTMLElement ? angular__WEBPACK_IMPORTED_MODULE_0___default().element(targetElm) : targetElm;
      var transform = window.getComputedStyle(targetElm[0]).transform;
      var host = this.offset(hostElm);
      var target = this.offset(targetElm);
      var strs = /^matrix\((\d+?\.?\d*?), (\d+?\.?\d*?), (\d+?\.?\d*?), (\d+?\.?\d*?), (\d+?\.?\d*?), (\d+?\.?\d*?)\)$/.exec(transform);
      var matrix = [];
      if (strs) {
        for (var i = 1; i < strs.length; i++) {
          matrix.push(parseFloat(strs[i]));
        }
        target.left -= matrix[4];
        target.top -= matrix[5];
      }
      var x = host.left - target.left;
      var y = host.top - target.top;
      var _left2 = host.left;
      var _top2 = host.top;
      var applyPlacement = function applyPlacement(placement) {
        var placements = {
          'right': function right() {
            x += host.width;
            _left2 += host.width;
          },
          'bottom': function bottom() {
            y += host.height;
            _top2 += host.height;
          },
          'left': function left() {
            x -= target.width;
            _left2 -= target.width;
          },
          'top': function top() {
            y -= target.height;
            _top2 -= target.height;
          },
          'top-left': function topLeft() {
            y -= target.height;
            x -= target.width;
            _top2 -= target.height;
            _left2 -= target.width;
          },
          'top-right': function topRight() {
            y -= target.height;
            x += host.width;
            _top2 -= target.height;
            _left2 += host.width;
          },
          'bottom-left': function bottomLeft() {
            y += host.height;
            x -= target.width;
            _top2 += host.height;
            _left2 -= target.width;
          },
          'bottom-right': function bottomRight() {
            y += host.height;
            x += host.width;
            _top2 += host.height;
            _left2 += host.width;
          },
          'top-center': function topCenter() {
            var diff = host.width / 2 - target.width / 2;
            y -= target.height;
            x += diff;
            _top2 -= target.height;
            _left2 += diff;
          },
          'bottom-center': function bottomCenter() {
            var diff = host.width / 2 - target.width / 2;
            y += host.height;
            x += diff;
            _top2 += host.height;
            _left2 += diff;
          },
          'left-center': function leftCenter() {
            var diff = host.height / 2 - target.height / 2;
            x -= target.width;
            y += diff;
            _left2 -= target.width;
            _top2 += diff;
          },
          'right-center': function rightCenter() {
            var diff = host.height / 2 - target.height / 2;
            x += host.width;
            y += diff;
            _left2 += host.width;
            _top2 += diff;
          }
        };
        if (placements[placement]) {
          placements[placement]();
        }
      };
      applyPlacement(placement);
      x += angular__WEBPACK_IMPORTED_MODULE_0___default().isArray(offset) && angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(offset[0]) ? offset[0] : 0;
      y += angular__WEBPACK_IMPORTED_MODULE_0___default().isArray(offset) && angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(offset[1]) ? offset[1] : 0;
      _left2 += angular__WEBPACK_IMPORTED_MODULE_0___default().isArray(offset) && angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(offset[0]) ? offset[0] : 0;
      _top2 += angular__WEBPACK_IMPORTED_MODULE_0___default().isArray(offset) && angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(offset[1]) ? offset[1] : 0;
      if (matrix.length === 6) {
        matrix[4] = x;
        matrix[5] = y;
      }
      return {
        x: x,
        y: y,
        left: _left2,
        top: _top2,
        matrix: matrix
      };
    }

    /**
     * Translate tooltip with fallback positioning
     */
  }, {
    key: "translateTooltip",
    value: function translateTooltip(host, tip, container, placement) {
      var _this = this;
      var fallbackPlacements = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ['left', 'right', 'top', 'bottom'];
      var offset = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [0, 0];
      var isPopover = tip.hasClass('popover');
      var place = /^(left|right|top|bottom)$/.test(placement) ? placement : isPopover ? 'right' : 'top';
      var arrow = angular__WEBPACK_IMPORTED_MODULE_0___default().element(tip[0].querySelector(isPopover ? '.popover-arrow' : '.tooltip-arrow'));
      var coff = this.offset(container);
      var getArrowPos = function getArrowPos() {
        var plc = place === 'left' ? 'right' : place === 'right' ? 'left' : place === 'top' ? 'bottom' : 'top';
        plc += '-center';
        var pos = _this.translateTarget(tip, arrow, plc);
        if (isPopover) {
          if (place === 'left' || place === 'right') pos.y -= 5;
        } else {
          if (place === 'left' || place === 'right') pos.y -= 3;
        }
        return pos;
      };
      var getTipPos = function getTipPos() {
        var ttOff = 6;
        var tooltipOff = [place === 'left' ? -ttOff : place === 'right' ? ttOff : 0, place === 'top' ? -ttOff : place === 'bottom' ? ttOff : 0];
        var poOff = 8;
        var popoverOff = [place === 'left' ? -poOff : place === 'right' ? poOff : 0, place === 'top' ? -poOff : place === 'bottom' ? poOff : 0];
        var plc = place + '-center';
        return _this.translateTarget(host, tip, plc, isPopover ? popoverOff : tooltipOff);
      };
      var getPlacementClass = function getPlacementClass() {
        var classes = {
          'left': isPopover ? 'bs-popover-start' : 'bs-tooltip-start',
          'right': isPopover ? 'bs-popover-end' : 'bs-tooltip-end',
          'top': isPopover ? 'bs-popover-top' : 'bs-tooltip-top',
          'bottom': isPopover ? 'bs-popover-bottom' : 'bs-tooltip-bottom'
        };
        return classes[place] || classes.top;
      };
      var positionLeftRight = function positionLeftRight() {
        if (tipPos.left < coff.left) {
          if (tip[0].offsetWidth <= coff.width) {
            var diff = coff.left - tipPos.left;
            tipPos.x += diff;
            arrowPos.x -= diff;
            tipPos.left += diff;
            arrowPos.left -= diff;
          }
        } else if (tipPos.left + tip[0].offsetWidth > coff.left + coff.width) {
          var left = tipPos.left + tip[0].offsetWidth - (coff.left + coff.width);
          if (tipPos.left - left >= coff.left) {
            tipPos.x -= left;
            arrowPos.x += left;
            tipPos.left -= left;
            arrowPos.left += left;
          }
        }
      };
      var positionTopBottom = function positionTopBottom() {
        if (tipPos.top < coff.top) {
          if (tip[0].offsetHeight <= coff.height) {
            var diff = coff.top - tipPos.top;
            tipPos.y += diff;
            arrowPos.y -= diff;
            tipPos.top += diff;
            arrowPos.top -= diff;
          }
        } else if (tipPos.top + tip[0].offsetHeight > coff.top + coff.height) {
          var top = tipPos.top + tip[0].offsetHeight - (coff.top + coff.height);
          if (tipPos.top - top >= coff.top) {
            tipPos.y -= top;
            arrowPos.y += top;
            tipPos.top -= top;
            arrowPos.top += top;
          }
        }
      };
      var isOutOfRange = function isOutOfRange() {
        return place === 'left' && tipPos.left < coff.left || place === 'right' && tipPos.left + tip[0].offsetWidth > coff.left + coff.width || place === 'top' && tipPos.top < coff.top || place === 'bottom' && tipPos.top + tip[0].offsetHeight > coff.top + coff.height;
      };
      var _placeFallback = function placeFallback(fp, index) {
        var position = function position() {
          if (place === 'left' || place === 'right') {
            positionTopBottom();
          } else {
            positionLeftRight();
          }
        };
        if (index >= fp.length) return;
        place = fp[index];
        tipPos = getTipPos();
        arrowPos = getArrowPos();
        if (isOutOfRange()) {
          position();
          if (isOutOfRange()) {
            _placeFallback(fp, index + 1);
          }
        } else {
          position();
        }
      };
      var placeAtFallback = function placeAtFallback() {
        _placeFallback(fallbackPlacements.filter(function (x) {
          return /^(top|bottom|left|right)$/.test(x);
        }), 0);
      };
      var tipPos = getTipPos();
      var arrowPos = getArrowPos();
      if (angular__WEBPACK_IMPORTED_MODULE_0___default().isArray(offset) && offset.length === 2 && angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(offset[0]) && angular__WEBPACK_IMPORTED_MODULE_0___default().isNumber(offset[1])) {
        tipPos.x += offset[0];
        tipPos.y += offset[1];
      }
      if (isOutOfRange()) {
        placeAtFallback();
      }
      return {
        tip: {
          'transform': "translate(".concat(tipPos.x, "px,").concat(tipPos.y, "px)")
        },
        arrow: {
          'transform': place === 'bottom' || place === 'top' ? "translateX(".concat(arrowPos.x, "px)") : "translateY(".concat(arrowPos.y, "px)")
        },
        placementClass: getPlacementClass()
      };
    }
  }]);
}();
_defineProperty(PositionService, "$inject", ['$bs5DOM']);
var MODULE_NAME = 'ng1bs5.position';
angular__WEBPACK_IMPORTED_MODULE_0___default().module(MODULE_NAME, [_dom_service__WEBPACK_IMPORTED_MODULE_1__["default"]]).service('$bs5Position', PositionService);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MODULE_NAME);

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "angular":
/*!**********************************************************************************************!*\
  !*** external {"commonjs":"angular","commonjs2":"angular","amd":"angular","root":"angular"} ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_angular__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/accordion/accordion.module */ "./src/components/accordion/accordion.module.js");
/* harmony import */ var _components_alert_alert_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/alert/alert.module */ "./src/components/alert/alert.module.js");
/* harmony import */ var _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/autocomplete/autocomplete.module */ "./src/components/autocomplete/autocomplete.module.js");
/* harmony import */ var _components_collapse_collapse_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/collapse/collapse.module */ "./src/components/collapse/collapse.module.js");
/* harmony import */ var _components_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/datepicker/datepicker.module */ "./src/components/datepicker/datepicker.module.js");
/* harmony import */ var _components_icons_icons_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/icons/icons.module */ "./src/components/icons/icons.module.js");
/* harmony import */ var _components_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/loading-overlay/loading-overlay.module */ "./src/components/loading-overlay/loading-overlay.module.js");
/* harmony import */ var _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal/modal.module */ "./src/components/modal/modal.module.js");
/* harmony import */ var _components_offcanvas_offcanvas_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/offcanvas/offcanvas.module */ "./src/components/offcanvas/offcanvas.module.js");
/* harmony import */ var _components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pagination/pagination.module */ "./src/components/pagination/pagination.module.js");
/* harmony import */ var _components_popover_popover_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/popover/popover.module */ "./src/components/popover/popover.module.js");
/* harmony import */ var _components_progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/progressbar/progressbar.module */ "./src/components/progressbar/progressbar.module.js");
/* harmony import */ var _components_rating_rating_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/rating/rating.module */ "./src/components/rating/rating.module.js");
/* harmony import */ var _components_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/tabs/tabs.module */ "./src/components/tabs/tabs.module.js");
/* harmony import */ var _components_toast_toast_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/toast/toast.module */ "./src/components/toast/toast.module.js");
/* harmony import */ var _components_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/tooltip/tooltip.module */ "./src/components/tooltip/tooltip.module.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _components_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dropdown/dropdown_module */ "./src/components/dropdown/dropdown_module.js");
/**
 * angularjs-bootstrap-5 (ES6)
 *
 * Version: 2.0.0
 * Author: Adam Davis (Converted to ES6)
 * License: MIT
 */



// Components - using default imports

















// Styles


var NG1BS5_MODULE_NAME = 'ng1bs5';
angular__WEBPACK_IMPORTED_MODULE_0___default().module(NG1BS5_MODULE_NAME, [_components_accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__["default"], _components_alert_alert_module__WEBPACK_IMPORTED_MODULE_2__["default"], _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_3__["default"], _components_collapse_collapse_module__WEBPACK_IMPORTED_MODULE_4__["default"], _components_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_5__["default"], _components_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_18__["default"], _components_icons_icons_module__WEBPACK_IMPORTED_MODULE_6__["default"], _components_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_7__["default"], _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["default"], _components_offcanvas_offcanvas_module__WEBPACK_IMPORTED_MODULE_9__["default"], _components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_10__["default"], _components_popover_popover_module__WEBPACK_IMPORTED_MODULE_11__["default"], _components_progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_12__["default"], _components_rating_rating_module__WEBPACK_IMPORTED_MODULE_13__["default"], _components_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_14__["default"], _components_toast_toast_module__WEBPACK_IMPORTED_MODULE_15__["default"], _components_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_16__["default"]]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NG1BS5_MODULE_NAME);
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=ng1bs5.js.map