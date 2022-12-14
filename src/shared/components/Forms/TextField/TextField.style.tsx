import { font, rem, sizing } from "shared/utils/styles-utils"
import styled from "styled-components"

export const Wrapper = styled.div<{
  error?: boolean
  disabled?: boolean
}>`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.grey[400]};
  border-radius: 8px;
  padding: 14px;
`

export const Input = styled.input`
  ${sizing("100%")};
  ${font("Lato", 14, 400, 26)};
  color: ${({ theme }) => theme.colors.grey[800]};
  border: none;
  padding: 0 ${rem(16)};
  background: transparent;
  height: 90%;
  margin-top: 3px;
  border-radius: ${rem(6)};
`
