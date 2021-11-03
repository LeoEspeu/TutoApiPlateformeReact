(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/transition.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/alert.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/alert.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/collapse.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/dropdown.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/modal.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_highlight_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/highlight.js */ "./assets/js/highlight.js");
/* harmony import */ var _js_doclinks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/doclinks.js */ "./assets/js/doclinks.js");
/* harmony import */ var _js_doclinks_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_doclinks_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
 // loads the Bootstrap jQuery plugins






 // loads the code syntax highlighting library

 // Creates links to the Symfony documentation

 // start the Stimulus application



/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/doclinks.js":
/*!*******************************!*\
  !*** ./assets/js/doclinks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
 // Wraps some elements in anchor tags referencing to the Symfony documentation

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

$(function () {
  var $modal = $('#sourceCodeModal');
  var $controllerCode = $modal.find('code.php');
  var $templateCode = $modal.find('code.twig');

  function anchor(url, content) {
    return '<a class="doclink" target="_blank" href="' + url + '">' + content + '</a>';
  }

  ; // Wraps links to the Symfony documentation

  $modal.find('.hljs-comment').each(function () {
    $(this).html($(this).html().replace(/https:\/\/symfony.com\/doc\/[\w/.#-]+/g, function (url) {
      return anchor(url, url);
    }));
  }); // Wraps Symfony's annotations

  var annotations = {
    '@Cache': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/cache.html',
    '@IsGranted': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#isgranted',
    '@ParamConverter': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/converters.html',
    '@Route': 'https://symfony.com/doc/current/routing.html#creating-routes-as-annotations',
    '@Security': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#security'
  };
  $controllerCode.find('.hljs-doctag').each(function () {
    var annotation = $(this).text();

    if (annotations[annotation]) {
      $(this).html(anchor(annotations[annotation], annotation));
    }
  }); // Wraps Twig's tags

  $templateCode.find('.hljs-template-tag > .hljs-name').each(function () {
    var tag = $(this).text();

    if ('else' === tag || tag.match(/^end/)) {
      return;
    }

    var url = 'https://twig.symfony.com/doc/3.x/tags/' + tag + '.html#' + tag;
    $(this).html(anchor(url, tag));
  }); // Wraps Twig's functions

  $templateCode.find('.hljs-template-variable > .hljs-name').each(function () {
    var func = $(this).text();
    var url = 'https://twig.symfony.com/doc/3.x/functions/' + func + '.html#' + func;
    $(this).html(anchor(url, func));
  });
});

/***/ }),

/***/ "./assets/js/highlight.js":
/*!********************************!*\
  !*** ./assets/js/highlight.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/highlight.js/lib/core.js");
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/php */ "./node_modules/highlight.js/lib/languages/php.js");
/* harmony import */ var highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/twig */ "./node_modules/highlight.js/lib/languages/twig.js");
/* harmony import */ var highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2__);



highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().registerLanguage('php', (highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1___default()));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().registerLanguage('twig', (highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2___default()));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().initHighlightingOnLoad();

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-dd2802","vendors-node_modules_core-js_modules_es_string_replace_js","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap-sass_assets-6fd256"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLGdEQUFnRFUsSUFBaEQsR0FBdUQsUUFBdkQsR0FBa0VBLElBQTVFO0FBRUFoQixJQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFTLElBQVIsQ0FBYUosTUFBTSxDQUFDQyxHQUFELEVBQU1VLElBQU4sQ0FBbkI7QUFDSCxHQU5EO0FBT0gsQ0F0REEsQ0FBRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBRUFDLDZFQUFBLENBQXNCLEtBQXRCLEVBQTZCQyx1RUFBN0I7QUFDQUQsNkVBQUEsQ0FBc0IsTUFBdEIsRUFBOEJFLHdFQUE5QjtBQUVBRixtRkFBQTs7Ozs7Ozs7Ozs7O0FDUEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZG9jbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hpZ2hsaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oanx0KXN4PyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuLy8gbG9hZHMgdGhlIEJvb3RzdHJhcCBqUXVlcnkgcGx1Z2luc1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9qYXZhc2NyaXB0cy9ib290c3RyYXAvdHJhbnNpdGlvbi5qcyc7XHJcbmltcG9ydCAnYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2phdmFzY3JpcHRzL2Jvb3RzdHJhcC9hbGVydC5qcyc7XHJcbmltcG9ydCAnYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2phdmFzY3JpcHRzL2Jvb3RzdHJhcC9jb2xsYXBzZS5qcyc7XHJcbmltcG9ydCAnYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2phdmFzY3JpcHRzL2Jvb3RzdHJhcC9kcm9wZG93bi5qcyc7XHJcbmltcG9ydCAnYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2phdmFzY3JpcHRzL2Jvb3RzdHJhcC9tb2RhbC5qcyc7XHJcbmltcG9ydCAnanF1ZXJ5J1xyXG5cclxuLy8gbG9hZHMgdGhlIGNvZGUgc3ludGF4IGhpZ2hsaWdodGluZyBsaWJyYXJ5XHJcbmltcG9ydCAnLi9qcy9oaWdobGlnaHQuanMnO1xyXG5cclxuLy8gQ3JlYXRlcyBsaW5rcyB0byB0aGUgU3ltZm9ueSBkb2N1bWVudGF0aW9uXHJcbmltcG9ydCAnLi9qcy9kb2NsaW5rcy5qcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC4oanx0KXN4PyQvXHJcbikpO1xyXG5cclxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcclxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vLyBXcmFwcyBzb21lIGVsZW1lbnRzIGluIGFuY2hvciB0YWdzIHJlZmVyZW5jaW5nIHRvIHRoZSBTeW1mb255IGRvY3VtZW50YXRpb25cclxuJChmdW5jdGlvbigpIHtcclxuICAgIHZhciAkbW9kYWwgPSAkKCcjc291cmNlQ29kZU1vZGFsJyk7XHJcbiAgICB2YXIgJGNvbnRyb2xsZXJDb2RlID0gJG1vZGFsLmZpbmQoJ2NvZGUucGhwJyk7XHJcbiAgICB2YXIgJHRlbXBsYXRlQ29kZSA9ICRtb2RhbC5maW5kKCdjb2RlLnR3aWcnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhbmNob3IodXJsLCBjb250ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuICc8YSBjbGFzcz1cImRvY2xpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJyArIHVybCArICdcIj4nICsgY29udGVudCArICc8L2E+JztcclxuICAgIH07XHJcblxyXG4gICAgLy8gV3JhcHMgbGlua3MgdG8gdGhlIFN5bWZvbnkgZG9jdW1lbnRhdGlvblxyXG4gICAgJG1vZGFsLmZpbmQoJy5obGpzLWNvbW1lbnQnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykuaHRtbCgkKHRoaXMpLmh0bWwoKS5yZXBsYWNlKC9odHRwczpcXC9cXC9zeW1mb255LmNvbVxcL2RvY1xcL1tcXHcvLiMtXSsvZywgZnVuY3Rpb24odXJsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbmNob3IodXJsLCB1cmwpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFdyYXBzIFN5bWZvbnkncyBhbm5vdGF0aW9uc1xyXG4gICAgdmFyIGFubm90YXRpb25zID0ge1xyXG4gICAgICAgICdAQ2FjaGUnOiAnaHR0cHM6Ly9zeW1mb255LmNvbS9kb2MvY3VycmVudC9idW5kbGVzL1NlbnNpb0ZyYW1ld29ya0V4dHJhQnVuZGxlL2Fubm90YXRpb25zL2NhY2hlLmh0bWwnLFxyXG4gICAgICAgICdASXNHcmFudGVkJzogJ2h0dHBzOi8vc3ltZm9ueS5jb20vZG9jL2N1cnJlbnQvYnVuZGxlcy9TZW5zaW9GcmFtZXdvcmtFeHRyYUJ1bmRsZS9hbm5vdGF0aW9ucy9zZWN1cml0eS5odG1sI2lzZ3JhbnRlZCcsXHJcbiAgICAgICAgJ0BQYXJhbUNvbnZlcnRlcic6ICdodHRwczovL3N5bWZvbnkuY29tL2RvYy9jdXJyZW50L2J1bmRsZXMvU2Vuc2lvRnJhbWV3b3JrRXh0cmFCdW5kbGUvYW5ub3RhdGlvbnMvY29udmVydGVycy5odG1sJyxcclxuICAgICAgICAnQFJvdXRlJzogJ2h0dHBzOi8vc3ltZm9ueS5jb20vZG9jL2N1cnJlbnQvcm91dGluZy5odG1sI2NyZWF0aW5nLXJvdXRlcy1hcy1hbm5vdGF0aW9ucycsXHJcbiAgICAgICAgJ0BTZWN1cml0eSc6ICdodHRwczovL3N5bWZvbnkuY29tL2RvYy9jdXJyZW50L2J1bmRsZXMvU2Vuc2lvRnJhbWV3b3JrRXh0cmFCdW5kbGUvYW5ub3RhdGlvbnMvc2VjdXJpdHkuaHRtbCNzZWN1cml0eSdcclxuICAgIH07XHJcblxyXG4gICAgJGNvbnRyb2xsZXJDb2RlLmZpbmQoJy5obGpzLWRvY3RhZycpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGFubm90YXRpb24gPSAkKHRoaXMpLnRleHQoKTtcclxuXHJcbiAgICAgICAgaWYgKGFubm90YXRpb25zW2Fubm90YXRpb25dKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuaHRtbChhbmNob3IoYW5ub3RhdGlvbnNbYW5ub3RhdGlvbl0sIGFubm90YXRpb24pKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBXcmFwcyBUd2lnJ3MgdGFnc1xyXG4gICAgJHRlbXBsYXRlQ29kZS5maW5kKCcuaGxqcy10ZW1wbGF0ZS10YWcgPiAuaGxqcy1uYW1lJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgdGFnID0gJCh0aGlzKS50ZXh0KCk7XHJcblxyXG4gICAgICAgIGlmICgnZWxzZScgPT09IHRhZyB8fCB0YWcubWF0Y2goL15lbmQvKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdXJsID0gJ2h0dHBzOi8vdHdpZy5zeW1mb255LmNvbS9kb2MvMy54L3RhZ3MvJyArIHRhZyArICcuaHRtbCMnICsgdGFnO1xyXG5cclxuICAgICAgICAkKHRoaXMpLmh0bWwoYW5jaG9yKHVybCwgdGFnKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBXcmFwcyBUd2lnJ3MgZnVuY3Rpb25zXHJcbiAgICAkdGVtcGxhdGVDb2RlLmZpbmQoJy5obGpzLXRlbXBsYXRlLXZhcmlhYmxlID4gLmhsanMtbmFtZScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGZ1bmMgPSAkKHRoaXMpLnRleHQoKTtcclxuXHJcbiAgICAgICAgdmFyIHVybCA9ICdodHRwczovL3R3aWcuc3ltZm9ueS5jb20vZG9jLzMueC9mdW5jdGlvbnMvJyArIGZ1bmMgKyAnLmh0bWwjJyArIGZ1bmM7XHJcblxyXG4gICAgICAgICQodGhpcykuaHRtbChhbmNob3IodXJsLCBmdW5jKSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsImltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvY29yZSc7XHJcbmltcG9ydCBwaHAgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcGhwJztcclxuaW1wb3J0IHR3aWcgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdHdpZyc7XHJcblxyXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ3BocCcsIHBocCk7XHJcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgndHdpZycsIHR3aWcpO1xyXG5cclxuaGxqcy5pbml0SGlnaGxpZ2h0aW5nT25Mb2FkKCk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCIkIiwiJG1vZGFsIiwiJGNvbnRyb2xsZXJDb2RlIiwiZmluZCIsIiR0ZW1wbGF0ZUNvZGUiLCJhbmNob3IiLCJ1cmwiLCJjb250ZW50IiwiZWFjaCIsImh0bWwiLCJyZXBsYWNlIiwiYW5ub3RhdGlvbnMiLCJhbm5vdGF0aW9uIiwidGV4dCIsInRhZyIsIm1hdGNoIiwiZnVuYyIsImhsanMiLCJwaHAiLCJ0d2lnIiwicmVnaXN0ZXJMYW5ndWFnZSIsImluaXRIaWdobGlnaHRpbmdPbkxvYWQiXSwic291cmNlUm9vdCI6IiJ9