import hideSearchedMeals from "./hideSearchedMeals.js";
import showSearchValue from "./showSearchValue.js";

function searchEvents() {
  const searchInput = document.getElementById("search-input");
  const form = document.querySelector(".search-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (searchInput.value) {
      showSearchValue(searchInput.value);
    }
  });

  searchInput.addEventListener("change", (e) => {
    if (searchInput.value === "") {
      hideSearchedMeals();
    }
  });
}

export default searchEvents;
