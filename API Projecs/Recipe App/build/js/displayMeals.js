import cardMealTemplate from "./cardMealTemplate.js";

const displayMeals = (meals, category) => {
    document.querySelector(".category-title").textContent = category;
    const mealsList = document.querySelector(".meals-list");
    meals.forEach(meal => mealsList.appendChild(cardMealTemplate(meal)));
};

export default displayMeals;
