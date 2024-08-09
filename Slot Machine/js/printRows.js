const printRows = (reels) => {

    for (const row of reels) {
        let rowString = ""
        for (const [i, symbol] of row.entries()) {            
            rowString += (i + 1 !== row.length) ? `${symbol} | ` : `${symbol}`
        }
        console.log(rowString);
    }
    
}

module.exports = printRows