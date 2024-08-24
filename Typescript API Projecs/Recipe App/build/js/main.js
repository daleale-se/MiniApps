import { THE_MEAL_API } from "./constants";
const createCategoryTemplate = (category) => {
    const categoryItem = document.createElement("li");
    const categoryAnchor = document.createElement("a");
    categoryAnchor.href = "pages/category.html";
    categoryAnchor.className = "d-inline-flex align-items-center bg-danger rounded-2 w-100";
    categoryAnchor.addEventListener("click", () => {
        sessionStorage.setItem("category", JSON.stringify(category.strCategory));
    });
    categoryAnchor.innerHTML = `                
        <img class="bg-light bg-gradient" src="${category.strCategoryThumb}" alt="${category.strCategory}">
        <p class="ms-5 h4 text-light">${category.strCategory}</p>
        `;
    categoryItem.appendChild(categoryAnchor);
    return categoryItem;
};
const showCategories = () => {
    fetch(`${THE_MEAL_API}/categories.php`)
        .then(res => res.json())
        .then(data => {
        const categoriesList = document.querySelector(".categories");
        const categoriesTemplates = data["categories"].map((category) => createCategoryTemplate(category));
        categoriesTemplates.forEach(categoryElement => categoriesList.appendChild(categoryElement));
    })
        .catch(err => console.log(err));
};
const main = () => {
    showCategories();
};
main();
