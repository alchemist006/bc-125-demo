import React from "react";
import { StoryFn } from "@storybook/react";
import { courtSearchTableHeaders, courtSearchesData } from "../../../mocks/mockData";
import CourtSearchTable from ".";

export default {
  title: "organisms/Table",
  component: CourtSearchTable,
};

const Template: StoryFn<typeof CourtSearchTable> = (args) => <CourtSearchTable {...args} />

export const CourtSearches = Template.bind({});
CourtSearches.args = {
  width:"66rem",
  courtTableHeaders: courtSearchTableHeaders,
  TableData: courtSearchesData,
};