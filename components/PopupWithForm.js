import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this.popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListner("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(evt);
    });
  }
}

export default PopupWithForm;
