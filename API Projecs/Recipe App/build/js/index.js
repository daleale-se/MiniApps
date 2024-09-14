import showCategories from "./showCategories.js";
import addingEvents from "./searchInput.js";
import loadHeader from "./loadHeader.js";

window.addEventListener("DOMContentLoaded", async () => {
  await loadHeader()
  showCategories();
  addingEvents();
});
