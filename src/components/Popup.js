export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._buttonClosePopup = this._popup.querySelector('.popup__close-button');
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  closePopup() {
    this._popup.classList.remove('popup_is-opened');
    document.removeEventListener('keyup', this._handleEscClose);
  }

  openPopup() {
    this._popup.classList.add('popup_is-opened');
    document.addEventListener('keyup', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  }

  _closeByClickOnOverlay(evt) {
    if(evt.target === this._popup) {
    this.closePopup();
    }
  }

  setEventListeners() {
    this._buttonClosePopup.addEventListener('click', this.closePopup.bind(this));
    this._popup.addEventListener('mousedown', this._closeByClickOnOverlay.bind(this));
  }
}
