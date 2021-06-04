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
/*Profile*/

// profile information
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const formProfile = document.querySelector('.popup__form_type_name');
// popup profile edit
const popupProfile = document.querySelector('.popup_type_edit');
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close-button');
// popup profile form fields
const inputName = popupProfile.querySelector('.popup__field_type_name');
const inputProfession = popupProfile.querySelector('.popup__field_type_profession');

/*Popup place*/

// popup place
const popupPlace = document.querySelector('.popup_type_place');
const buttonOpenPopupPlace = document.querySelector('.profile__add-button')
const buttonClosePopupPlace = popupPlace.querySelector('.popup__close-button');
const formPlace = popupPlace.querySelector('.popup__form_type_place');
// popup place form fields
const inputPlace = formPlace.querySelector('.popup__field_type_place');
const inputImage = formPlace.querySelector('.popup__field_type_link');

/*Common*/

const elementsContainer = document.querySelector('.elements');
const popups = Array.from(document.querySelectorAll('.popup'));

/*Popup image*/

//popup image
const popupImage = document.querySelector('.popup_type_image');
const popupImageLink = popupImage.querySelector('.popup__img');
const popupImageName = popupImage.querySelector('.popup__label');
const buttonClosePopupImage = popupImage.querySelector('.popup__close-button');

/*Validation*/

const formNameValidator = new FormValidator(validation, '.popup__form_type_name');
const formPlaceValidator = new FormValidator(validation,'.popup__form_type_place');

/*Functions*/

//set validation on forms
formNameValidator.enableValidation();
formPlaceValidator.enableValidation();

//close any popup
function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keyup', closeByEsc);
}

//open any popup
function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keyup', closeByEsc);
}

//submit profile
const submitProfile = function () {
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  closePopup(popupProfile);
  formProfile.reset();
}

//close any popup by esc
const closeByEsc = function (evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_is-opened')
    closePopup(popup);
  }
}

//close and reset popup place
function closeAndResetPopup() {
  closePopup(popupPlace);
  formPlace.reset();
}

// add Card and close dialog
function addCard(evt) {
  evt.preventDefault();
  const newCardElement = new Card({link: inputImage.value, name: inputPlace.value}, '#place-template').createCard();
  elementsContainer.prepend(newCardElement);
  formPlace.reset();
  closePopup(popupPlace);
}

// render initial cards
function renderInitialCards() {
  initialCards.forEach((card) => {
    const initialCardElement = new Card(card,'#place-template').createCard();
    elementsContainer.append(initialCardElement);
  })
}

//bigger image popup open
function openImagePopup(link, name) {
  openPopup(popupImage);
  popupImageLink.src = link;
  popupImageLink.alt = name;
  popupImageName.textContent = name;
}

/*Listeners*/

buttonOpenPopupProfile.addEventListener("click", () => {
  openPopup(popupProfile);
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
  formNameValidator._resetValidation();
  });

buttonClosePopupProfile.addEventListener('click', () => {
  closePopup(popupProfile);
  })

formProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();
  submitProfile();
});

buttonOpenPopupPlace.addEventListener("click", () => {
  openPopup(popupPlace);
  formPlace.reset();
  formPlaceValidator._resetValidation();
  });

buttonClosePopupPlace.addEventListener('click', () => {
  closeAndResetPopup();
})

formPlace.addEventListener('submit', addCard);

buttonClosePopupImage.addEventListener('click', () => {
  closePopup(popupImage);
})

//popup close by click on overlay
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if(evt.target === popup) {
      closePopup(popup);
    }
  })
})

/*Initial places grid*/

renderInitialCards();

export {openImagePopup};
