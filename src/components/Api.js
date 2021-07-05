export class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  listItems() {
    return fetch (this.url, {
      headers: this.headers
    })
      .then( res => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(res.status);
        })
      .catch(err => {
        console.error(`http method failed to proceed with error ${err}`)
      })
  }

}
