import downCollision from "./downCollision.js"

const dropShape = (grid, shape, [xPos, yPos]) => {
    let i = 0
    let pos = [xPos, yPos + i]
    while (downCollision(grid, shape, pos)) {
        i++
        pos = [xPos, yPos + i]
    }
    return pos
}

export default dropShape