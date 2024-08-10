import TodoForm from "./classes/display/TodoForm.js";
import TodoList from "./classes/display/TodoList.js";
import TodoManager from "./classes/TodoManager.js";

const main = () => {
    
    const todoForm = new TodoForm()
    const todoList = new TodoList()
    const todoManager = new TodoManager()

    const addTodoBtn = document.getElementById("add-todo")
    addTodoBtn.addEventListener("click", () => todoForm.addTodo(todoManager, todoList))

}

main()