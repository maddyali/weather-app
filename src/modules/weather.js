const weather = (function () {
  async function getWeather(city) {
    function convertData(data) {
      const {
        current: {
          feelslike_f: feelsLike,
          humidity,
          temp_f: temp,
          wind_mph: wind,
        },
        location: { name: cityName },
      } = data;

      return { cityName, feelsLike, humidity, temp, wind };
    }

    const endpoint = `http://api.weatherapi.com/v1/current.json?key=eccfab4785d64516adc134456232703&q=${city}`;

    try {
      const response = await fetch(endpoint, { mode: "cors" });

      const data = convertData(await response.json());

      return data;
    } catch (error) {
      return null;
    }
  }
  return { getWeather };
})();

export default weather;
