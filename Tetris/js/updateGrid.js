import shapeHeight from "./utils/shapeHeight.js";
import shapeWidth from "./utils/shapeWidth.js";

const updateGrid = (grid, shape, [ xPos, yPos ]) => {

    const newGrid = JSON.parse(JSON.stringify(grid))

    let i = 0
    while (yPos - i > -1 && i < shapeHeight(shape) && yPos < 20) {
        for (let j = 0; j < shapeWidth(shape); j++) {
            if (shape[shapeHeight(shape) - 1 - i][j] !== "_") {
                newGrid[yPos - i][xPos + j] = shape[shapeHeight(shape) - 1 - i][j]
            }
        }
        i++
    }

    // for (let i = 0; i < shapeHeight(shape); i++) {
    //     for (let j = 0; j < shapeWidth(shape); j++) {
    //         if (yPos - i > -1) { // && yPos - i < 20
    //             if (shape[shapeHeight(shape) - 1 - i][j] !== "_") {
    //                 newGrid[yPos - i][xPos + j] = shape[shapeHeight(shape) - 1 - i][j]
    //             }
    //         } 
    //     }
    // }
    
    return newGrid

}

export default updateGrid