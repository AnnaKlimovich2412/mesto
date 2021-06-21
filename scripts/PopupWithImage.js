import {Popup} from "./Popup";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageLink = this._popup.querySelector('.popup__img');
    this._popupImageName = this._popup.querySelector('.popup__label');
  }

  openPopup(card){
    super.openPopup();
    this._popupImageLink.src = card.link;
    this._popupImageLink.alt = card.name;
    this._popupImageName.textContent = card.name;
  }
}
