import buildRow from "./buildRow.js"

const showGrid = (grid) => {

    const gridContainer = document.getElementById("grid")
    gridContainer.innerHTML = ""
    const rowsElements = grid.map(row => buildRow(row))
    for (const row of rowsElements) {
        gridContainer.appendChild(row)
    }

}

export default showGrid