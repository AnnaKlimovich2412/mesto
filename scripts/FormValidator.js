class FormValidator {
  constructor(validation, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = validation.inputSelector;
    this._submitButtonSelector = validation.submitButtonSelector;
    this._inputErrorClass = validation.inputErrorClass;
    this._inputErrorActive = validation.inputErrorActive;
  }

  enableValidation() {
    const formElement = document.querySelector(this._formSelector);
    //set listeners
    this._setEventListeners(formElement);
  };

  _setEventListeners(formElement) {
    // find all inputs
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));

    // find submit button
    const buttonElement = formElement.querySelector(this._submitButtonSelector);

    inputList.forEach((inputElement) => {
      this._hideInputError(formElement, inputElement);

      inputElement.addEventListener('keyup', () => {
        // check input is valid
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(buttonElement, inputList);
      });
    })
    // add listeners for each input

    // set initial button state
    this._toggleButtonState(buttonElement, inputList);
  }

  _checkInputValidity(formElement, inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(formElement, inputElement);
    } else {
      this._showInputError(formElement, inputElement);
    }
  }

  _toggleButtonState(buttonElement, inputList) {
    // if form valid enable button else disable
    buttonElement.disabled = this._hasInvalidInput(inputList);
  }

  _hasInvalidInput(inputList) {
    return Array.from(inputList).some(inputElement => !inputElement.validity.valid);
  }

  _hideInputError(formElement, inputElement) {
    const errorElements = formElement.querySelector(`#${inputElement.id}-error`);
    errorElements.classList.remove(this._inputErrorClass)
    errorElements.textContent = ''
    inputElement.classList.remove(this._inputErrorActive)
  }

  _showInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._inputErrorActive);
  }
}

export default FormValidator;
