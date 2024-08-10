import home from "./home.controller.js";
import posts from "./posts.controller.js";
import notFound from "./notFound.controller.js"

export const PAGES = {
    "#/home": home(),
    "#/posts": posts(),
    "#/": home(),
    "/404": notFound()
}