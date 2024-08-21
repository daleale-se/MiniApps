import AllTodos from "./AllTodos.js"
import CompletedTodos from "./CompletedTodos.js"
import IncompletedTodos from "./IncompletedTodos.js"

export default class TodoManager {

    constructor(todoForm, todoList, storage) {
        this.todos = storage.load()
        this.filterMode = null
        this.todoForm = todoForm
        this.todoList = todoList
        this.storage = storage
        this.todoForm.listenFilter(this)
        this.todoForm.doFilter(this)
    }

    newTodo() {
        this.todoForm.newTodo(this.todos)
        this.filterMode.updateTodos(this.todos)
        this.storage.save(this.todos)
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => !todo.hasId(id))
        this.filterMode.updateTodos(this.todos)
        this.storage.save(this.todos)
    }

    editTodo(id, todoContent) {
        this.todos.find(todo => todo.hasId(id)).edit(todoContent)
        this.filterMode.updateTodos(this.todos)
        this.storage.save(this.todos)
    }

    completedTodo(id) {
        this.todos.find(todo => todo.hasId(id)).switchCompleted()
        this.filterMode.updateTodos(this.todos)
        this.storage.save(this.todos)
    }

    changeFilter(filter) {
        if (filter === "all") {
            this.filterMode = new AllTodos(this.todoList, this)
        } else if (filter === "completed") {
            this.filterMode = new CompletedTodos(this.todoList, this)
        } else if (filter === "incompleted") {
            this.filterMode = new IncompletedTodos(this.todoList, this)
        }
        this.filterMode.updateTodos(this.todos)
    }

}