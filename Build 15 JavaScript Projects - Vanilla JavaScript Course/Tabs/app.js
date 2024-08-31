const buttons = document.querySelectorAll(".btn-container button")
const contents = document.querySelectorAll(".content")

// buttons.forEach(btn => btn.addEventListener("click", (e) => {
//     contents.forEach(item => item.classList.remove("active"))
//     buttons.forEach(btn => btn.classList.remove("active"))
//     const id = e.currentTarget.dataset.id
//     const tabItem = document.getElementById(id)
//     tabItem.classList.add("active")
//     btn.classList.add("active")
// }))

const about = document.querySelector(".about")

about.addEventListener("click", (e) => {
    const id = e.target.dataset.id
    if (id) {
        buttons.forEach(btn => btn.classList.remove("active"))
        e.target.classList.add("active")
        contents.forEach(article => article.classList.remove("active"))
        document.getElementById(id).classList.add("active")
    }
})