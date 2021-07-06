export class UserInfo {
  constructor({name, about, avatar}) {
    this._profileName = name;
    this._profileAbout = about;
    this._profileAvatar = avatar;
  }
  getUserInfo () {
    this._data = {
      name : this._profileName.textContent,
      about : this._profileAbout.textContent,
      avatar : this._profileAvatar.src
    };
    return this._data;
  }

  setUserInfo (data) {
    this._profileName.textContent = data.name;
    this._profileAbout.textContent = data.about;
  }
}

