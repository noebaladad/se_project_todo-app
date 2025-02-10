class FormValidator {
    constructor(settings, formEl) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._errorClass = settings.errorClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._inactiveButtonClass  = settings.inactiveButtonClass;
        this._formEl = formEl;
    }

    _setEventListeners() {

    }

    enableValidation() {
        this._formEl.addEventListener("submit", (evt) => {
          evt.preventDefault();
        });
        this._setEventListeners();
    }
}

export default FormValidator;