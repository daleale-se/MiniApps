import { PATHS, PAGES_PATH } from "./constants.js"

const checkAnchors = () => {

    const anchors = document.querySelectorAll("a");
    anchors.forEach((anchor) => anchor.addEventListener("click", (e) => {
        e.preventDefault()
        const href = anchor.getAttribute("href")
        location.href = PATHS.includes(href) ? `${PAGES_PATH}${href}` : `${PAGES_PATH}/404.html`
    }))

}

export default checkAnchors