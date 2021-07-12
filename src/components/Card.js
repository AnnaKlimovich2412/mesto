
class Card {
  _likeElement;

  constructor(data, cardSelector, {handleCardClick, handleDeleteClick, handleLikeClick, profileId}) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._cardId = data._id
    this._profileId = profileId;
    this._cardOwnerId = data.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;

  }

  _getTemplate(){
    const placeTemplate = document.querySelector(this._cardSelector).content;
    return placeTemplate.querySelector('.element').cloneNode(true);
  }

  createCard() {
    this._element = this._getTemplate();
    this._likeElement = this._element.querySelector('.element__like');
    this._imgElement = this._element.querySelector('.element__img');
    this._counterElement = this._element.querySelector('.element__like-counter');
    this._setEventListeners();

    this._imgElement.src = this._link;
    this._imgElement.alt = this._element.querySelector('.element__title').textContent = this._name;

    this._likes ?
      this._counterElement.textContent = this._likes.length
      : this._counterElement.textContent = 0;

    if (this._likes.some(like => like._id === this._profileId)) {
      this._likeElement.classList.add('element__like_is-active');
    }

    if (this._cardOwnerId !== this._profileId) {
      this._element.querySelector('.element__delete').remove()
    }

    return this._element
  }

  _setEventListeners(){
    this._likeElement.addEventListener('click', this._likeCard.bind(this));
    this._element.querySelector('.element__delete').addEventListener('click', this._handleDeleteClick);
    this._imgElement.addEventListener('click', this._handleCardClick);
  }


  _likeCard() {
    this._handleLikeClick();
    this._likeElement.classList.toggle('element__like_is-active');

  }

  isLiked () {
    if (this._likeElement.classList.contains('element__like_is-active')) {
      return true
    } else {
      return false
    }
  }

  updateLike (res){
    this._element.querySelector('.element__like-counter').textContent = res.likes.length
  }

}

export default Card;


