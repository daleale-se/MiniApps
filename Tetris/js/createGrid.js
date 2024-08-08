const createGrid = () => {

    const grid = []

    for (let i = 0; i < 20; i++) {
        let row = ""
        for (let j = 0; j < 10; j++) {
            row += "_"
        }
        grid.push([...row])
    }

    return grid

}

export default createGrid