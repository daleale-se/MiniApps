const generateRandomLine = require("./generateRandomLine.js")

function buildSlots() {
    return Array.from({ length: 3 }, () => generateRandomLine())
}

module.exports = buildSlots