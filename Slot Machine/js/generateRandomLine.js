const getRandomSymbols = require("./getRandomSymbol.js")

function generateRandomLine() {
    return [getRandomSymbols(), getRandomSymbols(), getRandomSymbols()]
}

module.exports = generateRandomLine