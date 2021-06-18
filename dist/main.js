/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto/./pages/index.css?");

/***/ }),

/***/ "./scripts/Card.js":
/*!*************************!*\
  !*** ./scripts/Card.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./scripts/index.js\");\n\r\n\r\nclass Card {\r\n  constructor(data, cardSelector) {\r\n    this._link = data.link;\r\n    this._name = data.name;\r\n    this._cardSelector = cardSelector;\r\n  }\r\n\r\n  _getTemplate(){\r\n    const placeTemplate = document.querySelector(this._cardSelector).content;\r\n    return  placeTemplate.querySelector('.element').cloneNode(true);\r\n  }\r\n\r\n  createCard() {\r\n    this._element = this._getTemplate();\r\n    this._setEventListeners();\r\n\r\n    this._element.querySelector('.element__img').src = this._link;\r\n    this._element.querySelector('.element__img').alt = this._name;\r\n    this._element.querySelector('.element__title').textContent = this._name;\r\n\r\n    return this._element\r\n      }\r\n\r\n  _setEventListeners(){\r\n    this._element.querySelector('.element__like').addEventListener('click', (evt) => {\r\n      this._toggleLike(evt);\r\n    })\r\n    this._element.querySelector('.element__delete').addEventListener('click', () => {\r\n      this._removeElement()\r\n    })\r\n    this._element.querySelector('.element__img').addEventListener('click', () => {\r\n      ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.openImagePopup)(this._link, this._name)\r\n    });\r\n  }\r\n\r\n  _removeElement(){\r\n    this._element.remove();\r\n    this._element = null;\r\n  }\r\n\r\n  _toggleLike(evt) {\r\n    evt.target.classList.toggle('element__like_is-active');\r\n  }\r\n }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\r\n\r\n\r\n\n\n//# sourceURL=webpack://mesto/./scripts/Card.js?");

/***/ }),

/***/ "./scripts/FormValidator.js":
/*!**********************************!*\
  !*** ./scripts/FormValidator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass FormValidator {\r\n  constructor(validation, formSelector) {\r\n    this._formSelector = formSelector;\r\n    this._inputSelector = validation.inputSelector;\r\n    this._submitButtonSelector = validation.submitButtonSelector;\r\n    this._inputErrorClass = validation.inputErrorClass;\r\n    this._inputErrorActive = validation.inputErrorActive;\r\n    this._formElement = document.querySelector(this._formSelector);\r\n    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));\r\n    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);\r\n  }\r\n\r\n  enableValidation() {\r\n    //set listeners\r\n    this._setEventListeners();\r\n  };\r\n\r\n  _setEventListeners() {\r\n    // add listeners for each input\r\n    this._inputList.forEach((inputElement) => {\r\n      this._hideInputError(inputElement);\r\n\r\n      inputElement.addEventListener('keyup', () => {\r\n        // check input is valid\r\n        this._checkInputValidity(inputElement);\r\n        this._toggleButtonState();\r\n      });\r\n    })\r\n\r\n    // set initial button state\r\n    this._toggleButtonState();\r\n  }\r\n\r\n  _checkInputValidity(inputElement) {\r\n    if (inputElement.validity.valid) {\r\n      this._hideInputError(inputElement);\r\n    } else {\r\n      this._showInputError(inputElement);\r\n    }\r\n  }\r\n  //if form valid enable button else disable\r\n  _toggleButtonState() {\r\n    this._buttonElement.disabled = this._hasInvalidInput();\r\n  }\r\n\r\n  _hasInvalidInput() {\r\n    return Array.from(this._inputList).some(inputElement => !inputElement.validity.valid);\r\n  }\r\n\r\n  _hideInputError(inputElement) {\r\n    const errorElements = this._formElement.querySelector(`#${inputElement.id}-error`);\r\n    errorElements.classList.remove(this._inputErrorClass)\r\n    errorElements.textContent = ''\r\n    inputElement.classList.remove(this._inputErrorActive)\r\n  }\r\n\r\n  _showInputError(inputElement) {\r\n    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);\r\n    inputElement.classList.add(this._inputErrorClass);\r\n    errorElement.textContent = inputElement.validationMessage;\r\n    errorElement.classList.add(this._inputErrorActive);\r\n  }\r\n\r\n  _resetValidation() {\r\n    this._inputList.forEach(el => this._hideInputError(el));\r\n    this._toggleButtonState()\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);\r\n\n\n//# sourceURL=webpack://mesto/./scripts/FormValidator.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openImagePopup\": () => (/* binding */ openImagePopup)\n/* harmony export */ });\n/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.js */ \"./scripts/Card.js\");\n/* harmony import */ var _FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormValidator.js */ \"./scripts/FormValidator.js\");\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/index.css */ \"./pages/index.css\");\n\n\n\n//page validation\n\nconst validation = {\n  formSelector: '.popup__form',\n  inputSelector: '.popup__field',\n  submitButtonSelector: '.popup__save-button',\n  inactiveButtonClass: 'popup__save-button_disabled',\n  inputErrorClass: '.popup__field_type_error',\n  inputErrorActive: 'popup__field-error_visible'\n}\n/*Profile*/\n\n// profile information\nconst profileName = document.querySelector('.profile__name');\nconst profileProfession = document.querySelector('.profile__profession');\nconst buttonOpenPopupProfile = document.querySelector('.profile__edit-button');\nconst formProfile = document.querySelector('.popup__form_type_name');\n// popup profile edit\nconst popupProfile = document.querySelector('.popup_type_edit');\nconst buttonClosePopupProfile = popupProfile.querySelector('.popup__close-button');\n// popup profile form fields\nconst inputName = popupProfile.querySelector('.popup__field_type_name');\nconst inputProfession = popupProfile.querySelector('.popup__field_type_profession');\n\n/*Popup place*/\n\n// popup place\nconst popupPlace = document.querySelector('.popup_type_place');\nconst buttonOpenPopupPlace = document.querySelector('.profile__add-button')\nconst buttonClosePopupPlace = popupPlace.querySelector('.popup__close-button');\nconst formPlace = popupPlace.querySelector('.popup__form_type_place');\n// popup place form fields\nconst inputPlace = formPlace.querySelector('.popup__field_type_place');\nconst inputImage = formPlace.querySelector('.popup__field_type_link');\n\n/*Common*/\n\nconst elementsContainer = document.querySelector('.elements');\nconst popups = Array.from(document.querySelectorAll('.popup'));\n\n/*Popup image*/\n\n//popup image\nconst popupImage = document.querySelector('.popup_type_image');\nconst popupImageLink = popupImage.querySelector('.popup__img');\nconst popupImageName = popupImage.querySelector('.popup__label');\nconst buttonClosePopupImage = popupImage.querySelector('.popup__close-button');\n\n/*Validation*/\n\nconst formNameValidator = new _FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.default(validation, '.popup__form_type_name');\nconst formPlaceValidator = new _FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.default(validation,'.popup__form_type_place');\n\n/*Functions*/\n\n//set validation on forms\nformNameValidator.enableValidation();\nformPlaceValidator.enableValidation();\n\n//close any popup\nfunction closePopup(popup) {\n  popup.classList.remove('popup_is-opened');\n  document.removeEventListener('keyup', closeByEsc);\n}\n\n//open any popup\nfunction openPopup(popup) {\n  popup.classList.add('popup_is-opened');\n  document.addEventListener('keyup', closeByEsc);\n}\n\n//submit profile\nconst submitProfile = function () {\n  profileName.textContent = inputName.value;\n  profileProfession.textContent = inputProfession.value;\n  closePopup(popupProfile);\n  formProfile.reset();\n}\n\n//close any popup by esc\nconst closeByEsc = function (evt) {\n  if (evt.key === 'Escape') {\n    const popup = document.querySelector('.popup_is-opened')\n    closePopup(popup);\n  }\n}\n\n//close and reset popup place\nfunction closeAndResetPopup() {\n  closePopup(popupPlace);\n  formPlace.reset();\n}\n\n// add Card and close dialog\nfunction addCard(evt) {\n  evt.preventDefault();\n  const newCardElement = new _Card_js__WEBPACK_IMPORTED_MODULE_0__.default({link: inputImage.value, name: inputPlace.value}, '#place-template').createCard();\n  elementsContainer.prepend(newCardElement);\n  formPlace.reset();\n  closePopup(popupPlace);\n}\n\n// render initial cards\nfunction renderInitialCards() {\n  initialCards.forEach((card) => {\n    const initialCardElement = new _Card_js__WEBPACK_IMPORTED_MODULE_0__.default(card,'#place-template').createCard();\n    elementsContainer.append(initialCardElement);\n  })\n}\n\n//bigger image popup open\nfunction openImagePopup(link, name) {\n  openPopup(popupImage);\n  popupImageLink.src = link;\n  popupImageLink.alt = name;\n  popupImageName.textContent = name;\n}\n\n/*Listeners*/\n\nbuttonOpenPopupProfile.addEventListener(\"click\", () => {\n  openPopup(popupProfile);\n  inputName.value = profileName.textContent;\n  inputProfession.value = profileProfession.textContent;\n  formNameValidator._resetValidation();\n  });\n\nbuttonClosePopupProfile.addEventListener('click', () => {\n  closePopup(popupProfile);\n  })\n\nformProfile.addEventListener('submit', (evt) => {\n  evt.preventDefault();\n  submitProfile();\n});\n\nbuttonOpenPopupPlace.addEventListener(\"click\", () => {\n  openPopup(popupPlace);\n  formPlace.reset();\n  formPlaceValidator._resetValidation();\n  });\n\nbuttonClosePopupPlace.addEventListener('click', () => {\n  closeAndResetPopup();\n})\n\nformPlace.addEventListener('submit', addCard);\n\nbuttonClosePopupImage.addEventListener('click', () => {\n  closePopup(popupImage);\n})\n\n//popup close by click on overlay\npopups.forEach((popup) => {\n  popup.addEventListener('click', (evt) => {\n    if(evt.target === popup) {\n      closePopup(popup);\n    }\n  })\n})\n\n/*Initial places grid*/\n\nrenderInitialCards();\n\n\n\n\n//# sourceURL=webpack://mesto/./scripts/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;