export default class Todo {

    constructor({ title, completed = false, id }) {
        this.title = title
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

    edit({ title }) {
        this.title = title
    }

    createCard(todoList, todoManager) {
        todoList.createCard(this.toObjectLiteral(), todoManager)
    }

    toObjectLiteral() {
        return {
            title: this.title,
            completed: this.completed,
            id: this.id
        }
    }

}