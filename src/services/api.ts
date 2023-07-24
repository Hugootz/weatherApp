import axios from "axios";

export default async function getWeather(locationCoords) {
  const lat = locationCoords.latitude;
  const log = locationCoords.longitude;

  var result = [];
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=724340704594c9c2f73b97d3c26821b9`
    );
    const data = response.data;
    console.log(response);
    const locationName = data.sys.country + ", " + data.name;
    const tempMin = data.main.temp_min;
    const tempMax = data.main.temp_max;
    const wind = data.wind.speed;
    const humidity = data.main.humidity;
    const currentTemperature = data.main.temp;

    result = [
      currentTemperature,
      tempMin,
      tempMax,
      locationName,
      wind,
      humidity,
    ];
  } catch (error) {
    console.log(error);
  }
  return result;
}
