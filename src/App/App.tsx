import React from "react"
import "./App.css"
import { ThemeProvider } from "styled-components"
import theme from "shared/constants/theme"

function App() {
  return <ThemeProvider theme={theme} />
}

export default App
