import Card from './Card.js'
import FormValidator from './FormValidator.js'

//page validation

const validation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: '.popup__field_type_error',
  inputErrorActive: 'popup__field-error_visible'
}

const FormNameValidator = new FormValidator(validation,'popup__form_type_name');
FormNameValidator.enableValidation();
const FormPlaceValidator = new FormValidator(validation,'popup__form_type_place');
FormPlaceValidator.enableValidation();

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keyup', closeByEsc);
}

function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keyup', closeByEsc);
}

/*Edit Profile*/

// profile information
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const openEditProfileButton = document.querySelector('.profile__edit-button');
const formEditProfile = document.querySelector('.popup__form_type_name');

// popup-edit
const popupProfileEdit = document.querySelector('.popup_type_edit');
const closeEditProfileButton = popupProfileEdit.querySelector('.popup__close-button');

// popup form fields
const inputName = popupProfileEdit.querySelector('.popup__field_type_name');
const inputProfession = popupProfileEdit.querySelector('.popup__field_type_profession');

// listeners
openEditProfileButton.addEventListener("click", () => {
  openPopup(popupProfileEdit);
  FormNameValidator._hideInputError(formEditProfile, inputName, validation);
  FormNameValidator._hideInputError(formEditProfile, inputProfession, validation);
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
  });

closeEditProfileButton.addEventListener('click', () => {
  closePopup(popupProfileEdit);
  })

formEditProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();
  submitProfile();
});

//submit profile
const submitProfile = function () {
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  closePopup(popupProfileEdit);
  formEditProfile.reset();
}

//close by esc
const closeByEsc = function (evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_is-opened')
    closePopup(popup);
  }
}

/*New Place*/

//popUp
const popupPlace = document.querySelector('.popup_type_place');
const openPopupPlaceButton = document.querySelector('.profile__add-button')
const closePopupPlaceButton = popupPlace.querySelector('.popup__close-button');
const formPlace = popupPlace.querySelector('.popup__form_type_place');
const submitFormButton = popupPlace.querySelector('.popup__save-button');
const allPopupFields = popupPlace.querySelectorAll('.popup__field');

// popup form fields
const inputPlace = formPlace.querySelector('.popup__field_type_place');
const inputImage = formPlace.querySelector('.popup__field_type_link');

// listeners
openPopupPlaceButton.addEventListener("click", () => {
  openPopup(popupPlace);
  FormPlaceValidator._hideInputError(formPlace, inputPlace, validation);
  FormPlaceValidator._hideInputError(formPlace, inputImage, validation);
  FormPlaceValidator._toggleButtonState(submitFormButton,allPopupFields);
  formPlace.reset();
});

function closeAndResetPopUp() {
  closePopup(popupPlace);
  formPlace.reset();
}

closePopupPlaceButton.addEventListener('click', () => {
  closeAndResetPopUp();
})

formPlace.addEventListener('submit', addCard);

// add Card and close dialog

function addCard(evt) {
  evt.preventDefault();
  const newCard = new Card({link: inputImage.value, name: inputPlace.value}, '.place-template');
  const newCardElement = newCard.createCard();
  elementsContainer.prepend(newCardElement);
  formPlace.reset();
  closePopup(popupPlace);
 }

/*Initial places grid*/

//elements
const elementsContainer = document.querySelector('.elements');

/* render initial cards */
function renderInitialCards() {
  initialCards.forEach((card) => {
    const initialCard = new Card(card,'.place-template');
    const initialCardElement = initialCard.createCard();
    elementsContainer.append(initialCardElement);
  })
}

renderInitialCards();

//popup image
const popupImage = document.querySelector('.popup_type_image');
const popupImageLink = popupImage.querySelector('.popup__img');
const popupImageName = popupImage.querySelector('.popup__label');
const popupImageCloseBtn = popupImage.querySelector('.popup__close-button');

//popup open
function openImagePopup(link, name) {
  openPopup(popupImage);
  popupImageLink.src = link;
  popupImageLink.alt = name;
  popupImageName.textContent = name;
}
//popup close
popupImageCloseBtn.addEventListener('click', () => {
  closePopup(popupImage);
})

//popup close by click on overlay
const popups = Array.from(document.querySelectorAll('.popup'));

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if(evt.target === popup) {
      closePopup(popup);
    }
  })
})

export {openImagePopup};
