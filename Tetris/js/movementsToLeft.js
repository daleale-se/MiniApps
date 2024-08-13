import shapeHeight from "./shapeHeight.js";
import shapeWidth from "./shapeWidth.js";

const movementsToLeft = (grid, rotatedShape, [xPos, yPos]) => {

    let i = 0
    let j = 1

    let diff = 0  

    let blockCollision = false

    while (i < shapeHeight(rotatedShape) && !blockCollision) {
        while (j < shapeWidth(rotatedShape) && !blockCollision) {
            if (xPos + j < 10) {
                if (grid[yPos - i][xPos + j] !== "_"){
                    blockCollision = true 
                    diff = shapeWidth(rotatedShape) - j
                }
            } else {
                blockCollision = true 
                diff = shapeWidth(rotatedShape) - j
            }
            j++
        }
        i++
    }

    return diff
    
}

export default movementsToLeft