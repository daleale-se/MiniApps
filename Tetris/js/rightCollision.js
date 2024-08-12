import shapeHeight from "./utils/shapeHeight.js"
import shapeWidth from "./utils/shapeWidth.js"

const rightCollision = (grid, shape, [ xPos, yPos ]) => {

    let shouldMove = true
    let i = 0

    while (i < shapeHeight(shape) && shouldMove && 0 <= yPos - i) {
        if (xPos === 9) {
            shouldMove = false
        } else {
            let aux = 0
            while (shape[shapeHeight(shape) - 1 - i][shapeWidth(shape) - 1 - aux] === "_") {
                aux += 1
            }
            if (grid[yPos - i][xPos + shapeWidth(shape) - aux] !== "_") {
                shouldMove = false
            }
        }
        i++
    }

    return !shouldMove
}

export default rightCollision