import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import './index.css'
import {initialCards} from '../utils/initial-cards.js'
import {PopupWithImage} from '../components/PopupWithImage'
import {PopupWithForm} from "../components/PopupWithForm"
import {Section} from "../components/Section"
import {UserInfo} from "../components/UserInfo";

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

/*Validation*/
const formNameValidator = new FormValidator(validation, '.popup__form_type_name');
const formPlaceValidator = new FormValidator(validation, '.popup__form_type_place');

/*Functions*/

//set validation on forms
formNameValidator.enableValidation();
formPlaceValidator.enableValidation();

function createNewCard(card) {
  const CardElement = new Card(card, '#place-template', () => {
    popupImage.openPopup(card);
  }).createCard();
  section.addItem(CardElement)
}

/*PopupImage*/

const popupImage = new PopupWithImage('.popup_type_image');
popupImage.setEventListeners();

//create Section
const section = new Section({
    data: initialCards,
    renderer: (item) => {
      createNewCard(item)
    }
  },
  '.elements');

section.renderItems();

/*PopupProfile*/

const userInfo = new UserInfo({name: '.profile__name', profession: '.profile__profession'});

const popupProfile = new PopupWithForm('.popup_type_edit', (evt) => {
  evt.preventDefault();
  let data = popupProfile.getInputValues();
  userInfo.setUserInfo(data);
})

popupProfile.setEventListeners();

buttonOpenPopupProfile.addEventListener("click", () => {
  popupProfile.openPopup();
  userInfo.getUserInfo();
  formNameValidator.resetValidation();
});

/*PopupPlace*/

const popupPlace = new PopupWithForm('.popup_type_place', (evt) => {
  evt.preventDefault();
  const newPlace = popupPlace.getInputValues();
  createNewCard(newPlace);
  popupPlace.closePopup();
});

popupPlace.setEventListeners();

buttonOpenPopupPlace.addEventListener('click', () => {
  popupPlace.openPopup();
  formPlaceValidator.resetValidation();
})



