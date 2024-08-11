export default class EditTodoPopup {

    constructor() {
        this.popupContainer = document.getElementById("todo-edit-popup")
    }

    displayPopup({ title, description, id }, todoManager, todoList) {

        const editArticle = document.createElement("article")
        const titleInput = document.createElement("input")
        titleInput.id = "title-update"
        titleInput.value = title
        titleInput.type = "text"
        const descriptionInput = document.createElement("input")
        descriptionInput.id = "description-update"
        descriptionInput.value = description
        descriptionInput.type = "text"
        const updateBtn = document.createElement("button")
        updateBtn.classList = "bg-orange-400 p-2"
        updateBtn.innerText = "update"
        updateBtn.onclick = () => this.editTodo(id, todoManager, todoList)
        editArticle.append(titleInput, descriptionInput, updateBtn)
        this.popupContainer.appendChild(editArticle)

    }

    clearPopup() {
        this.popupContainer.innerHTML = ""
    }

    editTodo(id, todoManager, todoList) {
        const titleInput = this.popupContainer.querySelector("#title-update")
        const descriptionInput = this.popupContainer.querySelector("#description-update")
        const todoContent = {
            title: titleInput.value,
            description: descriptionInput.value,
        }
        todoManager.editTodo(id, todoContent)
        todoList.updateTodos(todoManager)
        this.clearPopup()
    }

}