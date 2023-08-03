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

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

button,
input[type="submit"],
input[type="reset"] {
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
  font-family: "Oswald";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

:root {
  --burgundy: #643843;
  --lightburgundy: #99627a;
  --lighterBurgundy: #c88ea7;
  --biege: #e7cbcb;
  --transparentBurgundy: #63384391;
  --transparentLightBurg: #99627aab;
  --transparentLighterBurg: #c88ea7d6;
  --transparentBiege: #e7cbcbc6;
  font-family: "Oswald";
}

body {
  height: 100vh;
  width: 100vw;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

#content {
  height: 100%;
  width: 100%;
  display: grid;
  align-content: space-between;
  grid-template-rows: 1fr 5fr 1fr;
}

/* Header styling */
#header {
  background-color: var(--lightburgundy);
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  gap: 20px;
  padding: max(2vw, 20px);
  position: sticky;
  top: 0;
}

#logo {
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  gap: 20px;
}

#logo-name {
  color: var(--biege);
  font-size: max(3vw, 20px);
}

/* #logo-pic {
  widt
} */

#nav {
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  gap: 20px;
}

.nav-btn {
  background-color: var(--biege);
  color: var(--burgundy);
  font-size: max(1.5vw, 15px);
  width: max(10vw, 60px);
  height: 40px;
  border-radius: 3px;
}

.active {
  border-bottom: solid 10px var(--burgundy);
}

/* Footer styling */
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
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
  width: 100%;
  display: grid;
  place-content: center;
  place-items: center;
}

/* Home page styling */
#hero {
  display: grid;
  gap: 20px;
  place-content: center;
  place-items: center;
  width: 50vw;
  height: fit-content;
  background-color: var(--transparentLighterBurg);
  padding: 50px;
  border-radius: 15px;
  margin-top: 50px;
  margin-bottom: 100px;
}

#hero-header {
  font-size: max(3vw, 28px);
  color: var(--burgundy);
  font-weight: bold;
  text-align: center;
}

#hero-text {
  font-size: max(2vw, 18px);
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
  margin-bottom: 70px;
  display: grid;
  gap: 20px;
  place-content: center;
  place-items: center;
  width: 70%;
  height: 70%;
  background-color: var(--transparentLighterBurg);
  padding: 50px;
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
  gap: 50px;
  place-content: center;
  place-items: center;
  width: 70%;
  margin: 50px;
  margin-bottom: 100px;
  background-color: var(--transparentBiege);
  padding: 50px;
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
  gap: 30px;
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
  gap: 10px;
  font-size: 20px;
}

.item-name,
.item-price {
  font-size: 22px;
  color: var(--burgundy);
}

.item-pic {
  border-radius: 30px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Reset */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"] {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\n/* General space styling */\n@font-face {\n  font-family: \"Oswald\";\n  src: url(/src/Oswald/Oswald-VariableFont_wght.ttf);\n}\n\n:root {\n  --burgundy: #643843;\n  --lightburgundy: #99627a;\n  --lighterBurgundy: #c88ea7;\n  --biege: #e7cbcb;\n  --transparentBurgundy: #63384391;\n  --transparentLightBurg: #99627aab;\n  --transparentLighterBurg: #c88ea7d6;\n  --transparentBiege: #e7cbcbc6;\n  font-family: \"Oswald\";\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  background-image: url(/src/images/backgroundfood.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  align-content: space-between;\n  grid-template-rows: 1fr 5fr 1fr;\n}\n\n/* Header styling */\n#header {\n  background-color: var(--lightburgundy);\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n  gap: 20px;\n  padding: max(2vw, 20px);\n  position: sticky;\n  top: 0;\n}\n\n#logo {\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n  gap: 20px;\n}\n\n#logo-name {\n  color: var(--biege);\n  font-size: max(3vw, 20px);\n}\n\n/* #logo-pic {\n  widt\n} */\n\n#nav {\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n  gap: 20px;\n}\n\n.nav-btn {\n  background-color: var(--biege);\n  color: var(--burgundy);\n  font-size: max(1.5vw, 15px);\n  width: max(10vw, 60px);\n  height: 40px;\n  border-radius: 3px;\n}\n\n.active {\n  border-bottom: solid 10px var(--burgundy);\n}\n\n/* Footer styling */\n#footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: var(--burgundy);\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 10px;\n  color: var(--biege);\n}\n\n/* Main styling */\n#main {\n  width: 100%;\n  display: grid;\n  place-content: center;\n  place-items: center;\n}\n\n/* Home page styling */\n#hero {\n  display: grid;\n  gap: 20px;\n  place-content: center;\n  place-items: center;\n  width: 50vw;\n  height: fit-content;\n  background-color: var(--transparentLighterBurg);\n  padding: 50px;\n  border-radius: 15px;\n  margin-top: 50px;\n  margin-bottom: 100px;\n}\n\n#hero-header {\n  font-size: max(3vw, 28px);\n  color: var(--burgundy);\n  font-weight: bold;\n  text-align: center;\n}\n\n#hero-text {\n  font-size: max(2vw, 18px);\n  text-align: center;\n  color: var(--biege);\n  line-height: 35px;\n}\n\n#order-btn {\n  background-color: var(--burgundy);\n  color: var(--biege);\n  font-size: 20px;\n  width: 100px;\n  height: 40px;\n  border-radius: 3px;\n}\n\n/* Contacts page styling */\n#contacts-container {\n  margin-bottom: 70px;\n  display: grid;\n  gap: 20px;\n  place-content: center;\n  place-items: center;\n  width: 70%;\n  height: 70%;\n  background-color: var(--transparentLighterBurg);\n  padding: 50px;\n  border-radius: 15px;\n}\n\n#contact-header {\n  font-size: 32px;\n  color: var(--biege);\n  font-weight: bold;\n  text-align: center;\n}\n\n#contacts-text-container {\n  display: grid;\n  gap: 10px;\n  place-content: center;\n  place-items: center;\n  color: var(--burgundy);\n}\n\n/* Menu styling */\n\n#menu-container {\n  display: grid;\n  gap: 50px;\n  place-content: center;\n  place-items: center;\n  width: 70%;\n  margin: 50px;\n  margin-bottom: 100px;\n  background-color: var(--transparentBiege);\n  padding: 50px;\n  border-radius: 15px;\n}\n\n#menu-header {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 30px;\n  place-content: center;\n  place-items: center;\n  font-size: 38px;\n  color: var(--burgundy);\n  font-weight: bold;\n}\n\n.type-menu-container {\n  display: grid;\n  gap: 30px;\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n.item-container-header {\n  font-size: 38px;\n  place-content: center;\n  place-items: center;\n  color: var(--burgundy);\n}\n\n.item-container {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 15%;\n}\n\n.item-text-container {\n  display: grid;\n  gap: 10px;\n  font-size: 20px;\n}\n\n.item-name,\n.item-price {\n  font-size: 22px;\n  color: var(--burgundy);\n}\n\n.item-pic {\n  border-radius: 30px;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zZGUyYjExNmJiYzMyYTZjZDEzZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsd0tBQTJEO0FBQ3ZHLDRDQUE0QyxvSkFBaUQ7QUFDN0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sc0ZBQXNGLE9BQU8sTUFBTSxxRkFBcUYsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLGdCQUFnQixVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssUUFBUSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVB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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFlBQVksK0NBQVE7QUFDcEI7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsWUFBWSwrQ0FBUTtBQUNwQjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsWUFBWSxxREFBVztBQUN2QjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMsMEJBQTBCO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLCtDQUFVOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksK0NBQVE7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYXVudF9wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYXVudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYXVudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYXVudF9wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYXVudF9wYWdlLy4vc3JjL3dlYnNpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvT3N3YWxkL09zd2FsZC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2ltYWdlcy9iYWNrZ3JvdW5kZm9vZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBSZXNldCAqL1xuXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuYnV0dG9uLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbmlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogaW5oZXJpdDtcbn1cblxuLyogR2VuZXJhbCBzcGFjZSBzdHlsaW5nICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG46cm9vdCB7XG4gIC0tYnVyZ3VuZHk6ICM2NDM4NDM7XG4gIC0tbGlnaHRidXJndW5keTogIzk5NjI3YTtcbiAgLS1saWdodGVyQnVyZ3VuZHk6ICNjODhlYTc7XG4gIC0tYmllZ2U6ICNlN2NiY2I7XG4gIC0tdHJhbnNwYXJlbnRCdXJndW5keTogIzYzMzg0MzkxO1xuICAtLXRyYW5zcGFyZW50TGlnaHRCdXJnOiAjOTk2MjdhYWI7XG4gIC0tdHJhbnNwYXJlbnRMaWdodGVyQnVyZzogI2M4OGVhN2Q2O1xuICAtLXRyYW5zcGFyZW50QmllZ2U6ICNlN2NiY2JjNjtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCI7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG4jY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmciAxZnI7XG59XG5cbi8qIEhlYWRlciBzdHlsaW5nICovXG4jaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRidXJndW5keSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgcGFkZGluZzogbWF4KDJ2dywgMjBweCk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbn1cblxuI2xvZ28ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5cbiNsb2dvLW5hbWUge1xuICBjb2xvcjogdmFyKC0tYmllZ2UpO1xuICBmb250LXNpemU6IG1heCgzdncsIDIwcHgpO1xufVxuXG4vKiAjbG9nby1waWMge1xuICB3aWR0XG59ICovXG5cbiNuYXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5cbi5uYXYtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmllZ2UpO1xuICBjb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xuICBmb250LXNpemU6IG1heCgxLjV2dywgMTVweCk7XG4gIHdpZHRoOiBtYXgoMTB2dywgNjBweCk7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMTBweCB2YXIoLS1idXJndW5keSk7XG59XG5cbi8qIEZvb3RlciBzdHlsaW5nICovXG4jZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXJndW5keSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1iaWVnZSk7XG59XG5cbi8qIE1haW4gc3R5bGluZyAqL1xuI21haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4vKiBIb21lIHBhZ2Ugc3R5bGluZyAqL1xuI2hlcm8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDIwcHg7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50TGlnaHRlckJ1cmcpO1xuICBwYWRkaW5nOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuI2hlcm8taGVhZGVyIHtcbiAgZm9udC1zaXplOiBtYXgoM3Z3LCAyOHB4KTtcbiAgY29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2hlcm8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogbWF4KDJ2dywgMThweCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWJpZWdlKTtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbiNvcmRlci1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXJndW5keSk7XG4gIGNvbG9yOiB2YXIoLS1iaWVnZSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLyogQ29udGFjdHMgcGFnZSBzdHlsaW5nICovXG4jY29udGFjdHMtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAyMHB4O1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudExpZ2h0ZXJCdXJnKTtcbiAgcGFkZGluZzogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuI2NvbnRhY3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogdmFyKC0tYmllZ2UpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY29udGFjdHMtdGV4dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEwcHg7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcbn1cblxuLyogTWVudSBzdHlsaW5nICovXG5cbiNtZW51LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNTBweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudEJpZWdlKTtcbiAgcGFkZGluZzogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuI21lbnUtaGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ2FwOiAzMHB4O1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgY29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50eXBlLW1lbnUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgcGFkZGluZy1yaWdodDogMTAlO1xufVxuXG4uaXRlbS1jb250YWluZXItaGVhZGVyIHtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1idXJndW5keSk7XG59XG5cbi5pdGVtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGdhcDogMTUlO1xufVxuXG4uaXRlbS10ZXh0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaXRlbS1uYW1lLFxuLml0ZW0tcHJpY2Uge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1idXJndW5keSk7XG59XG5cbi5pdGVtLXBpYyB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVTs7QUFFVjs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUNBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7RUFXRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7Ozs7RUFJRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUFrRDtBQUNwRDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsaUNBQWlDO0VBQ2pDLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix5REFBcUQ7RUFDckQsc0JBQXNC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VCxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogUmVzZXQgKi9cXG5cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcbi8qIEdlbmVyYWwgc3BhY2Ugc3R5bGluZyAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiO1xcbiAgc3JjOiB1cmwoL3NyYy9Pc3dhbGQvT3N3YWxkLVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYnVyZ3VuZHk6ICM2NDM4NDM7XFxuICAtLWxpZ2h0YnVyZ3VuZHk6ICM5OTYyN2E7XFxuICAtLWxpZ2h0ZXJCdXJndW5keTogI2M4OGVhNztcXG4gIC0tYmllZ2U6ICNlN2NiY2I7XFxuICAtLXRyYW5zcGFyZW50QnVyZ3VuZHk6ICM2MzM4NDM5MTtcXG4gIC0tdHJhbnNwYXJlbnRMaWdodEJ1cmc6ICM5OTYyN2FhYjtcXG4gIC0tdHJhbnNwYXJlbnRMaWdodGVyQnVyZzogI2M4OGVhN2Q2O1xcbiAgLS10cmFuc3BhcmVudEJpZWdlOiAjZTdjYmNiYzY7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCI7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2ltYWdlcy9iYWNrZ3JvdW5kZm9vZC5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyIDFmcjtcXG59XFxuXFxuLyogSGVhZGVyIHN0eWxpbmcgKi9cXG4jaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0YnVyZ3VuZHkpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogbWF4KDJ2dywgMjBweCk7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4jbG9nbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNsb2dvLW5hbWUge1xcbiAgY29sb3I6IHZhcigtLWJpZWdlKTtcXG4gIGZvbnQtc2l6ZTogbWF4KDN2dywgMjBweCk7XFxufVxcblxcbi8qICNsb2dvLXBpYyB7XFxuICB3aWR0XFxufSAqL1xcblxcbiNuYXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iaWVnZSk7XFxuICBjb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xcbiAgZm9udC1zaXplOiBtYXgoMS41dncsIDE1cHgpO1xcbiAgd2lkdGg6IG1heCgxMHZ3LCA2MHB4KTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxMHB4IHZhcigtLWJ1cmd1bmR5KTtcXG59XFxuXFxuLyogRm9vdGVyIHN0eWxpbmcgKi9cXG4jZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1iaWVnZSk7XFxufVxcblxcbi8qIE1haW4gc3R5bGluZyAqL1xcbiNtYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIEhvbWUgcGFnZSBzdHlsaW5nICovXFxuI2hlcm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMjBweDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudExpZ2h0ZXJCdXJnKTtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG4jaGVyby1oZWFkZXIge1xcbiAgZm9udC1zaXplOiBtYXgoM3Z3LCAyOHB4KTtcXG4gIGNvbG9yOiB2YXIoLS1idXJndW5keSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2hlcm8tdGV4dCB7XFxuICBmb250LXNpemU6IG1heCgydncsIDE4cHgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWJpZWdlKTtcXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4jb3JkZXItYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcXG4gIGNvbG9yOiB2YXIoLS1iaWVnZSk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi8qIENvbnRhY3RzIHBhZ2Ugc3R5bGluZyAqL1xcbiNjb250YWN0cy1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIwcHg7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogNzAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnRMaWdodGVyQnVyZyk7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuI2NvbnRhY3QtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGNvbG9yOiB2YXIoLS1iaWVnZSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhY3RzLXRleHQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcXG59XFxuXFxuLyogTWVudSBzdHlsaW5nICovXFxuXFxuI21lbnUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDUwcHg7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnRCaWVnZSk7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuI21lbnUtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMzhweDtcXG4gIGNvbG9yOiB2YXIoLS1idXJndW5keSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnR5cGUtbWVudS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMzBweDtcXG4gIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgcGFkZGluZy1yaWdodDogMTAlO1xcbn1cXG5cXG4uaXRlbS1jb250YWluZXItaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMzhweDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xcbn1cXG5cXG4uaXRlbS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBnYXA6IDE1JTtcXG59XFxuXFxuLml0ZW0tdGV4dC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLml0ZW0tbmFtZSxcXG4uaXRlbS1wcmljZSB7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xcbn1cXG5cXG4uaXRlbS1waWMge1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbWFwUGljIGZyb20gJy4vaW1hZ2VzL21hcC5wbmcnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29udGFjdCgpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250YWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdHMtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtaGVhZGVyJyk7XG4gICAgY29udGFjdEhlYWRlci50ZXh0Q29udGVudCA9ICdHZXQgaW4gdG91Y2ggd2l0aCB1cyEnXG5cbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3RzLXRleHQtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBhZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZHJlc3MuY2xhc3NMaXN0LmFkZCgnY29udGFjdHMtaXRlbScpO1xuICAgIGFkcmVzcy50ZXh0Q29udGVudCA9ICfwn5e6IDIzNSBMYXdsZXkgTWlkZGxld2F5LCBCaXJtaW5naGFtIEI0IDdYSCc7XG5cbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBob25lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RzLWl0ZW0nKTtcbiAgICBwaG9uZS50ZXh0Q29udGVudCA9ICfwn5OxICs0NC0wMDAtMDAwLTAwMDAnO1xuXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKCdjb250YWN0cy1pdGVtJyk7XG4gICAgZW1haWwudGV4dENvbnRlbnQgPSAn8J+TqSBlbWFpbEBnbWFpbC5jb20nO1xuXG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZSk7XG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChhZHJlc3MpO1xuXG4gICAgY29uc3QgbWFwID0gbmV3IEltYWdlKDQ1MCwzMDApO1xuICAgIG1hcC5zcmMgPSBtYXBQaWM7XG5cbiAgICBjb250YWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcbiAgICBjb250YWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcbiAgICBjb250YWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChtYXApO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RzQ29udGFpbmVyO1xufTsiLCJpbXBvcnQgeyBzaG93TWVudSB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IHNldEFjdGl2ZUJ0biB9IGZyb20gXCIuL3dlYnNpdGVcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0hvbWUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm8uc2V0QXR0cmlidXRlKCdpZCcsICdoZXJvJyk7XG5cbiAgICBjb25zdCBoZXJvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVyb0hlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlcm8taGVhZGVyJyk7XG4gICAgaGVyb0hlYWRlci50ZXh0Q29udGVudCA9ICdZb3VyIFVsdGltYXRlIERlc3RpbmF0aW9uIGZvciBCdXJnZXIgQmxpc3MhJztcblxuICAgIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVyb1RleHQuc2V0QXR0cmlidXRlKCdpZCcsICdoZXJvLXRleHQnKTtcbiAgICBoZXJvVGV4dC50ZXh0Q29udGVudCA9ICdQcmVwYXJlIHRvIGJlIGJsb3duIGF3YXkgYnkgdGhlIGlycmVzaXN0aWJsZSBhcm9tYSBhbmQgdGFzdGUgYXQgQnVyZ2VyIFBsYWNlLiBPdXIgYnVyZ2VycyBhcmUgbW9yZSB0aGFuIGp1c3QgYSBtZWFsOyB0aGV5IGFyZSBhIGNlbGVicmF0aW9uIG9mIGZsYXZvciBhbmQgYSBjdWxpbmFyeSBkZWxpZ2h0LiBFeHBlcmllbmNlIHRoZSBtYWdpYyBvZiBwZXJmZWN0bHkgY29va2VkIHBhdHRpZXMgYW5kIGV4cGVydGx5IHBhaXJlZCBpbmdyZWRpZW50cy4nO1xuXG4gICAgY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBvcmRlckJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29yZGVyLWJ0bicpO1xuICAgIG9yZGVyQnRuLnRleHRDb250ZW50ID0gJ09yZGVyIG5vdyEnO1xuICAgIG9yZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnRuJyk7XG4gICAgICAgIHNob3dNZW51KCk7XG4gICAgICAgIHNldEFjdGl2ZUJ0bihtZW51QnRuKTtcbiAgICB9KTtcblxuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0hlYWRlcik7XG4gICAgaGVyby5hcHBlbmRDaGlsZChoZXJvVGV4dCk7XG4gICAgaGVyby5hcHBlbmRDaGlsZChvcmRlckJ0bik7XG5cbiAgICByZXR1cm4gaGVybztcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBzaG93V2Vic2l0ZSB9IGZyb20gJy4vd2Vic2l0ZSc7XG5cbnNob3dXZWJzaXRlKCk7IiwiaW1wb3J0IGxvZ29QaWN0dXJlIGZyb20gJy4vaW1hZ2VzL2xvZ28ucG5nJztcbmltcG9ydCBjaGVlc2VCdXJnZXIgZnJvbSAnLi9pbWFnZXMvY2hlZXNlYnVyZ2VyLmpwZyc7XG5pbXBvcnQgY2hpY2tlbkJ1cmdlciBmcm9tICcuL2ltYWdlcy9zd2VldGNoaWNrZW4uanBnJztcbmltcG9ydCBtdXNocm9vbXNCdXJnZXIgZnJvbSAnLi9pbWFnZXMvbXVzaHJvb21zd2lzcy5qcGcnO1xuaW1wb3J0IHZlZ2dpZUJ1cmdlciBmcm9tICcuL2ltYWdlcy92ZWdnaWVzdXByZW1lLmpwZyc7XG5pbXBvcnQgYmJxQnVyZ2VyIGZyb20gJy4vaW1hZ2VzL2JicWJ1cmdlci5qcGcnO1xuaW1wb3J0IGZyZW5jaEZyaWVzIGZyb20gJy4vaW1hZ2VzL2ZyZW5jaGZyaWVzLmpwZyc7XG5pbXBvcnQgb25pb25SaW5ncyBmcm9tICcuL2ltYWdlcy9vbmlvbnJpbmdzLmpwZyc7XG5pbXBvcnQgc3dlZXRQb3RhdG8gZnJvbSAnLi9pbWFnZXMvc3dlZXRwb3RhdG9mcmllcy5qcGcnO1xuaW1wb3J0IG1pbGtzaGFrZSBmcm9tICcuL2ltYWdlcy9taWxrc2hha2UuanBnJztcbmltcG9ydCBpY2VkVGVhIGZyb20gJy4vaW1hZ2VzL2ljZWR0ZWEuanBnJztcbmltcG9ydCBsZW1vbmFkZSBmcm9tICcuL2ltYWdlcy9sZW1vbmFkZS5qcGcnO1xuaW1wb3J0IHNvZGEgZnJvbSAnLi9pbWFnZXMvc29kYS5qcGcnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TWVudSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtY29udGFpbmVyJyk7XG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlck1lbnUoKSk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVCdXJnZXJNZW51KCkpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZXNNZW51KCkpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRHJpbmtzTWVudSgpKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJNZW51KCkge1xuICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1oZWFkZXInKTtcblxuICAgIGNvbnN0IGhlYWRlckxvZ28gPSBuZXcgSW1hZ2UoNzAsNzApO1xuICAgIGhlYWRlckxvZ28uc3JjID0gbG9nb1BpY3R1cmU7XG4gICAgaGVhZGVyTG9nby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci1sb2dvJyk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlclRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItdGV4dCcpO1xuICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSAnQ2hvb3NlIHlvdXIgbWVhbCc7XG5cbiAgICBtZW51SGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckxvZ28pO1xuICAgIG1lbnVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG5cbiAgICByZXR1cm4gbWVudUhlYWRlcjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1cmdlck1lbnUoKSB7XG4gICAgY29uc3QgYnVyZ2VyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnVyZ2VyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3R5cGUtbWVudS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGJ1cmdlckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1cmdlckhlYWRlci5jbGFzc0xpc3QuYWRkKCdpdGVtLWNvbnRhaW5lci1oZWFkZXInKTtcbiAgICBidXJnZXJIZWFkZXIudGV4dENvbnRlbnQgPSAnQnVyZ2Vycyc7XG4gICAgYnVyZ2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1cmdlckhlYWRlcik7XG5cbiAgICBidXJnZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgXCJDbGFzc2ljIENoZWVzZWJ1cmdlclwiLFxuICAgICAgICAgICAgXCJPdXIgc2lnbmF0dXJlIGp1aWN5IGJlZWYgcGF0dHkgdG9wcGVkIHdpdGggbWVsdGVkIGNoZWRkYXIgY2hlZXNlLCBmcmVzaCBsZXR0dWNlLCByaXBlIHRvbWF0b2VzLCBvbmlvbnMsIGFuZCBvdXIgc2VjcmV0IHNhdWNlLiBTZXJ2ZWQgb24gYSB0b2FzdGVkIGJyaW9jaGUgYnVuLlwiLFxuICAgICAgICAgICAgXCLCozkuOTlcIixcbiAgICAgICAgICAgIGNoZWVzZUJ1cmdlclxuICAgICAgICApXG4gICAgKTtcblxuICAgIGJ1cmdlckNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBcIlNwaWN5IENoaWNrZW4gQnVyZ2VyXCIsXG4gICAgICAgICAgICBcIkNyaXNweSBjaGlja2VuIGZpbGxldCBjb2F0ZWQgaW4gYSBmbGF2b3JmdWwgYmxlbmQgb2Ygc3BpY2VzLCBhY2NvbXBhbmllZCBieSB6ZXN0eSBqYWxhcGVub3MsIGNydW5jaHkgbGV0dHVjZSwgc2xpY2VkIHBpY2tsZXMsIGFuZCBhIGNyZWFteSBzcmlyYWNoYSBtYXlvLiBTZXJ2ZWQgb24gYSBzb2Z0IHNlc2FtZSBzZWVkIGJ1bi5cIixcbiAgICAgICAgICAgIFwiwqM4Ljk5XCIsXG4gICAgICAgICAgICBjaGlja2VuQnVyZ2VyXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgYnVyZ2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgIFwiTXVzaHJvb20gU3dpc3MgQnVyZ2VyXCIsXG4gICAgICAgICAgICBcIkEgc2F2b3J5IGRlbGlnaHQgd2l0aCBhIGJlZWYgcGF0dHkgc21vdGhlcmVkIGluIFN3aXNzIGNoZWVzZSBhbmQgdG9wcGVkIHdpdGggc2F1dMOpZWQgbXVzaHJvb21zLCBjYXJhbWVsaXplZCBvbmlvbnMsIGFuZCBvdXIgc3BlY2lhbCBob3VzZSBzYXVjZS4gU2VydmVkIG9uIGEgdG9hc3RlZCBhcnRpc2FuYWwgYnVuLlwiLFxuICAgICAgICAgICAgXCLCozEwLjQ5XCIsXG4gICAgICAgICAgICBtdXNocm9vbXNCdXJnZXJcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBidXJnZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgXCJEb3VibGUgQmFjb24gQkJRIEJ1cmdlclwiLFxuICAgICAgICAgICAgXCJGb3IgdGhlIG1lYXQgbG92ZXJzLCBlbmpveSB0d28gYmVlZiBwYXR0aWVzIHN0YWNrZWQgd2l0aCBjcmlzcHkgYmFjb24sIG1lbHRlZCBBbWVyaWNhbiBjaGVlc2UsIHRhbmd5IEJCUSBzYXVjZSwgZnJlc2ggbGV0dHVjZSwgYW5kIHNsaWNlZCB0b21hdG9lcy4gU2VydmVkIG9uIGEgdG9hc3RlZCBwcmV0emVsIGJ1bi5cIixcbiAgICAgICAgICAgIFwiwqMxMS45OVwiLFxuICAgICAgICAgICAgYmJxQnVyZ2VyXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgYnVyZ2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgIFwiVmVnZ2llIFN1cHJlbWUgQnVyZ2VyXCIsXG4gICAgICAgICAgICBcIkEgbW91dGh3YXRlcmluZyB2ZWdldGFyaWFuIG9wdGlvbiBmZWF0dXJpbmcgYSBwbGFudC1iYXNlZCBwYXR0eSwgbG9hZGVkIHdpdGggcm9hc3RlZCBiZWxsIHBlcHBlcnMsIGdyaWxsZWQgb25pb25zLCBzbGljZWQgYXZvY2FkbywgbGV0dHVjZSwgYW5kIHRhbmd5IGhlcmIgbWF5by4gU2VydmVkIG9uIGEgbXVsdGlncmFpbiBidW4uXCIsXG4gICAgICAgICAgICBcIsKjOS40OVwiLFxuICAgICAgICAgICAgdmVnZ2llQnVyZ2VyXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgcmV0dXJuIGJ1cmdlckNvbnRhaW5lcjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVzTWVudSgpIHtcbiAgICBjb25zdCBzaWRlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3R5cGUtbWVudS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHNpZGVzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZXNIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaXRlbS1jb250YWluZXItaGVhZGVyJyk7XG4gICAgc2lkZXNIZWFkZXIudGV4dENvbnRlbnQgPSAnU2lkZXMnO1xuICAgIHNpZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVzSGVhZGVyKTtcblxuICAgIHNpZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgIFwiQ3Jpc3B5IENoaXBzXCIsXG4gICAgICAgICAgICBcIkdvbGRlbiBhbmQgY3Jpc3B5IG9uIHRoZSBvdXRzaWRlLCBzb2Z0IGFuZCBmbHVmZnkgb24gdGhlIGluc2lkZS4gUGVyZmVjdGx5IHNlYXNvbmVkIHdpdGggYSBzcHJpbmtsZSBvZiBzYWx0LlwiLFxuICAgICAgICAgICAgXCLCozMuNDlcIixcbiAgICAgICAgICAgIGZyZW5jaEZyaWVzXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgc2lkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgXCJPbmlvbiBSaW5nc1wiLFxuICAgICAgICAgICAgXCJDcmlzcHksIGJlZXItYmF0dGVyZWQgb25pb24gcmluZ3Mgd2l0aCBhIGhpbnQgb2Ygc3BpY2UsIHNlcnZlZCB3aXRoIGEgemVzdHkgZGlwcGluZyBzYXVjZS5cIixcbiAgICAgICAgICAgIFwiwqM0LjQ5XCIsXG4gICAgICAgICAgICBvbmlvblJpbmdzXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgc2lkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgXCJTd2VldCBQb3RhdG8gQ2hpcHNcIixcbiAgICAgICAgICAgIFwiVGhpbmx5IHNsaWNlZCBzd2VldCBwb3RhdG9lcyBmcmllZCB0byBhIGRlbGlnaHRmdWwgY3Jpc3BuZXNzLCBzZXJ2ZWQgd2l0aCBhIGNyZWFteSBjaGlwb3RsZSBhaW9saS5cIixcbiAgICAgICAgICAgIFwiwqM0LjQ5XCIsXG4gICAgICAgICAgICBzd2VldFBvdGF0b1xuICAgICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiBzaWRlc0NvbnRhaW5lcjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZURyaW5rc01lbnUoKSB7XG4gICAgY29uc3QgZHJpbmtzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJpbmtzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3R5cGUtbWVudS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGRyaW5rc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRyaW5rc0hlYWRlci5jbGFzc0xpc3QuYWRkKCdpdGVtLWNvbnRhaW5lci1oZWFkZXInKTtcbiAgICBkcmlua3NIZWFkZXIudGV4dENvbnRlbnQgPSAnRHJpbmtzJztcbiAgICBkcmlua3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZHJpbmtzSGVhZGVyKTtcblxuICAgIGRyaW5rc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBcIkNsYXNzaWMgTWlsa3NoYWtlXCIsXG4gICAgICAgICAgICBcIkNyZWFteSBhbmQgaW5kdWxnZW50LCBjaG9vc2UgZnJvbSBjaG9jb2xhdGUsIHZhbmlsbGEsIG9yIHN0cmF3YmVycnkgZmxhdm9ycy5cIixcbiAgICAgICAgICAgIFwiwqMzLjk5XCIsXG4gICAgICAgICAgICBtaWxrc2hha2VcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBkcmlua3NDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgXCJDcmFmdCBTb2RhXCIsXG4gICAgICAgICAgICBcIlF1ZW5jaCB5b3VyIHRoaXJzdCB3aXRoIG91ciBzZWxlY3Rpb24gb2YgdW5pcXVlLCBsb2NhbGx5IHNvdXJjZWQgY3JhZnQgc29kYXMuXCIsXG4gICAgICAgICAgICBcIsKjMi45OVwiLFxuICAgICAgICAgICAgc29kYVxuICAgICAgICApXG4gICAgKTtcblxuICAgIGRyaW5rc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBcIlJlZnJlc2hpbmcgTGVtb25hZGVcIixcbiAgICAgICAgICAgIFwiQSB6ZXN0eSBhbmQgdGhpcnN0LXF1ZW5jaGluZyBiZXZlcmFnZSBtYWRlIHdpdGggZnJlc2hseSBzcXVlZXplZCBsZW1vbnMgYW5kIGEgaGludCBvZiBzd2VldG5lc3MuXCIsXG4gICAgICAgICAgICBcIsKjMi45OVwiLFxuICAgICAgICAgICAgbGVtb25hZGVcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBkcmlua3NDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgXCJJY2VkIFRlYVwiLFxuICAgICAgICAgICAgXCJBIGNvb2wgYW5kIHJldml0YWxpemluZyBkcmluayB3aXRoIHlvdXIgY2hvaWNlIG9mIHBlYWNoLCByYXNwYmVycnksIG9yIHRyYWRpdGlvbmFsIGxlbW9uIGZsYXZvci5cIixcbiAgICAgICAgICAgIFwiwqMyLjk5XCIsXG4gICAgICAgICAgICBpY2VkVGVhXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgcmV0dXJuIGRyaW5rc0NvbnRhaW5lcjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWVJdGVtLCB0ZXh0LCBwcmljZSwgcGljU3JjLCBsaW5rKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGl0ZW1UZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbVRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXRlbS10ZXh0LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdpdGVtLW5hbWUnKTtcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG5hbWVJdGVtO1xuXG5cbiAgICBjb25zdCBpdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1UZXh0LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGV4dCcpO1xuICAgIGl0ZW1UZXh0LnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXByaWNlJyk7XG4gICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XG5cbiAgICBjb25zdCBpdGVtUGljID0gbmV3IEltYWdlKDE1MCwgMTUwKTtcbiAgICBpdGVtUGljLnNyYyA9IHBpY1NyYztcbiAgICBpdGVtUGljLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcGljJyk7XG5cbiAgICBpdGVtVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgaXRlbVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVRleHQpO1xuICAgIGl0ZW1UZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtVGV4dENvbnRhaW5lcilcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1QaWMpO1xuXG4gICAgcmV0dXJuIGl0ZW07XG59OyIsImltcG9ydCBsb2dvUGljdHVyZSBmcm9tICcuL2ltYWdlcy9sb2dvLWJpZWdlLnBuZyc7XG5pbXBvcnQgZ2l0aHViTG9nbyBmcm9tICcuL2ltYWdlcy9naXRodWIuc3ZnJztcbmltcG9ydCB7IHNob3dIb21lIH0gZnJvbSAnLi9ob21lJztcbmltcG9ydCB7IHNob3dNZW51IH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IHNob3dDb250YWN0IH0gZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG4gICAgXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZUxvZ28oKSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVMb2dvKCkge1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9nbycpO1xuXG4gICAgY29uc3QgbG9nb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28tbmFtZScpO1xuICAgIGxvZ29OYW1lLnRleHRDb250ZW50ID0gJ0JVUkdFUiBQTEFDRSc7XG5cbiAgICBjb25zdCBsb2dvUGljID0gbmV3IEltYWdlKDUwLCA1MCk7XG4gICAgbG9nb1BpYy5zcmMgPSBsb2dvUGljdHVyZTtcbiAgICBsb2dvUGljLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9nby1waWMnKTtcblxuICAgIGxvZ28uYXBwZW5kQ2hpbGQobG9nb1BpYyk7XG4gICAgbG9nby5hcHBlbmRDaGlsZChsb2dvTmFtZSk7XG5cbiAgICByZXR1cm4gbG9nbztcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsICduYXYnKTtcblxuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICBob21lQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS1idG4nKTtcbiAgICBob21lQnRuLnRleHRDb250ZW50ID0gJ0hPTUUnO1xuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0QWN0aXZlQnRuKGhvbWVCdG4pO1xuICAgICAgICAgICAgc2hvd0hvbWUoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICBtZW51QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1idG4nKTtcbiAgICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01FTlUnO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0QWN0aXZlQnRuKG1lbnVCdG4pO1xuICAgICAgICAgICAgc2hvd01lbnUoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gJ0NPTlRBQ1QnO1xuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0QWN0aXZlQnRuKGNvbnRhY3RCdG4pO1xuICAgICAgICAgICAgc2hvd0NvbnRhY3QoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG4gICAgcmV0dXJuIG5hdjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBY3RpdmVCdG4oYnV0dG9uKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtYnRuJyk7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBpZiAoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuXG4gICAgcmV0dXJuIG1haW47XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBla2F0LXZlbGF6YDtcbiAgICBjb3B5cmlnaHQuc2V0QXR0cmlidXRlKCdpZCcsICdjb3B5cmlnaHQnKTtcblxuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dpdGh1Yi1saW5rJyk7XG4gICAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vZWthdC12ZWxhelwiO1xuXG4gICAgY29uc3QgZ2l0aHViSWNvbiA9IG5ldyBJbWFnZSg1MCw1MCk7XG4gICAgZ2l0aHViSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dpdGh1Yi1pY29uJyk7XG4gICAgZ2l0aHViSWNvbi5zcmMgPSBnaXRodWJMb2dvO1xuXG4gICAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dXZWJzaXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLWJ0bicpO1xuXG4gICAgc2V0QWN0aXZlQnRuKGhvbWVCdG4pO1xuICAgIHNob3dIb21lKCk7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==