import showSearchedMeals from "./showSearchedMeals.js";
import { THE_MEAL_API } from "./constants.js";

const showSearchValue = (value) => {
  fetch(`${THE_MEAL_API}/search.php?s=${value}`)
    .then((res) => res.json())
    .then((data) => data.meals && showSearchedMeals(data.meals));
};

export default showSearchValue;
