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
        updateBtn.onclick = () => todoManager.editTodo(id, { title: titleInput.value, description: descriptionInput.value})
        editArticle.append(titleInput, descriptionInput, updateBtn)
        this.popupContainer.appendChild(editArticle)

    }

    // editTodo(id, todoManager) {
    //     const titleInput = this.popupContainer.querySelector("#title-update")
    //     const descriptionInput = this.popupContainer.querySelector("#description-update")
    //     const todoContent = {
    //         title: titleInput.value,
    //         description: descriptionInput.value,
    //     }
    //     todoManager.editTodo(id, todoContent)
    //     this.popupContainer.innerHTML = ""
    // }

}