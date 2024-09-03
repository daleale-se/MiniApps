const slides = document.querySelectorAll(".slide")
const nextBtn = document.querySelector(".nextBtn")
const prevBtn = document.querySelector(".prevBtn")

slides.forEach((slide, i) => {
    slide.style.left = `${i*100}%`
})

let counter = 0

nextBtn.addEventListener("click", () => {
    counter++
    doTransform()
})

prevBtn.addEventListener("click", () => {
    counter--
    doTransform()
})

function doTransform() {
    // if (counter === slides.length) {
    //     counter = 0
    // }
    // if (counter < 0) {
    //     counter = slides.length - 1
    // }
    // working with buttons
    if (counter < slides.length - 1) {
        nextBtn.style.display = "block"
    } else {
        nextBtn.style.display = "none"
    }
    if (counter > 0) {
        prevBtn.style.display = "block"
    } else {
        prevBtn.style.display = "none"
    }
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}

prevBtn.style.display = "none"