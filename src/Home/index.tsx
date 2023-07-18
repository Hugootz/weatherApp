import React, { useState } from "react";
import {
  Container,
  Header,
  Temperature,
  Symbol,
  IconSun,
  Refresh,
  RefreshButton,
} from "./styles";

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
    </Container>
  );
}
