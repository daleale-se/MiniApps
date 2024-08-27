import showGrid from "./js/display/showGrid.js"
import createGrid from "./js/createGrid.js"
import updateButtons from "./js/display/updateButtons.js"
import startGame from "./js/startGame.js"

const newGame = () => {
    updateButtons()
    document.getElementById("score-container").classList.remove("hidden")
    document.querySelector(".next-shape").classList.remove("hidden")
    startGame()
}

const main = () => {
    showGrid(createGrid())
    document.getElementById("start-button").addEventListener("click", newGame)
}

main()