import shapeHeight from "./utils/shapeHeight.js";
import shapeWidth from "./utils/shapeWidth.js";

const downCollision = (grid, shape, [ xPos, yPos ]) => {
    
    let shouldFalling = true
    let i = 0
    
    while (i < shapeWidth(shape) && shouldFalling && yPos < 20) {
        if (yPos === 19) {
            shouldFalling = false
        } else {
            let aux = 0
            while (shape[shapeHeight(shape) - 1 - aux][i] === "_") {
                aux += 1
            }
            if (grid[yPos + 1 - aux][xPos + i] !== "_") {
                shouldFalling = false
            }
        }
        i++
    }

    return shouldFalling

}

export default downCollision