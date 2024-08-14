const sidebar = document.querySelector(".sidebar")

document.querySelector(".sidebar-toggle").addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar")
})

document.querySelector(".close-btn").addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar")
})