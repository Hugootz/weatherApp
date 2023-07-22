import React from "react";
import { Container, Title, IconCard, TemperatureCard } from "./styles";

export function MainCard({ time, style, temperature, iconCard }) {
  return (
    <Container style={{ backgroundColor: style }}>
      <Title>{time}</Title>
      <IconCard name={iconCard} />
      <TemperatureCard>{temperature}</TemperatureCard>
    </Container>
  );
}
