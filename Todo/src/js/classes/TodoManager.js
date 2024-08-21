import AllTodos from "./AllTodos.js"
import CompletedTodos from "./CompletedTodos.js"
import IncompletedTodos from "./IncompletedTodos.js"
import Todo from "./Todo.js"

export default class TodoManager {

    constructor(todoForm, todoList) {
        this.todos = []
        this.filterMode = new AllTodos(this.todos, todoList, this)
        this.todoForm = todoForm
        this.todoList = todoList
    }

    newTodo() {
        this.todoForm.newTodo(this.todos)
        this.filterMode.updateTodos()
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => !todo.hasId(id))
        this.filterMode.updateTodos()
    }

    editTodo(id, todoContent) {
        this.todos.find(todo => todo.hasId(id)).edit(todoContent)
        this.filterMode.updateTodos()
    }

    completedTodo(id) {
        this.todos.find(todo => todo.hasId(id)).switchCompleted()
        this.filterMode.updateTodos()
    }

    // displayList(todoList) {
    //     this.filterMode.displayList(this.todos, todoList, this)
    // }

    changeFilter(filter) {
        if (filter === "all") {
            this.filterMode = new AllTodos(this.todos, this.todoList, this)
        } else if (filter === "completed") {
            this.filterMode = new CompletedTodos(this.todos, this.todoList, this)
        } else if (filter === "incompleted") {
            this.filterMode = new IncompletedTodos(this.todos, this.todoList, this)
        }
        this.filterMode.updateTodos()
    }

}