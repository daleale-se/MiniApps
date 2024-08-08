import { TETROMINOES } from "./constanst.js"

const buildTetromino = (letter) => {
    return TETROMINOES[letter]
}

export default buildTetromino