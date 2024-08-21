export default class AllTodos {

    constructor(todoList, todoManager) {
        this.todoList = todoList
        this.todoManager = todoManager
    }

    updateTodos(todos) {
        this.todoList.clearTodos()
        todos.forEach(todo => todo.createCard(this.todoList, this.todoManager))
    }
    
}