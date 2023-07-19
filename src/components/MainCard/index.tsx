import React from "react";
import { Container, Title, IconMorning, TemperatureCard } from "./styles";

export function MainCard({ time }) {
  return (
    <Container>
      <Title>{time}</Title>
      <IconMorning name="sun" />
      <TemperatureCard>21°C</TemperatureCard>
    </Container>
  );
}
