class FormValidator {
    constructor(settings, formEl) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._errorClass = settings.errorClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._inactiveButtonClass  = settings.inactiveButtonClass;
        this._formEl = formEl;
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            showInputError(
              _formEl,
              inputElement,
              inputElement.validationMessage,
            );
          } else {
            hideInputError(inputElement);
          }
    }

    _setEventListeners() {
        this._inputList = Array.from(
            this._formEl.querySelectorAll(settings.this._inputSelector),
          );
          const buttonElement = this._formEl.querySelector(
            settings.submitButtonSelector,
          );
        
          toggleButtonState(inputList, buttonElement, settings);
        
          this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
              this._checkInputValidity(inputElements);
              toggleButtonState(inputList, buttonElement, );
            });
          });
        };

    }

    enableValidation() {
        this._formEl.addEventListener("submit", (evt) => {
          evt.preventDefault();
        });
        this._setEventListeners();
    }
}

export default FormValidator;