
class FormValidator {
  constructor(validation, formSelector) {
   this._formSelector = formSelector;
   this._inputSelector = validation.inputSelector;
   this._submitButtonSelector = validation.submitButtonSelector;
   this._inputErrorClass = validation.inputErrorClass;
   this._inputErrorActive = validation.inputErrorActive;
  }

  _setEventListeners () {
    const formElement = document.querySelector(this._formSelector)
    // find all inputs
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));

    // find submit button
    const buttonElement = formElement.querySelector(this._submitButtonSelector);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        // check input is valid
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(buttonElement, inputList);
      });
    })
    // add listeners for each input

    // set initial button state
    this._toggleButtonState(buttonElement, inputList);
  }

  _checkInputValidity (formElement, inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(formElement, inputElement);
    } else {
      this._showInputError(formElement, inputElement);
    }
  }

 _toggleButtonState (buttonElement, inputList) {
   // if form valid enable button else disable
   if (this._hasInvalidInput(inputList)) {
     // disable
     buttonElement.disabled = true;
   } else {
     // enable
     buttonElement.disabled = false;
   }
 }

 _hideInputError (formElement, inputElement) {
   const errorElements = formElement.querySelectorAll(`#${inputElement.id}-error`);
   errorElements.forEach(el => {
     el.classList.remove(this._inputErrorClass)
     el.textContent = ''
   })
   const inputElements = formElement.querySelectorAll(`#${inputElement.id}`);
   inputElements.forEach(el => {
     el.classList.remove(this._inputErrorActive)
   })
 }

_showInputError (formElement, inputElement) {
   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
   inputElement.classList.add(this._inputErrorClass);
   errorElement.textContent = inputElement.validationMessage;
   errorElement.classList.add(this._inputErrorActive);
}

_hasInvalidInput (inputList) {
    return Array.from(inputList).some(inputElement => !inputElement.validity.valid);
  }

enableValidation () {
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    //set listeners
    formList.forEach((formElement) => {
      setEventListeners(formElement);
    })
  };
}

export default FormValidator;
