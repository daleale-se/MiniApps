import categoryTemplate from "./categoryTemplate.js";

const displayCategory = categories => {
    const categoriesList = document.querySelector(".categories");
    const categoriesTemplates = categories.map((category) => categoryTemplate(category));
    categoriesTemplates.forEach(categoryElement => categoriesList.appendChild(categoryElement));
}

export default displayCategory