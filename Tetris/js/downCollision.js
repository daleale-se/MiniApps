import shapeHeight from "./utils/shapeHeight.js";
import shapeWidth from "./utils/shapeWidth.js";

const shapeDoingCollision = (grid, shape, [ xPos, yPos ]) => {
    
    let shouldFalling = true
    let i = 0
    
    while (i < shapeWidth(shape) && shouldFalling) {
        if (yPos + 1 === 20) {
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

export default shapeDoingCollision