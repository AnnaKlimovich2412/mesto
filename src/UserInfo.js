export class UserInfo {
  constructor({name, profession}) {
    this._profileName = document.querySelector(name);
    this._profileProfession = document.querySelector(profession);
    this._inputName = document.querySelector('.popup__field_type_name');
    this._inputProfession = document.querySelector('.popup__field_type_profession');

  }
  getUserInfo(){
    this._profileName.textContent = this._inputName.value;
    this._profileProfession.textContent = this._inputProfession.value;
  }
  setUserInfo(){
    this._inputName.value = this._profileName.textContent;
    this._inputProfession.value = this._profileProfession.textContent;
  }
}

