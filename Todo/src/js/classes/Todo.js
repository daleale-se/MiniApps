export default class Todo {

    constructor({ title, description, completed = false, id }) {
        this.title = title
        this.description = description
        this.completed = completed
        this.id = id
    }

    switchCompleted() {
        this.completed = !this.completed
    }

    isCompleted() {
        return this.completed
    }

    hasId(id) {
        return this.id === id
    }

    edit({ title, description }) {
        this.title = title
        this.description = description
    }

    createCard(todoList, todoManager) {
        todoList.createCard(this.toObjectLiteral(), todoManager)
    }

    toObjectLiteral() {
        return {
            title: this.title,
            description: this.description,
            completed: this.completed,
            id: this.id
        }
    }

}