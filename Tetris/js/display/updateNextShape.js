import buildRow from "./buildRow.js"

const updateNextShape = (nextShape) => {
    const shapePrev = document.getElementById("shape-prev")
    shapePrev.innerHTML = ""
    const rows = nextShape.map(row => buildRow(row))
    for (const row of rows) {
        shapePrev.appendChild(row)
    }
}

export default updateNextShape