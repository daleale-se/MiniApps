import AllTodos from "./AllTodos.js";

export default class CompletedTodos extends AllTodos {

    constructor(todoList, todoManager) {
        super(todoList, todoManager)
    }

    updateTodos(todos) {
        this.todoList.clearTodos()
        todos.filter(todo => todo.isCompleted()).forEach(todo => todo.createCard(this.todoList, this.todoManager))
    }
    
}