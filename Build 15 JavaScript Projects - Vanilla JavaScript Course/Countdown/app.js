const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function dhm (ms) {
  const days = Math.floor(ms / (24*60*60*1000));
  const daysms = ms % (24*60*60*1000);
  const hours = Math.floor(daysms / (60*60*1000));
  const hoursms = ms % (60*60*1000);
  const minutes = Math.floor(hoursms / (60*1000));
  const minutesms = ms % (60*1000);
  const sec = Math.floor(minutesms / 1000);
  return days + ":" + hours + ":" + minutes + ":" + sec;
}

const format = item => Number(item) < 10 ? `0${item}` : item

const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4")

const futureDate = new Date(2025, 7, 31, 20, 33)
const year = futureDate.getFullYear()
const month = months[futureDate.getMonth()]
const day = futureDate.getDate()
const weekday = weekdays[futureDate.getDay()]
const [time, suffix] = futureDate.toLocaleTimeString().split(" ")
const localTime = time.slice(0, time.length - 3) + suffix.toLocaleLowerCase()

giveaway.textContent = `giveaway end on ${weekday}, ${day} ${month} ${year}, ${localTime}`

function displayTimeLeft() {
  const futureTime = futureDate.getTime()
  const timeLapse = futureTime - new Date().getTime()
  if (timeLapse > 0) {
    const timeLeft = dhm(timeLapse).split(":")
    items.forEach((h4, i)=> h4.textContent = format(timeLeft[i]))
  } else {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">
      sorry, this giveaway has expired</h4>`
  }
}

let countdown = setInterval(displayTimeLeft, 1000)
displayTimeLeft()