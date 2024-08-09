const { deposit, getBet, getNumberOfLines, playAgain } = require("./js/userPrompts.js")
const spin = require("./js/spin.js")
const transpose = require("./js/transpose.js")
const printRows = require("./js/printRows.js")
const getWinnings = require("./js/getWinnings.js")

const game = () => {
    let balance = deposit()
    let stillPlaying = true
    while (balance > 0 && stillPlaying) {
        console.log("You have a balance of $" + balance.toString())
        const numberOfLines = getNumberOfLines()
        const bet = getBet(balance, numberOfLines)
        balance -= bet * numberOfLines
        const rows = transpose(spin())
        printRows(rows)
        const winnigs = getWinnings(rows, bet, numberOfLines)
        console.log("You won $" + winnigs.toString())
        balance += winnigs
        if (balance <= 0) {
            console.log("You 're ran out of money! ");
        } else {
            stillPlaying = playAgain()
        }
    }
    console.log("Your final balance is $" + balance);
}

function main() {
    game()
}

main()
