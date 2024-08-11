import EditTodoPopup from "./EditTodoPopup.js"

export default class TodoList {
    
    constructor() {
        this.todoContainer = document.getElementById("todo-list")
        this.editPopup = new EditTodoPopup()
    }
    
    createCard({ title, description, completed, id}, todoManager) {
        const todoLi = document.createElement("li")  
        todoLi.className = `border-4 border-solid inline-block ${completed ? "bg-fuchsia-200 border-fuchsia-400" : "bg-cyan-100 border-cyan-300"}`
        const cardTitle = document.createElement("h2")
        cardTitle.textContent = title
        cardTitle.className = "text-xl font-semibold"
        const cardDescription = document.createElement("p")
        cardDescription.textContent = description
        const btnSection = document.createElement("section")
        const completedBtn = document.createElement("button")
        completedBtn.textContent = "completed"
        completedBtn.className = "bg-green-400 p-2"
        completedBtn.onclick = () => this.completedTodo(todoManager, id)
        const editBtn = document.createElement("button")
        editBtn.innerText = "edit"
        editBtn.className = "bg-yellow-400 p-2"
        editBtn.onclick = () =>  this.editTodo(todoManager, { title, description, id })
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "delete"
        deleteBtn.className = "bg-red-400 p-2"
        deleteBtn.onclick = () => this.deleteTodo(todoManager, id)
        btnSection.append(completedBtn, editBtn, deleteBtn)
        todoLi.append(cardTitle, cardDescription, btnSection)
        this.todoContainer.appendChild(todoLi)
    }   

    clearTodos() {
        this.todoContainer.innerHTML = ""
    }

    completedTodo(todoManager, id) {
        todoManager.completedTodo(id)
        this.updateTodos(todoManager)
    }

    editTodo(todoManager, todoContent) {
        this.editPopup.displayPopup(todoContent, todoManager, this)
    }

    deleteTodo(todoManager, id) {
        todoManager.removeTodo(id)
        this.updateTodos(todoManager)
    }

    updateTodos(todoManager) {
        this.clearTodos()
        todoManager.displayList(this)
    }

    createTodos(todos, todoManager) {
        todos.forEach(todo => todoManager.addTodo(todo));
        this.updateTodos(todoManager)
    }
    
}