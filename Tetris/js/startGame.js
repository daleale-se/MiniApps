import createGrid from "./createGrid.js"
import randomLetter from "./randomLetter.js"
import buildTetromino from "./buildTetromino.js"
import updateNextShape from "./display/updateNextShape.js"
import updateGrid from "./updateGrid.js"
import showGrid from "./display/showGrid.js"
import showScore from "./display/showScore.js"
import showHighscore from "./display/showHighscore.js"
import saveHighscoreToLocalStorage from "./saveHighscoreToLocalStorage.js"
import scoreCompleteRows from "./scoreCompleteRows.js"
import clearCompleteRows from "./clearCompleteRows.js"
import leftCollision from "./leftCollision.js"
import rightCollision from "./rightCollision.js"
import downCollision from "./downCollision.js"
import dropShape from "./dropShape.js"
import rotateShapeToLeft from "./rotateShapeToLeft.js"
import canGoToLeft from "./canGoToLeft.js"
import movementsToLeft from "./movementsToLeft.js"
import gridTopOverlap from "./gridTopOverlap.js"

const startGame = () => {
    let grid = createGrid()
    let shape = buildTetromino(randomLetter())
    let position = [4, 0]
    let score = 0
    let pausedGame = false
    let nextShape = buildTetromino(randomLetter())
    updateNextShape(nextShape)

    const updateGameInfo = () => {
        showGrid(updateGrid(grid, shape, position));
        showScore(score)
        showHighscore(score)
        saveHighscoreToLocalStorage(score)
    }

    const nextGuess = () => {
        grid = updateGrid(grid, shape, position)
        score = scoreCompleteRows(grid, score)
        grid = clearCompleteRows(grid)
        position = [4, 0]
        shape = nextShape
        nextShape = buildTetromino(randomLetter())
        updateNextShape(nextShape)
    }

    const handleShapeControl = (e) => {
        if (e.key === "p") {
            pauseGame()
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
                if (xPosFixed > 0 && canGoToLeft(grid, rotatedShape, [position[0] - xPosFixed, position[1]])) {
                    position = [position[0] - xPosFixed, position[1]]
                }
                shape = rotatedShape
            } else if (e.key === "k") {
                position = dropShape(grid, shape, position)
                nextGuess()
            }
            updateGameInfo()
        }
    }

    const fallingShapeInterval = () => {
        return setInterval(() => {
            if (!pausedGame) {
                position = [position[0], position[1] + 1]
            }
        }, 400)
    }

    const gridInterval = () => {
        window.addEventListener("keypress", handleShapeControl)
        return setInterval(() => {
            if (!pausedGame) {
                updateGameInfo()
                if (!downCollision(grid, shape, position)) {
                    nextGuess()
                    if (gridTopOverlap(grid)) {
                        updateFallingShapeInterval = clearInterval(updateFallingShapeInterval)
                        updateGridInterval = clearInterval(updateGridInterval)
                        window.removeEventListener("keypress", handleShapeControl)
                        document.querySelector(".gameover").classList.remove("hidden")
                        document.getElementById("pause-button").classList.add("hidden")                        
                    }
                }
            }
        }, 200)
    }

    const restartGame = () => {
        grid = createGrid()
        shape = buildTetromino(randomLetter())
        position = [4, 0]
        score = 0
        pausedGame = false
        if (updateGridInterval === undefined && updateFallingShapeInterval === undefined) {
            updateGridInterval = gridInterval()
            updateFallingShapeInterval = fallingShapeInterval()
        }
        document.getElementById("pause-button").classList.remove("hidden")
        document.querySelector(".gameover").classList.add("hidden")
    }    

    const pauseGame = () => {
        pausedGame = !pausedGame
    }
    
    let updateGridInterval = gridInterval()
    let updateFallingShapeInterval = fallingShapeInterval()

    document.getElementById("restart-button").addEventListener("click", restartGame)
    document.getElementById("pause-button").addEventListener("click", pauseGame)
}

export default startGame