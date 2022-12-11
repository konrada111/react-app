export type Positions = {
  top?: number | string
  right?: number | string
  bottom?: number | string
  left?: number | string
}

enum Breakpoint {
  S = 576,
  M = 768,
  L = 992,
  XL = 1200,
  XXL = 1400,
}

export type BreakpointKey = keyof typeof Breakpoint

export const rem = (size: number) => size / 16 + "rem"

export const em = (size: number) => size / 16 + "em"

export const fontSize = (size: number) => `
  font-size: ${size}px;
  font-size: ${rem(size)};
`

export const font = (
  family: string,
  size: number,
  weight: number = 400,
  lineHeight?: number
) => `
  ${fontSize(size)}
  font-family: "${family}", sans-serif;
  font-weight: ${weight};
  line-height: ${lineHeight ? rem(lineHeight) : "normal"};
`

export const _position = (position: string, args: Positions) => `
  position: ${position};
  ${Object.entries(args)
    .map(
      ([key, value]) => `
      ${key}: ${value};
    `
    )
    .join("\n")}
`

export const absolute = (args: Positions) => _position("absolute", args)

export const relative = (args: Positions) => _position("relative", args)

export const fixed = (args: Positions) => _position("fixed", args)

export const breakWord = () => `
  word-wrap: break-word;
  overflow-wrap: break-word;
`

export const sizing = (...args: (string | number)[]) => {
  if (args.length === 2 && typeof args[1] === "string") {
    return `
      ${args[1]}width: ${rem(args[0] as number)};
      ${args[1]}height: ${rem(args[0] as number)};
    `
  }
  if (args.length === 2) {
    return `
      width: ${rem(args[0] as number)};
      height: ${rem(args[1] as number)};
    `
  }
  if (args.length === 3) {
    return `
      ${args[2]}width: ${rem(args[0] as number)};
      ${args[2]}height: ${rem(args[1] as number)};
    `
  }

  if (args.length === 1 && typeof args[0] === "string") {
    return `
      width: ${args[0]};
      height: ${args[0]};
    `
  }

  return `
    width: ${rem(args[0] as number)};
    height: ${rem(args[0] as number)};
  `
}

export const circle = (d: number) => `
  ${sizing(d)}
  border-radius: 50%;
`

export const threeSidedBorder = (style: string, excluded: string = "top") => `
  border: ${style};
  ${"border-" + excluded}: none;
`

export const flexCentered = (axis?: "X" | "Y") => {
  if (axis === "X") {
    return `
      display: flex;
      justify-content: center;
    `
  }
  if (axis === "Y") {
    return `
      display: flex;
      align-items: center;
    `
  }
  return `
    display: flex;
    justify-content: center;
    align-items: center;
  `
}

export const rwd = (brakepoints: Record<BreakpointKey, unknown>) => {
  const entries = Object.entries(brakepoints)

  return entries.map(
    ([breakpoint, style]: [string, unknown]) => `
      @media screen and (min-width: ${
        Breakpoint[breakpoint as BreakpointKey]
      }px) {
        ${style}
      }
    `
  )
}

export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return [
    parseInt(result![1], 16),
    parseInt(result![2], 16),
    parseInt(result![3], 16),
  ].join(", ")
}