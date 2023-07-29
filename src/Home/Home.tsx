import React, { useState, useEffect } from 'react'
import {
  Container,
  Header,
  Temperature,
  Symbol,
  IconSun,
  Refresh,
  RefreshButton,
  Info,
  InfoTitle,
  InfoView,
  LocationTitle,
  ThemeButton,
  SquareButton,
  CircleButton,
} from './styles'

import { InfoCard } from '../components/InfoCard'
import * as Location from 'expo-location'
import getWeather from '../../src/services/api'
import { WeatherResponse } from '../@types/api'
import { ActivityIndicator, Alert, Button, Linking, Platform, Text, View } from 'react-native'
import theme from '../global/styles/theme'

export function Home() {
  const date = new Date()
  const [darktheme, setDarkTheme] = useState(true)
  /** Só precisei de 3 estados para controlar toda a página.
   * É interessante ter menos estados, principalmente se vc conseguir
   * salvar tudo em um objeto
   */
  const [coords, setCoords] = useState<Location.LocationObjectCoords | null>(null)
  const [granted, setGranted] = useState(true)
  const [weather, setWeather] = useState<WeatherResponse | null>(null)

  /** Função que permite o usuário abrir as configurações caso não tenha permissão de localização
   * ou buscar as coordenadas se já tiver permissão */
  async function askForLocationPermission() {
    const { granted } = await Location.requestForegroundPermissionsAsync()

    if (granted) {
      await getLocation()
    } else {
      Platform.select({
        ios: () => Linking.canOpenURL('app-settings:').then(() => Linking.openURL('App-Prefs:Privacy')),
        android: () => Linking.openSettings(),
      })
    }
  }

  async function getLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync()

    if (status !== 'granted') {
      /** 2. Se não for permitida, guardamos essa informação */
      setGranted(false)
    } else {
      /** 3. Se for, podemos então buscar as coordenadas, guardar as informações e buscar os dados na API com as coordenadas */
      const location = await Location.getCurrentPositionAsync({})
      setCoords(location.coords)
      await loadWeather(location.coords)
    }
  }

  async function loadWeather(coords: Location.LocationObjectCoords) {
    /** Buscamos os dados na API e guardamos todo o objeto em um estado */
    const data: WeatherResponse = await getWeather(coords) // Detalhe que a resposta da API foi tipada
    setWeather(data)
  }

  /** 1. Buscamos a geolocalização do usuário */
  useEffect(() => {
    getLocation()
  }, [])

  /**
   * 4. Renderizamos o JSX de acordo com alguns estados do nosso app.
   * Nosso objetivo é não mostrar dados incompletos antes de buscar os dados na api
   * e mostrar algum estado de erro caso nenhum dado da API retorne
   */

  /**
   * Se permissão de Localização NÃO for permitida e NÃO temos dados de localização,
   * informamos o usuário a repeito e damos a opção do mesmo atualizar as configurações
   * e permitir a geolocalização no app
   */
  if (!granted && weather === null) {
    return (
      <Container activeTheme={darktheme}>
        <Text style={{ marginTop: 100, color: '#FFF' }}>Permissão de localização negada.</Text>

        <Button title='Abrir configurações' onPress={askForLocationPermission} />
      </Container>
    )
  }

  /**
   * Se permissão de Localização FOR for permitida e NÃO temos dados de localização,
   * significa que ainda estamos buscando os dados da API. Mostramos um indicador de carregamento
   */
  if (granted && weather === null) {
    return (
      <Container activeTheme={darktheme}>
        <ActivityIndicator color={theme.colors.background_light} size='large' style={{ marginTop: 100 }} />
      </Container>
    )
  }

  /**
   * Se já tivermos a resposta da API, pdoemos montar nossa UI
   */
  return (
    <Container activeTheme={darktheme}>
      <RefreshButton onPress={() => loadWeather(coords)}>
        <Refresh name='refresh' activeTheme={darktheme} />
      </RefreshButton>
      <IconSun name='sun' />

      <Header>
        <Temperature activeTheme={darktheme}>{weather.main.temp}</Temperature>
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
        {weather.name}, {`${date.getHours()}:${date.getMinutes()}`}
      </LocationTitle>
      {/* Removi a seção do MainCard pq ela só continha dados estáticos. ou seja, não é interessante. */}
      <Info activeTheme={darktheme}>
        <InfoTitle activeTheme={darktheme}>Informações adicionais</InfoTitle>
        <InfoView>
          <InfoCard title={'Vento'} value={`${weather.wind.speed} km/h`} />
          <InfoCard title={'Umidade'} value={`${weather.main.humidity} %`} />
          <InfoCard title={'Temp.Min'} value={`${weather.main.temp_min} °C`} />
          <InfoCard title={'Temp.Max'} value={`${weather.main.temp_max} °C`} />
        </InfoView>
      </Info>
    </Container>
  )
}
