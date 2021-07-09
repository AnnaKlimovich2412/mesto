export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector)
  }

  renderItems(cards) {
    cards.forEach(card => this._renderer(card))
  }

  clearContainer() {
    this._container.innerHTML = '';
  }

  addItem(element, method) {
    this._container[method](element);
  }
}
