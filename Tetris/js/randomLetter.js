import { TETROMINOES } from "./constants.js"
 
const randomLetter = () => {
    const lettersArr = Object.keys(TETROMINOES) 
    return lettersArr[Math.floor(Math.random() * lettersArr.length)]
}

export default randomLetter