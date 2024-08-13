const completeRow = (row) => {
    return row.filter(e => e === "_").length === 0
}

export default completeRow