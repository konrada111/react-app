import React from "react"

import { ThemeProvider } from "styled-components"
import theme from "shared/constants/theme"
import Seats from "Seats"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Seats />
    </ThemeProvider>
  )
}

export default App
