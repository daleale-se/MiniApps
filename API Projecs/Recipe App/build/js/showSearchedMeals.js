import cardMealTemplate from "./cardMealTemplate.js";

const showSearchedMeals = (meals) => {
    const mealsList = document.querySelector(".meals-container");
    while (mealsList.firstChild) {
        mealsList.removeChild(mealsList.lastChild);
    }
    meals.forEach(meal => mealsList === null || mealsList === void 0 ? void 0 : mealsList.appendChild(cardMealTemplate(meal)));
    const categoryContainer = document.querySelector(".category-container");
    categoryContainer.classList.add("hidden");
    mealsList.classList.remove("hidden");
};

export default showSearchedMeals;
