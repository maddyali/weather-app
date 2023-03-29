# weather-app
The fetch-the-weather app focuses on the fetch, async, and await functions to pull API data from Weather API.

Search a location for forecast data.

🔗 Live demo [click here](https://fetch-the-weather.netlify.app/).

## Features
- Fetches and displays API information from Weather API

## Lessons learned

### HTTP vs HTTPS - Mixed content error

WeatherAPI provides its links like the one below:

`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`

Using this link returns an error in Chrome's console:

`Blocked loading mixed active content "http://api.weatherapi.com/..."`

I learned that "http" is also known as "mixed content", which means that this link is only partially encrypted.

To resolve this issue, I had to change "http://" to "https://".

## Feature ideas to implement
- Utilize geolocation to display the user location by default
- Unique weather symbols for each forecast description

## Built with:
- HTML
- Bootstrap
- JavaScript
- [Weather API](https://www.weatherapi.com/docs/)
