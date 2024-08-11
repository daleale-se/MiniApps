import { COLORS } from "./js/constanst.js"
import buildTetromino from "./js/buildTetromino.js"
import createGrid from "./js/createGrid.js"
import updateGrid from "./js/updateGrid.js"
import shapeDoingCollision from "./js/downCollision.js"
import randomLetter from "./js/randomLetter.js"
import rotateShapeToLeft from "./js/rotateShapeToLeft.js"
import leftCollision from "./js/leftCollision.js"
import rightCollision from "./js/rightCollision.js"
import dropShape from "./js/dropShape.js"

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

    let movementInterval = setInterval(() => {
        showGrid(updateGrid(grid, shape, position));
        position = [position[0], position[1] + 1]
    }, 800)

    let interval = setInterval(() => {
        if (!shapeDoingCollision(grid, shape, position)) {
            grid = clearLines(grid)
            grid = updateGrid(grid, shape, position)
            position = [4, 0]
            shape = buildTetromino(randomLetter())
        }
    }, 100)

    document.addEventListener("keypress", (e) => {
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
        }
        showGrid(updateGrid(grid, shape, position));
    })

}

main()