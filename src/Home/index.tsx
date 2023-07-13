import React, { useState } from "react";
import { Container, Title } from "./styles";

export function Home() {
  const [darktheme, setDarkTheme] = useState(true);
  const [currentTemperature, setCurrentTemperature] = useState("27");
  const [location, setLocation] = useState("BR,Fortaleza");
  return (
    <Container>
      <Title>Welcome Home</Title>
    </Container>
  );
}
