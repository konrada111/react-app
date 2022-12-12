import { font } from "shared/utils/styles-utils"
import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey[50]};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const ListsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const SeatsWrapper = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(7, 80px);
`

export const Heading = styled.h1`
  ${font("Lato", 32, 500, 48)};
  text-align: center;
`
export const ListWrapper = styled.div`
  display: flex;
  flexdirection: column;
  margin-top: 100px;
`
