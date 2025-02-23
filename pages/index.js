import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from '../components/FormValidator.js';
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoButton = document.querySelector(".button_action_add");
const addTodoForm = document.forms["add-todo-form"];
const todosList = document.querySelector(".todos__list");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (formData) => {
    const id = uuidv4();
    const values = { ...formData, id, completed: false };

    renderTodo(values);

    initialTodos.push(values);

    todoCounter.updateTotal(true);
    todoCounter.updateCompleted(initialTodos);
    
    newTodoValidator.resetValidation();
  }
});

const handleTodoCompletion = (todo, completed) => {
  todo.completed = completed;
  todoCounter.updateCompleted(completed);
}

addTodoPopup.setEventListeners();

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleTodoCompletion);
  const todoElement = todo.getView();
  return todoElement;
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todo = generateTodo(item);
    section.addItem(todo);
  },

  containerSelector: ".todos__list",
}); 

section.renderItems();

const renderTodo = (item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
};


addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();