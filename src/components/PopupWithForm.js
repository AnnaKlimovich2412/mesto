import {Popup} from "./Popup";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormCallback) {
    super(popupSelector);
    this._submitCallback = submitFormCallback;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupInputs = Array.from(this._popupForm.querySelectorAll('.popup__field'));
  }

  getInputValues() {
    let data = {};
    this._popupInputs.forEach((input) => {
      data[input.name] = input.value
    })
    return data;
  }

 setEventListeners() {
   super.setEventListeners();
   this._popupForm.addEventListener('submit', this._submitCallback);
      this._popupForm.addEventListener('submit', this.closePopup.bind(this));
 }

  closePopup() {
    super.closePopup();
    this._popupForm.reset();
  }
}
