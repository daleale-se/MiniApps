import shapeHeight from "./utils/shapeHeight.js"

const leftCollision = (grid, shape, [ xPos, yPos ]) => {

    let shouldMove = true
    let i = 0

    while (i < shapeHeight(shape) && shouldMove  && 0 <= yPos - i) {
        if (xPos - 1 === -1) {
            shouldMove = false
        } else {
            let aux = 0
            while (shape[shapeHeight(shape) - 1 - i][aux] === "_") {
                aux += 1
            }
            if (grid[yPos + i][xPos - 1 + aux] !== "_") {
                shouldMove = false
            }
        }
        i++
    }

    return !shouldMove
}

export default leftCollision