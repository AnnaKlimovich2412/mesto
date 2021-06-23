export class UserInfo {
  constructor({name, profession}) {
    this._profileName = document.querySelector(name);
    this._profileProfession = document.querySelector(profession);
  }
  getUserInfo(){
    let data = {};
    data.name = this._profileName.textContent;
    data.profession = this._profileProfession.textContent;
    return data;
  }
  setUserInfo(data){
    this._profileName.textContent = data.name;
    this._profileProfession.textContent = data.profession
  }
}

