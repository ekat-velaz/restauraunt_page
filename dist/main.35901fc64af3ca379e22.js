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
  grid-template-rows: 1fr 5fr 1fr;
}

/* Header styling */
#header {
  background-color: var(--lightburgundy);
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  gap: 20px;
  padding: 30px;
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
  width: 50%;
  height: 80%;
  background-color: var(--transparentLighterBurg);
  padding: 50px;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,UAAU;;AAEV;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;;;EAGE,gBAAgB;EAChB,cAAc;EACd,YAAY;EACZ,UAAU;EACV,aAAa;EACb,eAAe;EACf,gBAAgB;AAClB;;AAEA,0BAA0B;AAC1B;EACE,qBAAqB;EACrB,4CAAkD;AACpD;;AAEA;EACE,mBAAmB;EACnB,wBAAwB;EACxB,0BAA0B;EAC1B,gBAAgB;EAChB,gCAAgC;EAChC,iCAAiC;EACjC,mCAAmC;EACnC,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,yDAAqD;EACrD,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA,mBAAmB;AACnB;EACE,sCAAsC;EACtC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,gBAAgB;EAChB,MAAM;AACR;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,8BAA8B;EAC9B,sBAAsB;EACtB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA,mBAAmB;AACnB;EACE,eAAe;EACf,OAAO;EACP,SAAS;EACT,WAAW;EACX,iCAAiC;EACjC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,mBAAmB;AACrB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA,sBAAsB;AACtB;EACE,aAAa;EACb,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,+CAA+C;EAC/C,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,iCAAiC;EACjC,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA,0BAA0B;AAC1B;EACE,mBAAmB;EACnB,aAAa;EACb,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,+CAA+C;EAC/C,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,oBAAoB;EACpB,yCAAyC;EACzC,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,eAAe;EACf,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,SAAS;EACT,eAAe;AACjB;;AAEA;;EAEE,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":["/* Reset */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"] {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\n/* General space styling */\n@font-face {\n  font-family: \"Oswald\";\n  src: url(/src/Oswald/Oswald-VariableFont_wght.ttf);\n}\n\n:root {\n  --burgundy: #643843;\n  --lightburgundy: #99627a;\n  --lighterBurgundy: #c88ea7;\n  --biege: #e7cbcb;\n  --transparentBurgundy: #63384391;\n  --transparentLightBurg: #99627aab;\n  --transparentLighterBurg: #c88ea7d6;\n  --transparentBiege: #e7cbcbc6;\n  font-family: \"Oswald\";\n}\n\nbody {\n  height: 100vh;\n  background-image: url(/src/images/backgroundfood.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n}\n\n#content {\n  height: 100%;\n  display: grid;\n  align-content: space-between;\n  grid-template-rows: 1fr 5fr 1fr;\n}\n\n/* Header styling */\n#header {\n  background-color: var(--lightburgundy);\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n  gap: 20px;\n  padding: 30px;\n  position: sticky;\n  top: 0;\n}\n\n#logo {\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n  gap: 20px;\n}\n\n#logo-name {\n  color: var(--biege);\n  font-size: 32px;\n}\n\n#nav {\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n  gap: 20px;\n}\n\n.nav-btn {\n  background-color: var(--biege);\n  color: var(--burgundy);\n  font-size: 20px;\n  width: 100px;\n  height: 40px;\n  border-radius: 3px;\n}\n\n.active {\n  border-bottom: solid 10px var(--burgundy);\n}\n\n/* Footer styling */\n#footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: var(--burgundy);\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 10px;\n  color: var(--biege);\n}\n\n/* Main styling */\n#main {\n  display: grid;\n  place-content: center;\n  place-items: center;\n}\n\n/* Home page styling */\n#hero {\n  display: grid;\n  gap: 20px;\n  place-content: center;\n  place-items: center;\n  width: 50%;\n  height: 80%;\n  background-color: var(--transparentLighterBurg);\n  padding: 50px;\n  border-radius: 15px;\n}\n\n#hero-header {\n  font-size: 38px;\n  color: var(--burgundy);\n  font-weight: bold;\n  text-align: center;\n}\n\n#hero-text {\n  font-size: 24px;\n  text-align: center;\n  color: var(--biege);\n  line-height: 35px;\n}\n\n#order-btn {\n  background-color: var(--burgundy);\n  color: var(--biege);\n  font-size: 20px;\n  width: 100px;\n  height: 40px;\n  border-radius: 3px;\n}\n\n/* Contacts page styling */\n#contacts-container {\n  margin-bottom: 70px;\n  display: grid;\n  gap: 20px;\n  place-content: center;\n  place-items: center;\n  width: 70%;\n  height: 70%;\n  background-color: var(--transparentLighterBurg);\n  padding: 50px;\n  border-radius: 15px;\n}\n\n#contact-header {\n  font-size: 32px;\n  color: var(--biege);\n  font-weight: bold;\n  text-align: center;\n}\n\n#contacts-text-container {\n  display: grid;\n  gap: 10px;\n  place-content: center;\n  place-items: center;\n  color: var(--burgundy);\n}\n\n/* Menu styling */\n\n#menu-container {\n  display: grid;\n  gap: 50px;\n  place-content: center;\n  place-items: center;\n  width: 70%;\n  margin: 50px;\n  margin-bottom: 100px;\n  background-color: var(--transparentBiege);\n  padding: 50px;\n  border-radius: 15px;\n}\n\n#menu-header {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 30px;\n  place-content: center;\n  place-items: center;\n  font-size: 38px;\n  color: var(--burgundy);\n  font-weight: bold;\n}\n\n.type-menu-container {\n  display: grid;\n  gap: 30px;\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n.item-container-header {\n  font-size: 38px;\n  place-content: center;\n  place-items: center;\n  color: var(--burgundy);\n}\n\n.item-container {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 15%;\n}\n\n.item-text-container {\n  display: grid;\n  gap: 10px;\n  font-size: 20px;\n}\n\n.item-name,\n.item-price {\n  font-size: 22px;\n  color: var(--burgundy);\n}\n\n.item-pic {\n  border-radius: 30px;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zNTkwMWZjNjRhZjNjYTM3OWUyMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsd0tBQTJEO0FBQ3ZHLDRDQUE0QyxvSkFBaUQ7QUFDN0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxzRkFBc0YsT0FBTyxNQUFNLHFGQUFxRixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksZ0JBQWdCLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxRQUFRLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFB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QUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxZQUFZLCtDQUFRO0FBQ3BCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxZQUFZLHFEQUFXO0FBQ3ZCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQywwQkFBMEI7QUFDckU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsK0NBQVU7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSwrQ0FBUTtBQUNaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYXVudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYXVudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYXVudF9wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9zcmMvd2Vic2l0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9Pc3dhbGQvT3N3YWxkLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvaW1hZ2VzL2JhY2tncm91bmRmb29kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFJlc2V0ICovXG5cbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5idXR0b24sXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuaW5wdXRbdHlwZT1cInJlc2V0XCJdIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBpbmhlcml0O1xufVxuXG4vKiBHZW5lcmFsIHNwYWNlIHN0eWxpbmcgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbjpyb290IHtcbiAgLS1idXJndW5keTogIzY0Mzg0MztcbiAgLS1saWdodGJ1cmd1bmR5OiAjOTk2MjdhO1xuICAtLWxpZ2h0ZXJCdXJndW5keTogI2M4OGVhNztcbiAgLS1iaWVnZTogI2U3Y2JjYjtcbiAgLS10cmFuc3BhcmVudEJ1cmd1bmR5OiAjNjMzODQzOTE7XG4gIC0tdHJhbnNwYXJlbnRMaWdodEJ1cmc6ICM5OTYyN2FhYjtcbiAgLS10cmFuc3BhcmVudExpZ2h0ZXJCdXJnOiAjYzg4ZWE3ZDY7XG4gIC0tdHJhbnNwYXJlbnRCaWVnZTogI2U3Y2JjYmM2O1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIjtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG4jY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyIDFmcjtcbn1cblxuLyogSGVhZGVyIHN0eWxpbmcgKi9cbiNoZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGJ1cmd1bmR5KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG59XG5cbiNsb2dvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4jbG9nby1uYW1lIHtcbiAgY29sb3I6IHZhcigtLWJpZWdlKTtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4jbmF2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4ubmF2LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJpZWdlKTtcbiAgY29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMTBweCB2YXIoLS1idXJndW5keSk7XG59XG5cbi8qIEZvb3RlciBzdHlsaW5nICovXG4jZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXJndW5keSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1iaWVnZSk7XG59XG5cbi8qIE1haW4gc3R5bGluZyAqL1xuI21haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIEhvbWUgcGFnZSBzdHlsaW5nICovXG4jaGVybyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMjBweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnRMaWdodGVyQnVyZyk7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbiNoZXJvLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgY29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2hlcm8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tYmllZ2UpO1xuICBsaW5lLWhlaWdodDogMzVweDtcbn1cblxuI29yZGVyLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcbiAgY29sb3I6IHZhcigtLWJpZWdlKTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4vKiBDb250YWN0cyBwYWdlIHN0eWxpbmcgKi9cbiNjb250YWN0cy1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDIwcHg7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA3MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50TGlnaHRlckJ1cmcpO1xuICBwYWRkaW5nOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4jY29udGFjdC1oZWFkZXIge1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiB2YXIoLS1iaWVnZSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250YWN0cy10ZXh0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTBweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xufVxuXG4vKiBNZW51IHN0eWxpbmcgKi9cblxuI21lbnUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA1MHB4O1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50QmllZ2UpO1xuICBwYWRkaW5nOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4jbWVudS1oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBnYXA6IDMwcHg7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBjb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnR5cGUtbWVudS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG59XG5cbi5pdGVtLWNvbnRhaW5lci1oZWFkZXIge1xuICBmb250LXNpemU6IDM4cHg7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcbn1cblxuLml0ZW0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ2FwOiAxNSU7XG59XG5cbi5pdGVtLXRleHQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pdGVtLW5hbWUsXG4uaXRlbS1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcbn1cblxuLml0ZW0tcGljIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxVQUFVOztBQUVWOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFTO0VBQ1QscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQix5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFJlc2V0ICovXFxuXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG4vKiBHZW5lcmFsIHNwYWNlIHN0eWxpbmcgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIjtcXG4gIHNyYzogdXJsKC9zcmMvT3N3YWxkL09zd2FsZC1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJ1cmd1bmR5OiAjNjQzODQzO1xcbiAgLS1saWdodGJ1cmd1bmR5OiAjOTk2MjdhO1xcbiAgLS1saWdodGVyQnVyZ3VuZHk6ICNjODhlYTc7XFxuICAtLWJpZWdlOiAjZTdjYmNiO1xcbiAgLS10cmFuc3BhcmVudEJ1cmd1bmR5OiAjNjMzODQzOTE7XFxuICAtLXRyYW5zcGFyZW50TGlnaHRCdXJnOiAjOTk2MjdhYWI7XFxuICAtLXRyYW5zcGFyZW50TGlnaHRlckJ1cmc6ICNjODhlYTdkNjtcXG4gIC0tdHJhbnNwYXJlbnRCaWVnZTogI2U3Y2JjYmM2O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9pbWFnZXMvYmFja2dyb3VuZGZvb2QuanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnIgMWZyO1xcbn1cXG5cXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xcbiNoZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRidXJndW5keSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG59XFxuXFxuI2xvZ28ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jbG9nby1uYW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1iaWVnZSk7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbiNuYXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iaWVnZSk7XFxuICBjb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDEwcHggdmFyKC0tYnVyZ3VuZHkpO1xcbn1cXG5cXG4vKiBGb290ZXIgc3R5bGluZyAqL1xcbiNmb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6IHZhcigtLWJpZWdlKTtcXG59XFxuXFxuLyogTWFpbiBzdHlsaW5nICovXFxuI21haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIEhvbWUgcGFnZSBzdHlsaW5nICovXFxuI2hlcm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMjBweDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudExpZ2h0ZXJCdXJnKTtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4jaGVyby1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAzOHB4O1xcbiAgY29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jaGVyby10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1iaWVnZSk7XFxuICBsaW5lLWhlaWdodDogMzVweDtcXG59XFxuXFxuI29yZGVyLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXJndW5keSk7XFxuICBjb2xvcjogdmFyKC0tYmllZ2UpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4vKiBDb250YWN0cyBwYWdlIHN0eWxpbmcgKi9cXG4jY29udGFjdHMtY29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50TGlnaHRlckJ1cmcpO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbiNjb250YWN0LWhlYWRlciB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBjb2xvcjogdmFyKC0tYmllZ2UpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb250YWN0cy10ZXh0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1idXJndW5keSk7XFxufVxcblxcbi8qIE1lbnUgc3R5bGluZyAqL1xcblxcbiNtZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA1MHB4O1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50QmllZ2UpO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbiNtZW51LWhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMzBweDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDM4cHg7XFxuICBjb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50eXBlLW1lbnUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDMwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcXG59XFxuXFxuLml0ZW0tY29udGFpbmVyLWhlYWRlciB7XFxuICBmb250LXNpemU6IDM4cHg7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcXG59XFxuXFxuLml0ZW0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAxNSU7XFxufVxcblxcbi5pdGVtLXRleHQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5pdGVtLW5hbWUsXFxuLml0ZW0tcHJpY2Uge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgY29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcXG59XFxuXFxuLml0ZW0tcGljIHtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IG1hcFBpYyBmcm9tICcuL2ltYWdlcy9tYXAucG5nJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NvbnRhY3QoKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgICAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGFjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0c0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3RzLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWhlYWRlcicpO1xuICAgIGNvbnRhY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnR2V0IGluIHRvdWNoIHdpdGggdXMhJ1xuXG4gICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0cy10ZXh0LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYWRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRyZXNzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RzLWl0ZW0nKTtcbiAgICBhZHJlc3MudGV4dENvbnRlbnQgPSAn8J+XuiAyMzUgTGF3bGV5IE1pZGRsZXdheSwgQmlybWluZ2hhbSBCNCA3WEgnO1xuXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaG9uZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0cy1pdGVtJyk7XG4gICAgcGhvbmUudGV4dENvbnRlbnQgPSAn8J+TsSArNDQtMDAwLTAwMC0wMDAwJztcblxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW1haWwuY2xhc3NMaXN0LmFkZCgnY29udGFjdHMtaXRlbScpO1xuICAgIGVtYWlsLnRleHRDb250ZW50ID0gJ/Cfk6kgZW1haWxAZ21haWwuY29tJztcblxuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWwpO1xuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRyZXNzKTtcblxuICAgIGNvbnN0IG1hcCA9IG5ldyBJbWFnZSg0NTAsMzAwKTtcbiAgICBtYXAuc3JjID0gbWFwUGljO1xuXG4gICAgY29udGFjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG4gICAgY29udGFjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG4gICAgY29udGFjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobWFwKTtcblxuICAgIHJldHVybiBjb250YWN0c0NvbnRhaW5lcjtcbn07IiwiaW1wb3J0IHsgc2hvd01lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBzZXRBY3RpdmVCdG4gfSBmcm9tIFwiLi93ZWJzaXRlXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dIb21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVybycpO1xuXG4gICAgY29uc3QgaGVyb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm9IZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZXJvLWhlYWRlcicpO1xuICAgIGhlcm9IZWFkZXIudGV4dENvbnRlbnQgPSAnWW91ciBVbHRpbWF0ZSBEZXN0aW5hdGlvbiBmb3IgQnVyZ2VyIEJsaXNzISc7XG5cbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm9UZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVyby10ZXh0Jyk7XG4gICAgaGVyb1RleHQudGV4dENvbnRlbnQgPSAnUHJlcGFyZSB0byBiZSBibG93biBhd2F5IGJ5IHRoZSBpcnJlc2lzdGlibGUgYXJvbWEgYW5kIHRhc3RlIGF0IEJ1cmdlciBQbGFjZS4gT3VyIGJ1cmdlcnMgYXJlIG1vcmUgdGhhbiBqdXN0IGEgbWVhbDsgdGhleSBhcmUgYSBjZWxlYnJhdGlvbiBvZiBmbGF2b3IgYW5kIGEgY3VsaW5hcnkgZGVsaWdodC4gRXhwZXJpZW5jZSB0aGUgbWFnaWMgb2YgcGVyZmVjdGx5IGNvb2tlZCBwYXR0aWVzIGFuZCBleHBlcnRseSBwYWlyZWQgaW5ncmVkaWVudHMuJztcblxuICAgIGNvbnN0IG9yZGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgb3JkZXJCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdvcmRlci1idG4nKTtcbiAgICBvcmRlckJ0bi50ZXh0Q29udGVudCA9ICdPcmRlciBub3chJztcbiAgICBvcmRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpO1xuICAgICAgICBzaG93TWVudSgpO1xuICAgICAgICBzZXRBY3RpdmVCdG4obWVudUJ0bik7XG4gICAgfSk7XG5cbiAgICBoZXJvLmFwcGVuZENoaWxkKGhlcm9IZWFkZXIpO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQob3JkZXJCdG4pO1xuXG4gICAgcmV0dXJuIGhlcm87XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgc2hvd1dlYnNpdGUgfSBmcm9tICcuL3dlYnNpdGUnO1xuXG5zaG93V2Vic2l0ZSgpOyIsImltcG9ydCBsb2dvUGljdHVyZSBmcm9tICcuL2ltYWdlcy9sb2dvLnBuZyc7XG5pbXBvcnQgY2hlZXNlQnVyZ2VyIGZyb20gJy4vaW1hZ2VzL2NoZWVzZWJ1cmdlci5qcGcnO1xuaW1wb3J0IGNoaWNrZW5CdXJnZXIgZnJvbSAnLi9pbWFnZXMvc3dlZXRjaGlja2VuLmpwZyc7XG5pbXBvcnQgbXVzaHJvb21zQnVyZ2VyIGZyb20gJy4vaW1hZ2VzL211c2hyb29tc3dpc3MuanBnJztcbmltcG9ydCB2ZWdnaWVCdXJnZXIgZnJvbSAnLi9pbWFnZXMvdmVnZ2llc3VwcmVtZS5qcGcnO1xuaW1wb3J0IGJicUJ1cmdlciBmcm9tICcuL2ltYWdlcy9iYnFidXJnZXIuanBnJztcbmltcG9ydCBmcmVuY2hGcmllcyBmcm9tICcuL2ltYWdlcy9mcmVuY2hmcmllcy5qcGcnO1xuaW1wb3J0IG9uaW9uUmluZ3MgZnJvbSAnLi9pbWFnZXMvb25pb25yaW5ncy5qcGcnO1xuaW1wb3J0IHN3ZWV0UG90YXRvIGZyb20gJy4vaW1hZ2VzL3N3ZWV0cG90YXRvZnJpZXMuanBnJztcbmltcG9ydCBtaWxrc2hha2UgZnJvbSAnLi9pbWFnZXMvbWlsa3NoYWtlLmpwZyc7XG5pbXBvcnQgaWNlZFRlYSBmcm9tICcuL2ltYWdlcy9pY2VkdGVhLmpwZyc7XG5pbXBvcnQgbGVtb25hZGUgZnJvbSAnLi9pbWFnZXMvbGVtb25hZGUuanBnJztcbmltcG9ydCBzb2RhIGZyb20gJy4vaW1hZ2VzL3NvZGEuanBnJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd01lbnUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWNvbnRhaW5lcicpO1xuXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXJNZW51KCkpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQnVyZ2VyTWVudSgpKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGVzTWVudSgpKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURyaW5rc01lbnUoKSk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyTWVudSgpIHtcbiAgICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtaGVhZGVyJyk7XG5cbiAgICBjb25zdCBoZWFkZXJMb2dvID0gbmV3IEltYWdlKDcwLDcwKTtcbiAgICBoZWFkZXJMb2dvLnNyYyA9IGxvZ29QaWN0dXJlO1xuICAgIGhlYWRlckxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItbG9nbycpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLXRleHQnKTtcbiAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gJ0Nob29zZSB5b3VyIG1lYWwnO1xuXG4gICAgbWVudUhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcbiAgICBtZW51SGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuXG4gICAgcmV0dXJuIG1lbnVIZWFkZXI7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCdXJnZXJNZW51KCkge1xuICAgIGNvbnN0IGJ1cmdlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1cmdlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0eXBlLW1lbnUtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBidXJnZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXJnZXJIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaXRlbS1jb250YWluZXItaGVhZGVyJyk7XG4gICAgYnVyZ2VySGVhZGVyLnRleHRDb250ZW50ID0gJ0J1cmdlcnMnO1xuICAgIGJ1cmdlckNvbnRhaW5lci5hcHBlbmRDaGlsZChidXJnZXJIZWFkZXIpO1xuXG4gICAgYnVyZ2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgIFwiQ2xhc3NpYyBDaGVlc2VidXJnZXJcIixcbiAgICAgICAgICAgIFwiT3VyIHNpZ25hdHVyZSBqdWljeSBiZWVmIHBhdHR5IHRvcHBlZCB3aXRoIG1lbHRlZCBjaGVkZGFyIGNoZWVzZSwgZnJlc2ggbGV0dHVjZSwgcmlwZSB0b21hdG9lcywgb25pb25zLCBhbmQgb3VyIHNlY3JldCBzYXVjZS4gU2VydmVkIG9uIGEgdG9hc3RlZCBicmlvY2hlIGJ1bi5cIixcbiAgICAgICAgICAgIFwiwqM5Ljk5XCIsXG4gICAgICAgICAgICBjaGVlc2VCdXJnZXJcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBidXJnZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgXCJTcGljeSBDaGlja2VuIEJ1cmdlclwiLFxuICAgICAgICAgICAgXCJDcmlzcHkgY2hpY2tlbiBmaWxsZXQgY29hdGVkIGluIGEgZmxhdm9yZnVsIGJsZW5kIG9mIHNwaWNlcywgYWNjb21wYW5pZWQgYnkgemVzdHkgamFsYXBlbm9zLCBjcnVuY2h5IGxldHR1Y2UsIHNsaWNlZCBwaWNrbGVzLCBhbmQgYSBjcmVhbXkgc3JpcmFjaGEgbWF5by4gU2VydmVkIG9uIGEgc29mdCBzZXNhbWUgc2VlZCBidW4uXCIsXG4gICAgICAgICAgICBcIsKjOC45OVwiLFxuICAgICAgICAgICAgY2hpY2tlbkJ1cmdlclxuICAgICAgICApXG4gICAgKTtcblxuICAgIGJ1cmdlckNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBcIk11c2hyb29tIFN3aXNzIEJ1cmdlclwiLFxuICAgICAgICAgICAgXCJBIHNhdm9yeSBkZWxpZ2h0IHdpdGggYSBiZWVmIHBhdHR5IHNtb3RoZXJlZCBpbiBTd2lzcyBjaGVlc2UgYW5kIHRvcHBlZCB3aXRoIHNhdXTDqWVkIG11c2hyb29tcywgY2FyYW1lbGl6ZWQgb25pb25zLCBhbmQgb3VyIHNwZWNpYWwgaG91c2Ugc2F1Y2UuIFNlcnZlZCBvbiBhIHRvYXN0ZWQgYXJ0aXNhbmFsIGJ1bi5cIixcbiAgICAgICAgICAgIFwiwqMxMC40OVwiLFxuICAgICAgICAgICAgbXVzaHJvb21zQnVyZ2VyXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgYnVyZ2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgIFwiRG91YmxlIEJhY29uIEJCUSBCdXJnZXJcIixcbiAgICAgICAgICAgIFwiRm9yIHRoZSBtZWF0IGxvdmVycywgZW5qb3kgdHdvIGJlZWYgcGF0dGllcyBzdGFja2VkIHdpdGggY3Jpc3B5IGJhY29uLCBtZWx0ZWQgQW1lcmljYW4gY2hlZXNlLCB0YW5neSBCQlEgc2F1Y2UsIGZyZXNoIGxldHR1Y2UsIGFuZCBzbGljZWQgdG9tYXRvZXMuIFNlcnZlZCBvbiBhIHRvYXN0ZWQgcHJldHplbCBidW4uXCIsXG4gICAgICAgICAgICBcIsKjMTEuOTlcIixcbiAgICAgICAgICAgIGJicUJ1cmdlclxuICAgICAgICApXG4gICAgKTtcblxuICAgIGJ1cmdlckNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBcIlZlZ2dpZSBTdXByZW1lIEJ1cmdlclwiLFxuICAgICAgICAgICAgXCJBIG1vdXRod2F0ZXJpbmcgdmVnZXRhcmlhbiBvcHRpb24gZmVhdHVyaW5nIGEgcGxhbnQtYmFzZWQgcGF0dHksIGxvYWRlZCB3aXRoIHJvYXN0ZWQgYmVsbCBwZXBwZXJzLCBncmlsbGVkIG9uaW9ucywgc2xpY2VkIGF2b2NhZG8sIGxldHR1Y2UsIGFuZCB0YW5neSBoZXJiIG1heW8uIFNlcnZlZCBvbiBhIG11bHRpZ3JhaW4gYnVuLlwiLFxuICAgICAgICAgICAgXCLCozkuNDlcIixcbiAgICAgICAgICAgIHZlZ2dpZUJ1cmdlclxuICAgICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiBidXJnZXJDb250YWluZXI7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTaWRlc01lbnUoKSB7XG4gICAgY29uc3Qgc2lkZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0eXBlLW1lbnUtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBzaWRlc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGVzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29udGFpbmVyLWhlYWRlcicpO1xuICAgIHNpZGVzSGVhZGVyLnRleHRDb250ZW50ID0gJ1NpZGVzJztcbiAgICBzaWRlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlc0hlYWRlcik7XG5cbiAgICBzaWRlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBcIkNyaXNweSBDaGlwc1wiLFxuICAgICAgICAgICAgXCJHb2xkZW4gYW5kIGNyaXNweSBvbiB0aGUgb3V0c2lkZSwgc29mdCBhbmQgZmx1ZmZ5IG9uIHRoZSBpbnNpZGUuIFBlcmZlY3RseSBzZWFzb25lZCB3aXRoIGEgc3ByaW5rbGUgb2Ygc2FsdC5cIixcbiAgICAgICAgICAgIFwiwqMzLjQ5XCIsXG4gICAgICAgICAgICBmcmVuY2hGcmllc1xuICAgICAgICApXG4gICAgKTtcblxuICAgIHNpZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgIFwiT25pb24gUmluZ3NcIixcbiAgICAgICAgICAgIFwiQ3Jpc3B5LCBiZWVyLWJhdHRlcmVkIG9uaW9uIHJpbmdzIHdpdGggYSBoaW50IG9mIHNwaWNlLCBzZXJ2ZWQgd2l0aCBhIHplc3R5IGRpcHBpbmcgc2F1Y2UuXCIsXG4gICAgICAgICAgICBcIsKjNC40OVwiLFxuICAgICAgICAgICAgb25pb25SaW5nc1xuICAgICAgICApXG4gICAgKTtcblxuICAgIHNpZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgIFwiU3dlZXQgUG90YXRvIENoaXBzXCIsXG4gICAgICAgICAgICBcIlRoaW5seSBzbGljZWQgc3dlZXQgcG90YXRvZXMgZnJpZWQgdG8gYSBkZWxpZ2h0ZnVsIGNyaXNwbmVzcywgc2VydmVkIHdpdGggYSBjcmVhbXkgY2hpcG90bGUgYWlvbGkuXCIsXG4gICAgICAgICAgICBcIsKjNC40OVwiLFxuICAgICAgICAgICAgc3dlZXRQb3RhdG9cbiAgICAgICAgKVxuICAgICk7XG5cbiAgICByZXR1cm4gc2lkZXNDb250YWluZXI7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVEcmlua3NNZW51KCkge1xuICAgIGNvbnN0IGRyaW5rc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRyaW5rc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0eXBlLW1lbnUtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBkcmlua3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkcmlua3NIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaXRlbS1jb250YWluZXItaGVhZGVyJyk7XG4gICAgZHJpbmtzSGVhZGVyLnRleHRDb250ZW50ID0gJ0RyaW5rcyc7XG4gICAgZHJpbmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRyaW5rc0hlYWRlcik7XG5cbiAgICBkcmlua3NDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgXCJDbGFzc2ljIE1pbGtzaGFrZVwiLFxuICAgICAgICAgICAgXCJDcmVhbXkgYW5kIGluZHVsZ2VudCwgY2hvb3NlIGZyb20gY2hvY29sYXRlLCB2YW5pbGxhLCBvciBzdHJhd2JlcnJ5IGZsYXZvcnMuXCIsXG4gICAgICAgICAgICBcIsKjMy45OVwiLFxuICAgICAgICAgICAgbWlsa3NoYWtlXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgZHJpbmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgIFwiQ3JhZnQgU29kYVwiLFxuICAgICAgICAgICAgXCJRdWVuY2ggeW91ciB0aGlyc3Qgd2l0aCBvdXIgc2VsZWN0aW9uIG9mIHVuaXF1ZSwgbG9jYWxseSBzb3VyY2VkIGNyYWZ0IHNvZGFzLlwiLFxuICAgICAgICAgICAgXCLCozIuOTlcIixcbiAgICAgICAgICAgIHNvZGFcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBkcmlua3NDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgXCJSZWZyZXNoaW5nIExlbW9uYWRlXCIsXG4gICAgICAgICAgICBcIkEgemVzdHkgYW5kIHRoaXJzdC1xdWVuY2hpbmcgYmV2ZXJhZ2UgbWFkZSB3aXRoIGZyZXNobHkgc3F1ZWV6ZWQgbGVtb25zIGFuZCBhIGhpbnQgb2Ygc3dlZXRuZXNzLlwiLFxuICAgICAgICAgICAgXCLCozIuOTlcIixcbiAgICAgICAgICAgIGxlbW9uYWRlXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgZHJpbmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgIFwiSWNlZCBUZWFcIixcbiAgICAgICAgICAgIFwiQSBjb29sIGFuZCByZXZpdGFsaXppbmcgZHJpbmsgd2l0aCB5b3VyIGNob2ljZSBvZiBwZWFjaCwgcmFzcGJlcnJ5LCBvciB0cmFkaXRpb25hbCBsZW1vbiBmbGF2b3IuXCIsXG4gICAgICAgICAgICBcIsKjMi45OVwiLFxuICAgICAgICAgICAgaWNlZFRlYVxuICAgICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiBkcmlua3NDb250YWluZXI7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lSXRlbSwgdGV4dCwgcHJpY2UsIHBpY1NyYywgbGluaykge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBpdGVtVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1UZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGV4dC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lSXRlbTtcblxuXG4gICAgY29uc3QgaXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtVGV4dC5jbGFzc0xpc3QuYWRkKCdpdGVtLXRleHQnKTtcbiAgICBpdGVtVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZCgnaXRlbS1wcmljZScpO1xuICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuXG4gICAgY29uc3QgaXRlbVBpYyA9IG5ldyBJbWFnZSgxNTAsIDE1MCk7XG4gICAgaXRlbVBpYy5zcmMgPSBwaWNTcmM7XG4gICAgaXRlbVBpYy5jbGFzc0xpc3QuYWRkKCdpdGVtLXBpYycpO1xuXG4gICAgaXRlbVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgIGl0ZW1UZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1UZXh0KTtcbiAgICBpdGVtVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRleHRDb250YWluZXIpXG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtUGljKTtcblxuICAgIHJldHVybiBpdGVtO1xufTsiLCJpbXBvcnQgbG9nb1BpY3R1cmUgZnJvbSAnLi9pbWFnZXMvbG9nby1iaWVnZS5wbmcnO1xuaW1wb3J0IGdpdGh1YkxvZ28gZnJvbSAnLi9pbWFnZXMvZ2l0aHViLnN2Zyc7XG5pbXBvcnQgeyBzaG93SG9tZSB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBzaG93TWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBzaG93Q29udGFjdCB9IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuICAgIFxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVMb2dvKCkpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlTG9nbygpIHtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9nby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28nKTtcblxuICAgIGNvbnN0IGxvZ29OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9nb05hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvLW5hbWUnKTtcbiAgICBsb2dvTmFtZS50ZXh0Q29udGVudCA9ICdCVVJHRVIgUExBQ0UnO1xuXG4gICAgY29uc3QgbG9nb1BpYyA9IG5ldyBJbWFnZSg1MCwgNTApO1xuICAgIGxvZ29QaWMuc3JjID0gbG9nb1BpY3R1cmU7XG4gICAgbG9nb1BpYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28tcGljJyk7XG5cbiAgICBsb2dvLmFwcGVuZENoaWxkKGxvZ29QaWMpO1xuICAgIGxvZ28uYXBwZW5kQ2hpbGQobG9nb05hbWUpO1xuXG4gICAgcmV0dXJuIGxvZ287XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2Jyk7XG5cbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgaG9tZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtYnRuJyk7XG4gICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9ICdIT01FJztcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZUJ0bihob21lQnRuKTtcbiAgICAgICAgICAgIHNob3dIb21lKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtYnRuJyk7XG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9ICdNRU5VJztcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZUJ0bihtZW51QnRuKTtcbiAgICAgICAgICAgIHNob3dNZW51KCk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDT05UQUNUJztcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZUJ0bihjb250YWN0QnRuKTtcbiAgICAgICAgICAgIHNob3dDb250YWN0KCk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuICAgIHJldHVybiBuYXY7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0QWN0aXZlQnRuKGJ1dHRvbikge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWJ0bicpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbiAhPT0gdGhpcykge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcblxuICAgIHJldHVybiBtYWluO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gZWthdC12ZWxhemA7XG4gICAgY29weXJpZ2h0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29weXJpZ2h0Jyk7XG5cbiAgICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKCdpZCcsICdnaXRodWItbGluaycpO1xuICAgIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2VrYXQtdmVsYXpcIjtcblxuICAgIGNvbnN0IGdpdGh1Ykljb24gPSBuZXcgSW1hZ2UoNTAsNTApO1xuICAgIGdpdGh1Ykljb24uc2V0QXR0cmlidXRlKCdpZCcsICdnaXRodWItaWNvbicpO1xuICAgIGdpdGh1Ykljb24uc3JjID0gZ2l0aHViTG9nbztcblxuICAgIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbik7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93V2Vic2l0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1idG4nKTtcblxuICAgIHNldEFjdGl2ZUJ0bihob21lQnRuKTtcbiAgICBzaG93SG9tZSgpO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=