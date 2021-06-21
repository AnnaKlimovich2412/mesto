import Card from './Card.js'
import FormValidator from './FormValidator.js'
import '../pages/index.css'
import {initialCards} from './initial-cards.js'
import {PopupWithImage} from './PopupWithImage'
import {PopupWithForm} from "./PopupWithForm"
import {Section} from "./Section"
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
const inputName = document.querySelector('.popup__field_type_name');
const inputProfession = document.querySelector('.popup__field_type_profession');

/*Popup place*/

const buttonOpenPopupPlace = document.querySelector('.profile__add-button')
const inputPlace = document.querySelector('.popup__field_type_place');
const inputImage = document.querySelector('.popup__field_type_link');

/*Common*/

//const elementsContainer = document.querySelector('.elements');

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

//create Section
const section = new Section({
  data:initialCards,
  renderer:(item) => {
      const initialCardElement = new Card(item,'#place-template', () => {
      const popupImage = new PopupWithImage('.popup_type_image');
      popupImage.openPopup(item);
      popupImage.setEventListeners();
    }).createCard();
      section.addItem(initialCardElement)
  }
},
  '.elements');

section.renderItems();

/*PopupProfile*/

const popupProfile = new PopupWithForm('.popup_type_edit', (evt)=>{
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
})

buttonOpenPopupProfile.addEventListener("click", () => {
  popupProfile.openPopup();
  popupProfile.setEventListeners();
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
  formNameValidator._resetValidation();
});

/*PopupPlace*/

const popupPlace = new PopupWithForm('.popup_type_place', (evt) => {
  evt.preventDefault();
  let newPlace = {};
  if (inputImage.value && inputPlace.value) {
    newPlace = {link: inputImage.value, name: inputPlace.value}
  }
  const newCardElement = new Card(newPlace, '#place-template', ()=>{
    const popupImage = new PopupWithImage('.popup_type_image');
    popupImage.openPopup(newPlace);
    popupImage.setEventListeners();
    console.log(inputImage.value);
    }).createCard();
  section.addItem(newCardElement);
  popupPlace.closePopup()
});

buttonOpenPopupPlace.addEventListener('click', () => {
  popupPlace.openPopup();
  popupPlace.setEventListeners();
  formPlaceValidator._resetValidation();
})

