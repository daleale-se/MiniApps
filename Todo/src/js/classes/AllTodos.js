export default class AllTodos {

    constructor() {

    }

    displayList(todos, todoList, todoManager) {
        todos.forEach(todo => todo.createCard(todoList, todoManager))
    }
    
}