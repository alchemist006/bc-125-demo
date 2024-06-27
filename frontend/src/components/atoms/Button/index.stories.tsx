import React from "react";
import { StoryFn } from "@storybook/react";
import MuiButton from ".";
import theme from "../../../theme";

export default {
  title: "atoms/Button",
  component: MuiButton,
  argTypes: {
    onClick: { action: 'You clicked me !' },
  },
};

const Template: StoryFn<typeof MuiButton> = (args) => <MuiButton {...args} />;

export const Cancel = Template.bind({});
Cancel.args = {
  children: "Cancel",
  variant: "outlined",
  sx: {
    width: "inherit",
    height: "2.25rem",
    padding: "0.5rem 1rem",
    borderRadius: " 0.375rem",
    textTransform: "none",
    border: `0.0625rem solid ${theme.palette.structural.stroke}`,
    background: theme.palette.textColor.white,
    gap: "0.25rem",
    color: theme.palette.textColor.mediumEmphasis,
    "&:hover": {
      background: "none",
      border: `0.0625rem solid ${theme.palette.structural.stroke}`,
    },
  },
  disabled: false,
};

export const Logout = Template.bind({});
Logout.args = {
  children: "Logout",
  variant: "contained",
  sx: {
    width: "inherit",
    height: "2.25rem",
    padding: "0.5rem 1rem",
    borderRadius: " 0.375rem",
    textTransform: "none",
    background: theme.palette.primary.main,
    gap: "0.25rem",
    color: theme.palette.textColor.white,
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  disabled: false,
};