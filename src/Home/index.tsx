import React from "react";
import { StatusBar } from "expo-status-bar";
import { Container, Bg, Input, Header } from "./styles";

export function Home() {
  return (
    <Container>
      <Header>
        <StatusBar style="light" />
      </Header>
      <Bg blurRadius={50} source={require("../assets/images/wp5198875.jpg")}>
        <Input placeholder="Find the location" placeholderTextColor={"#fff"} />
      </Bg>
    </Container>
  );
}
