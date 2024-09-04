import { THE_MEAL_API } from "./constants.js"
import showMeals from "./showMeals.js"

window.addEventListener("DOMContentLoaded", () => {
   const category = JSON.parse(sessionStorage.getItem("category")!)
   fetch(`${THE_MEAL_API}/filter.php?c=${category}`)
   .then(res => res.json())
   .then(data => {
      showMeals(data.meals)
      document.querySelector(".category-title")!.textContent = category
   })
})

