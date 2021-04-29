// profile information
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

//elements
const elementsContainer = document.querySelector('.elements');

//popUp
const popupEdit = document.querySelector('.popup_type_edit');
const popupPlace = document.querySelector('.popup_type_place');

//buttons
const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close-button');
const openPopupPlaceButton = document.querySelector('.profile__add-button')
const closePopupPlaceButton = popupPlace.querySelector('.popup__close-button');

// form fields
const formElement = document.querySelector('.popup__form');
const inputName = formElement.querySelector('.popup__field_type_name');
const inputProfession = formElement.querySelector('.popup__field_type_profession');

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

// event listeners
openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
formElement.addEventListener('submit', formSubmitHandler);
openPopupPlaceButton.addEventListener("click", openPopupPlace);
closePopupPlaceButton.addEventListener("click", closePopupPlace);

// open dialog window
function openPopup() {
  popupEdit.classList.add('popup_is-opened');
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

// close dialog windows
function closePopup() {
  popupEdit.classList.remove('popup_is-opened');
}

// set new value and close dialog
function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;

  closePopup()
}

// open place window
function openPopupPlace(){
  popupPlace.classList.add('popup_is-opened');
}

// close place window
function closePopupPlace(){
  popupPlace.classList.remove('popup_is-opened');
}

//add cards
function addCards () {


  initialCards.forEach((item) => {
    const placeTemplate = document.querySelector('#place-template').content;
    const place = placeTemplate.querySelector('.element').cloneNode(true);
    place.querySelector('.element__img').src = item.link;
    place.querySelector('.element__title').textContent = item.name;
    place.querySelector('.element__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_is-active');
    })
    place.querySelector('.element__delete').addEventListener('click', function (evt) {
      place.remove();
    })

    elementsContainer.append(place);

  })
}


addCards();
