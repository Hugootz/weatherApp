import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Home } from './src/Home/Home'
import theme from './src/global/styles/theme'
import { ThemeProvider } from 'styled-components'
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' />
      <Home />
    </ThemeProvider>
  )
}
