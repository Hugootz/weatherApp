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
} from "./styles";
import { MainCard } from "../components/MainCard";

export function Home() {
  const [darktheme, setDarkTheme] = useState(true);
  const [currentTemperature, setCurrentTemperature] = useState("27");
  const [location, setLocation] = useState("BR,Fortaleza");
  return (
    <Container isActive={darktheme}>
      <RefreshButton>
        <Refresh name="refresh" isActive={darktheme} />
      </RefreshButton>
      <IconSun name="sun" />
      <Header>
        <Temperature isActive={darktheme}>{currentTemperature}</Temperature>
        <Symbol isActive={darktheme}>°C</Symbol>
      </Header>
      <Wrapper isActive={darktheme}>
        <MainCard time={"Manhã"} />
        <MainCard time={"Tarde"} />
        <MainCard time={"Noite"} />
      </Wrapper>
    </Container>
  );
}
