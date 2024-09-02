const alertText = document.querySelector(".alert")
const form = document.querySelector(".grocery-form")
const grocery = document.getElementById("grocery")
const submitBtn = document.querySelector(".submit-btn")
// const container = document.querySelector(".grocery-container")
const list = document.querySelector(".grocery-list")
const clearBtn = document.querySelector(".clear-btn")

let editID = "";

const deletedGrocery = "grocery deleted succefully"
const addedGrocery = "grocery added succefully"
const deletedAllGroceries = "groceries deleted succefully"
const editedGrocery = "grocery edited succefully"

const showMessage = (message, classType) => {
    alertText.textContent = message
    alertText.classList.add(classType)
    setTimeout(() => {
        alertText.textContent = ""
        alertText.classList.remove(classType)
    }, 1500)
}

const saveGroceries = () => {
    const groceries = list.querySelectorAll(".grocery-item")
    const groceriesData = Array.from(groceries).map(item => ({id: item.id, groceryItem: item.firstElementChild.textContent}))
    localStorage.setItem("groceries", JSON.stringify(groceriesData))
}

const loadGroceries = () => {
    const groceries = JSON.parse(localStorage.getItem("groceries") ?? "[]")
    groceries.forEach(({id, groceryItem}) => {
        list.innerHTML += itemTemplate(groceryItem, id)
    });
}

const editGrocery = (groceryArticle) => {
    submitBtn.textContent = "update"
    editID = groceryArticle.id
    const groceryValue = groceryArticle.querySelector("p").textContent
    grocery.value = groceryValue
}

const deleteGrocery = groceryArticle => {
    groceryArticle.remove()
    saveGroceries()
}

const itemTemplate = (groceryItem, id = new Date().getTime()) => `          
        <article class="grocery-item" id=${id}>
            <p class="title">${groceryItem}</p>
            <div class="btn-container">
                <button class="edit-btn"><i class="fas fa-edit"></i></button>
                <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
        </article>`

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (grocery.value) {
        if (editID) {
            const groceryArticle = document.getElementById(editID)
            groceryArticle.querySelector("p").textContent = grocery.value
            submitBtn.textContent = "submit"
            editID = ""
            showMessage(editedGrocery, "alert-success")
        } else {
            list.innerHTML += itemTemplate(grocery.value)
            showMessage(addedGrocery, "alert-success")
        }
        grocery.value = ""
        saveGroceries()
    }
})

list.addEventListener("click", (e) => {
    if (e.target.tagName === "I" || e.target.tagName === "BUTTON") {
        const btnAction = e.target.tagName === "I" ? e.target.parentNode : e.target    
        const groceryArticle = btnAction.parentNode.parentNode
        if (btnAction.className.includes("edit")) {
            editGrocery(groceryArticle)
        } else {
            deleteGrocery(groceryArticle)
            showMessage(deletedGrocery, "alert-danger")
        }
    }
})

loadGroceries()

clearBtn.addEventListener("click", () => {
    document.querySelectorAll(".grocery-item").forEach(item => deleteGrocery(item))
    showMessage(deletedAllGroceries, "alert-danger")
})

// ****** SELECT ITEMS **********

// edit option

// ****** EVENT LISTENERS **********

// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
