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

const handleTodoCompletion = (todo, completed) => {
  todoCounter.updateCompleted(completed);
};

function handleTodoDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
  todoCounter.updateTotal(false);
}

const renderTodo = (todoData) => {
  const todo = new Todo(todoData, "#todo-template", handleTodoCompletion, handleTodoDelete);
  section.addItem(todo.getView());
};

const section = new Section({
  items: initialTodos,
  renderer: renderTodo,
  containerSelector: ".todos__list",
}); 

section.renderItems();

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (formData) => {
    const newTodo = { ...formData, id: uuidv4(), completed: false };
    initialTodos.push(newTodo);
    
    renderTodo(newTodo);
    todoCounter.updateTotal(true);
    
    newTodoValidator.resetValidation();
  }
});

addTodoPopup.setEventListeners();
addTodoButton.addEventListener("click", () => addTodoPopup.open());

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();