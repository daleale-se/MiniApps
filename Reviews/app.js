import data from "./data.js"

const displayWorker = (employee) => {

  const personImg = document.getElementById("person-img")
  const personNameH4 = document.getElementById("author")
  const personJobP = document.getElementById("job")
  const personInfoP = document.getElementById("info")

  personImg.setAttribute("src", employee.img)
  personNameH4.textContent = employee.name
  personJobP.textContent = employee.job
  personInfoP.textContent = employee.text

}

// using closures again
const pickPerson = () => {

  let index = 0

  function next() {
    index += 1
    if (index === data.length) {
      index = 0
    }
    displayWorker(data[index])
  }

  function prev() {
    index -= 1
    if (index < 0) {
      index = data.length - 1
    }
    displayWorker(data[index])
  }

  function random() {
    index = Math.floor(Math.random()*data.length)
    displayWorker(data[index])
  }

  displayWorker(data[index])

  return {
    next,
    prev,
    random
  }

}

const main = () => {

  const prevButton = document.querySelector(".prev-btn")
  const nextButton = document.querySelector(".next-btn")
  const randomButton = document.querySelector(".random-btn")

  const btnHandler = pickPerson()

  prevButton.addEventListener("click", btnHandler.prev)
  nextButton.addEventListener("click", btnHandler.next)
  randomButton.addEventListener("click", btnHandler.random)

}

main()


// select items
// const img = document.getElementById('person-img');
// const author = document.getElementById('author');
// const job = document.getElementById('job');
// const info = document.getElementById('info');

// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// const randomBtn = document.querySelector('.random-btn');

// // set starting item
// let currentItem = 0;

// // load initial item
// window.addEventListener('DOMContentLoaded', function () {
//   const item = reviews[currentItem];
//   img.src = item.img;
//   author.textContent = item.name;
//   job.textContent = item.job;
//   info.textContent = item.text;
// });

// // show person based on item
// function showPerson(person) {
//   const item = reviews[person];
//   img.src = item.img;
//   author.textContent = item.name;
//   job.textContent = item.job;
//   info.textContent = item.text;
// }
// // show next person
// nextBtn.addEventListener('click', function () {
//   currentItem++;
//   if (currentItem > reviews.length - 1) {
//     currentItem = 0;
//   }
//   showPerson(currentItem);
// });
// // show prev person
// prevBtn.addEventListener('click', function () {
//   currentItem--;
//   if (currentItem < 0) {
//     currentItem = reviews.length - 1;
//   }
//   showPerson(currentItem);
// });
// // show random person
// randomBtn.addEventListener('click', function () {
//   console.log('hello');

//   currentItem = Math.floor(Math.random() * reviews.length);
//   showPerson(currentItem);
// });
