import weather from "./modules/weather";

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

searchBtn.addEventListener("click", function () {
  if (searchInput.value === "") return;
  weather.getWeather(searchInput.value);
});
