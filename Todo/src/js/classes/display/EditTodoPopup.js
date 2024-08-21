export default class EditTodoPopup {

    constructor() {
        this.popupContainer = document.getElementById("todo-edit-popup")
    }

    displayPopup(todoManager, { title, description, id }) {

        const editArticle = document.createElement("article")
        const titleInput = document.createElement("input")
        titleInput.id = "title-update"
        titleInput.setAttribute("placeholder", "Enter a title")
        titleInput.value = title
        titleInput.type = "text"
        const descriptionInput = document.createElement("input")
        descriptionInput.id = "description-update"
        descriptionInput.setAttribute("placeholder", "Enter a description")
        descriptionInput.value = description
        descriptionInput.type = "text"
        const updateBtn = document.createElement("button")
        updateBtn.classList = "bg-orange-400 p-2"
        updateBtn.innerText = "update"
        updateBtn.onclick = () => this.editTodo(todoManager, id)
        editArticle.append(titleInput, descriptionInput, updateBtn)
        this.popupContainer.appendChild(editArticle)

    }

    editTodo(todoManager, id) {
        const todoContent = {
            title: this.popupContainer.querySelector("#title-update").value,
            description: this.popupContainer.querySelector("#description-update").value,
        }
        todoManager.editTodo(id, todoContent)
        this.popupContainer.innerHTML = ""
    }

}