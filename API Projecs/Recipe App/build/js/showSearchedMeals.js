import cardMealTemplate from "./cardMealTemplate.js";

const showSearchedMeals = (meals) => {
    const mealsList = document.querySelector(".searched-meals-list");
    while (mealsList.firstChild) {
        mealsList.removeChild(mealsList.lastChild);
    }
    meals.forEach(meal => mealsList.appendChild(cardMealTemplate(meal)));

    const mealsContainer = document.querySelector(".searched-meals-container")
    const categoryContainer = document.querySelector(".category-container");
    categoryContainer.classList.add("hidden");
    mealsContainer.classList.remove("hidden");
};

export default showSearchedMeals;
