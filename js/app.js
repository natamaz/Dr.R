/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/_custom.js":
/*!***********************!*\
  !*** ./js/_custom.js ***!
  \***********************/
/***/ (() => {

$(document).ready(function () {
  console.log("jQuery is enabled");
});

/***/ }),

/***/ "./js/_home.js":
/*!*********************!*\
  !*** ./js/_home.js ***!
  \*********************/
/***/ (() => {

$(document).ready(function () {
  AOS.init({
    offset: 200,
    duration: 1000,
    once: true,
    placement: top
  });
  window.addEventListener("load", AOS.refresh);
  $('.tabs__caption a').click(function () {
    // $('.tabs__content').hide();
    $('.tabs__caption a.active').removeClass('active');
    $(this).addClass('active');
    $('.tabs__content').removeClass('active');
    var panel = $(this).attr('href'); // $(panel).show(500);

    $(panel).addClass('active');
    return false;
  });
  $('.tabs li:first a').click();
  $(".scroll").click(function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 500);
  });
  $(window).scroll(function () {
    var sticky = $('.header'),
        scroll = $(window).scrollTop();
    if (scroll >= 1) sticky.addClass('fixed');else sticky.removeClass('fixed');
  });
});

/***/ }),

/***/ "./scss/_fonts.scss":
/*!**************************!*\
  !*** ./scss/_fonts.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/_vars.scss":
/*!*************************!*\
  !*** ./scss/_vars.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../node_modules/normalize.css/normalize.css":
/*!***************************************************!*\
  !*** ../node_modules/normalize.css/normalize.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./js/webpack.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_fonts_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/_fonts.scss */ "./scss/_fonts.scss");
/* harmony import */ var _scss_vars_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/_vars.scss */ "./scss/_vars.scss");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! normalize.css */ "../node_modules/normalize.css/normalize.css");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _custom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_custom.js */ "./js/_custom.js");
/* harmony import */ var _custom_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_custom_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_home.js */ "./js/_home.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_js__WEBPACK_IMPORTED_MODULE_5__);
//styles



 //js



})();

/******/ })()
;
//# sourceMappingURL=app.js.map