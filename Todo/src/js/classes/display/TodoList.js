export default class TodoList {
    
    constructor() {
        this.todoContainer = document.getElementById("todo-list")
    }
    
    createCard({ title, description, checked }) {
        const todoLi = document.createElement("li")  
        todoLi.className = "border-4 border-solid border-cyan-300 inline-block bg-cyan-100"
        const cardTitle = document.createElement("h2")
        cardTitle.textContent = title
        cardTitle.className = "text-xl font-semibold"
        const cardDescription = document.createElement("p")
        cardDescription.textContent = description
        const btnSection = document.createElement("section")
        const checkBtn = document.createElement("button")
        checkBtn.textContent = "check"
        checkBtn.className = "bg-green-400 p-2"
        const editBtn = document.createElement("button")
        editBtn.innerText = "edit"
        editBtn.className = "bg-yellow-400 p-2"
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "delete"
        deleteBtn.className = "bg-red-400 p-2"
        btnSection.append(checkBtn, editBtn, deleteBtn)
        todoLi.append(cardTitle, cardDescription, btnSection)
        this.todoContainer.appendChild(todoLi)
    }   

    clearTodos() {
        this.todoContainer.innerHTML = ""
    }
    
}