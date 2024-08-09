const { COLS, ROWS } = require("./constants");

const transpose = (reels) => {
    const rows = []
    for (let i = 0; i < COLS; i++) {
        rows.push([])
        for (let j = 0; j < ROWS; j++) {
            rows[i].push(reels[j][i])
        }
    } 
    return rows
}

module.exports = transpose