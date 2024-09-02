// const alertText = document.querySelector(".alert")
// const form = document.querySelector(".grocery-form")
// const grocery = document.getElementById("grocery")
// const submitBtn = document.querySelector(".submit-btn")
// const list = document.querySelector(".grocery-list")
// const clearBtn = document.querySelector(".clear-btn")

// let editID = "";

// const deletedGrocery = "grocery deleted succefully"
// const addedGrocery = "grocery added succefully"
// const deletedAllGroceries = "groceries deleted succefully"
// const editedGrocery = "grocery edited succefully"

// const showMessage = (message, classType) => {
//     alertText.textContent = message
//     alertText.classList.add(classType)
//     setTimeout(() => {
//         alertText.textContent = ""
//         alertText.classList.remove(classType)
//     }, 1500)
// }

// const saveGroceries = () => {
//     const groceries = list.querySelectorAll(".grocery-item")
//     const groceriesData = Array.from(groceries).map(item => ({id: item.id, groceryItem: item.firstElementChild.textContent}))
//     localStorage.setItem("groceries", JSON.stringify(groceriesData))
// }

// const loadGroceries = () => {
//     const groceries = JSON.parse(localStorage.getItem("groceries") ?? "[]")
//     groceries.forEach(({id, groceryItem}) => {
//         list.innerHTML += itemTemplate(groceryItem, id)
//     });
// }

// const editGrocery = (groceryArticle) => {
//     submitBtn.textContent = "update"
//     editID = groceryArticle.id
//     const groceryValue = groceryArticle.querySelector("p").textContent
//     grocery.value = groceryValue
// }

// const deleteGrocery = groceryArticle => {
//     groceryArticle.remove()
//     saveGroceries()
// }

// const itemTemplate = (groceryItem, id = new Date().getTime()) => `          
//         <article class="grocery-item" id=${id}>
//             <p class="title">${groceryItem}</p>
//             <div class="btn-container">
//                 <button class="edit-btn"><i class="fas fa-edit"></i></button>
//                 <button class="delete-btn"><i class="fas fa-trash"></i></button>
//             </div>
//         </article>`

// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     if (grocery.value) {
//         if (editID) {
//             const groceryArticle = document.getElementById(editID)
//             groceryArticle.querySelector("p").textContent = grocery.value
//             submitBtn.textContent = "submit"
//             editID = ""
//             showMessage(editedGrocery, "alert-success")
//         } else {
//             list.innerHTML += itemTemplate(grocery.value)
//             showMessage(addedGrocery, "alert-success")
//         }
//         grocery.value = ""
//         saveGroceries()
//     }
// })

// list.addEventListener("click", (e) => {
//     if (e.target.tagName === "I" || e.target.tagName === "BUTTON") {
//         const btnAction = e.target.tagName === "I" ? e.target.parentNode : e.target    
//         const groceryArticle = btnAction.parentNode.parentNode
//         if (btnAction.className.includes("edit")) {
//             editGrocery(groceryArticle)
//         } else {
//             deleteGrocery(groceryArticle)
//             showMessage(deletedGrocery, "alert-danger")
//         }
//     }
// })

// loadGroceries()

// clearBtn.addEventListener("click", () => {
//     document.querySelectorAll(".grocery-item").forEach(item => deleteGrocery(item))
//     showMessage(deletedAllGroceries, "alert-danger")
// })

// ****** SELECT ITEMS **********

const alertText = document.querySelector(".alert")
const form = document.querySelector(".grocery-form")
const grocery = document.getElementById("grocery")
const submitBtn = document.querySelector(".submit-btn")
const container = document.querySelector(".grocery-container")
const list = document.querySelector(".grocery-list")
const clearBtn = document.querySelector(".clear-btn")

// edit option

let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********

// submit form

form.addEventListener("submit", addItem)

// clear items

clearBtn.addEventListener("click", clearItems)

// load items

window.addEventListener("DOMContentLoaded", setupItems)

// ****** FUNCTIONS **********

function addItem(e){
    e.preventDefault()
    const value = grocery.value
    const id = new Date().getTime().toString()
    if (value && !editFlag) {
        createListItem(id, value)
        displayAlert("item added to the list", "success")
        container.classList.add("show-container")
        addToLocalStorage(id, value)
        setBackToDefault()
    } else if (value && editFlag) {
        editElement.innerHTML = value
        displayAlert("value changed", "success")
        editToLocalStorage(editID, value)
        setBackToDefault()
    } else {
        displayAlert("please enter value", "danger")
    }
}

// display alert
function displayAlert(text, action) {
    alertText.textContent = text
    alertText.classList.add(`alert-${action}`)
    setTimeout(() => {
        alertText.textContent = ""
        alertText.classList.remove(`alert-${action}`)
    }, 1000)
}

// clear items

function clearItems() {
    const items = document.querySelectorAll(".grocery-item")    
    if (items.length > 0) {
        items.forEach((item) => item.remove())
        container.classList.remove("show-container")
        displayAlert("empty list", "danger")
        setBackToDefault()
        localStorage.removeItem("list")
    } 
}

// delete function

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement
    const id = element.dataset.id
    element.remove()
    list.children.length === 0 && container.classList.remove("show-container")
    displayAlert("item removed", "danger")
    setBackToDefault()
    removeFromLocalStorage(id)
}

// edit function 
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement
    editElement = e.currentTarget.parentElement.previousElementSibling
    grocery.value = editElement.innerHTML
    editFlag = true
    editID = element.dataset.id
    submitBtn.textContent = "edit"
}

// set back to default

function setBackToDefault() {
    grocery.value = ""
    editFlag = false
    editID = ""
    submitBtn.textContent = "submit"
}

// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value) {
    const grocery = {id, value}
    const items = [...getLocalStorage(), grocery]
    localStorage.setItem("list", JSON.stringify(items))
}

function editToLocalStorage(id, value) {
    const items = getLocalStorage().map(item => {
        if (item.id === id) {
            item.value = value
        }
        return item
    })
    localStorage.setItem("list", JSON.stringify(items))
}

function removeFromLocalStorage(id) {
    const items = getLocalStorage().filter(item => item.id !== id)
    localStorage.setItem("list", JSON.stringify(items))
}

function getLocalStorage() {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []
}

// ****** SETUP ITEMS **********

function setupItems() {
    const items = getLocalStorage()
    if (items.length > 0) {
        items.forEach(({id, value}) => createListItem(id, value))
        container.classList.add("show-container")
    }
}

function createListItem(id, value) {
    const element = document.createElement("article")
    element.classList.add("grocery-item")
    const attr = document.createAttribute("data-id")
    attr.value = id
    element.setAttributeNode(attr)
    element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <button class="edit-btn"><i class="fas fa-edit"></i></button>
          <button class="delete-btn"><i class="fas fa-trash"></i></button>
        </div>`
    const deleteBtn = element.querySelector(".delete-btn")
    const editBtn = element.querySelector(".edit-btn")
    deleteBtn.addEventListener("click", deleteItem)
    editBtn.addEventListener("click", editItem)
    list.appendChild(element)
}