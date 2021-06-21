import {Popup} from "./Popup";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormCallback) {
    super(popupSelector);
    this._submitCallback = submitFormCallback;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupFields = this._popup.querySelectorAll('.popup__field')

  }

  _getInputValues() {

  }

  //TODO Содержит приватный метод _getInputValues, который собирает данные всех полей формы.


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
