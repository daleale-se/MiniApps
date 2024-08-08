import shapeHeight from "./utils/shapeHeight.js";
import shapeWidth from "./utils/shapeWidth.js";

const updateGrid = (grid, shape, pos = [4, 0]) => {

    const [ xPos, yPos ] = pos
    const newGrid = JSON.parse(JSON.stringify(grid))

    let i = 0
    while (yPos - i > -1 && i < shapeHeight(shape)) {
        for (let j = 0; j < shapeWidth(shape); j++) {
            newGrid[yPos - i][xPos + j] = shape[shapeHeight(shape) - 1 - i][j]
        }
        i++
    }
    
    return newGrid

}

export default updateGrid