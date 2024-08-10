export default class TodoForm {

    constructor() {
        this.titleInput = document.getElementById("todo-title")
        this.descriptionInput = document.getElementById("todo-description")
    }

    addTodo(todoManager, todoList) {
        const todoContent = {
            title: this.titleInput.value,
            description: this.descriptionInput.value
        }
        todoManager.addTodo(todoContent)
        todoList.clearTodos()
        todoManager.displayList(todoList)
        this.clearForm()
    }

    clearForm() {
        this.titleInput.value = ""
        this.descriptionInput.value = ""
    }

}