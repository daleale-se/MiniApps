export const rotateShapeToLeft = (shape) => {

    const rotatedShape = []

    for (const i in shape[0]) {
        let line = ""
        for (const j in shape) {
            line += shape[j][i]
        }
        rotatedShape.unshift([...line])
    }

    return rotatedShape
    
}

// let figure = {
//     shape: [["b", "e"], ["b", "e"], ["b", "b"]],
//     color: "red"
// }

// figure = rotateShapeToLeft(figure)
// figure = rotateShapeToLeft(figure)