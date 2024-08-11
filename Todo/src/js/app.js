import TodoForm from "./classes/display/TodoForm.js";
import TodoList from "./classes/display/TodoList.js";
import TodoManager from "./classes/TodoManager.js";
import { TODOS } from "../data/todos.js"

const main = () => {
    
    const todoForm = new TodoForm()
    const todoList = new TodoList()
    const todoManager = new TodoManager()

    const addTodoBtn = document.getElementById("add-todo")
    addTodoBtn.addEventListener("click", () => todoForm.addTodo(todoManager, todoList))

    todoList.createTodos(TODOS, todoManager)
    
}

main()