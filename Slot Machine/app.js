const prompt = require("prompt-sync")()
const buildSlots = require("./js/buildSlots")
const completeLines = require("./js/completeLines.js")
const finalMultiplier = require("./js/finalMultiplier.js")
const calculateResult = require("./js/calculateResult.js")
const betLines = require("./js/betLines.js")

function main() {
    const userAmount = prompt("How much you want to deposit? $")
    const userResponse = prompt("You going to bet for two o three complete lines? (yes/no) ")
    let userBetLine = 1
    let slots = buildSlots()
    if (userResponse === "yes") {
        userBetLine = Number(prompt("How many complete lines you bet? (2 or 3) "))
        userBetLine = betLines(completeLines(slots), userBetLine)
    } 
    console.log(slots)
    const multiplier = finalMultiplier(slots)
    const result = calculateResult(userAmount, multiplier, userBetLine)
    console.log("Congratulations! You win " + result)
}

main()
