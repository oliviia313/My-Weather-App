let dayTime = document.querySelector("#dayTime");
let now = new Date();
function formatDate(date) {
  let day = now.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekDay = days[day];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${weekDay} ${hours}:${minutes}`;
}

dayTime.innerHTML = formatDate(now);

let searchInput = document.querySelector(".search-input");

function showTemp(response) {
  let tempElement = document.querySelector("#current-temp");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(response.data.temperature.current);
}

function search(e) {
  e.preventDefault();
  let h1 = document.querySelector("h1");
  let city = `${
    searchInput.value.charAt(0).toUpperCase() + searchInput.value.slice(1)
  }`;
  let key = "t9e2fb71e7f8f479occ3650b2b4f0a04";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
  axios.get(url).then(showTemp);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
