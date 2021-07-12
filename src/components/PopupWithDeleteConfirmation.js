import {Popup} from "./Popup";

export class PopupWithDeleteConfirmation extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._submitCallback = submitCallback;
  }

  openPopup (card, domElement) {
    super.openPopup();
    this._card = card;
    this._element = domElement
  }

  deleteDomElement() {
    this._element.remove();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallback(this._card)
    });
  }
}

