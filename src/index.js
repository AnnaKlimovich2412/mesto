import Card from './Card.js'
import FormValidator from './FormValidator.js'
import './pages/index.css'
import {initialCards} from './initial-cards.js'
import {PopupWithImage} from './PopupWithImage'
import {PopupWithForm} from "./PopupWithForm"
import {Section} from "./Section"
import {UserInfo} from "./UserInfo";
//page validation

const validation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: '.popup__field_type_error',
  inputErrorActive: 'popup__field-error_visible'
}
/*Const*/

// profile information
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');

/*Popup place*/
const buttonOpenPopupPlace = document.querySelector('.profile__add-button')
const inputPlace = document.querySelector('.popup__field_type_place');
const inputImage = document.querySelector('.popup__field_type_link');

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

const userInfo = new UserInfo({name:'.profile__name',profession:'.profile__profession'});

const popupProfile = new PopupWithForm('.popup_type_edit', (evt)=>{
  evt.preventDefault();
  userInfo.getUserInfo();
})

buttonOpenPopupProfile.addEventListener("click", () => {
  popupProfile.openPopup();
  popupProfile.setEventListeners();
  userInfo.setUserInfo();
  formNameValidator._resetValidation();
});

/*PopupPlace*/

const popupPlace = new PopupWithForm('.popup_type_place', (evt) => {
  evt.preventDefault();
  const newPlace = popupPlace._getInputValues();
  const newCardElement = new Card(newPlace, '#place-template', ()=>{
    const popupImage = new PopupWithImage('.popup_type_image');
    popupImage.openPopup(newPlace);
    popupImage.setEventListeners();
    }).createCard();
  section.addItem(newCardElement);
  popupPlace.closePopup()
});

buttonOpenPopupPlace.addEventListener('click', () => {
  popupPlace.openPopup();
  popupPlace.setEventListeners();
  formPlaceValidator._resetValidation();
})

