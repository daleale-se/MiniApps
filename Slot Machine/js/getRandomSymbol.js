const { SYMBOLS } = require("./constants.js")

function getRandomSymbols() {
    return SYMBOLS[Math.floor(Math.random()*(SYMBOLS.length))]
}

module.exports = getRandomSymbols