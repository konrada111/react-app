import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components"

import { animated } from "react-spring"
import { font, rem, sizing } from "shared/utils/styles-utils"

export type ButtonVariants = "primary" | "secondary" | "tertiary"

const variants: (props: {
  $isDisabled: boolean
}) => Record<ButtonVariants, FlattenInterpolation<ThemeProps<DefaultTheme>>> = (
  props
) => ({
  primary: css`
    background: ${({ theme }) =>
      props.$isDisabled ? theme.colors.grey[400] : theme.colors.blue[800]};
    color: ${({ theme }) => theme.colors.grey.white};
    &:hover {
      ${({ theme }) =>
        !props.$isDisabled && `background: ${theme.colors.blue[400]}`};
    }
  `,
  secondary: css`
    background: ${({ theme }) =>
      props.$isDisabled ? theme.colors.grey[100] : theme.colors.grey[100]};
    color: ${({ theme }) =>
      props.$isDisabled ? theme.colors.grey[400] : theme.colors.grey[800]};
    &:hover {
      ${({ theme }) =>
        !props.$isDisabled && `background: ${theme.colors.grey[100]}`};
    }
  `,
  tertiary: css`
    background: ${({ theme }) => theme.colors.grey.white};
    border: ${rem(1)} solid ${({ theme }) => theme.colors.grey[400]};
    color: ${({ theme }) =>
      props.$isDisabled ? theme.colors.grey[400] : theme.colors.grey[800]};
    &:hover {
      ${({ theme }) =>
        !props.$isDisabled && `background: ${theme.colors.blue[800]}`};
      color: ${({ theme }) =>
        props.$isDisabled ? theme.colors.grey[400] : theme.colors.grey.white};
      border-color: ${!props.$isDisabled && `transparent`};
    }
    &:active {
      ${({ theme }) =>
        !props.$isDisabled && `background: ${theme.colors.blue[400]}`};
      color: ${({ theme }) =>
        props.$isDisabled ? theme.colors.grey[400] : theme.colors.grey.white};
      border-color: ${!props.$isDisabled && `transparent`};
    }
  `,
})

export const Component = styled.div`
  display: flex;
`

export const Wrapper = styled(animated.button)<{
  variant: ButtonVariants
  $isDisabled: boolean
  $isLeftComponent: boolean
  $isRightComponent: boolean
}>`
  ${font("Lato", 13, 500, 28)}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: ${rem(8)};
  border: none;
  border-radius: ${rem(4)};
  white-space: nowrap;
  cursor: ${({ $isDisabled }) =>
    $isDisabled ? `default` : `pointer`} !important;
  ${Component} svg {
    ${sizing(20)}
  }
  ${(props) => props.variant && variants(props)[props.variant]}
`
