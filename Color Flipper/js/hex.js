const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const randomHexChar = () => {
    return String(HEX[Math.floor(Math.random()*HEX.length)])
}

const createColor = () => {
    return "#" + Array.from({ length: 6 }, () => randomHexChar()).join("")
}

// my solutions was using closures
const pickColor = () => {

    return () => {

        const bodyElement = document.body
        const colorSpan = document.querySelector(".color")
        const color = createColor()

        bodyElement.style.backgroundColor = color
        colorSpan.textContent = color
        colorSpan.style.color = color
        colorSpan.style.textTransform = "uppercase"

    }
}

const main = () => {

    const clickMeBtn = document.getElementById("btn")
    const btnHandler = pickColor()
    btnHandler()
    clickMeBtn.addEventListener("click", btnHandler)

}

main()