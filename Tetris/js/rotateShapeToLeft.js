const rotateShapeToLeft = (shape) => {

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

export default rotateShapeToLeft