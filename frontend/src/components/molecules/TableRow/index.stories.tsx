import React from "react";
import { StoryFn } from "@storybook/react";
import GenericTableRow from ".";
import theme from "../../../theme";
import { TableRowPropsInterface } from "../../../utils/interfaces";

export default {
  title: "molecules/GenericTableRow",
  component: GenericTableRow,
  argTypes: {},
};

const Template: StoryFn<TableRowPropsInterface> = (args) => <GenericTableRow {...args} />

export const CandidateTable = Template.bind({});
CandidateTable.args = {
  candidateName: "John Doe",
  adjudication: "-",
  status: "CLEAR",
  location: "Sukamanah",
  date: "2023-09-07",
  cellwidth: theme.spacing(264),
};

export const CourtSearches = Template.bind({});
CourtSearches.args = {
  searchName: "SSN Verification",
  status: "CONSIDER",
  date: "7/2/2022",
  cellwidth: theme.spacing(70),
};

export const CandidateInformation = Template.bind({})
CandidateInformation.args = {
    searchName: "SSN Verification",
    status: "SCHEDULED",
    preNoticeDate:"2022/02/22",
    postNoticeDate:"2023/01/22",
    cellwidth: theme.spacing(70),
}