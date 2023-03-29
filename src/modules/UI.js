const UI = (function () {
  function displaySearchResult(weatherData) {
    if (!weatherData) return;

    const searchResult = document.getElementById("searchResult");
    const cityName = document.getElementById("cityName");
    const temp = document.getElementById("temp");
    const feelsLike = document.getElementById("feelsLike");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    searchResult.style.visibility = "visible";
    cityName.textContent = `${weatherData.cityName}`;
    temp.textContent = `${weatherData.temp} °F`;
    feelsLike.textContent = `Feels like ${weatherData.feelsLike} °F`;
    humidity.textContent = `Humidity: ${weatherData.humidity} %`;
    wind.textContent = `Wind: ${weatherData.wind} mph`;
  }

  return { displaySearchResult };
})();

export default UI;
