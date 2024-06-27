import type { Meta, StoryObj } from '@storybook/react'
import NavIcon from '.'
import HOME_LOGO from '../../../../public/assets/icons/Box.svg'
import CANDIDATE_LOGO from '../../../../public/assets/icons/Canditate.svg'

const meta: Meta<typeof NavIcon> = {
  title: 'MOLECULES/NavIcon',
  component: NavIcon,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof NavIcon>

export const HOME: Story = {
  args: {
    src: HOME_LOGO,
    label: 'HOME'
  }
}

export const Profile: Story = {
  args: {
    src: CANDIDATE_LOGO,
    label: 'Candidates'
  }
}
