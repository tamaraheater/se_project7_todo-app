class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.modal.classList.add("popup_visible");
  }
}

export default Popup;
