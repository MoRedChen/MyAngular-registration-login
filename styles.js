(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/styles.less":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/less-loader/dist/cjs.js??ref--14-3!./src/styles.less ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n.navbar {\n  font-size: 16px;\n  font-family: \"karla\", \"-apple-system\", \"BlinkMacSystemFont\", \"segoe ui\", \"微軟正黑體\", \"microsoft jhenghei\", sans-serif;\n  margin-top: 0;\n}\n.form-control {\n  font-size: 16px;\n  font-family: \"karla\", \"-apple-system\", \"BlinkMacSystemFont\", \"segoe ui\", \"微軟正黑體\", \"microsoft jhenghei\", sans-serif;\n}\n.dropdown-menu > li {\n  font-size: 16px;\n  font-family: \"karla\", \"-apple-system\", \"BlinkMacSystemFont\", \"segoe ui\", \"微軟正黑體\", \"microsoft jhenghei\", sans-serif;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: #fff;\n  transition: 0.3s;\n}\n.navbar-inverse .navbar-nav > li > a:hover {\n  color: #888;\n}\n.navbar-brand {\n  padding: 9px 20px;\n}\n.btn-fzs {\n  display: inline-block;\n  background-color: transparent;\n  border-width: 1px;\n  border-style: solid;\n  border-color: initial;\n  border-radius: 4px;\n  cursor: pointer;\n  padding: 0.75rem 1.5rem;\n  line-height: 1em;\n  opacity: 0.9;\n  white-space: nowrap;\n  transform: translateZ(0);\n  font-size: 15px;\n}\n.fa-fz {\n  font-size: 25px;\n}\n@media screen and (min-width: 768px) and (max-width: 1200px) {\n  .navbar .container {\n    width: 100%;\n  }\n  /* 漢堡選單與頁首 */\n  .navbar-toggle {\n    float: right;\n    margin-right: 0;\n  }\n  .navbar-header {\n    width: 100%;\n  }\n  /* 自訂 */\n  .my-navbar {\n    position: fixed;\n    background-color: #2c2c2c;\n    overflow: auto;\n    width: 70%;\n    top: 50px;\n    z-index: 9;\n    height: calc(100vh - 50px);\n    transition: 1s;\n  }\n  .navbar-brand {\n    margin-left: 40px;\n  }\n  /* 自訂 */\n  /* 選單隱藏區 */\n  .collapsing.navbar-collapse {\n    margin-left: -15px;\n    margin-right: -15px;\n  }\n  .collapse.navbar-collapse {\n    /* padding: 0; */\n    margin-left: -15px;\n    margin-right: -15px;\n    display: none!important;\n  }\n  .collapse.navbar-collapse.in {\n    display: block!important;\n  }\n  /* 選單項目 */\n  .navbar-nav {\n    margin-left: -15px;\n    margin-right: -15px;\n    float: none;\n  }\n  .navbar-nav.navbar-right,\n  .navbar-form.navbar-left {\n    float: none!important;\n    display: block;\n    padding: 0;\n  }\n  .nav > li {\n    position: relative;\n    display: block;\n    width: 100%;\n  }\n  .nav > li > a {\n    position: relative;\n    display: block;\n    padding: 10px 15px;\n  }\n  .navbar-nav > li > a {\n    line-height: 20px;\n  }\n  .navbar-form {\n    position: relative;\n  }\n  .navbar-form .form-group {\n    display: block;\n  }\n  .navbar-form .btn {\n    position: absolute;\n    right: 0;\n    top: 0;\n    border-radius: 0 6px 6px 0;\n  }\n  .navbar-form .form-control {\n    display: block;\n    width: 100%;\n  }\n  .navbar-right-none {\n    float: none !important;\n    margin-right: -15px;\n    padding-right: 30px;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .navbar {\n    z-index: 16;\n  }\n  /* 自訂 */\n  .my-navbar {\n    position: fixed;\n    background-color: #2c2c2c;\n    overflow: auto;\n    width: 70%;\n    top: 50px;\n    z-index: 9;\n    height: calc(100vh - 50px);\n    transition: 1s;\n  }\n  .navbar-brand {\n    margin-left: 20px;\n  }\n  /* 自訂 */\n  .my-navbar .navbar-nav {\n    margin: 0;\n  }\n  .leftIn {\n    left: -100%;\n  }\n  .rightIn {\n    right: -100%;\n  }\n  .my-navbar.leftIn.open {\n    left: 0;\n  }\n  .my-navbar.rightIn.open {\n    right: 0;\n  }\n  .navbar-form {\n    margin: 10px;\n  }\n}\n.navbar {\n  margin-bottom: 0;\n}\n/* navbar 導覽列 結束 */\n.breadcrumb {\n  margin: 20px;\n  background-color: #ffffff;\n}\n.breadcrumb > li > a {\n  text-decoration: none;\n}\n.item-one {\n  width: 100%;\n  height: 400px;\n  background-image: url('slider1-400.png');\n}\n.item-two {\n  width: 100%;\n  height: 400px;\n  background-image: url('slider2-400.png');\n}\n.item-three {\n  width: 100%;\n  height: 400px;\n  background-image: url('slider3-400.png');\n}\n.btn-transparent {\n  color: #ffffff;\n  background-color: rgba(8, 8, 8, 0.5);\n  border-color: #080808;\n  font-weight: bold;\n  transition: 0.3s;\n}\n.btn-transparent:focus,\n.btn-transparent:hover {\n  color: #ffffff;\n  background-color: rgba(8, 8, 8, 0.8);\n  border-color: #080808;\n  font-weight: bold;\n}\n/* ---------- footer 相關 ------------------------- */\n/* 整體設定 */\n.page-footer {\n  background-color: #080808;\n  color: rgba(255, 255, 255, 0.6);\n  padding: 16px 0;\n}\n/* 超連結 */\n.page-footer > .footer-copyright > a {\n  color: #fff;\n  font-weight: bold;\n  text-decoration: none;\n}\n/* -------------------------------------------------- */\n.animate {\n  transition: 2s ease-in-out;\n  animation: fadeIn ease-in 1;\n  animation-fill-mode: forwards;\n  animation-duration: 1s;\n}\n#phone.animate {\n  transform: translate(14em, 0);\n}\n#monitor.animate {\n  transform: translate(3em, 0);\n}\n.app-container {\n  min-height: 600px;\n}\n", "",{"version":3,"sources":["styles.less","C:/Users/user/Documents/MyAngular-registration-login/src/styles.less"],"names":[],"mappings":"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","file":"styles.less","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n.navbar {\n  font-size: 16px;\n  font-family: \"karla\", \"-apple-system\", \"BlinkMacSystemFont\", \"segoe ui\", \"微軟正黑體\", \"microsoft jhenghei\", sans-serif;\n  margin-top: 0;\n}\n.form-control {\n  font-size: 16px;\n  font-family: \"karla\", \"-apple-system\", \"BlinkMacSystemFont\", \"segoe ui\", \"微軟正黑體\", \"microsoft jhenghei\", sans-serif;\n}\n.dropdown-menu > li {\n  font-size: 16px;\n  font-family: \"karla\", \"-apple-system\", \"BlinkMacSystemFont\", \"segoe ui\", \"微軟正黑體\", \"microsoft jhenghei\", sans-serif;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: #fff;\n  transition: 0.3s;\n}\n.navbar-inverse .navbar-nav > li > a:hover {\n  color: #888;\n}\n.navbar-brand {\n  padding: 9px 20px;\n}\n.btn-fzs {\n  display: inline-block;\n  background-color: transparent;\n  border-width: 1px;\n  border-style: solid;\n  border-color: initial;\n  border-radius: 4px;\n  cursor: pointer;\n  padding: 0.75rem 1.5rem;\n  line-height: 1em;\n  opacity: 0.9;\n  white-space: nowrap;\n  transform: translateZ(0);\n  font-size: 15px;\n}\n.fa-fz {\n  font-size: 25px;\n}\n@media screen and (min-width: 768px) and (max-width: 1200px) {\n  .navbar .container {\n    width: 100%;\n  }\n  /* 漢堡選單與頁首 */\n  .navbar-toggle {\n    float: right;\n    margin-right: 0;\n  }\n  .navbar-header {\n    width: 100%;\n  }\n  /* 自訂 */\n  .my-navbar {\n    position: fixed;\n    background-color: #2c2c2c;\n    overflow: auto;\n    width: 70%;\n    top: 50px;\n    z-index: 9;\n    height: calc(100vh - 50px);\n    transition: 1s;\n  }\n  .navbar-brand {\n    margin-left: 40px;\n  }\n  /* 自訂 */\n  /* 選單隱藏區 */\n  .collapsing.navbar-collapse {\n    margin-left: -15px;\n    margin-right: -15px;\n  }\n  .collapse.navbar-collapse {\n    /* padding: 0; */\n    margin-left: -15px;\n    margin-right: -15px;\n    display: none!important;\n  }\n  .collapse.navbar-collapse.in {\n    display: block!important;\n  }\n  /* 選單項目 */\n  .navbar-nav {\n    margin-left: -15px;\n    margin-right: -15px;\n    float: none;\n  }\n  .navbar-nav.navbar-right,\n  .navbar-form.navbar-left {\n    float: none!important;\n    display: block;\n    padding: 0;\n  }\n  .nav > li {\n    position: relative;\n    display: block;\n    width: 100%;\n  }\n  .nav > li > a {\n    position: relative;\n    display: block;\n    padding: 10px 15px;\n  }\n  .navbar-nav > li > a {\n    line-height: 20px;\n  }\n  .navbar-form {\n    position: relative;\n  }\n  .navbar-form .form-group {\n    display: block;\n  }\n  .navbar-form .btn {\n    position: absolute;\n    right: 0;\n    top: 0;\n    border-radius: 0 6px 6px 0;\n  }\n  .navbar-form .form-control {\n    display: block;\n    width: 100%;\n  }\n  .navbar-right-none {\n    float: none !important;\n    margin-right: -15px;\n    padding-right: 30px;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .navbar {\n    z-index: 16;\n  }\n  /* 自訂 */\n  .my-navbar {\n    position: fixed;\n    background-color: #2c2c2c;\n    overflow: auto;\n    width: 70%;\n    top: 50px;\n    z-index: 9;\n    height: calc(100vh - 50px);\n    transition: 1s;\n  }\n  .navbar-brand {\n    margin-left: 20px;\n  }\n  /* 自訂 */\n  .my-navbar .navbar-nav {\n    margin: 0;\n  }\n  .leftIn {\n    left: -100%;\n  }\n  .rightIn {\n    right: -100%;\n  }\n  .my-navbar.leftIn.open {\n    left: 0;\n  }\n  .my-navbar.rightIn.open {\n    right: 0;\n  }\n  .navbar-form {\n    margin: 10px;\n  }\n}\n.navbar {\n  margin-bottom: 0;\n}\n/* navbar 導覽列 結束 */\n.breadcrumb {\n  margin: 20px;\n  background-color: #ffffff;\n}\n.breadcrumb > li > a {\n  text-decoration: none;\n}\n.item-one {\n  width: 100%;\n  height: 400px;\n  background-image: url(src\\assets\\imgs\\slider1-400.png);\n}\n.item-two {\n  width: 100%;\n  height: 400px;\n  background-image: url(src\\assets\\imgs\\slider2-400.png);\n}\n.item-three {\n  width: 100%;\n  height: 400px;\n  background-image: url(src\\assets\\imgs\\slider3-400.png);\n}\n.btn-transparent {\n  color: #ffffff;\n  background-color: rgba(8, 8, 8, 0.5);\n  border-color: #080808;\n  font-weight: bold;\n  transition: 0.3s;\n}\n.btn-transparent:focus,\n.btn-transparent:hover {\n  color: #ffffff;\n  background-color: rgba(8, 8, 8, 0.8);\n  border-color: #080808;\n  font-weight: bold;\n}\n/* ---------- footer 相關 ------------------------- */\n/* 整體設定 */\n.page-footer {\n  background-color: #080808;\n  color: rgba(255, 255, 255, 0.6);\n  padding: 16px 0;\n}\n/* 超連結 */\n.page-footer > .footer-copyright > a {\n  color: #fff;\n  font-weight: bold;\n  text-decoration: none;\n}\n/* -------------------------------------------------- */\n.animate {\n  -moz-transition: 2s ease-in-out;\n  -webkit-transition: 2s ease-in-out;\n  transition: 2s ease-in-out;\n  -moz-animation: fadeIn ease-in 1;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 1s;\n  -moz-animation-duration: 1s;\n  animation-duration: 1s;\n}\n#phone.animate {\n  -webkit-transform: translate(14em, 0);\n  -moz-transform: translate(14em, 0);\n  transform: translate(14em, 0);\n}\n#monitor.animate {\n  -webkit-transform: translate(3em, 0);\n  -moz-transform: translate(3em, 0);\n  transform: translate(3em, 0);\n}\n.app-container {\n  min-height: 600px;\n}\n","/* You can add global styles to this file, and also import other style files */\n// a { cursor: pointer }\n\n// .app-container {\n//     min-height: 320px;\n//     overflow: hidden;\n// }\n\n// .btn-delete-user {\n//     width: 40px;\n//     text-align: center;\n//     box-sizing: content-box;\n// }\n\n.navbar {\n  font-size: 16px;\n  font-family: \"karla\", \"-apple-system\", \"BlinkMacSystemFont\", \"segoe ui\", \"微軟正黑體\", \"microsoft jhenghei\", sans-serif;\n  margin-top: 0;\n}\n\n.form-control {\n  font-size: 16px;\n  font-family: \"karla\", \"-apple-system\", \"BlinkMacSystemFont\", \"segoe ui\", \"微軟正黑體\", \"microsoft jhenghei\", sans-serif;\n}\n\n.dropdown-menu>li {\n  font-size: 16px;\n  font-family: \"karla\", \"-apple-system\", \"BlinkMacSystemFont\", \"segoe ui\", \"微軟正黑體\", \"microsoft jhenghei\", sans-serif;\n}\n\n.navbar-inverse .navbar-nav>li>a {\n  color: #fff;\n  transition: 0.3s;\n}\n\n.navbar-inverse .navbar-nav>li>a:hover {\n  color: #888;\n}\n\n.navbar-brand {\n  padding: 9px 20px;\n}\n\n.btn-fzs {\n  display: inline-block;\n  background-color: transparent;\n  border-width: 1px;\n  border-style: solid;\n  border-color: initial;\n  border-radius: 4px;\n  cursor: pointer;\n  padding: .75rem 1.5rem;\n  line-height: 1em;\n  opacity: .9;\n  white-space: nowrap;\n  transform: translateZ(0);\n  font-size: 15px;\n}\n\n.fa-fz {\n  font-size: 25px;\n}\n\n@media screen and (min-width:768px) and (max-width: 1200px) {\n  .navbar .container {\n      width: 100%;\n  }\n  /* 漢堡選單與頁首 */\n  .navbar-toggle {\n      float: right;\n      margin-right: 0;\n  }\n  .navbar-header {\n      width: 100%;\n  }\n  /* 自訂 */\n  .my-navbar {\n      position: fixed;\n      background-color: #2c2c2c;\n      overflow: auto;\n      width: 70%;\n      top: 50px;\n      z-index: 9;\n      height: calc(100vh - 50px);\n      transition: 1s;\n  }\n  .navbar-brand {\n      margin-left: 40px;\n  }\n  /* 自訂 */\n  /* 選單隱藏區 */\n  .collapsing.navbar-collapse {\n      margin-left: -15px;\n      margin-right: -15px;\n  }\n  .collapse.navbar-collapse {\n      /* padding: 0; */\n      margin-left: -15px;\n      margin-right: -15px;\n      display: none!important;\n  }\n  .collapse.navbar-collapse.in {\n      display: block!important;\n  }\n  /* 選單項目 */\n  .navbar-nav {\n      margin-left: -15px;\n      margin-right: -15px;\n      float: none;\n  }\n  .navbar-nav.navbar-right,\n  .navbar-form.navbar-left {\n      float: none!important;\n      display: block;\n      padding: 0;\n  }\n  .nav>li {\n      position: relative;\n      display: block;\n      width: 100%;\n  }\n  .nav>li>a {\n      position: relative;\n      display: block;\n      padding: 10px 15px;\n  }\n  .navbar-nav>li>a {\n      line-height: 20px;\n  }\n  .navbar-form {\n      position: relative;\n  }\n  .navbar-form .form-group {\n      display: block;\n  }\n  .navbar-form .btn {\n      position: absolute;\n      right: 0;\n      top: 0;\n      border-radius: 0 6px 6px 0;\n  }\n  .navbar-form .form-control {\n      display: block;\n      width: 100%;\n  }\n  .navbar-right-none {\n      float: none !important;\n      margin-right: -15px;\n      padding-right: 30px;\n  }\n}\n\n@media screen and (max-width:1200px) {\n  .navbar {\n      z-index: 16;\n  }\n  /* 自訂 */\n  .my-navbar {\n      position: fixed;\n      background-color: #2c2c2c;\n      overflow: auto;\n      width: 70%;\n      top: 50px;\n      z-index: 9;\n      height: calc(100vh - 50px);\n      transition: 1s;\n  }\n  .navbar-brand {\n      margin-left: 20px;\n  }\n  /* 自訂 */\n  .my-navbar .navbar-nav {\n      margin: 0;\n  }\n  .leftIn {\n      left: -100%;\n  }\n  .rightIn {\n      right: -100%;\n  }\n  .my-navbar.leftIn.open {\n      left: 0;\n  }\n  .my-navbar.rightIn.open {\n      right: 0;\n  }\n  .navbar-form {\n      margin: 10px;\n  }\n}\n\n.navbar {\n  margin-bottom: 0;\n}\n\n\n/* navbar 導覽列 結束 */\n\n.breadcrumb {\n  margin: 20px;\n  background-color: rgba(255, 255, 255, 1);\n}\n\n.breadcrumb>li>a {\n  text-decoration: none;\n}\n\n.item-one {\n  width: 100%;\n  height: 400px;\n  background-image: url(src\\assets\\imgs\\slider1-400.png);\n}\n\n.item-two {\n  width: 100%;\n  height: 400px;\n  background-image: url(src\\assets\\imgs\\slider2-400.png);\n}\n\n.item-three {\n  width: 100%;\n  height: 400px;\n  background-image: url(src\\assets\\imgs\\slider3-400.png);\n}\n\n.btn-transparent {\n  color: rgba(255, 255, 255, 1);\n  background-color: rgba(8, 8, 8, 0.5);\n  border-color: rgba(8, 8, 8, 1);\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.btn-transparent:focus,\n.btn-transparent:hover {\n  color: rgba(255, 255, 255, 1);\n  background-color: rgba(8, 8, 8, 0.8);\n  border-color: rgba(8, 8, 8, 1);\n  font-weight: bold;\n}\n\n\n/* ---------- footer 相關 ------------------------- */\n\n\n/* 整體設定 */\n\n.page-footer {\n  background-color: rgba(8, 8, 8, 1);\n  color: rgba(255, 255, 255, .6);\n  padding: 16px 0;\n}\n\n\n/* 超連結 */\n\n.page-footer>.footer-copyright>a {\n  color: #fff;\n  font-weight: bold;\n  text-decoration: none;\n}\n\n\n/* -------------------------------------------------- */\n\n.animate {\n  -moz-transition: 2s ease-in-out;\n  -webkit-transition: 2s ease-in-out;\n  transition: 2s ease-in-out;\n  -moz-animation: fadeIn ease-in 1;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 1s;\n  -moz-animation-duration: 1s;\n  animation-duration: 1s;\n}\n\n#phone.animate {\n  -webkit-transform: translate(14em, 0);\n  -moz-transform: translate(14em, 0);\n  transform: translate(14em, 0);\n}\n\n#monitor.animate {\n  -webkit-transform: translate(3em, 0);\n  -moz-transform: translate(3em, 0);\n  transform: translate(3em, 0);\n}\n\n.app-container {\n  min-height: 600px;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.less":
/*!*************************!*\
  !*** ./src/styles.less ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--14-1!../node_modules/postcss-loader/src??embedded!../node_modules/less-loader/dist/cjs.js??ref--14-3!./styles.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/styles.less");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Documents\MyAngular-registration-login\src\styles.less */"./src/styles.less");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map