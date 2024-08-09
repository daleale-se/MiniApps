const allSame = require("./allSame")
const { SYMBOLS_VALUES } = require("./constants")

const getWinnings = (rows, bet, lines) => {

    let winnings = 0
    for (const row of rows.slice(0, lines)) {
        winnings += allSame(row)? bet * SYMBOLS_VALUES[row[0]] : 0
    }
    return winnings
    
}

module.exports = getWinnings