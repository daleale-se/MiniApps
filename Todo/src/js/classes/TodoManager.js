import Todo from "./Todo.js"
import todoFilters from "../todoFilters.js"

export default class TodoManager {

    constructor(todoForm, todoList) {
        this.todos = this.load()
        this.filterMode = null
        this.todoForm = todoForm
        this.todoList = todoList
        this.todoForm.listenFilter(this)
        this.todoForm.doFilter(this)
    }

    newTodo() {
        this.todoForm.newTodo(this.todos)
        this.filterMode.updateTodos(this.todos)
        this.save(this.todos)
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => !todo.hasId(id))
        this.filterMode.updateTodos(this.todos)
        this.save(this.todos)
    }

    editTodo(id, todoContent) {
        this.todos.find(todo => todo.hasId(id)).edit(todoContent)
        this.filterMode.updateTodos(this.todos)
        this.save(this.todos)
    }

    completedTodo(id) {
        this.todos.find(todo => todo.hasId(id)).switchCompleted()
        this.filterMode.updateTodos(this.todos)
        this.save(this.todos)
    }

    changeFilter(filterValue) {
        const filters = todoFilters(this.todoList, this)
        this.filterMode = filters[filterValue]
        this.filterMode.updateTodos(this.todos)
    }

    save() {
        const jsonObject = JSON.stringify(this.todos.map(todo => todo.toObjectLiteral()))
        localStorage.setItem("todos", jsonObject)
    }

    load() {
        return JSON.parse(localStorage.getItem("todos") ?? "[]").map(item => new Todo(item))
    }

}