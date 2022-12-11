import React from "react"
import { fireEvent, render, screen } from "shared/utils/test-utils"
import Button from "./Button"
import { HashtagIcon } from "shared/assets/icons"
import theme from "shared/constants/theme"

describe("Button", () => {
  const testLabel = "Test Label"
  const onClick = jest.fn()
  test("displays correct label", () => {
    render(<Button label={testLabel} />)
    expect(screen.getByRole("button")).toHaveTextContent(testLabel)
  })
  test("onClick works correctly", () => {
    render(<Button label={testLabel} onClick={onClick} />)
    fireEvent.click(screen.getByRole("button"))
    expect(onClick).toBeCalled()
  })
  test("displays correctly right component", () => {
    render(<Button label={testLabel} rightComponent={<HashtagIcon />} />)
    const rightComponent = screen.getByTestId("button_right-component")
    expect(rightComponent).toBeInTheDocument()
  })
  test("displays correctly left component", () => {
    render(<Button label={testLabel} leftComponent={<HashtagIcon />} />)
    const rightComponent = screen.getByTestId("button_left-component")
    expect(rightComponent).toBeInTheDocument()
  })
  test("displays correctly colored button", () => {
    render(<Button label={testLabel} variant="tertiary" />)
    expect(screen.getByRole("button")).toHaveStyle({
      background: theme.colors.grey.white,
    })
  })
})
