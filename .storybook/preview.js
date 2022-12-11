import { addDecorator } from "@storybook/react"
import React, { Suspense } from "react"
import { ThemeProvider } from "styled-components"
import theme from "shared/constants/theme"
import { GlobalStyle } from "shared/styles/GlobalStyle"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((Story) => (
  <Suspense fallback={<div></div>}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  </Suspense>
))
