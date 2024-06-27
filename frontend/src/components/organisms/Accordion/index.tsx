import React from "react";
import theme from "../../../theme";
import styled from "@emotion/styled";
import ArrowDown from "../../../../public/assets/icons/Arrow_Down.png";
import { Accordion, AccordionSummary, Grid } from "@mui/material";
import Typography from "../../atoms/Typography";
import InfoCard from "../../molecules/InfoCard";
import AccordionDetails from "@mui/material/AccordionDetails";
import Icon from "../../atoms/icon";
import { AccordianPropsInterface } from "../../../utils/interfaces";
import { ACCORDION_DETAIL_SX, ACCORDION_ICON_WIDTH, ACCORDION_WIDTH } from "../../../utils/constants";


const CardGrid = styled(Grid)({
  flexDirection: "row",
  flexWrap: "wrap",
  display: "flex",
  gap: theme.spacing(4),
  padding: theme.spacing(4),
  backgroundColor: theme.palette.textColor.white,
});

const StyledAccordion = styled(Accordion)`
  width: 99%;
  border-radius: ${theme.spacing(2)};
  box-shadow: ${theme.spacing(0)} ${theme.spacing(1)} ${theme.spacing(7)}
    rgba(45, 45, 47, 0.1);
  background-color: ${theme.palette.textColor.white};
  padding-top: ${theme.spacing(1)};
  padding-bottom: ${theme.spacing(1)};
  font-family: ${theme.typography.fontFamily};
`;

const StyledTypography = styled(Typography)({
    fontWeight: "bold", 
    marginLeft: theme.spacing(2)
})

const MuiAccordian = ({ cardData, title }: AccordianPropsInterface) => {
  return (
    <StyledAccordion>
      <AccordionSummary
        expandIcon={
          <Icon src={ArrowDown} width={theme.spacing(6) } height={theme.spacing(6)} />
        }
      >
        <StyledTypography
          text={title}
          variant={"subtitle1"}
        />
      </AccordionSummary>
      <AccordionDetails
        sx={ACCORDION_DETAIL_SX}
      >
        <Grid data-testid="item-style">
          <CardGrid>
            {cardData?.map((val) => (
                <InfoCard
                    key={val.id}
                    content={val.subtitle}
                    icon={val.iconSrc}
                    sx={ACCORDION_WIDTH}
                    width={ACCORDION_ICON_WIDTH}
                    height={ACCORDION_ICON_WIDTH}
                    title={val.title}
                />
            ))}
          </CardGrid>
        </Grid>
      </AccordionDetails>
    </StyledAccordion>
  );
};

export default MuiAccordian;