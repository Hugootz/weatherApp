import React from "react";
import { Home } from "./src/Home";
import theme from "./src/global/styles/theme";
import { ThemeProvider } from "styled-components";
export default function App() {
  return;
  <ThemeProvider theme={theme}>
    <Home />;
  </ThemeProvider>;
}
