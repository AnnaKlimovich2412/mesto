const hideInputError = (formElement, inputElement, config) => {
  // hide error
  // find error element
  const { inputErrorClass, inputErrorActive } = config;

  const errorElements = formElement.querySelectorAll(`#${inputElement.id}-error`);
  errorElements.forEach(el => {
    el.classList.remove(inputErrorClass)
    el.textContent = ''
  })
  const inputElements = formElement.querySelectorAll(`#${inputElement.id}`);
  inputElements.forEach(el => {
    el.classList.remove(inputErrorActive)
  })
  // inputElement.classList.remove(inputErrorClass);
  // errorElement.classList.remove(inputErrorActive);
  // errorElement.textContent = '';
}


const showInputError = (formElement, inputElement, config) => {
  // show error
  const { inputErrorClass, inputErrorActive } = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(inputErrorActive);
}

const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid);
}

const toggleButtonState = (buttonElement, inputList) => {
  // if form valid enable button else disable
  if (hasInvalidInput(inputList)) {
    // disable
    buttonElement.disabled = true;
  } else {
    // enable
    buttonElement.disabled = false;
  }
}

const checkInputValidity = (formElement, inputElement, config) => {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config);
  } else {
    showInputError(formElement, inputElement, config);
  }
}

const setEventListeners = (formElement, config) => {
    const { inputSelector, submitButtonSelector, ...restConfig } = config;

  // find all inputs
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));

  // find submit button
  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      // check input is valid
      checkInputValidity(formElement, inputElement, restConfig);
      toggleButtonState(buttonElement, inputList, restConfig);
    });
  })
  // add listeners for each input

  // set initial button state
  toggleButtonState(buttonElement, inputList);
}

const enableValidation = (obj) => {
  //find all forms
  const {formSelector, ...rest} = obj
  const formList = Array.from(document.querySelectorAll(formSelector));
    //set listeners
  formList.forEach((formElement) => {
    setEventListeners(formElement, rest);
  })
};
