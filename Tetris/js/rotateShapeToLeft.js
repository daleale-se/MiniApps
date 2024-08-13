const rotateShapeToLeft = (shape) => {

    return shape[0].map((_, i) => shape.map(row => row[i])).reverse();
    
}

export default rotateShapeToLeft


// old version
// const rotatedShape = []
// for (const i in shape[0]) {
//     let line = ""
//     for (const j in shape) {
//         line += shape[j][i]
//     }
//     rotatedShape.unshift([...line])
// }
// return rotatedShape