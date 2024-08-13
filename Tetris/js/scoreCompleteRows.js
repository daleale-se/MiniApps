import completeRow from "./completeRow.js"
import { POINTS_PER_ROW } from "./constants.js"

const scoreCompleteRows = (grid, score) => {
    return score + (grid.filter(row => completeRow(row)).length) * POINTS_PER_ROW
}

export default scoreCompleteRows