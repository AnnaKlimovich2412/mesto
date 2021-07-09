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
    };
    return this._data;
  }

  getUserID () {
    return this._id;
  }

  setUserInfo (data) {
    this._profileName.textContent = data.name;
    this._profileAbout.textContent = data.about;
    this._profileAvatar.src = data.avatar
    this._id = data._id;
  }
}

