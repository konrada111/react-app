import React from "react"
import Lists from "shared/components/Lists/Lists"
import {
  Heading,
  ListsWrapper,
  ListWrapper,
  SeatsWrapper,
  Wrapper,
} from "./Home.style"

const LIST = Array.from(Array(28).keys(), (x) => {
  return { id: x + 1, label: String(x + 1) }
})

const Home = () => {
  return (
    <Wrapper>
      <Heading>Choose your place by using list or seat</Heading>
      <Lists>
        <ListsWrapper>
          <SeatsWrapper>
            {LIST.map(({ label, id }) => (
              <Lists.Box id={id} key={label} label={label} />
            ))}
          </SeatsWrapper>
          <ListWrapper>
            {LIST.map(({ label, id }) => (
              <Lists.Item id={id} key={label} label={label} />
            ))}
          </ListWrapper>
        </ListsWrapper>
      </Lists>
    </Wrapper>
  )
}

export default Home
