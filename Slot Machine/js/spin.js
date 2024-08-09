const { COLS, ROWS } = require("./constants.js")
const getSymbols = require("./getSymbols.js")

const spin = () => {
    
    return Array.from({ length: ROWS }, () => {
        const reelSymbols = [...getSymbols()];
        return Array.from({ length: COLS }, () => 
            reelSymbols.splice(Math.floor(Math.random() * reelSymbols.length), 1)[0]
        );
    });    

}

module.exports = spin