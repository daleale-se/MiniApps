const { SYMBOLS_COUNT } = require("./constants.js")

const getSymbols = () => {
    return Array.from(Object.entries(SYMBOLS_COUNT).map(([symbol, count]) => String(symbol).repeat(count)).join(""))
}

module.exports = getSymbols