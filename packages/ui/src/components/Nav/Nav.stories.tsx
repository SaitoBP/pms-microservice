import React from 'react'
import { Story, Meta } from '@storybook/react'
import { MdSpaceDashboard } from 'react-icons/md'

import { Nav, INavProps } from './index'

export default {
  title: 'Navigation/Nav',
  component: Nav,
  argTypes: {
    title: {
      defaultValue: 'My Aweasome App',
    },
    items: {
      defaultValue: [
        { name: 'Dashboard', path: '/dashboard1', icon: MdSpaceDashboard },
        { name: 'Dashboard', path: '/dashboard2', icon: MdSpaceDashboard },
      ],
    },
    orientation: {
      defaultValue: 'vertical',
    },
  },
} as Meta<INavProps>

const Template: Story<INavProps> = args => <Nav {...args} />

export const Default = Template.bind({})
Default.args = {}

export const HorizontalNoTitle = Template.bind({})
HorizontalNoTitle.storyName = 'Nav Horizontal sem Titulo'
HorizontalNoTitle.args = {
  orientation: 'horizontal',
  noTitle: true,
  items: [
    { name: 'Tab 1', path: '/tab1', onClick: () => console.log('click') },
    { name: 'Tab 2', path: '/tab2', onClick: () => console.log('click') },
  ],
  defaultSelected: 0,
}
