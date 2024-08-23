export default class EditTodoPopup {

    constructor() {
        this.popupContainer = document.getElementById("todo-edit-popup")
        this.titleInput = document.getElementById("new-todo-title")
        document.getElementById("close-modal-button").addEventListener("click", () => {
            this.popupContainer.classList.toggle("hidden")
            this.popupContainer.classList.toggle("grid")
        })
    }

    displayPopup(todoManager, { title, id }) {

        this.popupContainer.classList.toggle("hidden")
        this.popupContainer.classList.toggle("grid")
        this.titleInput.value = title
        const updateBtn = this.popupContainer.querySelector("#update-button")
        updateBtn.onclick = () => this.editTodo(todoManager, id)

    }

    editTodo(todoManager, id) {
        if (this.titleInput.value !== "") {
            todoManager.editTodo(id, { title: this.titleInput.value })
            this.popupContainer.classList.toggle("hidden")
            this.popupContainer.classList.toggle("grid")
        }
    }

}