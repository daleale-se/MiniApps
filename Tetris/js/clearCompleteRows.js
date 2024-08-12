import createGrid from "./createGrid.js"

const mixedRow = (row) => {
    return (new Set(row)).size !== 1
}

const emptyRow = (row) => {
    return row.filter(e => e !== "_").length === 0   
}

const completeRow = (row) => {
    return row.filter(e => e === "_").length === 0
}

const clearCompleteRows = (grid, [xPos, yPos]) => {

    const filteredGrid = grid.toReversed().filter(row => !completeRow(row))
    const newGrid = createGrid().concat(filteredGrid.toReversed()).filter((_, i) => i >= filteredGrid.length)


    // for (let i = 0; i < 20 - newGrid.length ; i++) {
    //     newGrid.push(Array.from({length: 10}).map(_ => "_"))        
    // }

    // let j = -1
    // let i = 0
    // while(!emptyRow(newGrid[yPos - i])) {
    //     const row = newGrid[yPos - i]
    //     if (completeRow(row) && j === -1) {
    //         j = i
    //     } else if (mixedRow(row)) {
    //         newGrid[j] = row
    //         j++
    //     }
    //     i++
    // }

    console.log(newGrid);

    return newGrid

}

export default clearCompleteRows

