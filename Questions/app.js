//using selectors inside the element
// traversing the dom

const questionArticles = document.querySelectorAll(".question");
questionArticles.forEach((question) => {
  question.querySelector(".question-btn").addEventListener("click", () => {
    questionArticles.forEach(item => {
        if (item != question) item.classList.remove("show-text");
    })
    question.classList.toggle("show-text");
  });
});

// other form
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
