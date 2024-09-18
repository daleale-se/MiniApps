import { THE_MEAL_API } from "./constants.js";
import displayMeals from "./displayMeals.js";

const showMeals = (category) => {
  fetch(`${THE_MEAL_API}/filter.php?c=${category}`)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals, category))
};

export default showMeals;
