import shapeWidth from "./utils/shapeWidth.js";

const shapeDoingCollision = (grid, shape, pos) => {
    
    const [ xPos, yPos ] = pos

    let shouldFalling = true
    let i = 0
    while (i < shapeWidth(shape) && shouldFalling) {
        if (yPos + 1 === 20) {
            shouldFalling = false
        } else if (grid[yPos + 1][xPos + i] !== "_") {
            shouldFalling = false
        }
        i++
    }

    return shouldFalling

}

export default shapeDoingCollision