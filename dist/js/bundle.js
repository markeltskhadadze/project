/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CheckData.js":
/*!**************************!*\
  !*** ./src/CheckData.js ***!
  \**************************/
/***/ (() => {

eval("let getPasswordValue = document.getElementById(\"passValue\");\nlet getLoginValue = document.getElementById(\"loginValue\");\nlet btnSubmitAut = document.getElementById(\"submit-aut\");\nlet clickonSingIp = document.getElementById(\"authorization\");\nlet windowSingIp = document.getElementById(\"signIn\");\nlet thanksModal = document.getElementById(\"thanks-modal\");\nlet authorizationText = document.getElementById('authorizationText')\nlet incorrectData = document.getElementById(\"incorrectData\");\n\ngetPasswordValue.oninput = (event) => {\n  getPasswordValue.classList.remove(\"input-error\");\n};\n\ngetLoginValue.oninput = (event) => {\n  getLoginValue.classList.remove(\"input-error\");\n  incorrectData.classList.remove(\"error-message--visible\");\n};\n\nbtnSubmitAut.onclick = async function (event) {\n  var response = await (await fetch(\"http://localhost:3000/user\")).json();\n  if (\n    response.some(\n      (item) =>\n        item.login === getLoginValue.value &&\n        item.password === getPasswordValue.value\n    )\n  ) {\n    getLoginValue.value = \"\";\n    getPasswordValue.value = \"\";\n    windowSingIp.style.display = \"none\";\n    thanksModal.style.display = \"flex\";\n    authorizationText.style.display = \"block\";\n    setTimeout(function () {\n      thanksModal.style.display = \"none\";\n      authorizationText.style.display = 'none'\n    }, 1500);\n  } else {\n    getLoginValue.value = \"\";\n    getPasswordValue.value = \"\";\n    getPasswordValue.classList.add(\"input-error\");\n    getLoginValue.classList.add(\"input-error\");\n    incorrectData.classList.add(\"error-message--visible\");\n  }\n};\n\n\n//# sourceURL=webpack://project/./src/CheckData.js?");

/***/ }),

/***/ "./src/Sending-data.js":
/*!*****************************!*\
  !*** ./src/Sending-data.js ***!
  \*****************************/
/***/ (() => {

eval("let getPassword = document.getElementById(\"pass\");\nlet getLogin = document.getElementById(\"login\");\nlet btnSubmit = document.getElementById(\"submit\");\nlet enterLogin = document.getElementById(\"errorLogin\");\nlet enterPassword = document.getElementById(\"errorPassword\");\nlet getAvatar = document.getElementById(\"upload-photo\");\nlet uploadAvatar = document.getElementById(\"errorAvatar\");\nlet getPhoto = document.getElementById(\"getPhoto\");\nlet loginExists = document.getElementById(\"loginExists\");\nlet registrationText = document.getElementById(\"RegistrationText\");\nlet thanksModal = document.getElementById(\"thanks-modal\");\nlet windowSingUp = document.getElementById(\"modalWindow\");\nlet errorAvatarSize = document.getElementById(\"errorAvatarSize\");\nlet passwordCharacters = document.getElementById('passwordCharacters')\n\ngetPassword.oninput = (event) => {\n  getPassword.classList.remove(\"input-error\");\n  enterPassword.classList.remove(\"error-message--visible\");\n};\n\ngetLogin.oninput = (event) => {\n  getLogin.classList.remove(\"input-error\");\n  enterLogin.classList.remove(\"error-message--visible\");\n};\n\ngetAvatar.oninput = (event) => {\n  uploadAvatar.classList.remove(\"error-message--visible\");\n};\n\ngetAvatar.onchange = (event) => {\n  var img = event.target.files[0];\n  if (\n    event.target.files === \"image/png\" ||\n    ( true && img.size <= 300000)\n  ) {\n    var reader = new FileReader();\n\n    getPhoto.title = img.name;\n\n    reader.onload = function (event) {\n      getPhoto.src = event.target.result;\n      getPhoto.style = `\n     border-radius: 50%;\n     width: 100px;\n     height: 100px;\n     `;\n    };\n\n    reader.readAsDataURL(img);\n  } else {\n    console.log(\"bye\");\n  }\n};\n\nbtnSubmit.onclick = async function (event) {\n  var login = getLogin.value;\n  var pass = getPassword.value;\n  var avatar = getPhoto.src;\n  if (login && pass && avatar) {\n    var users = await (await fetch(\"http://localhost:3000/user\")).json();\n    if (users.some((item) => item.login === login)) {\n      getLogin.classList.add(\"input-error\");\n      loginExists.classList.add(\"error-message--visible\");\n    } else {\n      windowSingUp.style.display = \"none\";\n      thanksModal.style.display = \"flex\";\n      registrationText.style.display = \"block\";\n      setTimeout(function () {\n        thanksModal.style.display = \"none\";\n        registrationText.style.display = \"none\";\n      }, 1500);\n      if (login.length !== 0 && pass.length !== 0 && avatar) {\n        fetch(\"http://localhost:3000/user\", {\n          method: \"POST\",\n          body: JSON.stringify({\n            login: login,\n            password: pass,\n            userAvatar: avatar,\n          }),\n          headers: {\n            \"Content-type\": \"application/json\",\n          },\n        }).then((response) => console.log(response.status));\n      }\n      getPassword.classList.remove(\"input-error\");\n      enterPassword.classList.remove(\"error-message--visible\");\n      getLogin.value = \"\";\n      getPassword.value = \"\";\n      getPhoto = \"\";\n    }\n  } else {\n    getLogin.classList.add(\"input-error\");\n    enterLogin.classList.add(\"error-message--visible\");\n    getPassword.classList.add(\"input-error\");\n    enterPassword.classList.add(\"error-message--visible\");\n    uploadAvatar.classList.add(\"error-message--visible\");\n    return;\n  }\n};\n\n\n//# sourceURL=webpack://project/./src/Sending-data.js?");

/***/ }),

/***/ "./src/Sign-In-onclick.js":
/*!********************************!*\
  !*** ./src/Sign-In-onclick.js ***!
  \********************************/
/***/ (() => {

eval("let clickSingIp = document.getElementById('authorization')\nlet modalSingIp = document.getElementById('signIn')\nlet closeModalSingIp = document.getElementById('close-signIn')\nlet getPasswordValue = document.getElementById(\"passValue\");\nlet getLoginValue = document.getElementById(\"loginValue\");\n\nauthorization.onclick = function (event) {\n    modalSingIp.style.display = \"flex\"\n}     \n\ncloseModalSingIp.onclick = function (event) {\n    modalSingIp.style.display = 'none'\n    getPasswordValue.value = ''\n    getLoginValue.value = ''\n}\n\nwindow.onclick = function (event) {\n    if (event.target === modalSingIp)\n    modalSingIp.style.display = 'none'\n}\n\n\n\n\n//# sourceURL=webpack://project/./src/Sign-In-onclick.js?");

/***/ }),

/***/ "./src/Sign-Up-onclick.js":
/*!********************************!*\
  !*** ./src/Sign-Up-onclick.js ***!
  \********************************/
/***/ (() => {

eval("let clickSingUp = document.getElementById(\"registration\");\nlet modalSingUp = document.getElementById(\"modalWindow\");\nlet closeModalSingUp = document.getElementById(\"close\");\nlet getPassword = document.getElementById(\"pass\");\nlet getLogin = document.getElementById(\"login\");\n\nregistration.onclick = function (event) {\n  modalSingUp.style.display = \"flex\";\n};\n\ncloseModalSingUp.onclick = function (event) {\n  modalSingUp.style.display = \"none\";\n  getPassword.value = ''\n  getLogin.value = ''\n\n};\n\nwindow.onclick = function (event) {\n  if (event.target === modalSingUp) modalSingUp.style.display = \"none\";\n};\n\n\n//# sourceURL=webpack://project/./src/Sign-Up-onclick.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Sign_Up_onclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sign-Up-onclick.js */ \"./src/Sign-Up-onclick.js\");\n/* harmony import */ var _Sign_Up_onclick_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Sign_Up_onclick_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Sending_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sending-data.js */ \"./src/Sending-data.js\");\n/* harmony import */ var _Sending_data_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Sending_data_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Sign_In_onclick_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sign-In-onclick.js */ \"./src/Sign-In-onclick.js\");\n/* harmony import */ var _Sign_In_onclick_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Sign_In_onclick_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CheckData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckData.js */ \"./src/CheckData.js\");\n/* harmony import */ var _CheckData_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CheckData_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\ndocument.querySelector(\".container\")\n\n\n//# sourceURL=webpack://project/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;