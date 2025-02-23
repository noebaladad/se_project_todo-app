export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscapeClose);
  }

  _handleEscapeClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (event) => {
      if (
        event.target.classList.contains("popup_visible") ||
        event.target.classList.contains("popup__close")
      ) {
        this.close();
      }
    });
  }
}
