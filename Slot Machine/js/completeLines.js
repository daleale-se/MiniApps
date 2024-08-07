function completeLines(slots) {
    const filteredLines = slots.filter(arr => arr.join("") === (arr[0] + arr[0] + arr[0]))
    return filteredLines.length
}

module.exports = completeLines