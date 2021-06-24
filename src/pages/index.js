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

const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupPlace = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const inputName = document.querySelector('.popup__field_type_name');
const inputProfession = document.querySelector('.popup__field_type_profession');


const formNameValidator = new FormValidator(validation, '.popup__form_type_name');
const formPlaceValidator = new FormValidator(validation, '.popup__form_type_place');

const popupImage = new PopupWithImage('.popup_type_image');
const userInfo = new UserInfo({name: profileName, profession: profileProfession});

const createNewCard = (card) => {
  const CardElement = new Card(card, '#place-template', () => {
    popupImage.openPopup(card);
  }).createCard();
  section.addItem(CardElement)
}

const section = new Section({
    data: initialCards,
    renderer: (item) => {
      createNewCard(item)
    }
  },
  '.elements');

const popupProfile = new PopupWithForm('.popup_type_edit', (data) => {
  userInfo.setUserInfo(data);
  popupProfile.closePopup();
})

const popupPlace = new PopupWithForm('.popup_type_place', (data) => {
  createNewCard(data);
});

popupImage.setEventListeners();
popupProfile.setEventListeners();
popupPlace.setEventListeners();
formNameValidator.enableValidation();
formPlaceValidator.enableValidation();

buttonOpenPopupProfile.addEventListener("click", () => {
  popupProfile.openPopup();
  const currentUser = userInfo.getUserInfo();
  inputName.value = currentUser.name;
  inputProfession.value = currentUser.profession;
  formNameValidator.resetValidation();
});

buttonOpenPopupPlace.addEventListener('click', () => {
  popupPlace.openPopup();
  formPlaceValidator.resetValidation();
})

section.renderItems();






