/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Api": () => (/* binding */ Api)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(url, token) {
    _classCallCheck(this, Api);

    this._url = url;
    this._token = token;
  }

  _createClass(Api, [{
    key: "_check",
    value: function _check(res) {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status, " ").concat(res.statusText));
      }
    }
  }, {
    key: "getCards",
    value: function getCards() {
      return fetch("".concat(this._url, "cards"), {
        headers: {
          'Content-Type': 'application/json',
          'authorization': this._token
        }
      }).then(this._check);
    }
  }, {
    key: "getProfileInfo",
    value: function getProfileInfo() {
      return fetch("".concat(this._url, "users/me"), {
        headers: {
          'Content-Type': 'application/json',
          'authorization': this._token
        }
      }).then(this._check);
    }
  }, {
    key: "setProfileInfo",
    value: function setProfileInfo(data) {
      return fetch("".concat(this._url, "users/me"), {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'authorization': this._token
        },
        body: JSON.stringify(data)
      }).then(this._check);
    }
  }, {
    key: "postCard",
    value: function postCard(_ref) {
      var name = _ref.name,
          link = _ref.link;
      return fetch("".concat(this._url, "cards"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': this._token
        },
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(this._check);
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(card) {
      var cardID = card._id;
      return fetch("".concat(this._url, "cards/").concat(cardID), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'authorization': this._token
        }
      }).then(this._check);
    }
  }, {
    key: "changeAvatar",
    value: function changeAvatar(avatar) {
      return fetch("".concat(this._url, "users/me/avatar"), {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'authorization': this._token
        },
        body: JSON.stringify({
          avatar: avatar
        })
      }).then(this._check);
    }
  }, {
    key: "putLike",
    value: function putLike(card) {
      var cardID = card._cardId;
      return fetch("".concat(this._url, "cards/likes/").concat(cardID), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authorization': this._token
        }
      }).then(this._check);
    }
  }, {
    key: "deleteLike",
    value: function deleteLike(card) {
      var cardID = card._cardId;
      return fetch("".concat(this._url, "cards/likes/").concat(cardID), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'authorization': this._token
        }
      }).then(this._check);
    }
  }]);

  return Api;
}();

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Card = /*#__PURE__*/function () {
  function Card(data, cardSelector, _ref) {
    var handleCardClick = _ref.handleCardClick,
        handleDeleteClick = _ref.handleDeleteClick,
        handleLikeClick = _ref.handleLikeClick,
        profileId = _ref.profileId;

    _classCallCheck(this, Card);

    _defineProperty(this, "_likeElement", void 0);

    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._cardId = data._id;
    this._profileId = profileId;
    this._cardOwnerId = data.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var placeTemplate = document.querySelector(this._cardSelector).content;
      return placeTemplate.querySelector('.element').cloneNode(true);
    }
  }, {
    key: "createCard",
    value: function createCard() {
      var _this = this;

      this._element = this._getTemplate();
      this._likeElement = this._element.querySelector('.element__like');
      this._imgElement = this._element.querySelector('.element__img');
      this._counterElement = this._element.querySelector('.element__like-counter');

      this._setEventListeners();

      this._imgElement.src = this._link;
      this._imgElement.alt = this._element.querySelector('.element__title').textContent = this._name;
      this._likes ? this._counterElement.textContent = this._likes.length : this._counterElement.textContent = 0;

      if (this._likes.some(function (like) {
        return like._id === _this._profileId;
      })) {
        this._likeElement.classList.add('element__like_is-active');
      }

      if (this._cardOwnerId !== this._profileId) {
        this._element.querySelector('.element__delete').remove();
      }

      return this._element;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      this._likeElement.addEventListener('click', this._likeCard.bind(this));

      this._element.querySelector('.element__delete').addEventListener('click', this._handleDeleteClick);

      this._imgElement.addEventListener('click', this._handleCardClick);
    }
  }, {
    key: "_likeCard",
    value: function _likeCard() {
      this._handleLikeClick();

      this._likeElement.classList.toggle('element__like_is-active');
    }
  }, {
    key: "isLiked",
    value: function isLiked() {
      if (this._likeElement.classList.contains('element__like_is-active')) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "updateLike",
    value: function updateLike(res) {
      this._element.querySelector('.element__like-counter').textContent = res.likes.length;
    }
  }]);

  return Card;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(validation, formSelector) {
    _classCallCheck(this, FormValidator);

    this._formSelector = formSelector;
    this._inputSelector = validation.inputSelector;
    this._submitButtonSelector = validation.submitButtonSelector;
    this._inputErrorClass = validation.inputErrorClass;
    this._inputErrorActive = validation.inputErrorActive;
    this._formElement = document.querySelector(this._formSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  _createClass(FormValidator, [{
    key: "enableValidation",
    value: function enableValidation() {
      //set listeners
      this._setEventListeners();
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      // add listeners for each input
      this._inputList.forEach(function (inputElement) {
        _this._hideInputError(inputElement);

        inputElement.addEventListener('input', function () {
          // check input is valid
          _this._checkInputValidity(inputElement);

          _this._toggleButtonState();
        });
      }); // set initialCards button state


      this._toggleButtonState();
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement) {
      if (inputElement.validity.valid) {
        this._hideInputError(inputElement);
      } else {
        this._showInputError(inputElement);
      }
    } //if form valid enable button else disable

  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      this._buttonElement.disabled = this._hasInvalidInput();
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return Array.from(this._inputList).some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(inputElement) {
      var errorElements = this._formElement.querySelector("#".concat(inputElement.id, "-error"));

      errorElements.classList.remove(this._inputErrorClass);
      errorElements.textContent = '';
      inputElement.classList.remove(this._inputErrorActive);
    }
  }, {
    key: "_showInputError",
    value: function _showInputError(inputElement) {
      var errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error"));

      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._inputErrorActive);
    }
  }, {
    key: "resetValidation",
    value: function resetValidation() {
      var _this2 = this;

      this._inputList.forEach(function (el) {
        return _this2._hideInputError(el);
      });

      this._toggleButtonState();
    }
  }]);

  return FormValidator;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popup": () => (/* binding */ Popup)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._buttonClosePopup = this._popup.querySelector('.popup__close-button');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _createClass(Popup, [{
    key: "closePopup",
    value: function closePopup() {
      this._popup.classList.remove('popup_is-opened');

      document.removeEventListener('keyup', this._handleEscClose);
    }
  }, {
    key: "openPopup",
    value: function openPopup() {
      this._popup.classList.add('popup_is-opened');

      document.addEventListener('keyup', this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.closePopup();
      }
    }
  }, {
    key: "_closeByClickOnOverlay",
    value: function _closeByClickOnOverlay(evt) {
      if (evt.target === this._popup) {
        this.closePopup();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      this._buttonClosePopup.addEventListener('click', this.closePopup.bind(this));

      this._popup.addEventListener('mousedown', this._closeByClickOnOverlay.bind(this));
    }
  }]);

  return Popup;
}();

/***/ }),

/***/ "./src/components/PopupWithDeleteConfirmation.js":
/*!*******************************************************!*\
  !*** ./src/components/PopupWithDeleteConfirmation.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithDeleteConfirmation": () => (/* binding */ PopupWithDeleteConfirmation)
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var PopupWithDeleteConfirmation = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithDeleteConfirmation, _Popup);

  var _super = _createSuper(PopupWithDeleteConfirmation);

  function PopupWithDeleteConfirmation(popupSelector, submitCallback) {
    var _this;

    _classCallCheck(this, PopupWithDeleteConfirmation);

    _this = _super.call(this, popupSelector);
    _this._popupForm = _this._popup.querySelector('.popup__form');
    _this._submitCallback = submitCallback;
    return _this;
  }

  _createClass(PopupWithDeleteConfirmation, [{
    key: "openPopup",
    value: function openPopup(card, domElement) {
      _get(_getPrototypeOf(PopupWithDeleteConfirmation.prototype), "openPopup", this).call(this);

      this._card = card;
      this._element = domElement;
    }
  }, {
    key: "deleteDomElement",
    value: function deleteDomElement() {
      this._element.remove();
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupWithDeleteConfirmation.prototype), "setEventListeners", this).call(this);

      this._popupForm.addEventListener('submit', function (evt) {
        evt.preventDefault();

        _this2._submitCallback(_this2._card);
      });
    }
  }]);

  return PopupWithDeleteConfirmation;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__.Popup);

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithForm": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(popupSelector, submitFormCallback) {
    var _this;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._submitCallback = submitFormCallback;
    _this._popupForm = _this._popup.querySelector('.popup__form');
    _this._popupInputs = Array.from(_this._popupForm.querySelectorAll('.popup__field'));
    _this.popupButton = _this._popup.querySelector('.popup__save-button');
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;

      this._formValues = {};

      this._popupInputs.forEach(function (input) {
        return _this2._formValues[input.name] = input.value;
      });

      return this._formValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);

      this._popupForm.addEventListener('submit', function (evt) {
        evt.preventDefault();

        _this3._submitCallback(_this3._getInputValues());
      });
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "closePopup", this).call(this);

      this._popupForm.reset();
    }
  }, {
    key: "renderLoading",
    value: function renderLoading(loading) {
      if (loading) {
        this.popupButton.textContent = 'Сохранение...';
      } else {
        this.popupButton.textContent = 'Сохранить';
      }
    }
  }]);

  return PopupWithForm;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__.Popup);

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithImage": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);
    _this._popupImageLink = _this._popup.querySelector('.popup__img');
    _this._popupImageName = _this._popup.querySelector('.popup__label');
    return _this;
  }

  _createClass(PopupWithImage, [{
    key: "openPopup",
    value: function openPopup(data) {
      _get(_getPrototypeOf(PopupWithImage.prototype), "openPopup", this).call(this);

      this._popupImageLink.src = data.link;
      this._popupImageLink.alt = this._popupImageName.textContent = data.name;
    }
  }]);

  return PopupWithImage;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__.Popup);

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": () => (/* binding */ Section)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems(cards) {
      var _this = this;

      cards.forEach(function (card) {
        return _this._renderer(card);
      });
    }
  }, {
    key: "clearContainer",
    value: function clearContainer() {
      this._container.innerHTML = '';
    }
  }, {
    key: "addItem",
    value: function addItem(element, method) {
      this._container[method](element);
    }
  }]);

  return Section;
}();

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfo": () => (/* binding */ UserInfo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var name = _ref.name,
        about = _ref.about,
        avatar = _ref.avatar;

    _classCallCheck(this, UserInfo);

    this._profileName = name;
    this._profileAbout = about;
    this._profileAvatar = avatar;
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      this._data = {
        name: this._profileName.textContent,
        about: this._profileAbout.textContent
      };
      return this._data;
    }
  }, {
    key: "getUserID",
    value: function getUserID() {
      return this._id;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(data) {
      this._profileName.textContent = data.name;
      this._profileAbout.textContent = data.about;
      this._profileAvatar.src = data.avatar;
      this._id = data._id;
    }
  }]);

  return UserInfo;
}();

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validation": () => (/* binding */ validation),
/* harmony export */   "buttonOpenPopupProfile": () => (/* binding */ buttonOpenPopupProfile),
/* harmony export */   "buttonOpenPopupPlace": () => (/* binding */ buttonOpenPopupPlace),
/* harmony export */   "buttonOpenPopupAvatar": () => (/* binding */ buttonOpenPopupAvatar),
/* harmony export */   "profileName": () => (/* binding */ profileName),
/* harmony export */   "profileProfession": () => (/* binding */ profileProfession),
/* harmony export */   "profileAvatar": () => (/* binding */ profileAvatar),
/* harmony export */   "inputName": () => (/* binding */ inputName),
/* harmony export */   "inputProfession": () => (/* binding */ inputProfession)
/* harmony export */ });
//page validation
var validation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: '.popup__field_type_error',
  inputErrorActive: 'popup__field-error_visible'
};
/*Const*/

var buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
var buttonOpenPopupPlace = document.querySelector('.profile__add-button');
var buttonOpenPopupAvatar = document.querySelector('.profile__avatar-edit');
var profileName = document.querySelector('.profile__name');
var profileProfession = document.querySelector('.profile__profession');
var profileAvatar = document.querySelector('.profile__avatar');
var inputName = document.querySelector('.popup__field_type_name');
var inputProfession = document.querySelector('.popup__field_type_profession');

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_PopupWithImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PopupWithImage */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithForm */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithDeleteConfirmation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithDeleteConfirmation */ "./src/components/PopupWithDeleteConfirmation.js");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Section */ "./src/components/Section.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserInfo */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Api */ "./src/components/Api.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











/*functions*/

function createNewCard(data) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_0__.default(data, '#place-template', {
    handleCardClick: function handleCardClick() {
      return popupImage.openPopup(data);
    },
    handleDeleteClick: function handleDeleteClick() {
      return popupDeleteConfirm.openPopup(data, card._element);
    },
    handleLikeClick: function handleLikeClick() {
      if (card.isLiked()) {
        api.deleteLike(card).then(function (res) {
          card.updateLike(res);
        }).catch(function (err) {
          console.log(err);
        });
      } else {
        api.putLike(card).then(function (res) {
          card.updateLike(res);
        }).catch(function (err) {
          console.log(err);
        });
      }
    },
    profileId: userInfo.getUserID()
  });
  var cardElement = card.createCard();
  return cardElement;
}
/*create classes*/


var section = new _components_Section__WEBPACK_IMPORTED_MODULE_6__.Section({
  renderer: function renderer(card) {
    var cardElement = createNewCard(card);
    section.addItem(cardElement, 'append');
  }
}, '.elements');
var api = new _components_Api__WEBPACK_IMPORTED_MODULE_8__.Api('https://mesto.nomoreparties.co/v1/cohort-25/', 'da853ede-d03b-4f91-b21b-ffe003cd021a');

var getCardsAndUser = function getCardsAndUser() {
  Promise.all([api.getProfileInfo(), api.getCards()]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        user = _ref2[0],
        cards = _ref2[1];

    userInfo.setUserInfo(user);
    section.clearContainer();
    section.renderItems(cards);
  }).catch(function (err) {
    return console.log(err);
  });
};

getCardsAndUser();
var formNameValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.default(_utils_constants__WEBPACK_IMPORTED_MODULE_9__.validation, '.popup__form_type_name');
var formPlaceValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.default(_utils_constants__WEBPACK_IMPORTED_MODULE_9__.validation, '.popup__form_type_place');
var formAvatarValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.default(_utils_constants__WEBPACK_IMPORTED_MODULE_9__.validation, '.popup__form_type_avatar');
var userInfo = new _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__.UserInfo({
  name: _utils_constants__WEBPACK_IMPORTED_MODULE_9__.profileName,
  about: _utils_constants__WEBPACK_IMPORTED_MODULE_9__.profileProfession,
  avatar: _utils_constants__WEBPACK_IMPORTED_MODULE_9__.profileAvatar
});
var popupProfile = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_4__.PopupWithForm('.popup_type_edit', function (data) {
  popupProfile.renderLoading(true);
  api.setProfileInfo(data).then(function (res) {
    userInfo.setUserInfo(res);
    popupProfile.closePopup();
  }).catch(function (err) {
    return console.log(err);
  }).finally(function () {
    popupProfile.renderLoading(false);
  });
});
var popupPlace = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_4__.PopupWithForm('.popup_type_place', function (data) {
  popupPlace.renderLoading(true);
  api.postCard({
    name: data.name,
    link: data.link
  }).then(function (res) {
    var card = createNewCard(res);
    section.addItem(card, 'prepend');
    popupPlace.closePopup();
  }).catch(function (err) {
    return console.log(err);
  }).finally(function () {
    popupPlace.renderLoading(false);
  });
});
var popupImage = new _components_PopupWithImage__WEBPACK_IMPORTED_MODULE_3__.PopupWithImage('.popup_type_image');
var popupDeleteConfirm = new _components_PopupWithDeleteConfirmation__WEBPACK_IMPORTED_MODULE_5__.PopupWithDeleteConfirmation('.popup_type_confirm', function (data) {
  api.deleteCard(data).then(function (res) {
    if (res.message === 'Пост удалён') {
      popupDeleteConfirm.deleteDomElement();
      popupDeleteConfirm.closePopup();
    }
  }).catch(function (err) {
    return console.log(err);
  });
});
var popupAvatar = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_4__.PopupWithForm('.popup_type_avatar', function (data) {
  popupAvatar.renderLoading(true);
  api.changeAvatar(data.avatar).then(function (res) {
    userInfo.setUserInfo(res);
    popupAvatar.closePopup();
  }).catch(function (err) {
    return console.log(err);
  }).finally(function () {
    popupAvatar.renderLoading(false);
  });
});
popupImage.setEventListeners();
popupProfile.setEventListeners();
popupPlace.setEventListeners();
popupDeleteConfirm.setEventListeners();
popupAvatar.setEventListeners();
formNameValidator.enableValidation();
formPlaceValidator.enableValidation();
formAvatarValidator.enableValidation();
_utils_constants__WEBPACK_IMPORTED_MODULE_9__.buttonOpenPopupProfile.addEventListener("click", function () {
  var currentUser = userInfo.getUserInfo();
  _utils_constants__WEBPACK_IMPORTED_MODULE_9__.inputName.value = currentUser.name;
  _utils_constants__WEBPACK_IMPORTED_MODULE_9__.inputProfession.value = currentUser.about;
  formNameValidator.resetValidation();
  popupProfile.openPopup();
});
_utils_constants__WEBPACK_IMPORTED_MODULE_9__.buttonOpenPopupAvatar.addEventListener('click', function () {
  popupAvatar.openPopup();
});
_utils_constants__WEBPACK_IMPORTED_MODULE_9__.buttonOpenPopupPlace.addEventListener('click', function () {
  formPlaceValidator.resetValidation();
  popupPlace.openPopup();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map