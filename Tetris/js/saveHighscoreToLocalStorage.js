const saveHighscoreToLocalStorage = (score) => {
    const hightscore = JSON.parse(localStorage.getItem("tetris-highscore")) ?? 0
    if (hightscore < score) {
        localStorage.setItem("tetris-highscore", JSON.stringify(score))
    }
}

export default saveHighscoreToLocalStorage