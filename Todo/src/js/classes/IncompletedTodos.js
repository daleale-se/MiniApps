export default class ImcompletedTodos {

    constructor() {

    }

    displayList(todos,todoList, todoManager) {
        todos.filter(todo => !todo.isCompleted()).forEach(todo => todo.createCard(todoList, todoManager))
    }
    
}