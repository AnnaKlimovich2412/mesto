// profile information
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

//popUp
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');

//buttons
const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close-button');

// form fields
const formElement = document.querySelector('.popup__container');
const inputName = formElement.querySelector('.popup__field-name');
const inputProfession = formElement.querySelector('.popup__field_profession');


// event listeners
openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
formElement.addEventListener('submit', formSubmitHandler);



// open dialog window
function openPopup() {
  popup.classList.add('popup_is-opened');
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

// close dialog window
function closePopup() {
  popup.classList.remove('popup_is-opened');
}

// set new value and close dialog
function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;

  closePopup()
}



