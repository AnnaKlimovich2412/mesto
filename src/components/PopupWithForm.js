import {Popup} from "./Popup";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormCallback) {
    super(popupSelector);
    this._submitCallback = submitFormCallback;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupInputs = Array.from(this._popupForm.querySelectorAll('.popup__field'));
  }

  _getInputValues() {
    this._formValues = {};
    this._popupInputs.forEach(input =>
      this._formValues[input.name] = input.value
    );
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues());
      this.closePopup()
    });
  }

  closePopup() {
    super.closePopup();
    this._popupForm.reset();
  }
}
