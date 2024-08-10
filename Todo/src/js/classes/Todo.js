export default class Todo {

    constructor({ title, description }) {
        this.title = title
        this.description = description
        this.checked = false
    }

    switchChecked() {
        this.checked = !this.checked
    }

    edit({ title, description }) {
        this.title = title
        this.description = description
    }

    createCard(todoList) {
        const todoContent = {
            title: this.title,
            description: this.description,
            checked: this.checked
        }
        todoList.createCard(todoContent)
    }

}