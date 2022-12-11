import "styled-components"

interface ColorsScale {
  50: string
  100: string
  400: string
  800: string
}

interface GreyScale extends Required<ColorsScale> {
  white: string
  black: string
}
type SystemColorsKeys = 50 | 500 | 800

type ElevationLevels = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type Elevations = Record<ElevationLevels, number>

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      grey: GreyScale
      blue: ColorsScale
      green: Pick<ColorsScale, SystemColorsKeys>
    }
    elevations: Elevations
  }
}
