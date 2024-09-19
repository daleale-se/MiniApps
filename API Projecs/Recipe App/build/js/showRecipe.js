import { THE_MEAL_API } from "./constants.js";
import displayMealModal from "./displayMealModal.js";

const showRecipe = (id) => {
    fetch(`${THE_MEAL_API}/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => displayMealModal(data))
        .catch(err => console.log(err));
};

export default showRecipe;
