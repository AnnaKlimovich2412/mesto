
class Card {
  constructor(data, cardSelector, {handleCardClick, handleDeleteClick, profileId}) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._cardId = data._id
    this._profileId = profileId;
    this._cardOwnerId = data.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
  }


  _getTemplate(){
    const placeTemplate = document.querySelector(this._cardSelector).content;
    return  placeTemplate.querySelector('.element').cloneNode(true);
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__img').src = this._link;
    this._element.querySelector('.element__img').alt = this._element.querySelector('.element__title').textContent = this._name;
    this._likes ?
      this._element.querySelector('.element__like-counter').textContent = this._likes.length
      : this._element.querySelector('.element__like-counter').textContent = 0;

    if (this._cardOwnerId !== this._profileId) {
      this._element.querySelector('.element__delete').remove()
    }
    return this._element
  }

  _setEventListeners(){
    this._element.querySelector('.element__like').addEventListener('click', (evt) => {
      this._toggleLike(evt);
    })
    this._element.querySelector('.element__delete').addEventListener('click', this._handleDeleteClick);
    this._element.querySelector('.element__img').addEventListener('click', this._handleCardClick);
  }


  _toggleLike(evt) {
    evt.target.classList.toggle('element__like_is-active');
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

 }

export default Card;


