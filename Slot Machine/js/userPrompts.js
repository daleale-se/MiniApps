const prompt = require("prompt-sync")()

const deposit = () => {

    do {
        let depositAmount = parseFloat(prompt("How much you want to deposit? $"))
        if (!isNaN(depositAmount) && depositAmount > 0) return depositAmount
        console.log("Invalid deposit amount, try again.");
    } while (true)

}

const getNumberOfLines = () => {

    do {
        let numberOfLines = parseInt(prompt("Enter the number of lines to bet on (1-3): "))
        if (!isNaN(numberOfLines) && 0 < numberOfLines && numberOfLines <= 3) return numberOfLines
        console.log("Invalid number of lines, try again.");
    } while (true)

}

const getBet = (balance, lines) => {

    do {
        let numberBet = parseInt(prompt("Enter the bet per line: $"))
        if (!isNaN(numberBet) && 0 < numberBet && numberBet <= (balance / lines)) return numberBet
        console.log("Invalid bet, try again.");
    } while (true)

}

const playAgain = () => {
    return prompt("Do you want to play again? (y/n): ") === "y" ? true : false
}

module.exports = { 
    deposit,
    getNumberOfLines,
    getBet,
    playAgain
}