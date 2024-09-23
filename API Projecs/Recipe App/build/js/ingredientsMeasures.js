const ingredientsMeasures = (meal) => {
    const keyIngredients = "strIngredient";
    const keyMeasures = "strMeasure";
    const ingredientsMeasures = [];
    let n = 0;
    while (meal[`${keyMeasures}${n + 1}`] && meal[`${keyMeasures}${n + 1}`] !== " ") {
        n++;
        ingredientsMeasures.push(`${meal[keyIngredients + n]} - ${meal[keyMeasures + n]}`);
    }
    return ingredientsMeasures
}

export default ingredientsMeasures