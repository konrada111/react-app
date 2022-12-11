import React from "react"
import Button from "./Button"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { HashtagIcon } from "shared/assets/icons"

const icons = { HashtagIcon, Empty: null }

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    leftComponent: {
      options: Object.keys(icons),
      mapping: {
        HashtagIcon: <HashtagIcon />,
        Empty: null,
      },
      control: {
        type: "select",
      },
      defaultValue: null,
    },
    rightComponent: {
      options: Object.keys(icons),
      mapping: {
        HashtagIcon: <HashtagIcon />,
        Empty: null,
      },
      control: {
        type: "select",
      },
      defaultValue: <HashtagIcon />,
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ margin: "20%" }}>
    <Button {...args} />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  label: "Button",
  leftComponent: <HashtagIcon />,
  rightComponent: <HashtagIcon />,
}
