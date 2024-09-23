const modalEvents = () => {
    const modalContainer = document.querySelector(".modal-container")
    modalContainer.addEventListener("click", (e) => {
        if (e.target === modalContainer) {
            modalContainer.classList.add("hidden")
        }
    })    
}

export default modalEvents