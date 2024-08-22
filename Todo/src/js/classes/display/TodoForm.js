import Todo from "../Todo.js"

export default class TodoForm {

    constructor() {
        this.titleInput = document.getElementById("todo-title")
        this.descriptionInput = document.getElementById("todo-description")
        this.selectFilter = document.getElementById("todo-filter")
    }

    listenFilter(todoManager) {
        this.selectFilter.addEventListener("change", () => this.doFilter(todoManager))
    }

    doFilter(todoManager) {
        todoManager.changeFilter(this.selectFilter.value)
    }

    newTodo(todos) {
        if (this.titleInput.value !== "" && this.descriptionInput.value !== ""){
            const todoContent = {
                title: this.titleInput.value,
                description: this.descriptionInput.value,
                id: todos.length
            }
            todos.push(new Todo(todoContent))
            this.titleInput.value = ""
            this.descriptionInput.value = ""
        }
    }

}