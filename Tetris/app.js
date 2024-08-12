import { COLORS } from "./js/constanst.js"
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

const buildRow = (row) => {
    const rowContainer = document.createElement("div")
    rowContainer.classList.add("row")
    rowContainer.innerHTML = row.map(e => `<span class="${COLORS[e]} block"></span>`).join("")
    return rowContainer
}

const showGrid = (grid) => {

    const gridContainer = document.getElementById("grid")
    gridContainer.remove()
    gridContainer.innerHTML = ""
    const rowsElements = grid.map(row => buildRow(row))
    for (const row of rowsElements) {
        gridContainer.appendChild(row)
    }
    document.body.appendChild(gridContainer)

}

const main = () => {
    
    let grid = createGrid()
    let shape = buildTetromino(randomLetter())
    let position = [4, 0]

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
            shape = rotateShapeToLeft(shape)
        } else if (e.key === "k") {
            position = dropShape(grid, shape, position)

            grid = updateGrid(grid, shape, position)
            position = [4, 0]
            shape = buildTetromino(randomLetter())
        }
        showGrid(updateGrid(grid, shape, position));
    }

    let fallingInterval = setInterval(() => {
        position = [position[0], position[1] + 1]
    }, 600)

    let updateGridInterval = setInterval(() => {
        showGrid(updateGrid(grid, shape, position));
        if (!downCollision(grid, shape, position)) {
            grid = updateGrid(grid, shape, position)
            if (gridTopOverlap(grid)) {
                console.log("game over");
                clearInterval(fallingInterval)
                clearInterval(updateGridInterval)
                document.removeEventListener("keypress", handleKeyControl)
            }
            position = [4, 0]
            shape = buildTetromino(randomLetter())
        }
    }, 200)

    document.addEventListener("keypress", handleKeyControl)

}

main()