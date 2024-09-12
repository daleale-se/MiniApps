
const isNumeric = str => /^[+-]?\d+(\.\d+)?$/.test(str)
const isOperation = str => /[+\-*/]/.test(str);
const isEqual = str => str === "="
const isAllClear = str => str === "AC"
const isDelete = str => str === "DEL"
const isDot = str => str === "."

const calculatorLogic = () => {
    let currentOperator = ""
    let prevNumber = ""
    let currentNumber = ""
    let dot = ""

    return {
        changeOperator: (operator) =>  {

            if (currentNumber !== ".") {
                if (currentNumber !== "") {
                    currentOperator = operator
                    prevNumber = currentNumber
                    currentNumber = ""
                } else if (prevNumber !== "") {
                    currentOperator = operator
                }
            }
        },
        runOperation: () => {
            if (currentNumber !== ""){
                switch(currentOperator) {
                    case "+": currentNumber = String(Number(prevNumber) + Number(currentNumber)); break
                    case "-": currentNumber = String(Number(prevNumber) - Number(currentNumber)); break
                    case "*": currentNumber = String(Number(prevNumber) * Number(currentNumber)); break
                    case "/": currentNumber = String(Number(prevNumber) / Number(currentNumber)); break
                }
                if (currentNumber.includes(".") && currentNumber.split(".")[1].length > 5) {
                    currentNumber = Number(currentNumber).toFixed(5)
                }
                prevNumber = ""
                currentOperator = ""
                saveLocalStorage(currentNumber)
                showResultsFromStorage()
            }
        },
        getData: () => ({ currentOperator, prevNumber, currentNumber }),
        concatDigit: (numberStr) => {
            if (currentNumber !== "0") {
                if (!(currentNumber.length > 12)) {
                    if (!currentNumber.includes(".")) {
                        currentNumber += numberStr
                    } else if (currentNumber.includes(".") && !(currentNumber.split(".")[1].length > 5)) {
                        currentNumber += numberStr
                    }
                }
            } else if (numberStr !== "0") {
                currentNumber = numberStr
            }
        },
        clearDigits: () => {
            currentOperator = ""
            prevNumber = ""
            currentNumber = ""
        },
        deleteLastDigit: () => {
            if (currentNumber.length > 0) {
                currentNumber = currentNumber.slice(0, -1)
            }
        },
        numberIsFloat: () => {
            return currentNumber.includes(".")
        },
        setCurrentNumber: (number) => {
            currentNumber = number
        }
    }
}

const { runOperation, 
    deleteLastDigit, 
    clearDigits, 
    concatDigit, 
    changeOperator, 
    getData, 
    numberIsFloat,
    setCurrentNumber } = calculatorLogic()

const updateDisplay = ({ currentOperator, prevNumber, currentNumber }) => {
    document.querySelector(".operator").textContent = currentOperator
    document.querySelector(".previous").textContent = prevNumber
    document.querySelector(".current").textContent = currentNumber
}

const saveLocalStorage = (number) => {
    const data = JSON.parse(localStorage.getItem("calculator-storage")) ?? []
    data.push({ number, id: new Date().getTime() })
    localStorage.setItem("calculator-storage", JSON.stringify(data))
}

const removeIdFromStorage = (id) => {
    const data = JSON.parse(localStorage.getItem("calculator-storage"))
    const newData = data.filter(result => result.id !== id)
    localStorage.setItem("calculator-storage", JSON.stringify(newData))
}

const showResultsFromStorage = () => {
    const storageDiv = document.querySelector(".calculator-history")
    storageDiv.innerHTML = ""
    const data = JSON.parse(localStorage.getItem("calculator-storage")) ?? []

    if (data.length > 0) {
        document.querySelector(".warning").innerHTML = ""
        data.forEach(dataProps => storageDiv.appendChild(createTemplateResult(dataProps)))
    } else {
        document.querySelector(".warning").innerHTML = "<p>Make some operations dear!</p>"
    }
}

const createTemplateResult = ({number, id}) => {
    const liContainer = document.createElement("li") 
    const spanResult = document.createElement("span")
    spanResult.textContent = number
    const btnContainer = document.createElement("div")
    const editBtn = document.createElement("button")
    editBtn.classList.add("copy")
    editBtn.innerHTML = `<i class="fa-regular fa-copy"></i>`
    editBtn.addEventListener("click", () => {
        setCurrentNumber(number)
        updateDisplay(getData())
    })
    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove")
    removeBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
    removeBtn.addEventListener("click", () => {
        removeIdFromStorage(id)
        showResultsFromStorage()
    })
    btnContainer.append(editBtn, removeBtn)
    liContainer.append(spanResult, btnContainer)
    return liContainer
}

updateDisplay(getData())
showResultsFromStorage()
const buttons = document.querySelectorAll("button")
buttons.forEach(btn => btn.addEventListener("click", (e) => {
    if (isNumeric(btn.innerText)) {
        concatDigit(btn.innerText)
    } else if (isOperation(btn.innerText)) {
        changeOperator(btn.innerText)
    } else if (isEqual(btn.innerText)) {
        runOperation()
    } else if (isAllClear(btn.innerText)) {
        clearDigits()
    } else if (isDelete(btn.innerText)) {
        deleteLastDigit()
    } else if (isDot(btn.innerText)) {
        if (!numberIsFloat()) {
            concatDigit(btn.innerText)
        }
    }
    updateDisplay(getData())
}))