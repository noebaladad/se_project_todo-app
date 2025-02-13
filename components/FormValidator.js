class FormValidator {
    constructor(settings, formEl) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._errorClass = settings.errorClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._inactiveButtonClass  = settings.inactiveButtonClass;
        this._formEl = formEl;
        this._inputList = Array.from(
            this._formEl.querySelectorAll(this._inputSelector)
        );
        this._setEventListeners();
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

    _toggleButtonState() {
        const buttonElement = this._formEl.querySelector(this._submitButtonSelector);
        console.log(buttonElement);
        console.log(this._submitButtonSelector);

    }

    _setEventListeners() {
        this._inputList = Array.from(
            this._formEl.querySelectorAll(this._inputSelector),
          );
          const buttonElement = this._formEl.querySelector(
            this._submitButtonSelector,
          );
        
          this._toggleButtonState(this._inputList, buttonElement);
        
          this._inputList.forEach((inputElement) => {
            this._inputElement.addEventListener("input", () => {
              this._checkInputValidity(inputElements);
              this._toggleButtonState(this._inputList, buttonElement, );
            });
          });
        };

    enableValidation() {
        this._formEl.addEventListener("submit", (evt) => {
            evt.preventDefault();
          });
          this._setEventListeners();
    }     
}

export default FormValidator;