import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import './index.css'
import {PopupWithImage} from '../components/PopupWithImage'
import {PopupWithForm} from "../components/PopupWithForm"
import {PopupWithDeleteConfirmation} from "../components/PopupWithDeleteConfirmation"
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

const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupPlace = document.querySelector('.profile__add-button');
const buttonOpenPopupAvatar = document.querySelector('.profile__avatar-edit')
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileAvatar = document.querySelector('.profile__avatar');
const inputName = document.querySelector('.popup__field_type_name');
const inputProfession = document.querySelector('.popup__field_type_profession');

/*functions*/

function createNewCard(data) {
  const card = new Card(data, '#place-template', {
    handleCardClick:() => {popupImage.openPopup(data)},
    handleDeleteClick:() => {popupDeleteConfirm.openPopup(data)},
    handleLikeClick:() => {
      if (card.isLiked()) {
       api.deleteLike(card)
          .then((res) => {card.updateLike(res)})
          .catch((err) => {console.log(err)})
      } else {
        api.putLike(card)
         .then((res) => {card.updateLike(res)})
         .catch((err) => {console.log(err)})
      }},
        profileId: userInfo.getUserID()
  })
  const cardElement = card.createCard();
  return cardElement;
}

/*create classes*/

const section = new Section({
    renderer: (card) => {
      const cardElement = createNewCard(card);
      section.addItem(cardElement, 'append')
    }
  },
  '.elements');

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-25/', 'da853ede-d03b-4f91-b21b-ffe003cd021a')

const cardsAndUser = () => {
  Promise.all([api.getProfileInfo(), api.getCards()])
    .then(([user, cards]) => {
      userInfo.setUserInfo(user);
      section.clearContainer();
      section.renderItems(cards);
    })
    .catch(err => console.log(err))
}

cardsAndUser();

const formNameValidator = new FormValidator(validation, '.popup__form_type_name');
const formPlaceValidator = new FormValidator(validation, '.popup__form_type_place');
const formAvatarValidator = new FormValidator(validation,'.popup__form_type_avatar');

const userInfo = new UserInfo({name: profileName, about: profileProfession, avatar: profileAvatar});

const popupProfile = new PopupWithForm('.popup_type_edit', (data) => {
  popupProfile.renderLoading(true);
  api.setProfileInfo(data)
    .then(res => {
      userInfo.setUserInfo(res);
      popupProfile.closePopup();
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupProfile.renderLoading(false);
    })
})

const popupPlace = new PopupWithForm('.popup_type_place',
  (data) => {
    popupPlace.renderLoading(true)
    api.postCard({name: data.name, link: data.link})
      .then(res => {
        const card = createNewCard(res);
        section.addItem(card, 'prepend');
        popupPlace.closePopup()
      })
      .catch(err => console.log(err))
      .finally(() => {
        popupPlace.renderLoading(false)
      })
  })

const popupImage = new PopupWithImage('.popup_type_image');

const popupDeleteConfirm = new PopupWithDeleteConfirmation('.popup_type_confirm',(data) => {
  api.deleteCard(data)
      .then(() => {
        popupDeleteConfirm.closePopup();
        cardsAndUser()
      })
      .catch(err => console.log(err))
  });

const popupAvatar = new PopupWithForm('.popup_type_avatar',
  (data) => {
    popupAvatar.renderLoading(true);
    api.changeAvatar(data.avatar)
      .then(res => {
        userInfo.setUserInfo(res);
        popupAvatar.closePopup()
      })
      .catch(err => console.log(err))
      .finally(() => {

        popupAvatar.renderLoading(false);
      })
  }
)


popupImage.setEventListeners();
popupProfile.setEventListeners();
popupPlace.setEventListeners();
popupDeleteConfirm.setEventListeners();
popupAvatar.setEventListeners();
formNameValidator.enableValidation();
formPlaceValidator.enableValidation();
formAvatarValidator.enableValidation();

buttonOpenPopupProfile.addEventListener("click", () => {
  const currentUser = userInfo.getUserInfo()
  inputName.value = currentUser.name;
  inputProfession.value = currentUser.about;
  formNameValidator.resetValidation();
  popupProfile.openPopup();
});

buttonOpenPopupAvatar.addEventListener('click', () => {
  popupAvatar.openPopup();
})

buttonOpenPopupPlace.addEventListener('click', () => {
  formPlaceValidator.resetValidation();
  popupPlace.openPopup();
})














