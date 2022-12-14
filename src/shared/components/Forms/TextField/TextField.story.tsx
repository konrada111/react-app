import React from "react"
import { ComponentStory } from "@storybook/react"
import TextField from "./TextField"
import { useForm } from "react-hook-form"

export default {
  title: "Forms/TextField",
  component: TextField,
}

const Template: ComponentStory<typeof TextField> = () => {
  const { control } = useForm()

  return (
    <div style={{ width: "400px" }}>
      <TextField control={control} placeholder="Placeholder" name="test" />
    </div>
  )
}

export const Primary = Template.bind({})
