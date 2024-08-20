// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

function switchVideo() {
    const video = document.querySelector(".video-container")
    video.paused ? video.play() : video.pause()

}

const switchButton = document.querySelector(".switch-btn")
switchButton.addEventListener("click", () => {
    switchButton.classList.toggle("slide")
    switchVideo()
})

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".preloader").classList.add("hide-preloader")
})

// window.addEventListener("load", () => {
//     document.querySelector(".preloader").classList.add("hide-preloader")
// })