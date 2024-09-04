import { THE_MEAL_API } from "./constants.js";
import categoryTemplate from "./categoryTemplate.js";
import showSearchedMeals from "./showSearchedMeals.js";
const showCategories = () => {
    fetch(`${THE_MEAL_API}/categories.php`)
        .then(res => res.json())
        .then(data => {
        const categoriesList = document.querySelector(".categories");
        const categoriesTemplates = data["categories"].map((category) => categoryTemplate(category));
        categoriesTemplates.forEach(categoryElement => categoriesList.appendChild(categoryElement));
    })
        .catch(err => console.log(err));
};
const searchInput = document.getElementById("search-input");
const form = document.querySelector(".search-form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(`${THE_MEAL_API}/search.php?s=${searchInput.value}`)
        .then(res => res.json())
        .then(data => {
        data.meals && showSearchedMeals(data.meals);
    });
});
searchInput.addEventListener("change", (e) => {
    if (searchInput.value === "") {
        const categoryContainer = document.querySelector(".category-container");
        categoryContainer === null || categoryContainer === void 0 ? void 0 : categoryContainer.classList.remove("hidden");
        const mealsList = document.querySelector(".meals-container");
        mealsList === null || mealsList === void 0 ? void 0 : mealsList.classList.add("hidden");
    }
});
showCategories();
