/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

$(document).ready(function () {

  $('.loading-gif').hide();
  $(document).ready(function () {
    $(function () {

      var storiesList = $('#story-item')

      $('select').change(function () {
        $(storiesList).empty();
        $('.content-wrapper').removeClass('content-wrapper-alt')
        $('.loading-gif').show();
        $('.content-wrapper').addClass('content-wrapper-alt');

        var url = 'https://api.nytimes.com/svc/topstories/v2/';
        url += $(this).val();
        url += '.json';
        url += '?' + $.param({ 'api-key': '2eb56f19cf854564af82b4d0641928ec' });

        $.ajax({
          url: url,
          method: 'GET',
        }).done(function (data) {
          $.each(data.results, function (index, value) {
          });
          var articleGroup = data.results.filter(function (item) {
            return item.multimedia.length;
          }).slice(0, 12);

          $.each(articleGroup, function (key, value) {
            var url = value.url;
            var pic = value.multimedia[4].url;
            var title = value.title;
            var caption = value.abstract;
            var appendItem = '';

          appendItem += '<div class="story-box-container"><li class="story-box" style="background-image: url('
          appendItem += pic
          appendItem += '");"><a href="';
          appendItem += url;
          appendItem += '"><div class="text-box"><p>';
          appendItem += caption;
          appendItem += '</p></div></a></li></div>';

            $('#story-item').append(appendItem);
            $('.loading-gif').hide();
          });
        });
      });
    });
  });
});

   

/***/ })
/******/ ]);