import {Popup} from "./Popup";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormCallback) {
    super(popupSelector);
    this._submitCallback = submitFormCallback;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputPlace = document.querySelector('.popup__field_type_place');
    this._inputImage = document.querySelector('.popup__field_type_link');
  }

  _getInputValues() {
    let newPlace = {};
    if (this._inputImage.value && this._inputPlace.value) {
      newPlace = {link: this._inputImage.value, name: this._inputPlace.value}
    }
    return newPlace;
  }

 setEventListeners() {
   super.setEventListeners();
   this._popupForm.addEventListener('submit', this._submitCallback)
   this._popupForm.addEventListener('submit', this.closePopup.bind(this))
 }

  closePopup() {
    super.closePopup();
    this._popupForm.reset();
  }
}
