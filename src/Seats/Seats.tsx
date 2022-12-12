import React from "react"
import Lists from "shared/components/Lists/Lists"
import { Heading, ListWrapper, SeatsWrapper, Wrapper } from "./Seats.style"

const LIST = Array.from(Array(28).keys(), (x) => {
  return { id: x + 1, label: String(x + 1) }
})

const Seats = () => {
  return (
    <Wrapper>
      <Heading>Choose your place by using list or seat</Heading>
      <Lists>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <ListWrapper>
            {LIST.map(({ label, id }) => (
              <Lists.Item id={id} key={label} label={label} />
            ))}
          </ListWrapper>
          <SeatsWrapper>
            {LIST.map(({ label, id }) => (
              <Lists.Box id={id} key={label} label={label} />
            ))}
          </SeatsWrapper>
        </div>
      </Lists>
    </Wrapper>
  )
}

export default Seats
