import loadHeader from "./loadHeader.js";
import addingEvents from "./searchInput.js";
import showMeals from "./showMeals.js";

window.addEventListener("DOMContentLoaded", async () => {
  await loadHeader()
  showMeals();
  addingEvents();
});
