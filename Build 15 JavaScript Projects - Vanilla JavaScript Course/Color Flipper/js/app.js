const COLORS = ["#f1f5f8", "green", "red", "rgba(133,122,200)", "#f15025"];

// my solutions was using closures
const pickColor = () => {

    let index = 0

    return () => {

        const bodyElement = document.body
        const colorSpan = document.querySelector(".color")
        const color = COLORS[index]
        bodyElement.style.backgroundColor = color
        colorSpan.textContent = color
        colorSpan.style.color = color
        colorSpan.style.textTransform = "uppercase"

        if (index == COLORS.length - 1) {
            index = 0
        } else {
            index += 1
        }

    }
}

const main = () => {

    const clickMeBtn = document.getElementById("btn")
    const btnHandler = pickColor()
    btnHandler()
    clickMeBtn.addEventListener("click", btnHandler)

}

main()