import { TETROMINOES } from "./constants.js"

const buildTetromino = (letter) => {
    return TETROMINOES[letter]
}

export default buildTetromino