import React from "react";
import { Container, Title, Value } from "./styles";

export function InfoCard({ title, value }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Container>
  );
}
