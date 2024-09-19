import showCategories from "./showCategories.js";
import addingEvents from "./searchInput.js";
import loadHeader from "./loadHeader.js";
import loadModal from "./loadModal.js";

window.addEventListener("DOMContentLoaded", async () => {
  await loadHeader();
  showCategories();
  addingEvents();
  await loadModal()
});
