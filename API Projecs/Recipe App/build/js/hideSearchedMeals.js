const hideSearchedMeals = () => {
    const categoryContainer = document.querySelector(".category-container");
    categoryContainer.classList.remove("hidden");
    const mealsContainer = document.querySelector(".searched-meals-container");
    mealsContainer.classList.add("hidden");
}

export default hideSearchedMeals