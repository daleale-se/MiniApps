import cardMealTemplate from "./cardMealTemplate.js";
const showMeals = (meals) => {
    const mealsList = document.querySelector(".meals-list");
    meals.forEach(meal => mealsList === null || mealsList === void 0 ? void 0 : mealsList.appendChild(cardMealTemplate(meal)));
};
export default showMeals;
