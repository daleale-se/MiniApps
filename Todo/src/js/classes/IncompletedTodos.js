import AllTodos from "./AllTodos.js"

export default class IncompletedTodos extends AllTodos {

    constructor(todos, todoList, todoManager) {
        super(todos, todoList, todoManager)
    }

    updateTodos() {
        this.todos.filter(todo => !todo.isCompleted()).forEach(todo => todo.createCard(this.todoList, this.todoManager))
    }
    
}