import React from "react";
import { StoryFn } from "@storybook/react";
import { TableData, candidateTableHeaders } from "../../../mocks/mockData";
import CandidateTable from ".";

export default {
  title: "organisms/Table",
  component: CandidateTable,
};

const Template: StoryFn<typeof CandidateTable> = (args) => <CandidateTable {...args} />

export const CandidatePageTable = Template.bind({});
CandidatePageTable.args = {
  candidateTableHeaders: candidateTableHeaders,
  TableData: TableData,
};