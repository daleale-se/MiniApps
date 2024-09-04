import cardMealTemplate from "./cardMealTemplate.js"

const showMeals = (meals:mealInterface[]) => {
    const mealsList = document.querySelector(".meals-list")
    meals.forEach(meal => mealsList?.appendChild(cardMealTemplate(meal)))
}

export default showMeals