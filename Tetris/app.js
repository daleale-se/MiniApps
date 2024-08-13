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

const main = () => {
    
    let grid = createGrid()
    let shape = buildTetromino(randomLetter())
    let position = [4, 0]
    let score = 0

    const handleKeyControl = (e) => {
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
    }

    let fallingInterval = setInterval(() => {
        position = [position[0], position[1] + 1]
    }, 600)

    let updateGridInterval = setInterval(() => {
        showGrid(updateGrid(grid, shape, position));
        showScore(score)
        if (!downCollision(grid, shape, position)) {
            grid = updateGrid(grid, shape, position)
            if (gridTopOverlap(grid)) {
                console.log("game over");
                clearInterval(fallingInterval)
                clearInterval(updateGridInterval)
                document.removeEventListener("keypress", handleKeyControl)
            }
            score = scoreCompleteRows(grid, score)
            grid = clearCompleteRows(grid, position)
            position = [4, 0]
            shape = buildTetromino(randomLetter())
        }
    }, 200)

    document.addEventListener("keypress", handleKeyControl)

}

main()