import axios from 'axios'
import { LocationObjectCoords } from 'expo-location'

export default async function getWeather(coords: LocationObjectCoords) {
  const { latitude, longitude } = coords

  try {
    // adicionei units como metric para todos os dados serem em Celsius. Isso estava na documentação da API
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=724340704594c9c2f73b97d3c26821b9&units=metric`
    )
    const data = response.data
    return data // Sempre retornamos um objeto
  } catch (error) {
    console.log(error)
  }
}
