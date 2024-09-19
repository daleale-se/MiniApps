import loadHeader from "./loadHeader.js";
import loadModal from "./loadModal.js";
import addingEvents from "./searchInput.js";
import showMeals from "./showMeals.js";

window.addEventListener("DOMContentLoaded", async () => {
  await loadHeader()
  const category = JSON.parse(sessionStorage.getItem("category"));
  if (category) {
    showMeals(category);
    addingEvents();
    await loadModal()
  } else {
    location.replace("index.html")
  }
});
