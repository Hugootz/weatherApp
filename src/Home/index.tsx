import React, { useState, useEffect } from 'react'
import {
  Container,
  Header,
  Temperature,
  Symbol,
  IconSun,
  Refresh,
  RefreshButton,
  Wrapper,
  Info,
  InfoTitle,
  InfoView,
  LocationTitle,
  ThemeButton,
  SquareButton,
  CircleButton,
} from './styles'
import { MainCard } from '../components/MainCard'
import theme from '../global/styles/theme'
import { InfoCard } from '../components/InfoCard'
import * as Location from 'expo-location'
import getWeather from '../../src/services/api'

export function Home() {
  /**
   * Estados desnecessários, a resposta da api sempre é um objeto, podemos salvar todo o objeto.
   */
  const [darktheme, setDarkTheme] = useState(true)
  const [currentTemperature, setCurrentTemperature] = useState(10)
  const [loc, setLoc] = useState('')
  const [currentHour, setCurrentHour] = useState('13:30')
  const [wind, setWind] = useState('')
  const [umidity, setHumidity] = useState('')
  const [tempMin, setTempMin] = useState(10)
  const [tempMax, setTempMax] = useState(10)
  const [locationCoords, setLocationCoords] = useState({})
  const [errorMsg, setErrorMsg] = useState(null)

  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync()

    if (status !== 'granted') {
      setErrorMsg('A permissão para acessar o local foi negada')
      return // return desnecesário, uma vez que se essa parte da validação não rodar, vai executar o else.
    } else {
      let location = await Location.getCurrentPositionAsync({})
      await setLocationCoords(location.coords) // await desnecessário, estamos atualizando um estado.
    }
  }

  async function setGetWeather() {
    await getLocation() // se a localização for negada, ainda executaremos o resto da função

    let date = new Date()
    setCurrentHour(date.getHours() + ':' + date.getMinutes())

    const data = await getWeather(locationCoords) // resposta da api sem tipagem
    console.log(data) // console.log esquecido

    // Estados desnecessários, deveríamos somente atualizar 1 estado contendo todo o objeto
    setCurrentTemperature(convertKelvinInCelsius(data[0]))
    console.log(data[0]) // outro
    setTempMin(convertKelvinInCelsius(data[1]))
    setTempMax(convertKelvinInCelsius(data[2]))
    setLoc(data[3])
    setWind(data[4])
    setHumidity(data[5])
  }

  // Poderiamos pedir para API já retornar os valores em celsius
  function convertKelvinInCelsius(kelvin: string) {
    return parseInt(kelvin, 10) - 273
  }
  useEffect(() => {
    setGetWeather() // chamar getLocation() primeiro
  }, [])

  // essa parte foi utilizada onde?
  let text = 'Waiting..'
  if (errorMsg) {
    text = errorMsg
  } else if (loc) {
    text = JSON.stringify(loc)
  }

  return (
    <Container activeTheme={darktheme}>
      <RefreshButton onPress={() => setGetWeather()}>
        <Refresh name='refresh' activeTheme={darktheme} />
      </RefreshButton>
      {/* Icone estático. e se eu acessar o app a noite? */}
      <IconSun name='sun' />

      <Header>
        <Temperature activeTheme={darktheme}>{currentTemperature}</Temperature>
        <Symbol activeTheme={darktheme}>°C</Symbol>
      </Header>
      <ThemeButton>
        <SquareButton activeTheme={darktheme}>
          <CircleButton
            activeTheme={darktheme}
            onPress={() => (darktheme ? setDarkTheme(false) : setDarkTheme(true))}></CircleButton>
        </SquareButton>
      </ThemeButton>
      <LocationTitle activeTheme={darktheme}>
        {loc}, {currentHour}
      </LocationTitle>
      <Wrapper activeTheme={darktheme}>
        {/* Dados estáticos não são interessantes em um app onde vc tem acesso a 1 API. Vc poderia usar dados que vem da API */}
        <MainCard
          time={'Manhã'}
          style={darktheme ? theme.colors.morning_light : theme.colors.morning_dark}
          temperature={'21°C'}
          iconCard={'day-sunny'}
        />
        <MainCard
          time={'Tarde'}
          style={darktheme ? theme.colors.after_dark : theme.colors.after_light}
          temperature={'30°C'}
          iconCard={'cloudy-gusts'}
        />
        <MainCard
          time={'Noite'}
          style={darktheme ? theme.colors.night_dark : theme.colors.night_light}
          temperature={'15°C'}
          iconCard={'rains'}
        />
      </Wrapper>
      <Info activeTheme={darktheme}>
        <InfoTitle activeTheme={darktheme}>Informações adicionais</InfoTitle>
        <InfoView>
          {/* Evitar concatenação */}
          <InfoCard title={'Vento'} value={wind + ' km/h'} />
          <InfoCard title={'Umidade'} value={umidity + ' %'} />
          <InfoCard title={'Temp.Min'} value={tempMin + '°C'} />
          <InfoCard title={'Temp.Max'} value={tempMax + '°C'} />
        </InfoView>
      </Info>
    </Container>
  )
}
