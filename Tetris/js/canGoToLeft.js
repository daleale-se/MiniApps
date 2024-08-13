import shapeHeight from "./shapeHeight.js"
import shapeWidth from "./shapeWidth.js"

const canGoToLeft = (grid, rotatedShape, [xPos, yPos]) => {

    let i = 0
    let j = 0

    let blockCollision = false

    while (i < shapeHeight(rotatedShape) && !blockCollision) {
        while(j < shapeWidth(rotatedShape) && !blockCollision) {
            if (xPos + j >= 0) {
                if (grid[yPos - i][xPos + j] !== "_") {
                    blockCollision = true
                }
            } else {
                blockCollision = true
            }
            j++
        }
        i++
    }

    return !blockCollision

} 

export default canGoToLeft