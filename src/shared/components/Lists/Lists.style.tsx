import { font, rem } from "shared/utils/styles-utils"
import styled from "styled-components"

export const ItemWrapper = styled.div<{ active: boolean }>`
  cursor: pointer;
  text-align: center;
  ${font("Lato", 24, 500, 28)}
  padding:  0 5px;
  border-right: 1px solid ${({ theme }) => theme.colors.grey[400]};
  color: ${({ active }) =>
    active
      ? ({ theme }) => theme.colors.blue[400]
      : ({ theme }) => theme.colors.grey[800]};
`
export const BoxWrapper = styled.div<{ active: boolean }>`
  cursor: pointer;
  text-align: center;
  ${font("Lato", 32, 500, 40)};
  width: 80px;
  height: 80px;
  border-radius: 10px;
  padding: ${rem(10)};
  border: 1px solid grey;
  background: ${({ active }) =>
    active
      ? ({ theme }) => theme.colors.blue[800]
      : ({ theme }) => theme.colors.grey.white};
  color: ${({ active }) =>
    active
      ? ({ theme }) => theme.colors.grey.white
      : ({ theme }) => theme.colors.grey[800]};

  &:hover {
    background: ${({ theme }) => theme.colors.blue[400]};
    color: ${({ theme }) => theme.colors.grey.white};
  }
`
