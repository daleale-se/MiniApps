import checkAnchors from "./checkAnchors.js"

document.addEventListener("DOMContentLoaded", function () {
    checkAnchors()
})

const main = () => {

    const showbutton = document.getElementById("click-me")
    showbutton.addEventListener("click", () => alert("Thanks! uwu"))

}

main()