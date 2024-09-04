import showRecipe from "./showRecipe.js"

const cardMealTemplate = (meal: mealInterface) => {
    const article = document.createElement("article")
    article.addEventListener("click", () => showRecipe(meal.idMeal))
    article.innerHTML = `
        <h3>${meal.strMeal}</h3>
        <img src="${meal.strMealThumb}" alt="meal"/>
    `
    return article
}

export default cardMealTemplate