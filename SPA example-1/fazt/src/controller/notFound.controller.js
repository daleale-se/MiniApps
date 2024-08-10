import views from "../views/404.html"

export default () => {
    
    const divContainer = document.createElement("div");
    divContainer.innerHTML = views;

    return divContainer

}