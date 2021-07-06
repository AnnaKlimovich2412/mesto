export class Api {
    constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
    this.method = config.method;
    this.body = config.body
  }

  processData() {
    return fetch (this.url, {
      method: this.method,
      headers: this.headers,
      body: this.body
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
