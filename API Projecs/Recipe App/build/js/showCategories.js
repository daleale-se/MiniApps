import { THE_MEAL_API } from "./constants.js";
import displayCategory from "./displayCategory.js"

const showCategories = () => {
    fetch(`${THE_MEAL_API}/categories.php`)
        .then(res => res.json())
        .then(data => displayCategory(data.categories))
        .catch(err => console.log(err));
};

export default showCategories