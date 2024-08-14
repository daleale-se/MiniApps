const openModalBtn = document.querySelector(".modal-btn")
const modal = document.querySelector(".modal-overlay")

openModalBtn.addEventListener("click", () => {
    modal.classList.add("open-modal")
})

const closeModalBtn = document.querySelector(".close-btn")
closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("open-modal")
})
