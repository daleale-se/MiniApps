const updateButtons = () => {
    const startButton = document.getElementById("start-button")
    startButton.classList.add("hidden")
    const restartButton = document.getElementById("restart-button")
    restartButton.classList.remove("hidden")
    const pauseButton = document.getElementById("pause-button")
    pauseButton.classList.remove("hidden")
}

export default updateButtons