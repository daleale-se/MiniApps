import Todo from "./Todo.js"

export default class TodoManager {

    constructor() {
        this.todoList = []
    }

    addTodo(todoContent) {
        this.todoList.push(new Todo(todoContent))
    }

    removeTodo(index) {
        this.todoList = this.todoList.filter((_, i) => i !== index)
    }

    editTodo(index, todoContent) {
        this.todoList[index].edit(todoContent)
    }

    checkTodo(index) {
        this.todoList[index].switchCompleted()
    }

    displayList(todoList) {
        for (const todo of this.todoList) {
            todo.createCard(todoList)
        }
    }

}