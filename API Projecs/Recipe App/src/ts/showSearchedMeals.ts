import cardMealTemplate from "./cardMealTemplate.js"

const showSearchedMeals = (meals:mealInterface[]) => {
    const mealsList = <HTMLDivElement>document.querySelector(".meals-container")
    while (mealsList.firstChild) {
        mealsList.removeChild(<HTMLElement>mealsList.lastChild);
    }
    meals.forEach(meal => mealsList?.appendChild(cardMealTemplate(meal)))
    const categoryContainer = <HTMLDivElement>document.querySelector(".category-container")
    categoryContainer.classList.add("hidden")
    mealsList.classList.remove("hidden")
}

export default showSearchedMeals