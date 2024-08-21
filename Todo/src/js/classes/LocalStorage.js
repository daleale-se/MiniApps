import Todo from "./Todo.js"

export default class LocalStorage {

    constructor() {
        this.localStorage = localStorage
    }

    save(todos) {
        const jsonObject = JSON.stringify(todos.map(todo => todo.toObjectLiteral()))
        this.localStorage.setItem("todos", jsonObject)
    }

    load() {
        return JSON.parse(localStorage.getItem("todos") ?? "[]").map(item => new Todo(item))
    }

}