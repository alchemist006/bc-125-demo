import { Chip, ChipProps as MuiChipProps } from "@mui/material";
import React from "react";
import { CHIP_BORDER_RADIUS, CHIP_LABEL_STYLES } from "../../../utils/constants";
import styled from "@emotion/styled";

interface ChipPropsInterface extends MuiChipProps {
  label: string;
}

const MuiChip : React.FC<ChipPropsInterface> = ({
  label,
  ...muiChipProps
}: ChipPropsInterface) => {

  const chipStyles = CHIP_LABEL_STYLES[label.toUpperCase()];

  const StyledMuiChip = styled(Chip)({
    borderRadius: CHIP_BORDER_RADIUS ,
    ...chipStyles,
  })

  return (
    <StyledMuiChip
      label={label.toUpperCase()}
      {...muiChipProps}
    />
  );
};

export default MuiChip ;
