// shared
const placeTemplate = document.querySelector('#place-template').content;

function closePopup (popup) {
  return popup.classList.remove('popup_is-opened');
}
function openPopup (popup) {
  return popup.classList.add('popup_is-opened');
}

/*Edit Profile*/

// profile information
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const openEditProfileButton = document.querySelector('.profile__edit-button');
const formName = document.querySelector('.popup__form_type_name');

// popup-edit
const popupProfileEdit = document.querySelector('.popup_type_edit');
const closeEditProfileButton = popupProfileEdit.querySelector('.popup__close-button');

// listeners
openEditProfileButton.addEventListener("click", () => {
  openPopup(popupProfileEdit);
});
closeEditProfileButton.addEventListener('click', () => {
  closePopup(popupProfileEdit)
})

// popup form fields
const inputName = popupProfileEdit.querySelector('.popup__field_type_name');
const inputProfession = popupProfileEdit.querySelector('.popup__field_type_profession');


formName.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  closePopup(popupProfileEdit);
  formName.reset();
});



/*New Place*/

//popUp
const popupPlace = document.querySelector('.popup_type_place');
const openPopupPlaceButton = document.querySelector('.profile__add-button')
const closePopupPlaceButton = popupPlace.querySelector('.popup__close-button');
const formPlace = popupPlace.querySelector('.popup__form_type_place');

// listeners
openPopupPlaceButton.addEventListener("click", () => {
  openPopup(popupPlace);
});
closePopupPlaceButton.addEventListener('click', () => {
  closePopup(popupPlace);
})

// popup form fields
const inputPlace = formPlace.querySelector('.popup__field_type_place');
const inputImage = formPlace.querySelector('.popup__field_type_link');



formPlace.addEventListener('submit', addCard);

// create card

function createCard (prop) {
  const place = placeTemplate.querySelector('.place-template').cloneNode(true);
  const popupImage = place.querySelector('.popup_type_image');

  place.querySelector('.element__img').src = prop.link;
  place.querySelector('.element__title').textContent = prop.name;
  place.querySelector('.popup__img').src = prop.link;
  place.querySelector('.popup__label').textContent = prop.name;

  place.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_is-active');
  })
  place.querySelector('.element__delete').addEventListener('click', function (evt) {
    place.remove();
  })
  place.querySelector('.element__img').addEventListener('click', function (evt) {
    openPopup(popupImage);
  })
  popupImage.querySelector('.popup__close-button').addEventListener('click', () => {
    closePopup(popupImage);
  })

  return place;

}

// add Card and close dialog

function addCard (evt) {
  evt.preventDefault();
  elementsContainer.prepend(createCard({link: inputImage.value, name: inputPlace.value}));
  closePopup(popupPlace);
  formPlace.reset();
}


/*Initial places grid*/

//elements
const elementsContainer = document.querySelector('.elements');

/* render initial cards */
function renderInitialCards() {
  initialCards.forEach((i) => {
    elementsContainer.append(createCard({link: i.link, name: i.name}));
  })
}

renderInitialCards();

