import buildTetromino from "./js/buildTetromino.js"
import createGrid from "./js/createGrid.js"
import updateGrid from "./js/updateGrid.js"
import shapeDoingCollision from "./js/shapeDoingCollision.js"
import randomLetter from "./js/randomLetter.js"
import { COLORS } from "./js/constanst.js"

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

    let interval = setInterval(() => {
        showGrid(updateGrid(grid, shape, position));
        if (shapeDoingCollision(grid, shape, position)) {
            position = [position[0], position[1] + 1]
        } else {
            grid = updateGrid(grid, shape, position)
            position = [4, 0]
            shape = buildTetromino(randomLetter())
        }
    }, 1000)

    const leftBtn = document.createElement("button")
    leftBtn.innerText = "left"
    leftBtn.addEventListener("click", () => {
        position = [position[0] - 1, position[1]]
    })
    const rightBtn = document.createElement("button")
    rightBtn.innerText = "right"
    rightBtn.addEventListener("click", () => {
        position = [position[0] + 1, position[1]]
    })

    document.body.append(leftBtn, rightBtn)

}

main()