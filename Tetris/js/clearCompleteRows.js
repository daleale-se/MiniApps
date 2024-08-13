import createGrid from "./createGrid.js"
import completeRow from "./completeRow.js"

// const mixedRow = (row) => {
//     return (new Set(row)).size !== 1
// }

// const emptyRow = (row) => {
//     return row.filter(e => e !== "_").length === 0   
// }

const clearCompleteRows = (grid) => {

    const filteredGrid = grid.toReversed().filter(row => !completeRow(row))
    const newGrid = createGrid().concat(filteredGrid.toReversed()).filter((_, i) => i >= filteredGrid.length)

    return newGrid

}

export default clearCompleteRows

