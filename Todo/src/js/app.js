import TodoForm from "./classes/display/TodoForm.js";
import TodoList from "./classes/display/TodoList.js";
import TodoManager from "./classes/TodoManager.js";
import { TODOS } from "../data/todos.js"

const main = () => {
    
    const todoList = new TodoList()
    const todoForm = new TodoForm()
    const todoManager = new TodoManager(todoForm, todoList)
    
    const addTodoBtn = document.getElementById("add-todo")
    addTodoBtn.addEventListener("click", () => todoManager.newTodo())

    // todoList.createTodos(TODOS, todoManager)

}

main()