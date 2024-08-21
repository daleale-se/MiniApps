export default class AllTodos {

    constructor(todos, todoList, todoManager) {
        this.todos = todos
        this.todoList = todoList
        this.todoManager = todoManager
    }

    updateTodos() {
        this.todos.forEach(todo => todo.createCard(this.todoList, this.todoManager))
    }

    // displayList(todos, todoList, todoManager) {
    //     todos.forEach(todo => todo.createCard(todoList, todoManager))
    // }
    
}