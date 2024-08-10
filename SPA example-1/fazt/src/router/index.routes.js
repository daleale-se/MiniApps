import { PAGES } from "./../controller/index.js"

const router = async (route) => {

    const root = document.getElementById("root")
    root.innerHTML = ""
    
    if (!Object.keys(PAGES).includes(route)) {
        route = "/404"
    }

    root.appendChild( await PAGES[route]);

}

export { router }