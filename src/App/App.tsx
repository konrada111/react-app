import React from "react"

import { ThemeProvider } from "styled-components"
import theme from "shared/constants/theme"
import Home from "Home"
import { GlobalStyle } from "shared/styles/GlobalStyle"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
