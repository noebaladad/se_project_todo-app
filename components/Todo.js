class Todo {
    constructor(data, selector) {
        this._data = data;
        this._templateElement = document.querySelector(selector);
    }

    _setEventListeners() {
        this._todoCheckboxEl.addEventListener("change", () => {
            this._data.completed = !this._data.completed;
            console.log(this._data.completed);
        });
        this._todoDeleteBtn.addEventListener("click", () => {
            this._todoElement.remove();
        })
    }

    _generateCheckboxEl() {
        this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
        this._todoLabel = this._todoElement.querySelector(".todo__label");
        this._todoCheckboxEl.checked = this._data.completed;
        this._todoCheckboxEl.id = `todo-${this._data.id}`;
        this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
    }

    getView() {
        this._todoElement = this._templateElement.content
            .querySelector(".todo")
            .cloneNode(true);

        this._todoNameEl = this._todoElement.querySelector(".todo__name");
        this._todoDate = this._todoElement.querySelector(".todo__date");
        this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
        
        todoNameEl.textContent = this._data.name;
        todoDate.textContent = this._data.date;

        this._generateCheckboxEl();
        this._setEventListeners();

        this._dueDate = new Date(data.date);
        if (!isNaN(dueDate)) {
          todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}`;
        }

        return this._todoElement;
    }
}

export default Todo;