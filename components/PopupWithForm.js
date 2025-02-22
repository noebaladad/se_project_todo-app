import Popup from "./Popup.js";

export default class PopupwWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.querySelector("form");
    }

    _getInputValues() {
        const inputs = this._form.querySelectorAll("input");
        const values = {};
        inputs.forEach((input) => {
          values[input.name] = input.value;
        });
        return values;
      }
    
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
            this._form.reset();
        });
    }
}

