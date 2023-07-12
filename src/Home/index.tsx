import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Container,
  Bg,
  Input,
  Header,
  InputButton,
  IconButton,
  Locations,
  Press,
  Title,
} from "./styles";
import { DismissKeyboard } from "../components/DismissKeyboard";

export function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar style="light" />
        <Bg blurRadius={50} source={require("../assets/images/wp5198875.jpg")}>
          <Header>
            {showSearch ? (
              <Input
                placeholder="Find the location..."
                placeholderTextColor={"#cecece"}
              />
            ) : null}
            <InputButton onPress={() => setShowSearch(!showSearch)}>
              <IconButton name="search1" size={24} color="#fff" />
            </InputButton>

            {locations.length > 0 && showSearch ? (
              <Locations>
                {locations.map((loc, index) => {
                  return (
                    <Press key={index}>
                      <Title>London, United Kingdom</Title>
                    </Press>
                  );
                })}
              </Locations>
            ) : null}
          </Header>
        </Bg>
      </Container>
    </DismissKeyboard>
  );
}
