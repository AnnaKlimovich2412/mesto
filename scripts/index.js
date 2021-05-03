// shared
const placeTemplate = document.querySelector('#place-template').content;

function closePopupFunc(popup) {
  return popup.closest('div[title]').classList.remove('popup_is-opened');
}

function getCloseButton(popup) {
  return popup.querySelector('button[class*="close-button"]');
}


/*Edit Profile*/

// profile information
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const openEditProfileButton = document.querySelector('.profile__edit-button');

// popup-edit
const popupProfileEdit = document.querySelector('.popup_type_edit');
const closeEditProfileButton = getCloseButton(popupProfileEdit)

// listeners
openEditProfileButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  popupProfileEdit.classList.add('popup_is-opened');
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
});
closeEditProfileButton.addEventListener('click', () => {
  closePopupFunc(closeEditProfileButton)
})

// popup form fields
const inputName = popupProfileEdit.querySelector('.popup__field_type_name');
const inputProfession = popupProfileEdit.querySelector('.popup__field_type_profession');


popupProfileEdit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  closePopupFunc(closeEditProfileButton)
});




/*New Place*/

//popUp
const popupPlace = document.querySelector('.popup_type_place');
const openPopupPlaceButton = document.querySelector('.profile__add-button')
const closePopupPlaceButton = getCloseButton(popupPlace)
const formPlace = document.querySelector('.popup__form_type_place');

// listeners
openPopupPlaceButton.addEventListener("click", () => {
  popupPlace.classList.add('popup_is-opened');
});
closePopupPlaceButton.addEventListener('click', () => {
  closePopupFunc(closePopupPlaceButton)
})

// popup form fields
const inputPlace = formPlace.querySelector('.popup__field_type_place');
const inputImage = formPlace.querySelector('.popup__field_type_link');

formPlace.addEventListener('submit', formPlaceSubmitHandler);

// set new place and close dialog
function formPlaceSubmitHandler(evt){
  evt.preventDefault();

  const place = placeTemplate.querySelector('.element').cloneNode(true);
  const popup = placeTemplate.querySelector('.popup_type_image').cloneNode(true);
  place.querySelector('.element__img').src = inputImage.value;
  place.querySelector('.element__title').textContent = inputPlace.value;
  popup.querySelector('.popup__img').src = inputImage.value;
  popup.querySelector('.popup__label').textContent = inputPlace.value;

  place.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_is-active');
  })
  place.querySelector('.element__delete').addEventListener('click', function (evt) {
    place.remove();
  })
  place.querySelector('.element__img').addEventListener('click', function (evt) {
    popup.classList.add('popup_is-opened');
  })
  popup.querySelector('.popup__close-button').addEventListener('click', () => {
    closePopupFunc(popup);
  })
  elementsContainer.prepend(place);
  elementsContainer.append(popup);
  formPlace.reset();
  closePopupFunc(closePopupPlaceButton)
}



/*Initial places grid*/

//elements
const elementsContainer = document.querySelector('.elements');

//array
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


//add cards
function addCards() {

  initialCards.forEach((item) => {
    const place = placeTemplate.querySelector('.element').cloneNode(true);
    const popup = placeTemplate.querySelector('.popup_type_image').cloneNode(true);
    place.querySelector('.element__img').src = item.link;
    place.querySelector('.element__title').textContent = item.name;
    popup.querySelector('.popup__img').src = item.link;
    popup.querySelector('.popup__label').textContent = item.name;

    place.querySelector('.element__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_is-active');
    })
    place.querySelector('.element__delete').addEventListener('click', function (evt) {
      place.remove();
    })
    place.querySelector('.element__img').addEventListener('click', function (evt) {
      popup.classList.add('popup_is-opened');
    })
    popup.querySelector('.popup__close-button').addEventListener('click', () => {
      closePopupFunc(popup);
    })

    elementsContainer.prepend(place);
    elementsContainer.append(popup);

  })
}
addCards();
