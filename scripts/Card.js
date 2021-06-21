import {openImagePopup} from "./index.js";

class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate(){
    const placeTemplate = document.querySelector(this._cardSelector).content;
    return  placeTemplate.querySelector('.element').cloneNode(true);
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__img').src = this._link;
    this._element.querySelector('.element__img').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element
      }

  _setEventListeners(){
    this._element.querySelector('.element__like').addEventListener('click', (evt) => {
      this._toggleLike(evt);
    })
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._removeElement()
    })
    this._element.querySelector('.element__img').addEventListener('click', this._handleCardClick);
  }

  _removeElement(){
    this._element.remove();
    this._element = null;
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('element__like_is-active');
  }
 }

export default Card;


