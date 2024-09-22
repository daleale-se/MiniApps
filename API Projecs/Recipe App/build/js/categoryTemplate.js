const categoryTemplate = (category) => {
    const categoryItem = document.createElement("li");
    const categoryAnchor = document.createElement("a");
    categoryAnchor.href = "category.html";
    categoryAnchor.addEventListener("click", () => {
        sessionStorage.setItem("category", JSON.stringify(category.strCategory));
    });
    categoryAnchor.innerHTML = `                
        <img src="${category.strCategoryThumb}" alt="${category.strCategory}">
        <p class="white">${category.strCategory}</p>
        `;
    categoryItem.appendChild(categoryAnchor);
    return categoryItem;
};

export default categoryTemplate;
