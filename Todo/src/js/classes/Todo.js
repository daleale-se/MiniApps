export default class Todo {

    constructor({ title, description, id}) {
        this.title = title
        this.description = description
        this.completed = false
        this.id = id
    }

    switchCompleted() {
        this.completed = !this.completed
    }

    hasId(id) {
        return this.id === id
    }

    edit({ title, description }) {
        this.title = title
        this.description = description
    }

    createCard(todoList, todoManager) {
        const todoContent = {
            title: this.title,
            description: this.description,
            completed: this.completed,
            id: this.id
        }
        todoList.createCard(todoContent, todoManager)
    }

}