import { COLORS } from "./../constants.js"

const buildRow = (row) => {

    const rowContainer = document.createElement("div")
    rowContainer.classList.add("row")
    rowContainer.innerHTML = row.map(e => `<span class="${COLORS[e]} block"></span>`).join("")
    return rowContainer

}

export default buildRow

