import React from "react";
import { StoryFn } from "@storybook/react";
import Typography from "../../atoms/Typography";
import PreAdverseNoticeCard from "../../organisms/PreAdverseNoticeCard";
import { PRE_ADVERSE_NOTICE_TITLE } from "../../../utils/constants";
import HomePageTemplate from ".";
import SideBar from "../../organisms/SideBar";
import MuiButton from "../../atoms/Button";
import IconComponent from "../../atoms/icon";
import BackIcon from '../../../../public/assets/icons/BackIcon.svg';
import theme from "../../../theme";

export default {
  title: "templates/Home Page Template",
  component: HomePageTemplate,
};

const Template: StoryFn = () => 
<HomePageTemplate 
  header={
    <MuiButton 
        children={<Typography text={PRE_ADVERSE_NOTICE_TITLE} variant="subtitle1" />} 
        startIcon={<IconComponent src={BackIcon} />} 
        variant="text"
        sx={{color:theme.palette.textColor.highEmphasis,textTransform:"uppercase"}}
      />
    } 
    content={<PreAdverseNoticeCard onSubmit={() => {}} />} 
    sidebar={<SideBar onNavClick={() => {}} onLogoutClick={() => {}} />}   
  />

export const SamplePage = Template.bind({});
