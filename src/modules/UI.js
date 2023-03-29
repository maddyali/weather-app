const UI = (function () {
  function displaySearchResult(weatherData) {
    if (!weatherData) return;

    const cityName = document.getElementById("cityName");
    const temp = document.getElementById("temp");
    const feelsLike = document.getElementById("feelsLike");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    cityName.textContent = `${weatherData.cityName}`;
    temp.textContent = `${weatherData.temp} °F`;
    feelsLike.textContent = `Feels like ${weatherData.feelsLike} °F`;
    humidity.textContent = `Humidity: ${weatherData.humidity} %`;
    wind.textContent = `Wind: ${weatherData.wind} mph`;
  }

  return { displaySearchResult };
})();

export default UI;
