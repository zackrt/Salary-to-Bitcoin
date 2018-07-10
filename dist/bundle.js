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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderResults = renderResults;

var _jquery = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _jquery2 = _interopRequireDefault(_jquery);

var _coindeskService = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//takes Amount from 
function renderResults(Amount) {
    (0, _jquery2.default)("#conversion-results").html("" + Amount.toString());
    //return rate of 1 btc in h2 span class "rate-btc"
    (0, _jquery2.default)(".rate-btc").html("" + data.bpi.USD.rate_float);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentRate = undefined;
exports.getUserBitcoin = getUserBitcoin;
exports.convertAmountBTC = convertAmountBTC;

var _jquery = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _jquery2 = _interopRequireDefault(_jquery);

var _RenderResults = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//.getJSON from Coindesk API for current rate of bitcoin in usd as float
var Coindesk_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

var getCurrentRate = exports.getCurrentRate = function getCurrentRate() {
  //Promise .get with parameter Coindesk URL with jQuery .then that accepts params (data)
  return _jquery2.default.getJSON(Coindesk_URL).then(function (data) {
    console.log(data);
    return data.bpi.USD.rate_float;
    //showRate();      
  });
};
function getUserBitcoin() {
  //jQuery pull value from user amount value, in input box
  var UserBitcoin = (0, _jquery2.default)("#user-bitcoin-amount").val();
  console.log(UserBitcoin);
  return UserBitcoin;
}
// creates a function that multiplies users input of BTC * current rate from CoinDesk
function convertAmountBTC(UserBitcoin, rate) {
  var UserDollars = 0;
  //add IF the number is less than 21,000,000
  //if (Number(UserBitcoin)) {
  UserDollars = UserBitcoin * rate;
  console.log(rate);
  (0, _jquery2.default)('#one-coin').text(rate);
  return UserDollars;
  // }
}
//On page load or submit show rate of 1.0 BTC from CoindeskAPI?
//trying to reduce output of salary/btc to 4 decimal places, parseFloat?
//error from github pages about bundle.js (added ./ to dist/bundle.js)
//function showRate() {
//$('.rate-btc').html(1 * ${data.bpi.USD.rate_float});
//}
// how to convert

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jobFormHandler = undefined;

var _jquery = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = "https://jobs.search.gov/jobs/search.json?";
console.log((0, _jquery2.default)('#jobs-form'));

var jobFormHandler = exports.jobFormHandler = function jobFormHandler() {
  (0, _jquery2.default)('#jobs-form').submit(function (event) {
    event.preventDefault();
    var query = (0, _jquery2.default)('#job-query').val();
    var rate = (0, _jquery2.default)("#one-coin").text();
    if (rate) {
      rate = Number(rate);
      _jquery2.default.getJSON(url, {
        query: query
      }).then(function (data) {
        console.log(data);
        console.log("Hello");
        (0, _jquery2.default)('.salary-results').html("");
        //get data back form the api, and loop through the items in the response, and get stored in the job var, and appending the html
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = data.splice(0, 5)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var job = _step.value;

            console.log('rate', rate, job.maximum);
            (0, _jquery2.default)('.salary-results').append('<p><div class="job-listing-output"><a href="' + job.url + '">\n      <div class="Position-Title">' + job.position_title + '</div></a>\n      <p class="max-salary">\n      <h5>Max. Salary:$' + job.maximum + '\n      </h5>\n      </p> <p class="salary-over-bitcoin">\n      </h5>This Salary Equals:' + SalarydividedbyBitcoin(rate, job.maximum) + '\n      BTC</h5>\n      </p>\n      </p>');
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
    } else {
      alert = "Must click submit first!";
    }
  });
};
function SalarydividedbyBitcoin(rate, maximum) {
  //trying to reduce output of salary/btc to 4 decimal places, parseFloat?
  var roundedBTC = parseInt(maximum);
  console.log(roundedBTC);

  var salaryResults = roundedBTC / rate;
  //to return a float of ten-thousandths .0001?
  return salaryResults.toFixed(4);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _jquery2 = _interopRequireDefault(_jquery);

var _coindeskService = __webpack_require__(1);

var _RenderResults = __webpack_require__(0);

var _SalaryinBitcoin = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//On document ready, shows intro & start btn, then takes user input of amount of Bitcoin to US dollars, 
(0, _jquery2.default)(function () {
    (0, _SalaryinBitcoin.jobFormHandler)();
    (0, _jquery2.default)('.bitcoin-convert').submit(function (e) {
        e.preventDefault();
        var y = (0, _coindeskService.getUserBitcoin)();
        console.log(_coindeskService.getCurrentRate);
        (0, _coindeskService.getCurrentRate)().then(function (rate) {
            console.log("test");
            var Amount = (0, _coindeskService.convertAmountBTC)(y, rate);
            console.log(Amount);
            (0, _RenderResults.renderResults)(Amount);
        });
    });
    (0, _jquery2.default)(".start").click(function () {
        (0, _jquery2.default)(".intro").hide();
        (0, _jquery2.default)(".home-screen").show();
    });
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map