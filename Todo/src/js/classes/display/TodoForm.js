import AllTodos from "../AllTodos.js"
import CompletedTodos from "../CompletedTodos.js"
import IncompletedTodos from "../IncompletedTodos.js"

export default class TodoForm {

    constructor(todoManager, todoList) {
        this.titleInput = document.getElementById("todo-title")
        this.descriptionInput = document.getElementById("todo-description")
        this.selectFilter = document.getElementById("todo-filter")
        this.todoManager = todoManager
        this.todoList = todoList
        this.listenFilter()
    }

    listenFilter() {
        this.selectFilter.addEventListener("change", () => {
            if (this.selectFilter.value === "all") {
                this.todoManager.changeFilter(new AllTodos())
            } else if (this.selectFilter.value === "completed") {
                this.todoManager.changeFilter(new CompletedTodos())
            } else if (this.selectFilter.value === "incompleted") {
                this.todoManager.changeFilter(new IncompletedTodos())
            }
            this.todoList.updateTodos(this.todoManager)
        })
    }

    addTodo() {
        console.log(this.titleInput);
        const todoContent = {
            title: this.titleInput.value,
            description: this.descriptionInput.value
        }
        this.todoManager.addTodo(todoContent)
        this.todoList.updateTodos(this.todoManager)
        this.clearForm()
    }

    clearForm() {
        this.titleInput.value = ""
        this.descriptionInput.value = ""
    }

}