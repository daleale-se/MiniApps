const { COLS } = require("./constants")

function allSame(row) {
    return row.join("") === row[0].repeat(COLS)
}

module.exports = allSame
