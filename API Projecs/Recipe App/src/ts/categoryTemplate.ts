const categoryTemplate = (category: categoryInterface) => {
    const categoryItem = document.createElement("li")
    const categoryAnchor = document.createElement("a")
    categoryAnchor.href = "pages/category.html"
    categoryAnchor.className = "d-inline-flex align-items-center bg-danger rounded-2 w-100"
    categoryAnchor.addEventListener("click", () => {
        sessionStorage.setItem("category", JSON.stringify(category.strCategory))  
    })
    categoryAnchor.innerHTML = `                
        <img class="bg-light bg-gradient" src="${category.strCategoryThumb}" alt="${category.strCategory}">
        <p class="ms-5 h4 text-light">${category.strCategory}</p>
        `
    categoryItem.appendChild(categoryAnchor)
    return categoryItem
}

export default categoryTemplate