import weather from "./modules/weather";
import UI from "./modules/UI";

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

searchBtn.addEventListener("click", async function () {
  if (searchInput.value === "") return;
  const weatherData = await weather.getWeather(searchInput.value);
  UI.displaySearchResult(weatherData);
});
