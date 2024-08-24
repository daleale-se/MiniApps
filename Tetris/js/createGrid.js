const createGrid = () => {
    return Array.from({ length: 20 }, () => Array.from({ length: 10 }, () => "_"));
}

export default createGrid
