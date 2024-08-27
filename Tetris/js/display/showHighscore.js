const showHighscore = (score) => {
    const highscoreText = document.getElementById("highscore")
    const prevHighscore = JSON.parse(localStorage.getItem("tetris-highscore")) ?? 0
    highscoreText.textContent = prevHighscore < score ? score : prevHighscore
}

export default showHighscore