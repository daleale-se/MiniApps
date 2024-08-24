import showGrid from "./js/display/showGrid.js"
import showScore from "./js/display/showScore.js"
import buildTetromino from "./js/buildTetromino.js"
import createGrid from "./js/createGrid.js"
import updateGrid from "./js/updateGrid.js"
import randomLetter from "./js/randomLetter.js"
import rotateShapeToLeft from "./js/rotateShapeToLeft.js"
import leftCollision from "./js/leftCollision.js"
import rightCollision from "./js/rightCollision.js"
import dropShape from "./js/dropShape.js"
import downCollision from "./js/downCollision.js"
import gridTopOverlap from "./js/gridTopOverlap.js"
import clearCompleteRows from "./js/clearCompleteRows.js"
import movementsToLeft from "./js/movementsToLeft.js"
import canGoToLeft from "./js/canGoToLeft.js"
import scoreCompleteRows from "./js/scoreCompleteRows.js"

const updateButtons = () => {
    const startButton = document.getElementById("start-button")
    startButton.classList.add("hidden")
    const restartButton = document.getElementById("restart-button")
    restartButton.classList.remove("hidden")
    const pauseButton = document.getElementById("pause-button")
    pauseButton.classList.remove("hidden")
}

const showScoreContainer = () => {
    const buttonContainer = document.getElementById("score-container")
    buttonContainer.classList.remove("hidden")
}

const showHighscore = (score) => {
    const highscoreText = document.getElementById("highscore")
    const prevHighscore = JSON.parse(localStorage.getItem("tetris-highscore")) ?? 0
    highscoreText.textContent = prevHighscore < score ? score : prevHighscore
}

const saveHighscoreToLocalStorage = (score) => {
    const hightscore = JSON.parse(localStorage.getItem("tetris-highscore")) ?? 0
    if (hightscore < score) {
        localStorage.setItem("tetris-highscore", JSON.stringify(score))
    }
}

const showGameOver = () => {
    const gameOverText = document.querySelector(".gameover")
    gameOverText.classList.remove("hidden")
}

const newGame = () => {
    let grid = createGrid()
    let shape = buildTetromino(randomLetter())
    let position = [4, 0]
    let score = 0
    let pausedGame = false

    const handleKeyControl = (e) => {
        if (e.key === "p") {
            console.log("paused");
            pausedGame = !pausedGame
        }
        if (!pausedGame) {            
            if (e.key === "j") {
                if (!leftCollision(grid, shape, position)) {
                    position = [position[0] - 1, position[1]]
                }
            } else if (e.key === "l") {
                if (!rightCollision(grid, shape, position)) {
                    position = [position[0] + 1, position[1]]
                }
            } else if (e.key === "i") {
                const rotatedShape = rotateShapeToLeft(shape)
                const xPosFixed = movementsToLeft(grid, rotatedShape, position)
                if (xPosFixed === 0) {
                    shape = rotatedShape
                } else if (canGoToLeft(grid, rotatedShape, [position[0] - xPosFixed, position[1]])) {
                    position = [position[0] - xPosFixed, position[1]]
                    shape = rotatedShape
                }    
            } else if (e.key === "k") {
                position = dropShape(grid, shape, position)
    
                grid = updateGrid(grid, shape, position)
                score = scoreCompleteRows(grid, score)
                grid = clearCompleteRows(grid)
                position = [4, 0]
                shape = buildTetromino(randomLetter())
            }
            showGrid(updateGrid(grid, shape, position));
            showScore(score)
            showHighscore(score)
            saveHighscoreToLocalStorage(score)
        }
    }

    const fallingShapeInterval = () => {
        return setInterval(() => {
            if (!pausedGame) {
                position = [position[0], position[1] + 1]
            }
        }, 300)
    }

    let updateFallingShapeInterval = fallingShapeInterval()

    const gridInterval = () => {
        window.addEventListener("keypress", handleKeyControl)
        return setInterval(() => {
            if (!pausedGame) {
                showGrid(updateGrid(grid, shape, position));
                showScore(score)
                showHighscore(score)
                saveHighscoreToLocalStorage(score)
                if (!downCollision(grid, shape, position)) {
                    grid = updateGrid(grid, shape, position)
                    if (gridTopOverlap(grid)) {
                        updateFallingShapeInterval = clearInterval(updateFallingShapeInterval)
                        updateGridInterval = clearInterval(updateGridInterval)
                        window.removeEventListener("keypress", handleKeyControl)
                        showGameOver()
                        document.getElementById("pause-button").classList.add("hidden")
                    }
                    score = scoreCompleteRows(grid, score)
                    grid = clearCompleteRows(grid, position)
                    position = [4, 0]
                    shape = buildTetromino(randomLetter())
                }
            }
        }, 50)
    }

    let updateGridInterval = gridInterval()

    const restartGame = () => {
        grid = createGrid()
        shape = buildTetromino(randomLetter())
        position = [4, 0]
        score = 0
        pausedGame = false
        if (typeof updateGridInterval === "undefined" && typeof updateFallingShapeInterval === "undefined") {
            updateGridInterval = gridInterval()
            updateFallingShapeInterval = fallingShapeInterval()
        }
        document.getElementById("pause-button").classList.remove("hidden")
        document.querySelector(".gameover").classList.add("hidden")
    }    

    const pauseGame = () => {
        pausedGame = !pausedGame
    }

    document.getElementById("restart-button").addEventListener("click", restartGame)
    document.getElementById("pause-button").addEventListener("click", pauseGame)
}

const startGame = () => {
    updateButtons()
    showScoreContainer()
    newGame()
}

const main = () => {
    showGrid(createGrid())
    document.getElementById("start-button").addEventListener("click", startGame)
}

main()