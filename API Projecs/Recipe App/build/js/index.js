import showCategories from "./showCategories.js";
import searchEvents from "./searchInput.js";
import loadHeader from "./loadHeader.js";
import loadModal from "./loadModal.js";
import modalEvents from "./modalEvents.js";

window.addEventListener("DOMContentLoaded", async () => {
  await loadHeader();
  showCategories();
  searchEvents();
  await loadModal();
  modalEvents()
});
