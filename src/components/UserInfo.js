export class UserInfo {
  constructor({name, profession}) {
    this._profileName = name;
    this._profileProfession = profession;
  }
  getUserInfo(){
    this._data = {
      name : this._profileName.textContent,
      profession : this._profileProfession.textContent
    };
    return this._data;
  }
  setUserInfo({name, profession}){
    this._profileName.textContent = name;
    this._profileProfession.textContent = profession
  }
}

