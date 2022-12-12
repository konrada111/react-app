import { font, rem } from "shared/utils/styles-utils"
import styled from "styled-components"

export const ItemWrapper = styled.div<{ active: boolean }>`
  cursor: pointer;
  text-align: center;
  ${font("Lato", 16, 500, 18)}
  padding-top: 5px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey[400]};
  color: ${({ active }) =>
    active
      ? ({ theme }) => theme.colors.blue[400]
      : ({ theme }) => theme.colors.grey[800]};
`
export const BoxWrapper = styled.div<{ active: boolean }>`
  cursor: pointer;
  text-align: center;
  ${font("Lato", 20, 500, 24)};
  max-width: 30px;
  max-height: 30px;
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
