const hideSearchedMeals = () => {
    const categoryContainer = document.querySelector(".category-container");
    categoryContainer.classList.remove("hidden");
    const mealsList = document.querySelector(".meals-container");
    mealsList.classList.add("hidden");
}

export default hideSearchedMeals