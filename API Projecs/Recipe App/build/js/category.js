import loadHeader from "./loadHeader.js";
import addingEvents from "./searchInput.js";
import showMeals from "./showMeals.js";

window.addEventListener("DOMContentLoaded", async () => {
  await loadHeader()
  const category = JSON.parse(sessionStorage.getItem("category"));
  if (category) {
    showMeals(category);
    addingEvents();
  } else {
    location.replace("index.html")
  }
});
