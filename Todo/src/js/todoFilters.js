import AllTodos from "./classes/AllTodos.js"
import CompletedTodos from "./classes/CompletedTodos.js"
import IncompletedTodos from "./classes/IncompletedTodos.js"

const todoFilters = (todoList, todoManager) => {
    return {
        "all": new AllTodos(todoList, todoManager),
        "completed": new CompletedTodos(todoList, todoManager),
        "incompleted": new IncompletedTodos(todoList, todoManager)
    }
}

export default todoFilters