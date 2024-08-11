import TodoForm from "./classes/display/TodoForm.js";
import TodoList from "./classes/display/TodoList.js";
import TodoManager from "./classes/TodoManager.js";
import { TODOS } from "../data/todos.js"

const main = () => {
    
    const todoList = new TodoList()
    const todoManager = new TodoManager()
    const todoForm = new TodoForm(todoManager, todoList)

    const addTodoBtn = document.getElementById("add-todo")
    addTodoBtn.addEventListener("click", todoForm.addTodo.bind(todoForm))

    todoList.createTodos(TODOS, todoManager)

}

main()