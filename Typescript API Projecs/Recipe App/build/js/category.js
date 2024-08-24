import { THE_MEAL_API } from "./constants";
window.addEventListener("DOMContentLoaded", () => {
    const category = JSON.parse(sessionStorage.getItem("category"));
    fetch(`${THE_MEAL_API}/filter.php?c=${category}`)
        .then(res => res.json())
        .then(data => console.log(data));
});
