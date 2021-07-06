import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import './index.css'
//import {initialCards} from '../utils/initial-cards.js'
import {PopupWithImage} from '../components/PopupWithImage'
import {PopupWithForm} from "../components/PopupWithForm"
import {Section} from "../components/Section"
import {UserInfo} from "../components/UserInfo";
import {Api} from "../components/Api";

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

const options = {
  url:'https://mesto.nomoreparties.co/v1/cohort-25/cards/',
  headers: {
    'Content-Type' : 'application/json',
    'authorization':'da853ede-d03b-4f91-b21b-ffe003cd021a'
  }
}

const profileInfo = {
  url:'https://nomoreparties.co/v1/cohort-25/users/me ',
  headers: {
    'Content-Type' : 'application/json',
    'authorization':'da853ede-d03b-4f91-b21b-ffe003cd021a'
  }
}

const newProfileInfo = {
  url:'https://nomoreparties.co/v1/cohort-25/users/me ',
  method:'PATCH',
   headers: {
    'Content-Type' : 'application/json',
    'authorization':'da853ede-d03b-4f91-b21b-ffe003cd021a'
  }
  }

const newCard = {
  url:'https://mesto.nomoreparties.co/v1/cohort-25/cards',
  method:'POST',
  headers: {
    'Content-Type' : 'application/json',
    'authorization':'da853ede-d03b-4f91-b21b-ffe003cd021a'
  }
}

const loadCards = new Api(options);
const loadProfileInfo = new Api(profileInfo);


const section = new Section({
    renderer: (item) => {
      createNewCard(item)
    }
  },
  '.elements');

loadProfileInfo.processData()
  .then(data => {
    userInfo.setUserInfo(data);
  })

loadCards.processData()
  .then(data => {
    section.renderItems(data);
  })


const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupPlace = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileAvatar = document.querySelector('.profile__avatar');
const inputName = document.querySelector('.popup__field_type_name');
const inputProfession = document.querySelector('.popup__field_type_profession');


const formNameValidator = new FormValidator(validation, '.popup__form_type_name');
const formPlaceValidator = new FormValidator(validation, '.popup__form_type_place');

const popupImage = new PopupWithImage('.popup_type_image');
const userInfo = new UserInfo({name: profileName, about: profileProfession, avatar: profileAvatar});

const createNewCard = (card) => {
  const CardElement = new Card(card, '#place-template', () => {
    popupImage.openPopup(card);
  }).createCard();
  section.addItem(CardElement)
}

const popupProfile = new PopupWithForm('.popup_type_edit', (data) => {
  userInfo.setUserInfo(data);
  const patchProfileInfo = new Api({...newProfileInfo, body: JSON.stringify(data)})
  patchProfileInfo.processData()
    .then()
  popupProfile.closePopup();
})

const popupPlace = new PopupWithForm('.popup_type_place',
    (data) => {
  const postCard = new Api({...newCard, body:JSON.stringify(data)})
    postCard.processData()
      .then()
  createNewCard(data);
  console.log(postCard)
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
  inputProfession.value = currentUser.about;
  //inputAvatar.src =
  formNameValidator.resetValidation();
});

buttonOpenPopupPlace.addEventListener('click', () => {
  popupPlace.openPopup();
  formPlaceValidator.resetValidation();
})

section.renderItems();






