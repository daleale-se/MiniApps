const displayValue = (value) => {
    const spanValue = document.getElementById("value")
    spanValue.textContent = value
    if (value > 0) {
        spanValue.style.color = "green"
    } else if (value < 0) {
        spanValue.style.color = "red"
    } else {
        spanValue.style.color = ""
    }
}

// using local variables and nested functions 
const main = () => {
    
    let counter = 0

    function increaseBtnHandler() {
        counter += 1
        displayValue(counter)
    }

    function resetBtnHandler() {
        counter = 0
        displayValue(counter)
    }

    function decreaseBtnHandler() {
        counter -= 1
        displayValue(counter)
    }

    document.querySelector(".increase").addEventListener("click", increaseBtnHandler)
    document.querySelector(".reset").addEventListener("click", resetBtnHandler)
    document.querySelector(".decrease").addEventListener("click", decreaseBtnHandler)

}

main()