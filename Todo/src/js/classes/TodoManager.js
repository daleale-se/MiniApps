import AllTodos from "./AllTodos.js"
import Todo from "./Todo.js"

export default class TodoManager {

    constructor() {
        this.todos = []
        this.filterMode = new AllTodos()
    }

    addTodo(todoContent) {
        this.todos.push(new Todo({ ...todoContent, id: todoContent.id ?? this.todos.length }))
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => !todo.hasId(id))
    }

    editTodo(id, todoContent) {
        this.todos.find(todo => todo.hasId(id)).edit(todoContent)
    }

    completedTodo(id) {
        this.todos.find(todo => todo.hasId(id)).switchCompleted()
    }

    displayList(todoList) {
        this.filterMode.displayList(this.todos, todoList, this)
    }

    changeFilter(filterMode) {
        this.filterMode = filterMode
    }

}