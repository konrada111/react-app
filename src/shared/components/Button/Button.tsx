import React from "react"
import { ButtonVariants, Component, Wrapper } from "./Button.style"

export type ButtonType = "button" | "submit" | "reset"

export interface ButtonProps {
  label: string
  variant?: ButtonVariants
  isDisabled?: boolean
  leftComponent?: JSX.Element
  rightComponent?: JSX.Element
  onClick?(): void
  className?: string
  type?: ButtonType
  "data-testid"?: string
}

const Button = ({
  label,
  variant = "primary",
  isDisabled = false,
  leftComponent,
  rightComponent,
  onClick,
  className,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <Wrapper
      variant={variant}
      $isDisabled={isDisabled}
      $isLeftComponent={!!leftComponent}
      $isRightComponent={!!rightComponent}
      onClick={() => {
        if (!isDisabled && onClick) onClick()
      }}
      className={className}
      type={type}
      data-testid={props["data-testid"]}
    >
      {leftComponent && (
        <Component data-testid="button_left-component">
          {leftComponent}
        </Component>
      )}
      {label}
      {rightComponent && (
        <Component data-testid="button_right-component">
          {rightComponent}
        </Component>
      )}
    </Wrapper>
  )
}

export default Button
