import { StoryFn } from "@storybook/react";
import MuiAccordian from ".";
import { CandidateData, ReportData } from "../../../mocks/mockData";
export default {
    title: "organisms/MuiAccordian",
    component: MuiAccordian,
    parameter:{
        layout:'centered'
    }
}
const Template: StoryFn<typeof MuiAccordian> = (args) => <MuiAccordian {...args} />;

export const CandidateInfoCard = Template.bind({});
CandidateInfoCard.args={
  title:"Candidate Information",
  cardData:CandidateData,
}

export const ReportInfoCard = Template.bind({});
ReportInfoCard.args={
  title:"Report Information",
  cardData: ReportData,
}