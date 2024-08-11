import Todo from "./Todo.js"

export default class TodoManager {

    constructor() {
        this.todoList = []
    }

    addTodo(todoContent) {
        this.todoList.push(new Todo({ ...todoContent, id: todoContent.id ?? this.todoList.length }))
    }

    removeTodo(id) {
        this.todoList = this.todoList.filter(todo => !todo.hasId(id))
    }

    editTodo(id, todoContent) {
        this.todoList.find(todo => todo.hasId(id)).edit(todoContent)
    }

    completedTodo(id) {
        this.todoList.find(todo => todo.hasId(id)).switchCompleted()
    }

    displayList(todoList) {
        this.todoList.forEach(todo => todo.createCard(todoList, this))
    }

}