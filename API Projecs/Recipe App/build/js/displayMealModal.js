import embedVideo from "./embedVideo.js";
import ingredientsMeasures from "./ingredientsMeasures.js";

const displayMealModal = (data) => {
    const mealData = data.meals[0];
    const ingredients = ingredientsMeasures(mealData)

    const mealName = document.querySelector(".meal-name")
    mealName.textContent = mealData.strMeal

    const mealTags = document.querySelector(".meal-tags")
    mealTags.innerHTML = ""
    
    if (mealData.strTags) {
        const tags = mealData.strTags.split(",")
        tags.forEach(tag => mealTags.innerHTML += `<span>${tag}</span>`)
    }

    if (mealData.strArea) {
        mealTags.innerHTML += `<span>${mealData.strArea}</span>`
    }

    const instructionsContainer = document.querySelector(".meal-steps")
    instructionsContainer.innerHTML = ""
    
    const mealSteps = mealData.strInstructions.split("\n")
    mealSteps.forEach(text => instructionsContainer.innerHTML += `<p>${text}</p>`)

    const mealIngredients = document.querySelector(".meal-ingredients ol")
    mealIngredients.innerHTML = ""
    ingredients.forEach(ingredient => mealIngredients.innerHTML += `<li>${ingredient}</li>`)

    const iframeVideo = document.querySelector(".meal-video iframe")
    iframeVideo.src = embedVideo(mealData.strYoutube)

    document.querySelector(".modal-container").classList.remove("hidden")
} 

export default displayMealModal