"use strict";
(self["webpackChunkrestauraunt_page"] = self["webpackChunkrestauraunt_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/Oswald/Oswald-VariableFont_wght.ttf */ "./src/Oswald/Oswald-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/images/backgroundfood.jpg */ "./src/images/backgroundfood.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Reset */

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

/* General space styling */
@font-face {
    font-family: "Oswald" ;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

:root {
    --burgundy: #643843;
    --lightburgundy: #99627A;
    --lighterBurgundy: #C88EA7;
    --biege: #E7CBCB;
	--transparentBurgundy:#63384391 ;
	--transparentLightBurg: #99627aab;
	--transparentLighterBurg:#c88ea7d6 ;
	--transparentBiege: #e7cbcbc6;
    font-family: "Oswald";
}

body {
	height: 100vh;
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-attachment: fixed;
}

#content {
	height: 100%;
	display: grid;
	align-content: space-between;
}

/* Header styling */
#header {
	background-color: var(--lightburgundy);
	display: grid;
	grid-auto-flow: column;
	place-items: center;
	gap: 20px;
	padding: 30px;
}

#logo {
	display: grid;
	grid-auto-flow: column;
	place-items: center;
	gap: 20px;
}

#logo-name {
	color: var(--biege);
	font-size: 32px;
}

#nav {
	display: grid;
	grid-auto-flow: column;
	place-items: center;
	gap: 20px;
}

.nav-btn {
	background-color: var(--biege);
	color: var(--burgundy);
	font-size: 20px;
	width: 100px;
	height: 40px;
	border-radius: 3px;
}

.active {
	border-bottom: solid 10px var(--burgundy);
}

/* Footer styling */
#footer {
	background-color: var(--burgundy);
	display: grid;
	grid-auto-flow: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	padding: 10px;
	color: var(--biege);
}

/* Main styling */
#main {
	display: grid;
	place-content: center;
	place-items: center;
}

/* Home page styling */
#hero {
	display: grid;
	gap:20px;
	place-content: center;
	place-items: center;
	width: 50%;
	height: 80%;
	background-color: var(--transparentLighterBurg);
	padding:50px;
	border-radius: 15px;
}

#hero-header {
    font-size: 38px;
	color: var(--burgundy);
	font-weight: bold;
	text-align: center;
}

#hero-text {
	font-size: 24px;
	text-align: center;
	color: var(--biege);
	line-height: 35px;
}

#order-btn {
	background-color: var(--burgundy);
	color: var(--biege);
	font-size: 20px;
	width: 100px;
	height: 40px;
	border-radius: 3px;
}

/* Contacts page styling */
#contacts-container {
	display: grid;
	gap:20px;
	place-content: center;
	place-items: center;
	width: 80%;
	height: 80%;
	background-color: var(--transparentLighterBurg);
	padding:50px;
	border-radius: 15px;
}

#contact-header {
	font-size: 32px;
	color: var(--biege);
	font-weight: bold;
	text-align: center;
}

#contacts-text-container {
	display: grid;
	gap: 10px;
	place-content: center;
	place-items: center;
	color: var(--burgundy);
}

/* Menu styling */

#menu-container {
	display: grid;
	gap:50px;
	place-content: center;
	place-items: center;
	width: 70%;
	margin: 50px;
	background-color: var(--transparentBiege);
	padding:50px;
	border-radius: 15px;
}

#menu-header {
	display: grid;
	grid-auto-flow: column;
	gap: 30px;
	place-content: center;
	place-items: center;
	font-size: 38px;
	color: var(--burgundy);
	font-weight: bold;
}

.type-menu-container {
	display: grid;
	gap:30px;
	padding-left: 10%;
	padding-right: 10%;
}

.item-container-header {
	font-size: 38px;
	place-content: center;
	place-items: center;
	color: var(--burgundy);
}

.item-container {
	display: grid;
	grid-auto-flow: column;
	gap: 15%;
}

.item-text-container {
	display: grid;
	gap:10px;
	font-size: 20px;
}

.item-name,
.item-price {
	font-size: 22px;
	color: var(--burgundy);
}

.item-pic {
	border-radius: 30px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Reset */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbutton, input[type=\"submit\"], input[type=\"reset\"] {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n/* General space styling */\n@font-face {\n    font-family: \"Oswald\" ;\n    src: url(/src/Oswald/Oswald-VariableFont_wght.ttf);\n}\n\n:root {\n    --burgundy: #643843;\n    --lightburgundy: #99627A;\n    --lighterBurgundy: #C88EA7;\n    --biege: #E7CBCB;\n\t--transparentBurgundy:#63384391 ;\n\t--transparentLightBurg: #99627aab;\n\t--transparentLighterBurg:#c88ea7d6 ;\n\t--transparentBiege: #e7cbcbc6;\n    font-family: \"Oswald\";\n}\n\nbody {\n\theight: 100vh;\n\tbackground-image: url(/src/images/backgroundfood.jpg);\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tbackground-attachment: fixed;\n}\n\n#content {\n\theight: 100%;\n\tdisplay: grid;\n\talign-content: space-between;\n}\n\n/* Header styling */\n#header {\n\tbackground-color: var(--lightburgundy);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tplace-items: center;\n\tgap: 20px;\n\tpadding: 30px;\n}\n\n#logo {\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tplace-items: center;\n\tgap: 20px;\n}\n\n#logo-name {\n\tcolor: var(--biege);\n\tfont-size: 32px;\n}\n\n#nav {\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tplace-items: center;\n\tgap: 20px;\n}\n\n.nav-btn {\n\tbackground-color: var(--biege);\n\tcolor: var(--burgundy);\n\tfont-size: 20px;\n\twidth: 100px;\n\theight: 40px;\n\tborder-radius: 3px;\n}\n\n.active {\n\tborder-bottom: solid 10px var(--burgundy);\n}\n\n/* Footer styling */\n#footer {\n\tbackground-color: var(--burgundy);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 20px;\n\tpadding: 10px;\n\tcolor: var(--biege);\n}\n\n/* Main styling */\n#main {\n\tdisplay: grid;\n\tplace-content: center;\n\tplace-items: center;\n}\n\n/* Home page styling */\n#hero {\n\tdisplay: grid;\n\tgap:20px;\n\tplace-content: center;\n\tplace-items: center;\n\twidth: 50%;\n\theight: 80%;\n\tbackground-color: var(--transparentLighterBurg);\n\tpadding:50px;\n\tborder-radius: 15px;\n}\n\n#hero-header {\n    font-size: 38px;\n\tcolor: var(--burgundy);\n\tfont-weight: bold;\n\ttext-align: center;\n}\n\n#hero-text {\n\tfont-size: 24px;\n\ttext-align: center;\n\tcolor: var(--biege);\n\tline-height: 35px;\n}\n\n#order-btn {\n\tbackground-color: var(--burgundy);\n\tcolor: var(--biege);\n\tfont-size: 20px;\n\twidth: 100px;\n\theight: 40px;\n\tborder-radius: 3px;\n}\n\n/* Contacts page styling */\n#contacts-container {\n\tdisplay: grid;\n\tgap:20px;\n\tplace-content: center;\n\tplace-items: center;\n\twidth: 80%;\n\theight: 80%;\n\tbackground-color: var(--transparentLighterBurg);\n\tpadding:50px;\n\tborder-radius: 15px;\n}\n\n#contact-header {\n\tfont-size: 32px;\n\tcolor: var(--biege);\n\tfont-weight: bold;\n\ttext-align: center;\n}\n\n#contacts-text-container {\n\tdisplay: grid;\n\tgap: 10px;\n\tplace-content: center;\n\tplace-items: center;\n\tcolor: var(--burgundy);\n}\n\n/* Menu styling */\n\n#menu-container {\n\tdisplay: grid;\n\tgap:50px;\n\tplace-content: center;\n\tplace-items: center;\n\twidth: 70%;\n\tmargin: 50px;\n\tbackground-color: var(--transparentBiege);\n\tpadding:50px;\n\tborder-radius: 15px;\n}\n\n#menu-header {\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgap: 30px;\n\tplace-content: center;\n\tplace-items: center;\n\tfont-size: 38px;\n\tcolor: var(--burgundy);\n\tfont-weight: bold;\n}\n\n.type-menu-container {\n\tdisplay: grid;\n\tgap:30px;\n\tpadding-left: 10%;\n\tpadding-right: 10%;\n}\n\n.item-container-header {\n\tfont-size: 38px;\n\tplace-content: center;\n\tplace-items: center;\n\tcolor: var(--burgundy);\n}\n\n.item-container {\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgap: 15%;\n}\n\n.item-text-container {\n\tdisplay: grid;\n\tgap:10px;\n\tfont-size: 20px;\n}\n\n.item-name,\n.item-price {\n\tfont-size: 22px;\n\tcolor: var(--burgundy);\n}\n\n.item-pic {\n\tborder-radius: 30px;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showContact: () => (/* binding */ showContact)
/* harmony export */ });
/* harmony import */ var _images_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/map.png */ "./src/images/map.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



function showContact() {
        const main = document.getElementById('main');
        main.textContent = '';
        main.appendChild(createContact());
};

function createContact() {
    const contactsContainer = document.createElement('div');
    contactsContainer.setAttribute('id', 'contacts-container');

    const contactHeader = document.createElement('div');
    contactHeader.setAttribute('id', 'contact-header');
    contactHeader.textContent = 'Get in touch with us!'

    const textContainer = document.createElement('div');
    textContainer.setAttribute('id', 'contacts-text-container');

    const adress = document.createElement('div');
    adress.classList.add('contacts-item');
    adress.textContent = '🗺 235 Lawley Middleway, Birmingham B4 7XH';

    const phone = document.createElement('div');
    phone.classList.add('contacts-item');
    phone.textContent = '📱 +44-000-000-0000';

    const email = document.createElement('div');
    email.classList.add('contacts-item');
    email.textContent = '📩 email@gmail.com';

    textContainer.appendChild(phone);
    textContainer.appendChild(email);
    textContainer.appendChild(adress);

    const map = new Image(450,300);
    map.src = _images_map_png__WEBPACK_IMPORTED_MODULE_0__;

    contactsContainer.appendChild(contactHeader);
    contactsContainer.appendChild(textContainer);
    contactsContainer.appendChild(map);

    return contactsContainer;
};

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showHome: () => (/* binding */ showHome)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website */ "./src/website.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




function showHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
};

function createHome() {
    const hero = document.createElement('div');
    hero.setAttribute('id', 'hero');

    const heroHeader = document.createElement('div');
    heroHeader.setAttribute('id', 'hero-header');
    heroHeader.textContent = 'Your Ultimate Destination for Burger Bliss!';

    const heroText = document.createElement('div');
    heroText.setAttribute('id', 'hero-text');
    heroText.textContent = 'Prepare to be blown away by the irresistible aroma and taste at Burger Place. Our burgers are more than just a meal; they are a celebration of flavor and a culinary delight. Experience the magic of perfectly cooked patties and expertly paired ingredients.';

    const orderBtn = document.createElement('button');
    orderBtn.setAttribute('id', 'order-btn');
    orderBtn.textContent = 'Order now!';
    orderBtn.addEventListener('click', () => {
        const menuBtn = document.getElementById('menu-btn');
        (0,_menu__WEBPACK_IMPORTED_MODULE_0__.showMenu)();
        (0,_website__WEBPACK_IMPORTED_MODULE_1__.setActiveBtn)(menuBtn);
    });

    hero.appendChild(heroHeader);
    hero.appendChild(heroText);
    hero.appendChild(orderBtn);

    return hero;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website */ "./src/website.js");



(0,_website__WEBPACK_IMPORTED_MODULE_1__.showWebsite)();

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showMenu: () => (/* binding */ showMenu)
/* harmony export */ });
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_cheeseburger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/cheeseburger.jpg */ "./src/images/cheeseburger.jpg");
/* harmony import */ var _images_sweetchicken_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/sweetchicken.jpg */ "./src/images/sweetchicken.jpg");
/* harmony import */ var _images_mushroomswiss_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/mushroomswiss.jpg */ "./src/images/mushroomswiss.jpg");
/* harmony import */ var _images_veggiesupreme_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/veggiesupreme.jpg */ "./src/images/veggiesupreme.jpg");
/* harmony import */ var _images_bbqburger_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/bbqburger.jpg */ "./src/images/bbqburger.jpg");
/* harmony import */ var _images_frenchfries_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/frenchfries.jpg */ "./src/images/frenchfries.jpg");
/* harmony import */ var _images_onionrings_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/onionrings.jpg */ "./src/images/onionrings.jpg");
/* harmony import */ var _images_sweetpotatofries_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/sweetpotatofries.jpg */ "./src/images/sweetpotatofries.jpg");
/* harmony import */ var _images_milkshake_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/milkshake.jpg */ "./src/images/milkshake.jpg");
/* harmony import */ var _images_icedtea_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/icedtea.jpg */ "./src/images/icedtea.jpg");
/* harmony import */ var _images_lemonade_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/lemonade.jpg */ "./src/images/lemonade.jpg");
/* harmony import */ var _images_soda_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/soda.jpg */ "./src/images/soda.jpg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style.css */ "./src/style.css");















function showMenu() {
    const main = document.getElementById('main');
    main.textContent = '';

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');

    menuContainer.appendChild(createHeaderMenu());
    menuContainer.appendChild(createBurgerMenu());
    menuContainer.appendChild(createSidesMenu());
    menuContainer.appendChild(createDrinksMenu());

    main.appendChild(menuContainer);
};

function createHeaderMenu() {
    const menuHeader = document.createElement('div');
    menuHeader.setAttribute('id', 'menu-header');

    const headerLogo = new Image(70,70);
    headerLogo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    headerLogo.setAttribute('id', 'header-logo');
    
    const headerText = document.createElement('div');
    headerText.setAttribute('id', 'header-text');
    headerText.textContent = 'Choose your meal';

    menuHeader.appendChild(headerLogo);
    menuHeader.appendChild(headerText);

    return menuHeader;
};

function createBurgerMenu() {
    const burgerContainer = document.createElement('div');
    burgerContainer.classList.add('type-menu-container');

    const burgerHeader = document.createElement('div');
    burgerHeader.classList.add('item-container-header');
    burgerHeader.textContent = 'Burgers';
    burgerContainer.appendChild(burgerHeader);

    burgerContainer.appendChild(
        createMenuItem(
            "Classic Cheeseburger",
            "Our signature juicy beef patty topped with melted cheddar cheese, fresh lettuce, ripe tomatoes, onions, and our secret sauce. Served on a toasted brioche bun.",
            "£9.99",
            _images_cheeseburger_jpg__WEBPACK_IMPORTED_MODULE_1__
        )
    );

    burgerContainer.appendChild(
        createMenuItem(
            "Spicy Chicken Burger",
            "Crispy chicken fillet coated in a flavorful blend of spices, accompanied by zesty jalapenos, crunchy lettuce, sliced pickles, and a creamy sriracha mayo. Served on a soft sesame seed bun.",
            "£8.99",
            _images_sweetchicken_jpg__WEBPACK_IMPORTED_MODULE_2__
        )
    );

    burgerContainer.appendChild(
        createMenuItem(
            "Mushroom Swiss Burger",
            "A savory delight with a beef patty smothered in Swiss cheese and topped with sautéed mushrooms, caramelized onions, and our special house sauce. Served on a toasted artisanal bun.",
            "£10.49",
            _images_mushroomswiss_jpg__WEBPACK_IMPORTED_MODULE_3__
        )
    );

    burgerContainer.appendChild(
        createMenuItem(
            "Double Bacon BBQ Burger",
            "For the meat lovers, enjoy two beef patties stacked with crispy bacon, melted American cheese, tangy BBQ sauce, fresh lettuce, and sliced tomatoes. Served on a toasted pretzel bun.",
            "£11.99",
            _images_bbqburger_jpg__WEBPACK_IMPORTED_MODULE_5__
        )
    );

    burgerContainer.appendChild(
        createMenuItem(
            "Veggie Supreme Burger",
            "A mouthwatering vegetarian option featuring a plant-based patty, loaded with roasted bell peppers, grilled onions, sliced avocado, lettuce, and tangy herb mayo. Served on a multigrain bun.",
            "£9.49",
            _images_veggiesupreme_jpg__WEBPACK_IMPORTED_MODULE_4__
        )
    );

    return burgerContainer;
};

function createSidesMenu() {
    const sidesContainer = document.createElement('div');
    sidesContainer.classList.add('type-menu-container');

    const sidesHeader = document.createElement('div');
    sidesHeader.classList.add('item-container-header');
    sidesHeader.textContent = 'Sides';
    sidesContainer.appendChild(sidesHeader);

    sidesContainer.appendChild(
        createMenuItem(
            "Crispy Chips",
            "Golden and crispy on the outside, soft and fluffy on the inside. Perfectly seasoned with a sprinkle of salt.",
            "£3.49",
            _images_frenchfries_jpg__WEBPACK_IMPORTED_MODULE_6__
        )
    );

    sidesContainer.appendChild(
        createMenuItem(
            "Onion Rings",
            "Crispy, beer-battered onion rings with a hint of spice, served with a zesty dipping sauce.",
            "£4.49",
            _images_onionrings_jpg__WEBPACK_IMPORTED_MODULE_7__
        )
    );

    sidesContainer.appendChild(
        createMenuItem(
            "Sweet Potato Chips",
            "Thinly sliced sweet potatoes fried to a delightful crispness, served with a creamy chipotle aioli.",
            "£4.49",
            _images_sweetpotatofries_jpg__WEBPACK_IMPORTED_MODULE_8__
        )
    );

    return sidesContainer;
};

function createDrinksMenu() {
    const drinksContainer = document.createElement('div');
    drinksContainer.classList.add('type-menu-container');

    const drinksHeader = document.createElement('div');
    drinksHeader.classList.add('item-container-header');
    drinksHeader.textContent = 'Drinks';
    drinksContainer.appendChild(drinksHeader);

    drinksContainer.appendChild(
        createMenuItem(
            "Classic Milkshake",
            "Creamy and indulgent, choose from chocolate, vanilla, or strawberry flavors.",
            "£3.99",
            _images_milkshake_jpg__WEBPACK_IMPORTED_MODULE_9__
        )
    );

    drinksContainer.appendChild(
        createMenuItem(
            "Craft Soda",
            "Quench your thirst with our selection of unique, locally sourced craft sodas.",
            "£2.99",
            _images_soda_jpg__WEBPACK_IMPORTED_MODULE_12__
        )
    );

    drinksContainer.appendChild(
        createMenuItem(
            "Refreshing Lemonade",
            "A zesty and thirst-quenching beverage made with freshly squeezed lemons and a hint of sweetness.",
            "£2.99",
            _images_lemonade_jpg__WEBPACK_IMPORTED_MODULE_11__
        )
    );

    drinksContainer.appendChild(
        createMenuItem(
            "Iced Tea",
            "A cool and revitalizing drink with your choice of peach, raspberry, or traditional lemon flavor.",
            "£2.99",
            _images_icedtea_jpg__WEBPACK_IMPORTED_MODULE_10__
        )
    );

    return drinksContainer;
};

function createMenuItem(nameItem, text, price, picSrc, link) {
    const item = document.createElement('div');
    item.classList.add('item-container');

    const itemTextContainer = document.createElement('div');
    itemTextContainer.classList.add('item-text-container');

    const itemName = document.createElement('div');
    itemName.classList.add('item-name');
    itemName.textContent = nameItem;


    const itemText = document.createElement('div');
    itemText.classList.add('item-text');
    itemText.textContent = text;

    const itemPrice = document.createElement('div');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = price;

    const itemPic = new Image(150, 150);
    itemPic.src = picSrc;
    itemPic.classList.add('item-pic');

    itemTextContainer.appendChild(itemName);
    itemTextContainer.appendChild(itemText);
    itemTextContainer.appendChild(itemPrice);
    item.appendChild(itemTextContainer)
    item.appendChild(itemPic);

    return item;
};

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setActiveBtn: () => (/* binding */ setActiveBtn),
/* harmony export */   showWebsite: () => (/* binding */ showWebsite)
/* harmony export */ });
/* harmony import */ var _images_logo_biege_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo-biege.png */ "./src/images/logo-biege.png");
/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/github.svg */ "./src/images/github.svg");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







function createHeader() {
    const header = document.createElement('header');
    header.setAttribute('id', 'header');
    
    header.appendChild(createLogo());
    header.appendChild(createNav());

    return header;
};

function createLogo() {
    const logo = document.createElement('div');
    logo.setAttribute('id', 'logo');

    const logoName = document.createElement('div');
    logoName.setAttribute('id', 'logo-name');
    logoName.textContent = 'BURGER PLACE';

    const logoPic = new Image(50, 50);
    logoPic.src = _images_logo_biege_png__WEBPACK_IMPORTED_MODULE_0__;
    logoPic.setAttribute('id', 'logo-pic');

    logo.appendChild(logoPic);
    logo.appendChild(logoName);

    return logo;
};

function createNav() {
    const nav = document.createElement('div');
    nav.setAttribute('id', 'nav');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('nav-btn');
    homeBtn.setAttribute('id', 'home-btn');
    homeBtn.textContent = 'HOME';
    homeBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) {
            return;
        } else {
            setActiveBtn(homeBtn);
            (0,_home__WEBPACK_IMPORTED_MODULE_2__.showHome)();
        };
    });

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-btn');
    menuBtn.setAttribute('id', 'menu-btn');
    menuBtn.textContent = 'MENU';
    menuBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) {
            return;
        } else {
            setActiveBtn(menuBtn);
            (0,_menu__WEBPACK_IMPORTED_MODULE_3__.showMenu)();
        };
    });

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('nav-btn');
    contactBtn.textContent = 'CONTACT';
    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) {
            return;
        } else {
            setActiveBtn(contactBtn);
            (0,_contact__WEBPACK_IMPORTED_MODULE_4__.showContact)();
        };
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
};

function setActiveBtn(button) {
    const buttons = document.querySelectorAll('.nav-btn');

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove('active');
        }
    });

    button.classList.add('active');
};

function createMain() {
    const main = document.createElement('main');
    main.setAttribute('id', 'main');

    return main;
};

function createFooter() {
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');

    const copyright = document.createElement('div');
    copyright.textContent = `Copyright © ${new Date().getFullYear()} ekat-velaz`;
    copyright.setAttribute('id', 'copyright');

    const githubLink = document.createElement('a');
    githubLink.setAttribute('id', 'github-link');
    githubLink.href = "https://github.com/ekat-velaz";

    const githubIcon = new Image(50,50);
    githubIcon.setAttribute('id', 'github-icon');
    githubIcon.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_1__;

    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);

    return footer;
};

function showWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    const homeBtn = document.getElementById('home-btn');

    setActiveBtn(homeBtn);
    (0,_home__WEBPACK_IMPORTED_MODULE_2__.showHome)();
};

/***/ }),

/***/ "./src/Oswald/Oswald-VariableFont_wght.ttf":
/*!*************************************************!*\
  !*** ./src/Oswald/Oswald-VariableFont_wght.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46d7853f0185f6bf0c93.ttf";

/***/ }),

/***/ "./src/images/backgroundfood.jpg":
/*!***************************************!*\
  !*** ./src/images/backgroundfood.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "232d8caea3cca64e55ba.jpg";

/***/ }),

/***/ "./src/images/bbqburger.jpg":
/*!**********************************!*\
  !*** ./src/images/bbqburger.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5750f19972fedb27eea9.jpg";

/***/ }),

/***/ "./src/images/cheeseburger.jpg":
/*!*************************************!*\
  !*** ./src/images/cheeseburger.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f1c0c42aa6ca2788b34.jpg";

/***/ }),

/***/ "./src/images/frenchfries.jpg":
/*!************************************!*\
  !*** ./src/images/frenchfries.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c6e172c90c6645259637.jpg";

/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "550985caaa8859d4b95f.svg";

/***/ }),

/***/ "./src/images/icedtea.jpg":
/*!********************************!*\
  !*** ./src/images/icedtea.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1fd327343487f6ce8514.jpg";

/***/ }),

/***/ "./src/images/lemonade.jpg":
/*!*********************************!*\
  !*** ./src/images/lemonade.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "086aea0de676d09505c4.jpg";

/***/ }),

/***/ "./src/images/logo-biege.png":
/*!***********************************!*\
  !*** ./src/images/logo-biege.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16158dfe33090d84f162.png";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6c9e80375b819b911f8.png";

/***/ }),

/***/ "./src/images/map.png":
/*!****************************!*\
  !*** ./src/images/map.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45f1a24a9cef15f0de3c.png";

/***/ }),

/***/ "./src/images/milkshake.jpg":
/*!**********************************!*\
  !*** ./src/images/milkshake.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6457902a3b8391e29b06.jpg";

/***/ }),

/***/ "./src/images/mushroomswiss.jpg":
/*!**************************************!*\
  !*** ./src/images/mushroomswiss.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8ee45324b69401d3bc9.jpg";

/***/ }),

/***/ "./src/images/onionrings.jpg":
/*!***********************************!*\
  !*** ./src/images/onionrings.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e460da68d6e6fa45808a.jpg";

/***/ }),

/***/ "./src/images/soda.jpg":
/*!*****************************!*\
  !*** ./src/images/soda.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "353c696c48c30aa508d0.jpg";

/***/ }),

/***/ "./src/images/sweetchicken.jpg":
/*!*************************************!*\
  !*** ./src/images/sweetchicken.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c4fc00aa08800815eb6.jpg";

/***/ }),

/***/ "./src/images/sweetpotatofries.jpg":
/*!*****************************************!*\
  !*** ./src/images/sweetpotatofries.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ed1a0f50561c1b5081c.jpg";

/***/ }),

/***/ "./src/images/veggiesupreme.jpg":
/*!**************************************!*\
  !*** ./src/images/veggiesupreme.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e291b4a2392e3c3e7c32.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zMzA2YjBhNGQ1OWZhMjhlOWRkMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsd0tBQTJEO0FBQ3ZHLDRDQUE0QyxvSkFBaUQ7QUFDN0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLG1DQUFtQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixPQUFPLE1BQU0saUJBQWlCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksOG9CQUE4b0IsY0FBYyxl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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9Oa0Q7QUFDTDtBQUNYO0FBQ0E7QUFDTTtBQUNuQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixtREFBVztBQUM3Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsWUFBWSwrQ0FBUTtBQUNwQjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxZQUFZLCtDQUFRO0FBQ3BCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxZQUFZLHFEQUFXO0FBQ3ZCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQywwQkFBMEI7QUFDckU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsK0NBQVU7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSwrQ0FBUTtBQUNaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYXVudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYXVudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYXVudF9wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9zcmMvd2Vic2l0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9Pc3dhbGQvT3N3YWxkLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvaW1hZ2VzL2JhY2tncm91bmRmb29kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFJlc2V0ICovXG5cbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuYnV0dG9uLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBpbnB1dFt0eXBlPVwicmVzZXRcIl0ge1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRjb2xvcjogaW5oZXJpdDtcblx0Ym9yZGVyOiBub25lO1xuXHRwYWRkaW5nOiAwO1xuXHRmb250OiBpbmhlcml0O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdG91dGxpbmU6IGluaGVyaXQ7XG59XG5cbi8qIEdlbmVyYWwgc3BhY2Ugc3R5bGluZyAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIgO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG46cm9vdCB7XG4gICAgLS1idXJndW5keTogIzY0Mzg0MztcbiAgICAtLWxpZ2h0YnVyZ3VuZHk6ICM5OTYyN0E7XG4gICAgLS1saWdodGVyQnVyZ3VuZHk6ICNDODhFQTc7XG4gICAgLS1iaWVnZTogI0U3Q0JDQjtcblx0LS10cmFuc3BhcmVudEJ1cmd1bmR5OiM2MzM4NDM5MSA7XG5cdC0tdHJhbnNwYXJlbnRMaWdodEJ1cmc6ICM5OTYyN2FhYjtcblx0LS10cmFuc3BhcmVudExpZ2h0ZXJCdXJnOiNjODhlYTdkNiA7XG5cdC0tdHJhbnNwYXJlbnRCaWVnZTogI2U3Y2JjYmM2O1xuICAgIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiO1xufVxuXG5ib2R5IHtcblx0aGVpZ2h0OiAxMDB2aDtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbiNjb250ZW50IHtcblx0aGVpZ2h0OiAxMDAlO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xuI2hlYWRlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0YnVyZ3VuZHkpO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuXHRwbGFjZS1pdGVtczogY2VudGVyO1xuXHRnYXA6IDIwcHg7XG5cdHBhZGRpbmc6IDMwcHg7XG59XG5cbiNsb2dvIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcblx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAyMHB4O1xufVxuXG4jbG9nby1uYW1lIHtcblx0Y29sb3I6IHZhcigtLWJpZWdlKTtcblx0Zm9udC1zaXplOiAzMnB4O1xufVxuXG4jbmF2IHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcblx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAyMHB4O1xufVxuXG4ubmF2LWJ0biB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJpZWdlKTtcblx0Y29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHR3aWR0aDogMTAwcHg7XG5cdGhlaWdodDogNDBweDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uYWN0aXZlIHtcblx0Ym9yZGVyLWJvdHRvbTogc29saWQgMTBweCB2YXIoLS1idXJndW5keSk7XG59XG5cbi8qIEZvb3RlciBzdHlsaW5nICovXG4jZm9vdGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAyMHB4O1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRjb2xvcjogdmFyKC0tYmllZ2UpO1xufVxuXG4vKiBNYWluIHN0eWxpbmcgKi9cbiNtYWluIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0cGxhY2UtY29udGVudDogY2VudGVyO1xuXHRwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4vKiBIb21lIHBhZ2Ugc3R5bGluZyAqL1xuI2hlcm8ge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRnYXA6MjBweDtcblx0cGxhY2UtY29udGVudDogY2VudGVyO1xuXHRwbGFjZS1pdGVtczogY2VudGVyO1xuXHR3aWR0aDogNTAlO1xuXHRoZWlnaHQ6IDgwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnRMaWdodGVyQnVyZyk7XG5cdHBhZGRpbmc6NTBweDtcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuI2hlcm8taGVhZGVyIHtcbiAgICBmb250LXNpemU6IDM4cHg7XG5cdGNvbG9yOiB2YXIoLS1idXJndW5keSk7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNoZXJvLXRleHQge1xuXHRmb250LXNpemU6IDI0cHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6IHZhcigtLWJpZWdlKTtcblx0bGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbiNvcmRlci1idG4ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXJndW5keSk7XG5cdGNvbG9yOiB2YXIoLS1iaWVnZSk7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0d2lkdGg6IDEwMHB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLyogQ29udGFjdHMgcGFnZSBzdHlsaW5nICovXG4jY29udGFjdHMtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z2FwOjIwcHg7XG5cdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcblx0d2lkdGg6IDgwJTtcblx0aGVpZ2h0OiA4MCU7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50TGlnaHRlckJ1cmcpO1xuXHRwYWRkaW5nOjUwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbiNjb250YWN0LWhlYWRlciB7XG5cdGZvbnQtc2l6ZTogMzJweDtcblx0Y29sb3I6IHZhcigtLWJpZWdlKTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRhY3RzLXRleHQtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z2FwOiAxMHB4O1xuXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XG5cdHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5cdGNvbG9yOiB2YXIoLS1idXJndW5keSk7XG59XG5cbi8qIE1lbnUgc3R5bGluZyAqL1xuXG4jbWVudS1jb250YWluZXIge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRnYXA6NTBweDtcblx0cGxhY2UtY29udGVudDogY2VudGVyO1xuXHRwbGFjZS1pdGVtczogY2VudGVyO1xuXHR3aWR0aDogNzAlO1xuXHRtYXJnaW46IDUwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50QmllZ2UpO1xuXHRwYWRkaW5nOjUwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbiNtZW51LWhlYWRlciB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG5cdGdhcDogMzBweDtcblx0cGxhY2UtY29udGVudDogY2VudGVyO1xuXHRwbGFjZS1pdGVtczogY2VudGVyO1xuXHRmb250LXNpemU6IDM4cHg7XG5cdGNvbG9yOiB2YXIoLS1idXJndW5keSk7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udHlwZS1tZW51LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdhcDozMHB4O1xuXHRwYWRkaW5nLWxlZnQ6IDEwJTtcblx0cGFkZGluZy1yaWdodDogMTAlO1xufVxuXG4uaXRlbS1jb250YWluZXItaGVhZGVyIHtcblx0Zm9udC1zaXplOiAzOHB4O1xuXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XG5cdHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5cdGNvbG9yOiB2YXIoLS1idXJndW5keSk7XG59XG5cbi5pdGVtLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG5cdGdhcDogMTUlO1xufVxuXG4uaXRlbS10ZXh0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdhcDoxMHB4O1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbi5pdGVtLW5hbWUsXG4uaXRlbS1wcmljZSB7XG5cdGZvbnQtc2l6ZTogMjJweDtcblx0Y29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcbn1cblxuLml0ZW0tcGljIHtcblx0Ym9yZGVyLXJhZGl1czogMzBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVTs7QUFFVjs7O0NB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LHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLFlBQVk7Q0FDWix5Q0FBeUM7Q0FDekMsWUFBWTtDQUNaLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztDQUNULHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLHNCQUFzQjtDQUN0QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsUUFBUTtDQUNSLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFFBQVE7QUFDVDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixRQUFRO0NBQ1IsZUFBZTtBQUNoQjs7QUFFQTs7Q0FFQyxlQUFlO0NBQ2Ysc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFJlc2V0ICovXFxuXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5idXR0b24sIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcbi8qIEdlbmVyYWwgc3BhY2Ugc3R5bGluZyAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIgO1xcbiAgICBzcmM6IHVybCgvc3JjL09zd2FsZC9Pc3dhbGQtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWJ1cmd1bmR5OiAjNjQzODQzO1xcbiAgICAtLWxpZ2h0YnVyZ3VuZHk6ICM5OTYyN0E7XFxuICAgIC0tbGlnaHRlckJ1cmd1bmR5OiAjQzg4RUE3O1xcbiAgICAtLWJpZWdlOiAjRTdDQkNCO1xcblxcdC0tdHJhbnNwYXJlbnRCdXJndW5keTojNjMzODQzOTEgO1xcblxcdC0tdHJhbnNwYXJlbnRMaWdodEJ1cmc6ICM5OTYyN2FhYjtcXG5cXHQtLXRyYW5zcGFyZW50TGlnaHRlckJ1cmc6I2M4OGVhN2Q2IDtcXG5cXHQtLXRyYW5zcGFyZW50QmllZ2U6ICNlN2NiY2JjNjtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2ltYWdlcy9iYWNrZ3JvdW5kZm9vZC5qcGcpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuI2NvbnRlbnQge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIEhlYWRlciBzdHlsaW5nICovXFxuI2hlYWRlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRidXJndW5keSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAyMHB4O1xcblxcdHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbiNsb2dvIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDIwcHg7XFxufVxcblxcbiNsb2dvLW5hbWUge1xcblxcdGNvbG9yOiB2YXIoLS1iaWVnZSk7XFxuXFx0Zm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4jbmF2IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDIwcHg7XFxufVxcblxcbi5uYXYtYnRuIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iaWVnZSk7XFxuXFx0Y29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5hY3RpdmUge1xcblxcdGJvcmRlci1ib3R0b206IHNvbGlkIDEwcHggdmFyKC0tYnVyZ3VuZHkpO1xcbn1cXG5cXG4vKiBGb290ZXIgc3R5bGluZyAqL1xcbiNmb290ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDIwcHg7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRjb2xvcjogdmFyKC0tYmllZ2UpO1xcbn1cXG5cXG4vKiBNYWluIHN0eWxpbmcgKi9cXG4jbWFpbiB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogSG9tZSBwYWdlIHN0eWxpbmcgKi9cXG4jaGVybyB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6MjBweDtcXG5cXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogNTAlO1xcblxcdGhlaWdodDogODAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50TGlnaHRlckJ1cmcpO1xcblxcdHBhZGRpbmc6NTBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4jaGVyby1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuXFx0Y29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNoZXJvLXRleHQge1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Y29sb3I6IHZhcigtLWJpZWdlKTtcXG5cXHRsaW5lLWhlaWdodDogMzVweDtcXG59XFxuXFxuI29yZGVyLWJ0biB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xcblxcdGNvbG9yOiB2YXIoLS1iaWVnZSk7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdHdpZHRoOiAxMDBweDtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4vKiBDb250YWN0cyBwYWdlIHN0eWxpbmcgKi9cXG4jY29udGFjdHMtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdhcDoyMHB4O1xcblxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRwbGFjZS1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0aGVpZ2h0OiA4MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnRMaWdodGVyQnVyZyk7XFxuXFx0cGFkZGluZzo1MHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbiNjb250YWN0LWhlYWRlciB7XFxuXFx0Zm9udC1zaXplOiAzMnB4O1xcblxcdGNvbG9yOiB2YXIoLS1iaWVnZSk7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGFjdHMtdGV4dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z2FwOiAxMHB4O1xcblxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRwbGFjZS1pdGVtczogY2VudGVyO1xcblxcdGNvbG9yOiB2YXIoLS1idXJndW5keSk7XFxufVxcblxcbi8qIE1lbnUgc3R5bGluZyAqL1xcblxcbiNtZW51LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6NTBweDtcXG5cXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogNzAlO1xcblxcdG1hcmdpbjogNTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudEJpZWdlKTtcXG5cXHRwYWRkaW5nOjUwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuI21lbnUtaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0Z2FwOiAzMHB4O1xcblxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRwbGFjZS1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMzhweDtcXG5cXHRjb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udHlwZS1tZW51LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6MzBweDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDEwJTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMCU7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lci1oZWFkZXIge1xcblxcdGZvbnQtc2l6ZTogMzhweDtcXG5cXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcXG5cXHRjb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xcbn1cXG5cXG4uaXRlbS1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRnYXA6IDE1JTtcXG59XFxuXFxuLml0ZW0tdGV4dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z2FwOjEwcHg7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uaXRlbS1uYW1lLFxcbi5pdGVtLXByaWNlIHtcXG5cXHRmb250LXNpemU6IDIycHg7XFxuXFx0Y29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcXG59XFxuXFxuLml0ZW0tcGljIHtcXG5cXHRib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBtYXBQaWMgZnJvbSAnLi9pbWFnZXMvbWFwLnBuZyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDb250YWN0KCkge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICAgICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRhY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdHNDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0cy1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1oZWFkZXInKTtcbiAgICBjb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ0dldCBpbiB0b3VjaCB3aXRoIHVzISdcblxuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdHMtdGV4dC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGFkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkcmVzcy5jbGFzc0xpc3QuYWRkKCdjb250YWN0cy1pdGVtJyk7XG4gICAgYWRyZXNzLnRleHRDb250ZW50ID0gJ/Cfl7ogMjM1IExhd2xleSBNaWRkbGV3YXksIEJpcm1pbmdoYW0gQjQgN1hIJztcblxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGhvbmUuY2xhc3NMaXN0LmFkZCgnY29udGFjdHMtaXRlbScpO1xuICAgIHBob25lLnRleHRDb250ZW50ID0gJ/Cfk7EgKzQ0LTAwMC0wMDAtMDAwMCc7XG5cbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVtYWlsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RzLWl0ZW0nKTtcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9ICfwn5OpIGVtYWlsQGdtYWlsLmNvbSc7XG5cbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lKTtcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkcmVzcyk7XG5cbiAgICBjb25zdCBtYXAgPSBuZXcgSW1hZ2UoNDUwLDMwMCk7XG4gICAgbWFwLnNyYyA9IG1hcFBpYztcblxuICAgIGNvbnRhY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuICAgIGNvbnRhY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xuICAgIGNvbnRhY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1hcCk7XG5cbiAgICByZXR1cm4gY29udGFjdHNDb250YWluZXI7XG59OyIsImltcG9ydCB7IHNob3dNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgc2V0QWN0aXZlQnRuIH0gZnJvbSBcIi4vd2Vic2l0ZVwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93SG9tZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVyby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlcm8nKTtcblxuICAgIGNvbnN0IGhlcm9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvSGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVyby1oZWFkZXInKTtcbiAgICBoZXJvSGVhZGVyLnRleHRDb250ZW50ID0gJ1lvdXIgVWx0aW1hdGUgRGVzdGluYXRpb24gZm9yIEJ1cmdlciBCbGlzcyEnO1xuXG4gICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlcm8tdGV4dCcpO1xuICAgIGhlcm9UZXh0LnRleHRDb250ZW50ID0gJ1ByZXBhcmUgdG8gYmUgYmxvd24gYXdheSBieSB0aGUgaXJyZXNpc3RpYmxlIGFyb21hIGFuZCB0YXN0ZSBhdCBCdXJnZXIgUGxhY2UuIE91ciBidXJnZXJzIGFyZSBtb3JlIHRoYW4ganVzdCBhIG1lYWw7IHRoZXkgYXJlIGEgY2VsZWJyYXRpb24gb2YgZmxhdm9yIGFuZCBhIGN1bGluYXJ5IGRlbGlnaHQuIEV4cGVyaWVuY2UgdGhlIG1hZ2ljIG9mIHBlcmZlY3RseSBjb29rZWQgcGF0dGllcyBhbmQgZXhwZXJ0bHkgcGFpcmVkIGluZ3JlZGllbnRzLic7XG5cbiAgICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG9yZGVyQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnb3JkZXItYnRuJyk7XG4gICAgb3JkZXJCdG4udGV4dENvbnRlbnQgPSAnT3JkZXIgbm93ISc7XG4gICAgb3JkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1idG4nKTtcbiAgICAgICAgc2hvd01lbnUoKTtcbiAgICAgICAgc2V0QWN0aXZlQnRuKG1lbnVCdG4pO1xuICAgIH0pO1xuXG4gICAgaGVyby5hcHBlbmRDaGlsZChoZXJvSGVhZGVyKTtcbiAgICBoZXJvLmFwcGVuZENoaWxkKGhlcm9UZXh0KTtcbiAgICBoZXJvLmFwcGVuZENoaWxkKG9yZGVyQnRuKTtcblxuICAgIHJldHVybiBoZXJvO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHNob3dXZWJzaXRlIH0gZnJvbSAnLi93ZWJzaXRlJztcblxuc2hvd1dlYnNpdGUoKTsiLCJpbXBvcnQgbG9nb1BpY3R1cmUgZnJvbSAnLi9pbWFnZXMvbG9nby5wbmcnO1xuaW1wb3J0IGNoZWVzZUJ1cmdlciBmcm9tICcuL2ltYWdlcy9jaGVlc2VidXJnZXIuanBnJztcbmltcG9ydCBjaGlja2VuQnVyZ2VyIGZyb20gJy4vaW1hZ2VzL3N3ZWV0Y2hpY2tlbi5qcGcnO1xuaW1wb3J0IG11c2hyb29tc0J1cmdlciBmcm9tICcuL2ltYWdlcy9tdXNocm9vbXN3aXNzLmpwZyc7XG5pbXBvcnQgdmVnZ2llQnVyZ2VyIGZyb20gJy4vaW1hZ2VzL3ZlZ2dpZXN1cHJlbWUuanBnJztcbmltcG9ydCBiYnFCdXJnZXIgZnJvbSAnLi9pbWFnZXMvYmJxYnVyZ2VyLmpwZyc7XG5pbXBvcnQgZnJlbmNoRnJpZXMgZnJvbSAnLi9pbWFnZXMvZnJlbmNoZnJpZXMuanBnJztcbmltcG9ydCBvbmlvblJpbmdzIGZyb20gJy4vaW1hZ2VzL29uaW9ucmluZ3MuanBnJztcbmltcG9ydCBzd2VldFBvdGF0byBmcm9tICcuL2ltYWdlcy9zd2VldHBvdGF0b2ZyaWVzLmpwZyc7XG5pbXBvcnQgbWlsa3NoYWtlIGZyb20gJy4vaW1hZ2VzL21pbGtzaGFrZS5qcGcnO1xuaW1wb3J0IGljZWRUZWEgZnJvbSAnLi9pbWFnZXMvaWNlZHRlYS5qcGcnO1xuaW1wb3J0IGxlbW9uYWRlIGZyb20gJy4vaW1hZ2VzL2xlbW9uYWRlLmpwZyc7XG5pbXBvcnQgc29kYSBmcm9tICcuL2ltYWdlcy9zb2RhLmpwZyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1jb250YWluZXInKTtcblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyTWVudSgpKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUJ1cmdlck1lbnUoKSk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlc01lbnUoKSk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEcmlua3NNZW51KCkpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlck1lbnUoKSB7XG4gICAgY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWhlYWRlcicpO1xuXG4gICAgY29uc3QgaGVhZGVyTG9nbyA9IG5ldyBJbWFnZSg3MCw3MCk7XG4gICAgaGVhZGVyTG9nby5zcmMgPSBsb2dvUGljdHVyZTtcbiAgICBoZWFkZXJMb2dvLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLWxvZ28nKTtcbiAgICBcbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci10ZXh0Jyk7XG4gICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9ICdDaG9vc2UgeW91ciBtZWFsJztcblxuICAgIG1lbnVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTG9nbyk7XG4gICAgbWVudUhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcblxuICAgIHJldHVybiBtZW51SGVhZGVyO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlQnVyZ2VyTWVudSgpIHtcbiAgICBjb25zdCBidXJnZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXJnZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHlwZS1tZW51LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYnVyZ2VySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnVyZ2VySGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29udGFpbmVyLWhlYWRlcicpO1xuICAgIGJ1cmdlckhlYWRlci50ZXh0Q29udGVudCA9ICdCdXJnZXJzJztcbiAgICBidXJnZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVyZ2VySGVhZGVyKTtcblxuICAgIGJ1cmdlckNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBcIkNsYXNzaWMgQ2hlZXNlYnVyZ2VyXCIsXG4gICAgICAgICAgICBcIk91ciBzaWduYXR1cmUganVpY3kgYmVlZiBwYXR0eSB0b3BwZWQgd2l0aCBtZWx0ZWQgY2hlZGRhciBjaGVlc2UsIGZyZXNoIGxldHR1Y2UsIHJpcGUgdG9tYXRvZXMsIG9uaW9ucywgYW5kIG91ciBzZWNyZXQgc2F1Y2UuIFNlcnZlZCBvbiBhIHRvYXN0ZWQgYnJpb2NoZSBidW4uXCIsXG4gICAgICAgICAgICBcIsKjOS45OVwiLFxuICAgICAgICAgICAgY2hlZXNlQnVyZ2VyXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgYnVyZ2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgIFwiU3BpY3kgQ2hpY2tlbiBCdXJnZXJcIixcbiAgICAgICAgICAgIFwiQ3Jpc3B5IGNoaWNrZW4gZmlsbGV0IGNvYXRlZCBpbiBhIGZsYXZvcmZ1bCBibGVuZCBvZiBzcGljZXMsIGFjY29tcGFuaWVkIGJ5IHplc3R5IGphbGFwZW5vcywgY3J1bmNoeSBsZXR0dWNlLCBzbGljZWQgcGlja2xlcywgYW5kIGEgY3JlYW15IHNyaXJhY2hhIG1heW8uIFNlcnZlZCBvbiBhIHNvZnQgc2VzYW1lIHNlZWQgYnVuLlwiLFxuICAgICAgICAgICAgXCLCozguOTlcIixcbiAgICAgICAgICAgIGNoaWNrZW5CdXJnZXJcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBidXJnZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgXCJNdXNocm9vbSBTd2lzcyBCdXJnZXJcIixcbiAgICAgICAgICAgIFwiQSBzYXZvcnkgZGVsaWdodCB3aXRoIGEgYmVlZiBwYXR0eSBzbW90aGVyZWQgaW4gU3dpc3MgY2hlZXNlIGFuZCB0b3BwZWQgd2l0aCBzYXV0w6llZCBtdXNocm9vbXMsIGNhcmFtZWxpemVkIG9uaW9ucywgYW5kIG91ciBzcGVjaWFsIGhvdXNlIHNhdWNlLiBTZXJ2ZWQgb24gYSB0b2FzdGVkIGFydGlzYW5hbCBidW4uXCIsXG4gICAgICAgICAgICBcIsKjMTAuNDlcIixcbiAgICAgICAgICAgIG11c2hyb29tc0J1cmdlclxuICAgICAgICApXG4gICAgKTtcblxuICAgIGJ1cmdlckNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBcIkRvdWJsZSBCYWNvbiBCQlEgQnVyZ2VyXCIsXG4gICAgICAgICAgICBcIkZvciB0aGUgbWVhdCBsb3ZlcnMsIGVuam95IHR3byBiZWVmIHBhdHRpZXMgc3RhY2tlZCB3aXRoIGNyaXNweSBiYWNvbiwgbWVsdGVkIEFtZXJpY2FuIGNoZWVzZSwgdGFuZ3kgQkJRIHNhdWNlLCBmcmVzaCBsZXR0dWNlLCBhbmQgc2xpY2VkIHRvbWF0b2VzLiBTZXJ2ZWQgb24gYSB0b2FzdGVkIHByZXR6ZWwgYnVuLlwiLFxuICAgICAgICAgICAgXCLCozExLjk5XCIsXG4gICAgICAgICAgICBiYnFCdXJnZXJcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBidXJnZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgXCJWZWdnaWUgU3VwcmVtZSBCdXJnZXJcIixcbiAgICAgICAgICAgIFwiQSBtb3V0aHdhdGVyaW5nIHZlZ2V0YXJpYW4gb3B0aW9uIGZlYXR1cmluZyBhIHBsYW50LWJhc2VkIHBhdHR5LCBsb2FkZWQgd2l0aCByb2FzdGVkIGJlbGwgcGVwcGVycywgZ3JpbGxlZCBvbmlvbnMsIHNsaWNlZCBhdm9jYWRvLCBsZXR0dWNlLCBhbmQgdGFuZ3kgaGVyYiBtYXlvLiBTZXJ2ZWQgb24gYSBtdWx0aWdyYWluIGJ1bi5cIixcbiAgICAgICAgICAgIFwiwqM5LjQ5XCIsXG4gICAgICAgICAgICB2ZWdnaWVCdXJnZXJcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICByZXR1cm4gYnVyZ2VyQ29udGFpbmVyO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlU2lkZXNNZW51KCkge1xuICAgIGNvbnN0IHNpZGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHlwZS1tZW51LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3Qgc2lkZXNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlc0hlYWRlci5jbGFzc0xpc3QuYWRkKCdpdGVtLWNvbnRhaW5lci1oZWFkZXInKTtcbiAgICBzaWRlc0hlYWRlci50ZXh0Q29udGVudCA9ICdTaWRlcyc7XG4gICAgc2lkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZXNIZWFkZXIpO1xuXG4gICAgc2lkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgXCJDcmlzcHkgQ2hpcHNcIixcbiAgICAgICAgICAgIFwiR29sZGVuIGFuZCBjcmlzcHkgb24gdGhlIG91dHNpZGUsIHNvZnQgYW5kIGZsdWZmeSBvbiB0aGUgaW5zaWRlLiBQZXJmZWN0bHkgc2Vhc29uZWQgd2l0aCBhIHNwcmlua2xlIG9mIHNhbHQuXCIsXG4gICAgICAgICAgICBcIsKjMy40OVwiLFxuICAgICAgICAgICAgZnJlbmNoRnJpZXNcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBzaWRlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBcIk9uaW9uIFJpbmdzXCIsXG4gICAgICAgICAgICBcIkNyaXNweSwgYmVlci1iYXR0ZXJlZCBvbmlvbiByaW5ncyB3aXRoIGEgaGludCBvZiBzcGljZSwgc2VydmVkIHdpdGggYSB6ZXN0eSBkaXBwaW5nIHNhdWNlLlwiLFxuICAgICAgICAgICAgXCLCozQuNDlcIixcbiAgICAgICAgICAgIG9uaW9uUmluZ3NcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBzaWRlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBcIlN3ZWV0IFBvdGF0byBDaGlwc1wiLFxuICAgICAgICAgICAgXCJUaGlubHkgc2xpY2VkIHN3ZWV0IHBvdGF0b2VzIGZyaWVkIHRvIGEgZGVsaWdodGZ1bCBjcmlzcG5lc3MsIHNlcnZlZCB3aXRoIGEgY3JlYW15IGNoaXBvdGxlIGFpb2xpLlwiLFxuICAgICAgICAgICAgXCLCozQuNDlcIixcbiAgICAgICAgICAgIHN3ZWV0UG90YXRvXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgcmV0dXJuIHNpZGVzQ29udGFpbmVyO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRHJpbmtzTWVudSgpIHtcbiAgICBjb25zdCBkcmlua3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkcmlua3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHlwZS1tZW51LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgZHJpbmtzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJpbmtzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29udGFpbmVyLWhlYWRlcicpO1xuICAgIGRyaW5rc0hlYWRlci50ZXh0Q29udGVudCA9ICdEcmlua3MnO1xuICAgIGRyaW5rc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkcmlua3NIZWFkZXIpO1xuXG4gICAgZHJpbmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgIFwiQ2xhc3NpYyBNaWxrc2hha2VcIixcbiAgICAgICAgICAgIFwiQ3JlYW15IGFuZCBpbmR1bGdlbnQsIGNob29zZSBmcm9tIGNob2NvbGF0ZSwgdmFuaWxsYSwgb3Igc3RyYXdiZXJyeSBmbGF2b3JzLlwiLFxuICAgICAgICAgICAgXCLCozMuOTlcIixcbiAgICAgICAgICAgIG1pbGtzaGFrZVxuICAgICAgICApXG4gICAgKTtcblxuICAgIGRyaW5rc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBcIkNyYWZ0IFNvZGFcIixcbiAgICAgICAgICAgIFwiUXVlbmNoIHlvdXIgdGhpcnN0IHdpdGggb3VyIHNlbGVjdGlvbiBvZiB1bmlxdWUsIGxvY2FsbHkgc291cmNlZCBjcmFmdCBzb2Rhcy5cIixcbiAgICAgICAgICAgIFwiwqMyLjk5XCIsXG4gICAgICAgICAgICBzb2RhXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgZHJpbmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgIFwiUmVmcmVzaGluZyBMZW1vbmFkZVwiLFxuICAgICAgICAgICAgXCJBIHplc3R5IGFuZCB0aGlyc3QtcXVlbmNoaW5nIGJldmVyYWdlIG1hZGUgd2l0aCBmcmVzaGx5IHNxdWVlemVkIGxlbW9ucyBhbmQgYSBoaW50IG9mIHN3ZWV0bmVzcy5cIixcbiAgICAgICAgICAgIFwiwqMyLjk5XCIsXG4gICAgICAgICAgICBsZW1vbmFkZVxuICAgICAgICApXG4gICAgKTtcblxuICAgIGRyaW5rc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBcIkljZWQgVGVhXCIsXG4gICAgICAgICAgICBcIkEgY29vbCBhbmQgcmV2aXRhbGl6aW5nIGRyaW5rIHdpdGggeW91ciBjaG9pY2Ugb2YgcGVhY2gsIHJhc3BiZXJyeSwgb3IgdHJhZGl0aW9uYWwgbGVtb24gZmxhdm9yLlwiLFxuICAgICAgICAgICAgXCLCozIuOTlcIixcbiAgICAgICAgICAgIGljZWRUZWFcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICByZXR1cm4gZHJpbmtzQ29udGFpbmVyO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZUl0ZW0sIHRleHQsIHByaWNlLCBwaWNTcmMsIGxpbmspIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgaXRlbVRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLXRleHQtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gbmFtZUl0ZW07XG5cblxuICAgIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbVRleHQuY2xhc3NMaXN0LmFkZCgnaXRlbS10ZXh0Jyk7XG4gICAgaXRlbVRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcHJpY2UnKTtcbiAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcblxuICAgIGNvbnN0IGl0ZW1QaWMgPSBuZXcgSW1hZ2UoMTUwLCAxNTApO1xuICAgIGl0ZW1QaWMuc3JjID0gcGljU3JjO1xuICAgIGl0ZW1QaWMuY2xhc3NMaXN0LmFkZCgnaXRlbS1waWMnKTtcblxuICAgIGl0ZW1UZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICBpdGVtVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtVGV4dCk7XG4gICAgaXRlbVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1UZXh0Q29udGFpbmVyKVxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVBpYyk7XG5cbiAgICByZXR1cm4gaXRlbTtcbn07IiwiaW1wb3J0IGxvZ29QaWN0dXJlIGZyb20gJy4vaW1hZ2VzL2xvZ28tYmllZ2UucG5nJztcbmltcG9ydCBnaXRodWJMb2dvIGZyb20gJy4vaW1hZ2VzL2dpdGh1Yi5zdmcnO1xuaW1wb3J0IHsgc2hvd0hvbWUgfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgc2hvd01lbnUgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgc2hvd0NvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbiAgICBcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTG9nbygpKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvZ28oKSB7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XG5cbiAgICBjb25zdCBsb2dvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ29OYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9nby1uYW1lJyk7XG4gICAgbG9nb05hbWUudGV4dENvbnRlbnQgPSAnQlVSR0VSIFBMQUNFJztcblxuICAgIGNvbnN0IGxvZ29QaWMgPSBuZXcgSW1hZ2UoNTAsIDUwKTtcbiAgICBsb2dvUGljLnNyYyA9IGxvZ29QaWN0dXJlO1xuICAgIGxvZ29QaWMuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvLXBpYycpO1xuXG4gICAgbG9nby5hcHBlbmRDaGlsZChsb2dvUGljKTtcbiAgICBsb2dvLmFwcGVuZENoaWxkKGxvZ29OYW1lKTtcblxuICAgIHJldHVybiBsb2dvO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdicpO1xuXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGhvbWVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdob21lLWJ0bicpO1xuICAgIGhvbWVCdG4udGV4dENvbnRlbnQgPSAnSE9NRSc7XG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVCdG4oaG9tZUJ0bik7XG4gICAgICAgICAgICBzaG93SG9tZSgpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIG1lbnVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWJ0bicpO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSAnTUVOVSc7XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVCdG4obWVudUJ0bik7XG4gICAgICAgICAgICBzaG93TWVudSgpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSAnQ09OVEFDVCc7XG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVCdG4oY29udGFjdEJ0bik7XG4gICAgICAgICAgICBzaG93Q29udGFjdCgpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG5cbiAgICByZXR1cm4gbmF2O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZUJ0bihidXR0b24pIHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1idG4nKTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG5cbiAgICByZXR1cm4gbWFpbjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcblxuICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IGVrYXQtdmVsYXpgO1xuICAgIGNvcHlyaWdodC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvcHlyaWdodCcpO1xuXG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2l0aHViLWxpbmsnKTtcbiAgICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9la2F0LXZlbGF6XCI7XG5cbiAgICBjb25zdCBnaXRodWJJY29uID0gbmV3IEltYWdlKDUwLDUwKTtcbiAgICBnaXRodWJJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2l0aHViLWljb24nKTtcbiAgICBnaXRodWJJY29uLnNyYyA9IGdpdGh1YkxvZ287XG5cbiAgICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICAgIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1dlYnNpdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtYnRuJyk7XG5cbiAgICBzZXRBY3RpdmVCdG4oaG9tZUJ0bik7XG4gICAgc2hvd0hvbWUoKTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9