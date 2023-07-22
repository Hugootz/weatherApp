import React, { useState } from "react";
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
  Location,
  ThemeButton,
  SquareButton,
  CircleButton,
} from "./styles";
import { MainCard } from "../components/MainCard";
import theme from "../global/styles/theme";
import { InfoCard } from "../components/InfoCard";

export function Home() {
  const [darktheme, setDarkTheme] = useState(true);
  const [currentTemperature, setCurrentTemperature] = useState("27");
  const [location, setLocation] = useState("BR,Fortaleza");
  const [currentHour, setCurrentHour] = useState("13:30");
  const [wind, setWind] = useState("65");
  const [umidity, setUmidity] = useState("80");
  const [tempMin, setTempMin] = useState("21");
  const [tempMax, setTempMax] = useState("29");
  return (
    <Container activeTheme={darktheme}>
      <RefreshButton>
        <Refresh name="refresh" activeTheme={darktheme} />
      </RefreshButton>
      <IconSun name="sun" />

      <Header>
        <Temperature activeTheme={darktheme}>{currentTemperature}</Temperature>
        <Symbol activeTheme={darktheme}>°C</Symbol>
      </Header>
      <ThemeButton>
        <SquareButton activeTheme={darktheme}>
          <CircleButton activeTheme={darktheme}></CircleButton>
        </SquareButton>
      </ThemeButton>
      <Location activeTheme={darktheme}>
        {location}, {currentHour}
      </Location>
      <Wrapper activeTheme={darktheme}>
        <MainCard
          time={"Manhã"}
          style={
            darktheme ? theme.colors.morning_light : theme.colors.morning_dark
          }
          temperature={"21°C"}
          iconCard={"day-sunny"}
        />
        <MainCard
          time={"Tarde"}
          style={darktheme ? theme.colors.after_dark : theme.colors.after_light}
          temperature={"30°C"}
          iconCard={"cloudy-gusts"}
        />
        <MainCard
          time={"Noite"}
          style={darktheme ? theme.colors.night_dark : theme.colors.night_light}
          temperature={"15°C"}
          iconCard={"rains"}
        />
      </Wrapper>
      <Info activeTheme={darktheme}>
        <InfoTitle activeTheme={darktheme}>Informações adicionais</InfoTitle>
        <InfoView>
          <InfoCard title={"Vento"} value={wind + " km/h"} />
          <InfoCard title={"Umidade"} value={umidity + " %"} />
          <InfoCard title={"Temp.Min"} value={tempMin + "°C"} />
          <InfoCard title={"Temp.Max"} value={tempMax + "°C"} />
        </InfoView>
      </Info>
    </Container>
  );
}
