const rotateShapeToLeft = (shape) => {
    return shape[0].map((_, i) => shape.map(row => row[i])).reverse();
}

export default rotateShapeToLeft