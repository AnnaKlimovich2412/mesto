export class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  _check(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
    }
  }

  getCards() {
    return fetch(`${this._url}cards`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': this._token
      }
    })
      .then(this._check)
  }

  getProfileInfo() {
    return fetch(`${this._url}users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': this._token
      }
    })
      .then(this._check)
  }

  setProfileInfo(data) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': this._token
      },
      body: JSON.stringify(data)
    })
      .then(this._check)
  }

  postCard({name, link}) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': this._token
      },
      body: JSON.stringify({name: name, link: link})
    })
      .then(this._check)
  }

  deleteCard(card) {
    const cardID = card._id;
    return fetch(`${this._url}cards/${cardID}`, {
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': this._token
      }
    })
      .then(this._check)
 }

  changeAvatar(avatar) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': this._token
      },
      body: JSON.stringify({avatar})
    })
      .then(this._check)
  }
}

