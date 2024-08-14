// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


document.querySelector(".nav-toggle").addEventListener("click", () => {
    document.querySelector(".links").classList.toggle("show-links")
})
