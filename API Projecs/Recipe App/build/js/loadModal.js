const loadModal = async () => {
    await fetch("modal.html") 
    .then(response => response.text()) 
    .then(view => document.querySelector(".modal-container").innerHTML = view); 
}

export default loadModal