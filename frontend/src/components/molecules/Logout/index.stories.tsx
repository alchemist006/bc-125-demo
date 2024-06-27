
import React from 'react';
import Logout from '.';
import { StoryFn } from '@storybook/react';

export default {
  title: 'molecules/Logout',
  component: Logout,
  parameters: {
    layout: 'centered',
  },
  argTypes : {
    onClick : { action : 'Logged out successfully !' },
  }
};

const Template: StoryFn<typeof Logout> = (args) => <Logout {...args} />;

export const Default = Template.bind({});
Default.args = {}

