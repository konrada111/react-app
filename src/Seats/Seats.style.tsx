import { font } from "shared/utils/styles-utils"
import styled from "styled-components"

export const Wrapper = styled.div``

export const SeatsWrapper = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(7, 50px);
`

export const Heading = styled.h1`
  ${font("Lato", 32, 500, 48)};
  text-align: center;
`
export const ListWrapper = styled.div`
  width: 50px;
  height: 850px;
  overflow-y: scroll;
`
