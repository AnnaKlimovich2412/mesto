class Card {
  constructor(image, title, cardSelector) {
    this._image = image;
    this._title = title;
    this._cardSelector = cardSelector;
  }

  _getTemplate(){
    const cardElement = document
      .querySelector(this._cardSelector)
      .content

  }
}



function createCard(prop) {
  const place = placeTemplate.querySelector('.element').cloneNode(true);
  const image = place.querySelector('.element__img');
  const title = place.querySelector('.element__title');

  image.src = prop.link;
  image.alt = prop.name;
  title.textContent = prop.name;

  place.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_is-active');
  })
  place.querySelector('.element__delete').addEventListener('click', function () {
    place.remove();
  })
  image.addEventListener('click', () => {
    openImagePopup(prop.link, prop.name)
  });

  return place;
}

// add Card and close dialog

function addCard(evt) {
  evt.preventDefault();
  elementsContainer.prepend(createCard({link: inputImage.value, name: inputPlace.value}));
  formPlace.reset();
  closePopup(popupPlace);
}
