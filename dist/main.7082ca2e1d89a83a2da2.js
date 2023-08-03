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
  width: 50vw;
  height: 40vh;
  background-color: var(--transparentLighterBurg);
  padding: 50px;
  border-radius: 15px;
  text-align: center;
}

#contact-header {
  /* font-size: 32px; */
  font-size: max(3vw, 28px);
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
  font-size: max(2vw, 18px);
}

#contacts-container > img {
  /* width: max(60vw, 300px);
  height: max(40vh, 200px); */
  width: 100%;
  height: fit-content;
  object-fit: contain;
}

/* Menu styling */

#menu-container {
  display: grid;
  gap: 50px;
  place-content: center;
  place-items: center;
  width: 70vw;
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
  font-size: max(3vw, 28px);
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
  /* font-size: 20px; */
  font-size: max(2vw, 18px);
}

.item-name,
.item-price {
  font-size: 22px;
  color: var(--burgundy);
}

.item-pic {
  border-radius: 30px;
}

@media (max-width: 600px) {
  .item-container {
    grid-auto-flow: row;
    gap: 10px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,UAAU;;AAEV;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;;;EAGE,gBAAgB;EAChB,cAAc;EACd,YAAY;EACZ,UAAU;EACV,aAAa;EACb,eAAe;EACf,gBAAgB;AAClB;;AAEA,0BAA0B;AAC1B;EACE,qBAAqB;EACrB,4CAAkD;AACpD;;AAEA;EACE,mBAAmB;EACnB,wBAAwB;EACxB,0BAA0B;EAC1B,gBAAgB;EAChB,gCAAgC;EAChC,iCAAiC;EACjC,mCAAmC;EACnC,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,yDAAqD;EACrD,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA,mBAAmB;AACnB;EACE,sCAAsC;EACtC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,uBAAuB;EACvB,gBAAgB;EAChB,MAAM;AACR;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;;GAEG;;AAEH;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,8BAA8B;EAC9B,sBAAsB;EACtB,2BAA2B;EAC3B,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA,mBAAmB;AACnB;EACE,eAAe;EACf,OAAO;EACP,SAAS;EACT,WAAW;EACX,iCAAiC;EACjC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,mBAAmB;AACrB;;AAEA,iBAAiB;AACjB;EACE,WAAW;EACX,aAAa;EACb,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA,sBAAsB;AACtB;EACE,aAAa;EACb,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,WAAW;EACX,mBAAmB;EACnB,+CAA+C;EAC/C,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,iCAAiC;EACjC,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA,0BAA0B;AAC1B;EACE,mBAAmB;EACnB,aAAa;EACb,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,+CAA+C;EAC/C,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE;6BAC2B;EAC3B,WAAW;EACX,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,yCAAyC;EACzC,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,eAAe;EACf,sBAAsB;EACtB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,SAAS;EACT,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;;EAEE,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE;IACE,mBAAmB;IACnB,SAAS;EACX;AACF","sourcesContent":["/* Reset */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"] {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\n/* General space styling */\n@font-face {\n  font-family: \"Oswald\";\n  src: url(/src/Oswald/Oswald-VariableFont_wght.ttf);\n}\n\n:root {\n  --burgundy: #643843;\n  --lightburgundy: #99627a;\n  --lighterBurgundy: #c88ea7;\n  --biege: #e7cbcb;\n  --transparentBurgundy: #63384391;\n  --transparentLightBurg: #99627aab;\n  --transparentLighterBurg: #c88ea7d6;\n  --transparentBiege: #e7cbcbc6;\n  font-family: \"Oswald\";\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  background-image: url(/src/images/backgroundfood.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  align-content: space-between;\n  grid-template-rows: 1fr 5fr 1fr;\n}\n\n/* Header styling */\n#header {\n  background-color: var(--lightburgundy);\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n  gap: 20px;\n  padding: max(2vw, 20px);\n  position: sticky;\n  top: 0;\n}\n\n#logo {\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n  gap: 20px;\n}\n\n#logo-name {\n  color: var(--biege);\n  font-size: max(3vw, 20px);\n}\n\n/* #logo-pic {\n  widt\n} */\n\n#nav {\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n  gap: 20px;\n}\n\n.nav-btn {\n  background-color: var(--biege);\n  color: var(--burgundy);\n  font-size: max(1.5vw, 15px);\n  width: max(10vw, 60px);\n  height: 40px;\n  border-radius: 3px;\n}\n\n.active {\n  border-bottom: solid 10px var(--burgundy);\n}\n\n/* Footer styling */\n#footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: var(--burgundy);\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 10px;\n  color: var(--biege);\n}\n\n/* Main styling */\n#main {\n  width: 100%;\n  display: grid;\n  place-content: center;\n  place-items: center;\n}\n\n/* Home page styling */\n#hero {\n  display: grid;\n  gap: 20px;\n  place-content: center;\n  place-items: center;\n  width: 50vw;\n  height: fit-content;\n  background-color: var(--transparentLighterBurg);\n  padding: 50px;\n  border-radius: 15px;\n  margin-top: 50px;\n  margin-bottom: 100px;\n}\n\n#hero-header {\n  font-size: max(3vw, 28px);\n  color: var(--burgundy);\n  font-weight: bold;\n  text-align: center;\n}\n\n#hero-text {\n  font-size: max(2vw, 18px);\n  text-align: center;\n  color: var(--biege);\n  line-height: 35px;\n}\n\n#order-btn {\n  background-color: var(--burgundy);\n  color: var(--biege);\n  font-size: 20px;\n  width: 100px;\n  height: 40px;\n  border-radius: 3px;\n}\n\n/* Contacts page styling */\n#contacts-container {\n  margin-bottom: 70px;\n  display: grid;\n  gap: 20px;\n  place-content: center;\n  place-items: center;\n  width: 50vw;\n  height: 40vh;\n  background-color: var(--transparentLighterBurg);\n  padding: 50px;\n  border-radius: 15px;\n  text-align: center;\n}\n\n#contact-header {\n  /* font-size: 32px; */\n  font-size: max(3vw, 28px);\n  color: var(--biege);\n  font-weight: bold;\n  text-align: center;\n}\n\n#contacts-text-container {\n  display: grid;\n  gap: 10px;\n  place-content: center;\n  place-items: center;\n  color: var(--burgundy);\n  font-size: max(2vw, 18px);\n}\n\n#contacts-container > img {\n  /* width: max(60vw, 300px);\n  height: max(40vh, 200px); */\n  width: 100%;\n  height: fit-content;\n  object-fit: contain;\n}\n\n/* Menu styling */\n\n#menu-container {\n  display: grid;\n  gap: 50px;\n  place-content: center;\n  place-items: center;\n  width: 70vw;\n  margin: 50px;\n  margin-bottom: 100px;\n  background-color: var(--transparentBiege);\n  padding: 50px;\n  border-radius: 15px;\n}\n\n#menu-header {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 30px;\n  place-content: center;\n  place-items: center;\n  font-size: 38px;\n  color: var(--burgundy);\n  font-weight: bold;\n  font-size: max(3vw, 28px);\n}\n\n.type-menu-container {\n  display: grid;\n  gap: 30px;\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n.item-container-header {\n  font-size: 38px;\n  place-content: center;\n  place-items: center;\n  color: var(--burgundy);\n}\n\n.item-container {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 15%;\n}\n\n.item-text-container {\n  display: grid;\n  gap: 10px;\n  /* font-size: 20px; */\n  font-size: max(2vw, 18px);\n}\n\n.item-name,\n.item-price {\n  font-size: 22px;\n  color: var(--burgundy);\n}\n\n.item-pic {\n  border-radius: 30px;\n}\n\n@media (max-width: 600px) {\n  .item-container {\n    grid-auto-flow: row;\n    gap: 10px;\n  }\n}\n"],"sourceRoot":""}]);
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
  const main = document.getElementById("main");
  main.textContent = "";

  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu-container");

  menuContainer.appendChild(createHeaderMenu());
  menuContainer.appendChild(createBurgerMenu());
  menuContainer.appendChild(createSidesMenu());
  menuContainer.appendChild(createDrinksMenu());

  main.appendChild(menuContainer);
}

function createHeaderMenu() {
  const menuHeader = document.createElement("div");
  menuHeader.setAttribute("id", "menu-header");

  const headerLogo = new Image(70, 70);
  headerLogo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__;
  headerLogo.setAttribute("id", "header-logo");

  const headerText = document.createElement("div");
  headerText.setAttribute("id", "header-text");
  headerText.textContent = "Choose your meal";

  menuHeader.appendChild(headerLogo);
  menuHeader.appendChild(headerText);

  return menuHeader;
}

function createBurgerMenu() {
  const burgerContainer = document.createElement("div");
  burgerContainer.classList.add("type-menu-container");

  const burgerHeader = document.createElement("div");
  burgerHeader.classList.add("item-container-header");
  burgerHeader.textContent = "Burgers";
  burgerContainer.appendChild(burgerHeader);

  burgerContainer.appendChild(
    createMenuItem(
      _images_cheeseburger_jpg__WEBPACK_IMPORTED_MODULE_1__,
      "Classic Cheeseburger",
      "Our signature juicy beef patty topped with melted cheddar cheese, fresh lettuce, ripe tomatoes, onions, and our secret sauce. Served on a toasted brioche bun.",
      "£9.99"
    )
  );

  burgerContainer.appendChild(
    createMenuItem(
      _images_sweetchicken_jpg__WEBPACK_IMPORTED_MODULE_2__,
      "Spicy Chicken Burger",
      "Crispy chicken fillet coated in a flavorful blend of spices, accompanied by zesty jalapenos, crunchy lettuce, sliced pickles, and a creamy sriracha mayo. Served on a soft sesame seed bun.",
      "£8.99"
    )
  );

  burgerContainer.appendChild(
    createMenuItem(
      _images_mushroomswiss_jpg__WEBPACK_IMPORTED_MODULE_3__,
      "Mushroom Swiss Burger",
      "A savory delight with a beef patty smothered in Swiss cheese and topped with sautéed mushrooms, caramelized onions, and our special house sauce. Served on a toasted artisanal bun.",
      "£10.49"
    )
  );

  burgerContainer.appendChild(
    createMenuItem(
      _images_bbqburger_jpg__WEBPACK_IMPORTED_MODULE_5__,
      "Double Bacon BBQ Burger",
      "For the meat lovers, enjoy two beef patties stacked with crispy bacon, melted American cheese, tangy BBQ sauce, fresh lettuce, and sliced tomatoes. Served on a toasted pretzel bun.",
      "£11.99"
    )
  );

  burgerContainer.appendChild(
    createMenuItem(
      _images_veggiesupreme_jpg__WEBPACK_IMPORTED_MODULE_4__,
      "Veggie Supreme Burger",
      "A mouthwatering vegetarian option featuring a plant-based patty, loaded with roasted bell peppers, grilled onions, sliced avocado, lettuce, and tangy herb mayo. Served on a multigrain bun.",
      "£9.49"
    )
  );

  return burgerContainer;
}

function createSidesMenu() {
  const sidesContainer = document.createElement("div");
  sidesContainer.classList.add("type-menu-container");

  const sidesHeader = document.createElement("div");
  sidesHeader.classList.add("item-container-header");
  sidesHeader.textContent = "Sides";
  sidesContainer.appendChild(sidesHeader);

  sidesContainer.appendChild(
    createMenuItem(
      _images_frenchfries_jpg__WEBPACK_IMPORTED_MODULE_6__,
      "Crispy Chips",
      "Golden and crispy on the outside, soft and fluffy on the inside. Perfectly seasoned with a sprinkle of salt.",
      "£3.49"
    )
  );

  sidesContainer.appendChild(
    createMenuItem(
      _images_onionrings_jpg__WEBPACK_IMPORTED_MODULE_7__,
      "Onion Rings",
      "Crispy, beer-battered onion rings with a hint of spice, served with a zesty dipping sauce.",
      "£4.49"
    )
  );

  sidesContainer.appendChild(
    createMenuItem(
      _images_sweetpotatofries_jpg__WEBPACK_IMPORTED_MODULE_8__,
      "Sweet Potato Chips",
      "Thinly sliced sweet potatoes fried to a delightful crispness, served with a creamy chipotle aioli.",
      "£4.49"
    )
  );

  return sidesContainer;
}

function createDrinksMenu() {
  const drinksContainer = document.createElement("div");
  drinksContainer.classList.add("type-menu-container");

  const drinksHeader = document.createElement("div");
  drinksHeader.classList.add("item-container-header");
  drinksHeader.textContent = "Drinks";
  drinksContainer.appendChild(drinksHeader);

  drinksContainer.appendChild(
    createMenuItem(
      _images_milkshake_jpg__WEBPACK_IMPORTED_MODULE_9__,
      "Classic Milkshake",
      "Creamy and indulgent, choose from chocolate, vanilla, or strawberry flavors.",
      "£3.99"
    )
  );

  drinksContainer.appendChild(
    createMenuItem(
      _images_soda_jpg__WEBPACK_IMPORTED_MODULE_12__,
      "Craft Soda",
      "Quench your thirst with our selection of unique, locally sourced craft sodas.",
      "£2.99"
    )
  );

  drinksContainer.appendChild(
    createMenuItem(
      _images_lemonade_jpg__WEBPACK_IMPORTED_MODULE_11__,
      "Refreshing Lemonade",
      "A zesty and thirst-quenching beverage made with freshly squeezed lemons and a hint of sweetness.",
      "£2.99"
    )
  );

  drinksContainer.appendChild(
    createMenuItem(
      _images_icedtea_jpg__WEBPACK_IMPORTED_MODULE_10__,
      "Iced Tea",
      "A cool and revitalizing drink with your choice of peach, raspberry, or traditional lemon flavor.",
      "£2.99"
    )
  );

  return drinksContainer;
}

function createMenuItem(picSrc, nameItem, text, price) {
  const item = document.createElement("div");
  item.classList.add("item-container");

  const itemTextContainer = document.createElement("div");
  itemTextContainer.classList.add("item-text-container");

  const itemName = document.createElement("div");
  itemName.classList.add("item-name");
  itemName.textContent = nameItem;

  const itemText = document.createElement("div");
  itemText.classList.add("item-text");
  itemText.textContent = text;

  const itemPrice = document.createElement("div");
  itemPrice.classList.add("item-price");
  itemPrice.textContent = price;

  const itemPic = new Image(150, 150);
  itemPic.src = picSrc;
  itemPic.classList.add("item-pic");

  item.appendChild(itemPic);
  itemTextContainer.appendChild(itemName);
  itemTextContainer.appendChild(itemText);
  itemTextContainer.appendChild(itemPrice);
  item.appendChild(itemTextContainer);

  return item;
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43MDgyY2EyZTFkODlhODNhMmRhMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsd0tBQTJEO0FBQ3ZHLDRDQUE0QyxvSkFBaUQ7QUFDN0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtB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dXJhdW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYXVudF9wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYXVudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYXVudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmF1bnRfcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYXVudF9wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhdW50X3BhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYXVudF9wYWdlLy4vc3JjL3dlYnNpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvT3N3YWxkL09zd2FsZC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2ltYWdlcy9iYWNrZ3JvdW5kZm9vZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBSZXNldCAqL1xuXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuYnV0dG9uLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbmlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogaW5oZXJpdDtcbn1cblxuLyogR2VuZXJhbCBzcGFjZSBzdHlsaW5nICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG46cm9vdCB7XG4gIC0tYnVyZ3VuZHk6ICM2NDM4NDM7XG4gIC0tbGlnaHRidXJndW5keTogIzk5NjI3YTtcbiAgLS1saWdodGVyQnVyZ3VuZHk6ICNjODhlYTc7XG4gIC0tYmllZ2U6ICNlN2NiY2I7XG4gIC0tdHJhbnNwYXJlbnRCdXJndW5keTogIzYzMzg0MzkxO1xuICAtLXRyYW5zcGFyZW50TGlnaHRCdXJnOiAjOTk2MjdhYWI7XG4gIC0tdHJhbnNwYXJlbnRMaWdodGVyQnVyZzogI2M4OGVhN2Q2O1xuICAtLXRyYW5zcGFyZW50QmllZ2U6ICNlN2NiY2JjNjtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCI7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG4jY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmciAxZnI7XG59XG5cbi8qIEhlYWRlciBzdHlsaW5nICovXG4jaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRidXJndW5keSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgcGFkZGluZzogbWF4KDJ2dywgMjBweCk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbn1cblxuI2xvZ28ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5cbiNsb2dvLW5hbWUge1xuICBjb2xvcjogdmFyKC0tYmllZ2UpO1xuICBmb250LXNpemU6IG1heCgzdncsIDIwcHgpO1xufVxuXG4vKiAjbG9nby1waWMge1xuICB3aWR0XG59ICovXG5cbiNuYXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5cbi5uYXYtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmllZ2UpO1xuICBjb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xuICBmb250LXNpemU6IG1heCgxLjV2dywgMTVweCk7XG4gIHdpZHRoOiBtYXgoMTB2dywgNjBweCk7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMTBweCB2YXIoLS1idXJndW5keSk7XG59XG5cbi8qIEZvb3RlciBzdHlsaW5nICovXG4jZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXJndW5keSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1iaWVnZSk7XG59XG5cbi8qIE1haW4gc3R5bGluZyAqL1xuI21haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4vKiBIb21lIHBhZ2Ugc3R5bGluZyAqL1xuI2hlcm8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDIwcHg7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50TGlnaHRlckJ1cmcpO1xuICBwYWRkaW5nOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuI2hlcm8taGVhZGVyIHtcbiAgZm9udC1zaXplOiBtYXgoM3Z3LCAyOHB4KTtcbiAgY29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2hlcm8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogbWF4KDJ2dywgMThweCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWJpZWdlKTtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbiNvcmRlci1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXJndW5keSk7XG4gIGNvbG9yOiB2YXIoLS1iaWVnZSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLyogQ29udGFjdHMgcGFnZSBzdHlsaW5nICovXG4jY29udGFjdHMtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAyMHB4O1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA1MHZ3O1xuICBoZWlnaHQ6IDQwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50TGlnaHRlckJ1cmcpO1xuICBwYWRkaW5nOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250YWN0LWhlYWRlciB7XG4gIC8qIGZvbnQtc2l6ZTogMzJweDsgKi9cbiAgZm9udC1zaXplOiBtYXgoM3Z3LCAyOHB4KTtcbiAgY29sb3I6IHZhcigtLWJpZWdlKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRhY3RzLXRleHQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMHB4O1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1idXJndW5keSk7XG4gIGZvbnQtc2l6ZTogbWF4KDJ2dywgMThweCk7XG59XG5cbiNjb250YWN0cy1jb250YWluZXIgPiBpbWcge1xuICAvKiB3aWR0aDogbWF4KDYwdncsIDMwMHB4KTtcbiAgaGVpZ2h0OiBtYXgoNDB2aCwgMjAwcHgpOyAqL1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLyogTWVudSBzdHlsaW5nICovXG5cbiNtZW51LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNTBweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNzB2dztcbiAgbWFyZ2luOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnRCaWVnZSk7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbiNtZW51LWhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGdhcDogMzBweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGNvbG9yOiB2YXIoLS1idXJndW5keSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IG1heCgzdncsIDI4cHgpO1xufVxuXG4udHlwZS1tZW51LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcbn1cblxuLml0ZW0tY29udGFpbmVyLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xufVxuXG4uaXRlbS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBnYXA6IDE1JTtcbn1cblxuLml0ZW0tdGV4dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEwcHg7XG4gIC8qIGZvbnQtc2l6ZTogMjBweDsgKi9cbiAgZm9udC1zaXplOiBtYXgoMnZ3LCAxOHB4KTtcbn1cblxuLml0ZW0tbmFtZSxcbi5pdGVtLXByaWNlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xufVxuXG4uaXRlbS1waWMge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLml0ZW0tY29udGFpbmVyIHtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIGdhcDogMTBweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFVBQVU7O0FBRVY7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQyxtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oseURBQXFEO0VBQ3JELHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0Usc0NBQXNDO0VBQ3RDLGFBQWE7RUFD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ZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLFNBQVM7RUFDWDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFJlc2V0ICovXFxuXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG4vKiBHZW5lcmFsIHNwYWNlIHN0eWxpbmcgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIjtcXG4gIHNyYzogdXJsKC9zcmMvT3N3YWxkL09zd2FsZC1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJ1cmd1bmR5OiAjNjQzODQzO1xcbiAgLS1saWdodGJ1cmd1bmR5OiAjOTk2MjdhO1xcbiAgLS1saWdodGVyQnVyZ3VuZHk6ICNjODhlYTc7XFxuICAtLWJpZWdlOiAjZTdjYmNiO1xcbiAgLS10cmFuc3BhcmVudEJ1cmd1bmR5OiAjNjMzODQzOTE7XFxuICAtLXRyYW5zcGFyZW50TGlnaHRCdXJnOiAjOTk2MjdhYWI7XFxuICAtLXRyYW5zcGFyZW50TGlnaHRlckJ1cmc6ICNjODhlYTdkNjtcXG4gIC0tdHJhbnNwYXJlbnRCaWVnZTogI2U3Y2JjYmM2O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9pbWFnZXMvYmFja2dyb3VuZGZvb2QuanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmciAxZnI7XFxufVxcblxcbi8qIEhlYWRlciBzdHlsaW5nICovXFxuI2hlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGJ1cmd1bmR5KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IG1heCgydncsIDIwcHgpO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG59XFxuXFxuI2xvZ28ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jbG9nby1uYW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1iaWVnZSk7XFxuICBmb250LXNpemU6IG1heCgzdncsIDIwcHgpO1xcbn1cXG5cXG4vKiAjbG9nby1waWMge1xcbiAgd2lkdFxcbn0gKi9cXG5cXG4jbmF2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmllZ2UpO1xcbiAgY29sb3I6IHZhcigtLWJ1cmd1bmR5KTtcXG4gIGZvbnQtc2l6ZTogbWF4KDEuNXZ3LCAxNXB4KTtcXG4gIHdpZHRoOiBtYXgoMTB2dywgNjBweCk7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMTBweCB2YXIoLS1idXJndW5keSk7XFxufVxcblxcbi8qIEZvb3RlciBzdHlsaW5nICovXFxuI2Zvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXJndW5keSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogdmFyKC0tYmllZ2UpO1xcbn1cXG5cXG4vKiBNYWluIHN0eWxpbmcgKi9cXG4jbWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBIb21lIHBhZ2Ugc3R5bGluZyAqL1xcbiNoZXJvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIwcHg7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnRMaWdodGVyQnVyZyk7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuI2hlcm8taGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogbWF4KDN2dywgMjhweCk7XFxuICBjb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNoZXJvLXRleHQge1xcbiAgZm9udC1zaXplOiBtYXgoMnZ3LCAxOHB4KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1iaWVnZSk7XFxuICBsaW5lLWhlaWdodDogMzVweDtcXG59XFxuXFxuI29yZGVyLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXJndW5keSk7XFxuICBjb2xvcjogdmFyKC0tYmllZ2UpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4vKiBDb250YWN0cyBwYWdlIHN0eWxpbmcgKi9cXG4jY29udGFjdHMtY29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnRMaWdodGVyQnVyZyk7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhY3QtaGVhZGVyIHtcXG4gIC8qIGZvbnQtc2l6ZTogMzJweDsgKi9cXG4gIGZvbnQtc2l6ZTogbWF4KDN2dywgMjhweCk7XFxuICBjb2xvcjogdmFyKC0tYmllZ2UpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb250YWN0cy10ZXh0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1idXJndW5keSk7XFxuICBmb250LXNpemU6IG1heCgydncsIDE4cHgpO1xcbn1cXG5cXG4jY29udGFjdHMtY29udGFpbmVyID4gaW1nIHtcXG4gIC8qIHdpZHRoOiBtYXgoNjB2dywgMzAwcHgpO1xcbiAgaGVpZ2h0OiBtYXgoNDB2aCwgMjAwcHgpOyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLyogTWVudSBzdHlsaW5nICovXFxuXFxuI21lbnUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDUwcHg7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDcwdnc7XFxuICBtYXJnaW46IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50QmllZ2UpO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbiNtZW51LWhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMzBweDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDM4cHg7XFxuICBjb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IG1heCgzdncsIDI4cHgpO1xcbn1cXG5cXG4udHlwZS1tZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAzMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lci1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAzOHB4O1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1idXJndW5keSk7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMTUlO1xcbn1cXG5cXG4uaXRlbS10ZXh0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgLyogZm9udC1zaXplOiAyMHB4OyAqL1xcbiAgZm9udC1zaXplOiBtYXgoMnZ3LCAxOHB4KTtcXG59XFxuXFxuLml0ZW0tbmFtZSxcXG4uaXRlbS1wcmljZSB7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogdmFyKC0tYnVyZ3VuZHkpO1xcbn1cXG5cXG4uaXRlbS1waWMge1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuaXRlbS1jb250YWluZXIge1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IG1hcFBpYyBmcm9tICcuL2ltYWdlcy9tYXAucG5nJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NvbnRhY3QoKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgICAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGFjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0c0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3RzLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWhlYWRlcicpO1xuICAgIGNvbnRhY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnR2V0IGluIHRvdWNoIHdpdGggdXMhJ1xuXG4gICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0cy10ZXh0LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYWRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRyZXNzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RzLWl0ZW0nKTtcbiAgICBhZHJlc3MudGV4dENvbnRlbnQgPSAn8J+XuiAyMzUgTGF3bGV5IE1pZGRsZXdheSwgQmlybWluZ2hhbSBCNCA3WEgnO1xuXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaG9uZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0cy1pdGVtJyk7XG4gICAgcGhvbmUudGV4dENvbnRlbnQgPSAn8J+TsSArNDQtMDAwLTAwMC0wMDAwJztcblxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW1haWwuY2xhc3NMaXN0LmFkZCgnY29udGFjdHMtaXRlbScpO1xuICAgIGVtYWlsLnRleHRDb250ZW50ID0gJ/Cfk6kgZW1haWxAZ21haWwuY29tJztcblxuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWwpO1xuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRyZXNzKTtcblxuICAgIGNvbnN0IG1hcCA9IG5ldyBJbWFnZSg0NTAsMzAwKTtcbiAgICBtYXAuc3JjID0gbWFwUGljO1xuXG4gICAgY29udGFjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG4gICAgY29udGFjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG4gICAgY29udGFjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobWFwKTtcblxuICAgIHJldHVybiBjb250YWN0c0NvbnRhaW5lcjtcbn07IiwiaW1wb3J0IHsgc2hvd01lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBzZXRBY3RpdmVCdG4gfSBmcm9tIFwiLi93ZWJzaXRlXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dIb21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVybycpO1xuXG4gICAgY29uc3QgaGVyb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm9IZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZXJvLWhlYWRlcicpO1xuICAgIGhlcm9IZWFkZXIudGV4dENvbnRlbnQgPSAnWW91ciBVbHRpbWF0ZSBEZXN0aW5hdGlvbiBmb3IgQnVyZ2VyIEJsaXNzISc7XG5cbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm9UZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVyby10ZXh0Jyk7XG4gICAgaGVyb1RleHQudGV4dENvbnRlbnQgPSAnUHJlcGFyZSB0byBiZSBibG93biBhd2F5IGJ5IHRoZSBpcnJlc2lzdGlibGUgYXJvbWEgYW5kIHRhc3RlIGF0IEJ1cmdlciBQbGFjZS4gT3VyIGJ1cmdlcnMgYXJlIG1vcmUgdGhhbiBqdXN0IGEgbWVhbDsgdGhleSBhcmUgYSBjZWxlYnJhdGlvbiBvZiBmbGF2b3IgYW5kIGEgY3VsaW5hcnkgZGVsaWdodC4gRXhwZXJpZW5jZSB0aGUgbWFnaWMgb2YgcGVyZmVjdGx5IGNvb2tlZCBwYXR0aWVzIGFuZCBleHBlcnRseSBwYWlyZWQgaW5ncmVkaWVudHMuJztcblxuICAgIGNvbnN0IG9yZGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgb3JkZXJCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdvcmRlci1idG4nKTtcbiAgICBvcmRlckJ0bi50ZXh0Q29udGVudCA9ICdPcmRlciBub3chJztcbiAgICBvcmRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpO1xuICAgICAgICBzaG93TWVudSgpO1xuICAgICAgICBzZXRBY3RpdmVCdG4obWVudUJ0bik7XG4gICAgfSk7XG5cbiAgICBoZXJvLmFwcGVuZENoaWxkKGhlcm9IZWFkZXIpO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQob3JkZXJCdG4pO1xuXG4gICAgcmV0dXJuIGhlcm87XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgc2hvd1dlYnNpdGUgfSBmcm9tICcuL3dlYnNpdGUnO1xuXG5zaG93V2Vic2l0ZSgpOyIsImltcG9ydCBsb2dvUGljdHVyZSBmcm9tIFwiLi9pbWFnZXMvbG9nby5wbmdcIjtcbmltcG9ydCBjaGVlc2VCdXJnZXIgZnJvbSBcIi4vaW1hZ2VzL2NoZWVzZWJ1cmdlci5qcGdcIjtcbmltcG9ydCBjaGlja2VuQnVyZ2VyIGZyb20gXCIuL2ltYWdlcy9zd2VldGNoaWNrZW4uanBnXCI7XG5pbXBvcnQgbXVzaHJvb21zQnVyZ2VyIGZyb20gXCIuL2ltYWdlcy9tdXNocm9vbXN3aXNzLmpwZ1wiO1xuaW1wb3J0IHZlZ2dpZUJ1cmdlciBmcm9tIFwiLi9pbWFnZXMvdmVnZ2llc3VwcmVtZS5qcGdcIjtcbmltcG9ydCBiYnFCdXJnZXIgZnJvbSBcIi4vaW1hZ2VzL2JicWJ1cmdlci5qcGdcIjtcbmltcG9ydCBmcmVuY2hGcmllcyBmcm9tIFwiLi9pbWFnZXMvZnJlbmNoZnJpZXMuanBnXCI7XG5pbXBvcnQgb25pb25SaW5ncyBmcm9tIFwiLi9pbWFnZXMvb25pb25yaW5ncy5qcGdcIjtcbmltcG9ydCBzd2VldFBvdGF0byBmcm9tIFwiLi9pbWFnZXMvc3dlZXRwb3RhdG9mcmllcy5qcGdcIjtcbmltcG9ydCBtaWxrc2hha2UgZnJvbSBcIi4vaW1hZ2VzL21pbGtzaGFrZS5qcGdcIjtcbmltcG9ydCBpY2VkVGVhIGZyb20gXCIuL2ltYWdlcy9pY2VkdGVhLmpwZ1wiO1xuaW1wb3J0IGxlbW9uYWRlIGZyb20gXCIuL2ltYWdlcy9sZW1vbmFkZS5qcGdcIjtcbmltcG9ydCBzb2RhIGZyb20gXCIuL2ltYWdlcy9zb2RhLmpwZ1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNZW51KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcblxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnUtY29udGFpbmVyXCIpO1xuXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyTWVudSgpKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVCdXJnZXJNZW51KCkpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGVzTWVudSgpKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEcmlua3NNZW51KCkpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlck1lbnUoKSB7XG4gIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51SGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS1oZWFkZXJcIik7XG5cbiAgY29uc3QgaGVhZGVyTG9nbyA9IG5ldyBJbWFnZSg3MCwgNzApO1xuICBoZWFkZXJMb2dvLnNyYyA9IGxvZ29QaWN0dXJlO1xuICBoZWFkZXJMb2dvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLWxvZ29cIik7XG5cbiAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlclRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXItdGV4dFwiKTtcbiAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiQ2hvb3NlIHlvdXIgbWVhbFwiO1xuXG4gIG1lbnVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTG9nbyk7XG4gIG1lbnVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG5cbiAgcmV0dXJuIG1lbnVIZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1cmdlck1lbnUoKSB7XG4gIGNvbnN0IGJ1cmdlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1cmdlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidHlwZS1tZW51LWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBidXJnZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXJnZXJIZWFkZXIuY2xhc3NMaXN0LmFkZChcIml0ZW0tY29udGFpbmVyLWhlYWRlclwiKTtcbiAgYnVyZ2VySGVhZGVyLnRleHRDb250ZW50ID0gXCJCdXJnZXJzXCI7XG4gIGJ1cmdlckNvbnRhaW5lci5hcHBlbmRDaGlsZChidXJnZXJIZWFkZXIpO1xuXG4gIGJ1cmdlckNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIGNoZWVzZUJ1cmdlcixcbiAgICAgIFwiQ2xhc3NpYyBDaGVlc2VidXJnZXJcIixcbiAgICAgIFwiT3VyIHNpZ25hdHVyZSBqdWljeSBiZWVmIHBhdHR5IHRvcHBlZCB3aXRoIG1lbHRlZCBjaGVkZGFyIGNoZWVzZSwgZnJlc2ggbGV0dHVjZSwgcmlwZSB0b21hdG9lcywgb25pb25zLCBhbmQgb3VyIHNlY3JldCBzYXVjZS4gU2VydmVkIG9uIGEgdG9hc3RlZCBicmlvY2hlIGJ1bi5cIixcbiAgICAgIFwiwqM5Ljk5XCJcbiAgICApXG4gICk7XG5cbiAgYnVyZ2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgY2hpY2tlbkJ1cmdlcixcbiAgICAgIFwiU3BpY3kgQ2hpY2tlbiBCdXJnZXJcIixcbiAgICAgIFwiQ3Jpc3B5IGNoaWNrZW4gZmlsbGV0IGNvYXRlZCBpbiBhIGZsYXZvcmZ1bCBibGVuZCBvZiBzcGljZXMsIGFjY29tcGFuaWVkIGJ5IHplc3R5IGphbGFwZW5vcywgY3J1bmNoeSBsZXR0dWNlLCBzbGljZWQgcGlja2xlcywgYW5kIGEgY3JlYW15IHNyaXJhY2hhIG1heW8uIFNlcnZlZCBvbiBhIHNvZnQgc2VzYW1lIHNlZWQgYnVuLlwiLFxuICAgICAgXCLCozguOTlcIlxuICAgIClcbiAgKTtcblxuICBidXJnZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBtdXNocm9vbXNCdXJnZXIsXG4gICAgICBcIk11c2hyb29tIFN3aXNzIEJ1cmdlclwiLFxuICAgICAgXCJBIHNhdm9yeSBkZWxpZ2h0IHdpdGggYSBiZWVmIHBhdHR5IHNtb3RoZXJlZCBpbiBTd2lzcyBjaGVlc2UgYW5kIHRvcHBlZCB3aXRoIHNhdXTDqWVkIG11c2hyb29tcywgY2FyYW1lbGl6ZWQgb25pb25zLCBhbmQgb3VyIHNwZWNpYWwgaG91c2Ugc2F1Y2UuIFNlcnZlZCBvbiBhIHRvYXN0ZWQgYXJ0aXNhbmFsIGJ1bi5cIixcbiAgICAgIFwiwqMxMC40OVwiXG4gICAgKVxuICApO1xuXG4gIGJ1cmdlckNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIGJicUJ1cmdlcixcbiAgICAgIFwiRG91YmxlIEJhY29uIEJCUSBCdXJnZXJcIixcbiAgICAgIFwiRm9yIHRoZSBtZWF0IGxvdmVycywgZW5qb3kgdHdvIGJlZWYgcGF0dGllcyBzdGFja2VkIHdpdGggY3Jpc3B5IGJhY29uLCBtZWx0ZWQgQW1lcmljYW4gY2hlZXNlLCB0YW5neSBCQlEgc2F1Y2UsIGZyZXNoIGxldHR1Y2UsIGFuZCBzbGljZWQgdG9tYXRvZXMuIFNlcnZlZCBvbiBhIHRvYXN0ZWQgcHJldHplbCBidW4uXCIsXG4gICAgICBcIsKjMTEuOTlcIlxuICAgIClcbiAgKTtcblxuICBidXJnZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICB2ZWdnaWVCdXJnZXIsXG4gICAgICBcIlZlZ2dpZSBTdXByZW1lIEJ1cmdlclwiLFxuICAgICAgXCJBIG1vdXRod2F0ZXJpbmcgdmVnZXRhcmlhbiBvcHRpb24gZmVhdHVyaW5nIGEgcGxhbnQtYmFzZWQgcGF0dHksIGxvYWRlZCB3aXRoIHJvYXN0ZWQgYmVsbCBwZXBwZXJzLCBncmlsbGVkIG9uaW9ucywgc2xpY2VkIGF2b2NhZG8sIGxldHR1Y2UsIGFuZCB0YW5neSBoZXJiIG1heW8uIFNlcnZlZCBvbiBhIG11bHRpZ3JhaW4gYnVuLlwiLFxuICAgICAgXCLCozkuNDlcIlxuICAgIClcbiAgKTtcblxuICByZXR1cm4gYnVyZ2VyQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWRlc01lbnUoKSB7XG4gIGNvbnN0IHNpZGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInR5cGUtbWVudS1jb250YWluZXJcIik7XG5cbiAgY29uc3Qgc2lkZXNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlc0hlYWRlci5jbGFzc0xpc3QuYWRkKFwiaXRlbS1jb250YWluZXItaGVhZGVyXCIpO1xuICBzaWRlc0hlYWRlci50ZXh0Q29udGVudCA9IFwiU2lkZXNcIjtcbiAgc2lkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZXNIZWFkZXIpO1xuXG4gIHNpZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgZnJlbmNoRnJpZXMsXG4gICAgICBcIkNyaXNweSBDaGlwc1wiLFxuICAgICAgXCJHb2xkZW4gYW5kIGNyaXNweSBvbiB0aGUgb3V0c2lkZSwgc29mdCBhbmQgZmx1ZmZ5IG9uIHRoZSBpbnNpZGUuIFBlcmZlY3RseSBzZWFzb25lZCB3aXRoIGEgc3ByaW5rbGUgb2Ygc2FsdC5cIixcbiAgICAgIFwiwqMzLjQ5XCJcbiAgICApXG4gICk7XG5cbiAgc2lkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBvbmlvblJpbmdzLFxuICAgICAgXCJPbmlvbiBSaW5nc1wiLFxuICAgICAgXCJDcmlzcHksIGJlZXItYmF0dGVyZWQgb25pb24gcmluZ3Mgd2l0aCBhIGhpbnQgb2Ygc3BpY2UsIHNlcnZlZCB3aXRoIGEgemVzdHkgZGlwcGluZyBzYXVjZS5cIixcbiAgICAgIFwiwqM0LjQ5XCJcbiAgICApXG4gICk7XG5cbiAgc2lkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBzd2VldFBvdGF0byxcbiAgICAgIFwiU3dlZXQgUG90YXRvIENoaXBzXCIsXG4gICAgICBcIlRoaW5seSBzbGljZWQgc3dlZXQgcG90YXRvZXMgZnJpZWQgdG8gYSBkZWxpZ2h0ZnVsIGNyaXNwbmVzcywgc2VydmVkIHdpdGggYSBjcmVhbXkgY2hpcG90bGUgYWlvbGkuXCIsXG4gICAgICBcIsKjNC40OVwiXG4gICAgKVxuICApO1xuXG4gIHJldHVybiBzaWRlc0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRHJpbmtzTWVudSgpIHtcbiAgY29uc3QgZHJpbmtzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHJpbmtzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0eXBlLW1lbnUtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGRyaW5rc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRyaW5rc0hlYWRlci5jbGFzc0xpc3QuYWRkKFwiaXRlbS1jb250YWluZXItaGVhZGVyXCIpO1xuICBkcmlua3NIZWFkZXIudGV4dENvbnRlbnQgPSBcIkRyaW5rc1wiO1xuICBkcmlua3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZHJpbmtzSGVhZGVyKTtcblxuICBkcmlua3NDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBtaWxrc2hha2UsXG4gICAgICBcIkNsYXNzaWMgTWlsa3NoYWtlXCIsXG4gICAgICBcIkNyZWFteSBhbmQgaW5kdWxnZW50LCBjaG9vc2UgZnJvbSBjaG9jb2xhdGUsIHZhbmlsbGEsIG9yIHN0cmF3YmVycnkgZmxhdm9ycy5cIixcbiAgICAgIFwiwqMzLjk5XCJcbiAgICApXG4gICk7XG5cbiAgZHJpbmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgc29kYSxcbiAgICAgIFwiQ3JhZnQgU29kYVwiLFxuICAgICAgXCJRdWVuY2ggeW91ciB0aGlyc3Qgd2l0aCBvdXIgc2VsZWN0aW9uIG9mIHVuaXF1ZSwgbG9jYWxseSBzb3VyY2VkIGNyYWZ0IHNvZGFzLlwiLFxuICAgICAgXCLCozIuOTlcIlxuICAgIClcbiAgKTtcblxuICBkcmlua3NDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBsZW1vbmFkZSxcbiAgICAgIFwiUmVmcmVzaGluZyBMZW1vbmFkZVwiLFxuICAgICAgXCJBIHplc3R5IGFuZCB0aGlyc3QtcXVlbmNoaW5nIGJldmVyYWdlIG1hZGUgd2l0aCBmcmVzaGx5IHNxdWVlemVkIGxlbW9ucyBhbmQgYSBoaW50IG9mIHN3ZWV0bmVzcy5cIixcbiAgICAgIFwiwqMyLjk5XCJcbiAgICApXG4gICk7XG5cbiAgZHJpbmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgaWNlZFRlYSxcbiAgICAgIFwiSWNlZCBUZWFcIixcbiAgICAgIFwiQSBjb29sIGFuZCByZXZpdGFsaXppbmcgZHJpbmsgd2l0aCB5b3VyIGNob2ljZSBvZiBwZWFjaCwgcmFzcGJlcnJ5LCBvciB0cmFkaXRpb25hbCBsZW1vbiBmbGF2b3IuXCIsXG4gICAgICBcIsKjMi45OVwiXG4gICAgKVxuICApO1xuXG4gIHJldHVybiBkcmlua3NDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKHBpY1NyYywgbmFtZUl0ZW0sIHRleHQsIHByaWNlKSB7XG4gIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBpdGVtVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1UZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpdGVtLXRleHQtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcIml0ZW0tbmFtZVwiKTtcbiAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lSXRlbTtcblxuICBjb25zdCBpdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1UZXh0LmNsYXNzTGlzdC5hZGQoXCJpdGVtLXRleHRcIik7XG4gIGl0ZW1UZXh0LnRleHRDb250ZW50ID0gdGV4dDtcblxuICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZChcIml0ZW0tcHJpY2VcIik7XG4gIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuXG4gIGNvbnN0IGl0ZW1QaWMgPSBuZXcgSW1hZ2UoMTUwLCAxNTApO1xuICBpdGVtUGljLnNyYyA9IHBpY1NyYztcbiAgaXRlbVBpYy5jbGFzc0xpc3QuYWRkKFwiaXRlbS1waWNcIik7XG5cbiAgaXRlbS5hcHBlbmRDaGlsZChpdGVtUGljKTtcbiAgaXRlbVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICBpdGVtVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtVGV4dCk7XG4gIGl0ZW1UZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRleHRDb250YWluZXIpO1xuXG4gIHJldHVybiBpdGVtO1xufVxuIiwiaW1wb3J0IGxvZ29QaWN0dXJlIGZyb20gJy4vaW1hZ2VzL2xvZ28tYmllZ2UucG5nJztcbmltcG9ydCBnaXRodWJMb2dvIGZyb20gJy4vaW1hZ2VzL2dpdGh1Yi5zdmcnO1xuaW1wb3J0IHsgc2hvd0hvbWUgfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgc2hvd01lbnUgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgc2hvd0NvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbiAgICBcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTG9nbygpKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvZ28oKSB7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XG5cbiAgICBjb25zdCBsb2dvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ29OYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9nby1uYW1lJyk7XG4gICAgbG9nb05hbWUudGV4dENvbnRlbnQgPSAnQlVSR0VSIFBMQUNFJztcblxuICAgIGNvbnN0IGxvZ29QaWMgPSBuZXcgSW1hZ2UoNTAsIDUwKTtcbiAgICBsb2dvUGljLnNyYyA9IGxvZ29QaWN0dXJlO1xuICAgIGxvZ29QaWMuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvLXBpYycpO1xuXG4gICAgbG9nby5hcHBlbmRDaGlsZChsb2dvUGljKTtcbiAgICBsb2dvLmFwcGVuZENoaWxkKGxvZ29OYW1lKTtcblxuICAgIHJldHVybiBsb2dvO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdicpO1xuXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGhvbWVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdob21lLWJ0bicpO1xuICAgIGhvbWVCdG4udGV4dENvbnRlbnQgPSAnSE9NRSc7XG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVCdG4oaG9tZUJ0bik7XG4gICAgICAgICAgICBzaG93SG9tZSgpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIG1lbnVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWJ0bicpO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSAnTUVOVSc7XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVCdG4obWVudUJ0bik7XG4gICAgICAgICAgICBzaG93TWVudSgpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSAnQ09OVEFDVCc7XG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVCdG4oY29udGFjdEJ0bik7XG4gICAgICAgICAgICBzaG93Q29udGFjdCgpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG5cbiAgICByZXR1cm4gbmF2O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZUJ0bihidXR0b24pIHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1idG4nKTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG5cbiAgICByZXR1cm4gbWFpbjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcblxuICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IGVrYXQtdmVsYXpgO1xuICAgIGNvcHlyaWdodC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvcHlyaWdodCcpO1xuXG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2l0aHViLWxpbmsnKTtcbiAgICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9la2F0LXZlbGF6XCI7XG5cbiAgICBjb25zdCBnaXRodWJJY29uID0gbmV3IEltYWdlKDUwLDUwKTtcbiAgICBnaXRodWJJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2l0aHViLWljb24nKTtcbiAgICBnaXRodWJJY29uLnNyYyA9IGdpdGh1YkxvZ287XG5cbiAgICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICAgIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1dlYnNpdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtYnRuJyk7XG5cbiAgICBzZXRBY3RpdmVCdG4oaG9tZUJ0bik7XG4gICAgc2hvd0hvbWUoKTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9