const { SYMBOLS_VALUE } = require("./constants.js")

function finalMultiplier(slots) {
    const filteredLines = slots.filter(arr => arr.join("") === (arr[0] + arr[0] + arr[0]))
    const remainMultiplier = filteredLines.reduce((acc, cur) => acc + SYMBOLS_VALUE[cur[0]], 0)
    return remainMultiplier
}

module.exports = finalMultiplier