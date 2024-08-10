import views from "../views/home.html"

export default () => {
    
    const divContainer = document.createElement("div");
    divContainer.innerHTML = views;

    const btnClick = divContainer.querySelector("#btn-click")
    btnClick.addEventListener("click", () => alert("thx uwu!"))

    return divContainer

}