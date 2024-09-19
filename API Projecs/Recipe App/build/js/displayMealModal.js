import ingredientsMeasures from "./ingredientsMeasures.js";

const displayMealModal = (data) => {
    const mealData = data.meals[0];
    const ingredients = ingredientsMeasures(mealData)
    console.log("meal name:", mealData.strMeal);
    console.log("tags:", mealData.strTags, mealData.strArea);
    console.log("instructions:", mealData.strInstructions);
    console.log("ingredients:", ingredients);
    console.log("youtube video:", mealData.strYoutube);
} 

export default displayMealModal