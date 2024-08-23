import Todo from "../Todo.js"

export default class TodoForm {

    constructor() {
        this.titleInput = document.getElementById("todo-title")
        this.selectFilter = document.getElementById("todo-filter")
    }

    listenFilter(todoManager) {
        this.selectFilter.addEventListener("change", () => this.doFilter(todoManager))
    }

    doFilter(todoManager) {
        todoManager.changeFilter(this.selectFilter.value)
    }

    newTodo(todos) {
        if (this.titleInput.value !== ""){
            todos.push(new Todo({ title: this.titleInput.value, id: todos.length }))
            this.titleInput.value = ""
        }
    }

}