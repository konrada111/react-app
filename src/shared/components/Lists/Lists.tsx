import React, { createContext, ReactNode, useContext } from "react"
import { BoxWrapper, ItemWrapper } from "./Lists.style"

type ListsContextType = {
  isActive: number
  setIsActive(value: number): void
}

interface ListsProps {
  children: ReactNode
}

interface ItemProps {
  label: string
  id: number
}

interface BoxProps {
  label: string
  id: number
}

const ListContext = createContext<ListsContextType>({
  isActive: 0,
  setIsActive: () => {
    return
  },
})

const Lists = ({ children }: ListsProps) => {
  const [isActive, setIsActive] = React.useState<number>(0)

  return (
    <ListContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </ListContext.Provider>
  )
}

const Item = ({ label, id }: ItemProps) => {
  const { isActive, setIsActive } = useContext(ListContext)

  return (
    <ItemWrapper active={id === isActive} onClick={() => setIsActive(id)}>
      {label}
    </ItemWrapper>
  )
}

const Box = ({ label, id }: BoxProps) => {
  const { isActive, setIsActive } = useContext(ListContext)
  return (
    <BoxWrapper active={id === isActive} onClick={() => setIsActive(id)}>
      {label}
    </BoxWrapper>
  )
}

export default Lists

Lists.Item = Item
Lists.Box = Box
