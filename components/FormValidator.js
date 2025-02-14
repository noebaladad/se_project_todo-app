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

    _showInputError(inputElement) {
        this._errorElement = this._formEl.querySelector(this._errorElementId);
        this._errorElementId = `#${inputElement.id}-error`;
        inputElement.classList.add(this._inputErrorClass);
        this._errorElement.classList.add(this._errorClass);
        this._errorElement.textContent = inputElement.validationMessage;
    }

    _hideInputError(inputElement) {

        this._errorElementId = `#${inputElement.id}-error`;
        this._errorElement = this._formEl.querySelector(this._errorElementId);
        inputElement.classList.remove(this._inputErrorClass);
        this._errorElement.classList.remove(this._errorClass);
        this._errorElement.textContent = "";
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
          } else {
            this._hideInputError(inputElement);
          }
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid
        })
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
            inputElement.addEventListener("input", () => {
              this._checkInputValidity(inputElement);
              this._toggleButtonState(this._inputList, buttonElement);
            });
          });
        };
        
    resetValidation() {
        this._inputList.forEach((inputElement) => {
            inputElement.value = "";
            this._hideInputError(inputElement);
        });
        this._toggleButtonState(this._buttonElement);
    }

    enableValidation() {
        this._formEl.addEventListener("submit", (evt) => {
            evt.preventDefault();
          });
          this._setEventListeners();
          this._toggleButtonState(this._buttonElement);
    }     
}

export default FormValidator;