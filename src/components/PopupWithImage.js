import {Popup} from "./Popup";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageLink = this._popup.querySelector('.popup__img');
    this._popupImageName = this._popup.querySelector('.popup__label');
  }

  openPopup(data){
    super.openPopup();
    this._popupImageLink.src = data.link;
    this._popupImageLink.alt = this._popupImageName.textContent = data.name;
  }
}
