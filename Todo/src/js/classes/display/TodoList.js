import EditTodoPopup from "./EditTodoPopup.js"

export default class TodoList {
    
    constructor() {
        this.todoContainer = document.getElementById("todo-list")
        this.editPopup = new EditTodoPopup()
    }
    
    createCard({ title, description, completed, id}, todoManager) {
        const todoLi = document.createElement("li")  
        todoLi.className = `flex flex-row justify-between items-center p-1 border-2 hover:font-semibold hover:italic transition ${completed ? "bg-green-50 border-green-300" : "bg-cyan-50 border-cyan-300"}`
        const cardTitle = document.createElement("h2")
        cardTitle.textContent = title
        cardTitle.className = "text-xl font-normal ml-2"
        const btnSection = document.createElement("section")
        const completedBtn = document.createElement("button")
        completedBtn.innerHTML = `<i class="fas ${completed ? "fa-toggle-on text-green-500" : "fa-toggle-off text-cyan-500" }"></i>`
        completedBtn.className = "p-2 hover:scale-125 transition"
        completedBtn.onclick = () => todoManager.completedTodo(id)
        const editBtn = document.createElement("button")
        editBtn.className = "p-2 hover:scale-125 transition"
        editBtn.onclick = () =>  this.editPopup.displayPopup(todoManager, { title, description, id })
        const deleteBtn = document.createElement("button")
        deleteBtn.className = "p-2 hover:scale-125 transition"
        deleteBtn.onclick = () => todoManager.removeTodo(id)
        btnSection.append(completedBtn, editBtn, deleteBtn)
        todoLi.append(cardTitle, btnSection)
        if (completed) {
            deleteBtn.innerHTML = `<i class="fa-solid fa-trash text-red-400"></i>`
            editBtn.innerHTML = `<i class="fa-regular fa-pen-to-square text-slate-400"></i>`
            editBtn.setAttribute("disabled", true)
        } else {
            deleteBtn.innerHTML = `<i class="fa-solid fa-trash text-slate-400"></i>`
            editBtn.innerHTML = `<i class="fa-regular fa-pen-to-square text-yellow-500"></i>`
            deleteBtn.setAttribute("disabled", true)
        }
        this.todoContainer.appendChild(todoLi)
    }

    clearTodos() {        
        this.todoContainer.innerHTML = ""
    }

}