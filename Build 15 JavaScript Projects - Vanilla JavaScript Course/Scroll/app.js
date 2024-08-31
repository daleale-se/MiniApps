// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const currentDate = new Date()
document.getElementById("date").innerText = currentDate.getFullYear()

// ********** close links ************

const navListTemplate = (section) => `<li><a href="#${section}" class="scroll-link">${section}</a></li> `

const setNavHeight = (value) => {
    const linksContainer = document.querySelector(".links-container")
    linksContainer.style.height = `${value}px`
}

const sections = ["home", "about", "services", "tours"]
const navTemplates = sections.map(section => navListTemplate(section)).join("")
document.querySelector(".links").innerHTML = navTemplates

// const dynamicHeight = sections.length * 50

// let openedNav = false 

// document.querySelector(".nav-toggle").addEventListener("click", () => {
//     openedNav = !openedNav
//     openedNav ? setNavHeight(dynamicHeight) : setNavHeight(0)
// })

document.querySelector(".nav-toggle").addEventListener("click", () => {
    const linksContainer = document.querySelector(".links-container")
    const links = document.querySelector(".links")
    
    // get a object with the box sizing of a element
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0
    }
})

// ********** fixed navbar ************

window.addEventListener("scroll", () => {
    const navBar = document.getElementById("nav")
    const backToTop = document.querySelector(".top-link")
    const navbarHeight = navBar.getBoundingClientRect().height
    
    scrollY > navbarHeight ? navBar.classList.add("fixed-nav") : navBar.classList.remove("fixed-nav")
    scrollY > 500 ? backToTop.classList.add("show-link") : backToTop.classList.remove("show-link")
})

// ********** smooth scroll ************

// select links
const scrollLinks = document.querySelectorAll(".scroll-link")

scrollLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault()

        const id = e.currentTarget.getAttribute("href").slice(1)
        const section = document.getElementById(id)

        const linksContainer = document.querySelector(".links-container")
        const navBar = document.getElementById("nav")
        
        const navbarHeight = navBar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navBar.classList.contains("fixed-nav")
        
        let position = section.offsetTop - navbarHeight

        if (!fixedNav) {
            position -= navbarHeight
        } 

        if (navbarHeight > 82) {
            position = position + containerHeight
        }
        
        window.scrollTo({
            top: position
        })
        linksContainer.style.height = 0
    })
})

