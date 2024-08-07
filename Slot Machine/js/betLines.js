function betLines(slotsCompleteLines, userBetLines) {
    return slotsCompleteLines === userBetLines? userBetLines : 0
}

module.exports = betLines