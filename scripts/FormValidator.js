class FormValidator {
  constructor(validation, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = validation.inputSelector;
    this._submitButtonSelector = validation.submitButtonSelector;
    this._inputErrorClass = validation.inputErrorClass;
    this._inputErrorActive = validation.inputErrorActive;
    this._formElement = document.querySelector(this._formSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  enableValidation() {
    //set listeners
    this._setEventListeners();
  };

  _setEventListeners() {
    // add listeners for each input
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);

      inputElement.addEventListener('keyup', () => {
        // check input is valid
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    })

    // set initialCards button state
    this._toggleButtonState();
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
  }
  //if form valid enable button else disable
  _toggleButtonState() {
    this._buttonElement.disabled = this._hasInvalidInput();
  }

  _hasInvalidInput() {
    return Array.from(this._inputList).some(inputElement => !inputElement.validity.valid);
  }

  _hideInputError(inputElement) {
    const errorElements = this._formElement.querySelector(`#${inputElement.id}-error`);
    errorElements.classList.remove(this._inputErrorClass)
    errorElements.textContent = ''
    inputElement.classList.remove(this._inputErrorActive)
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._inputErrorActive);
  }

  _resetValidation() {
    this._inputList.forEach(el => this._hideInputError(el));
    this._toggleButtonState()
  }
}

export default FormValidator;
