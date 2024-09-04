import { THE_MEAL_API } from "./constants.js";
const showRecipe = (id) => {
    fetch(`${THE_MEAL_API}/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => {
        const mealData = data.meals[0];
        const keyIngredients = "strIngredient";
        const keyMeasures = "strMeasure";
        const ingredientsMeasures = [];
        let n = 0;
        while (mealData[`${keyIngredients}${n + 1}`] !== "") {
            n++;
            ingredientsMeasures.push(`${mealData[keyIngredients + n]} - ${mealData[keyMeasures + n]}`);
        }
        console.log("meal name:", mealData.strMeal);
        console.log("tags:", mealData.strTags, mealData.strArea);
        console.log("instructions:", mealData.strInstructions);
        console.log("ingredients:", ingredientsMeasures);
        console.log("youtube video:", mealData.strYoutube);
    })
        .catch(err => console.log(err));
};
export default showRecipe;
