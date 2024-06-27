import { render } from "@testing-library/react";
import React from "react"
import MuiChip from ".";
import theme from "../../../theme";
import { CHIP_LABEL_STYLES } from "../../../utils/constants";

describe('MuiChip', () => { 
    it('should render label to be in the document', () => { 
        const label='CLEAR';
        const { getByText } = render(<MuiChip label={label}/>)
        const ChipText = getByText('CLEAR');
        expect(ChipText).toBeInTheDocument();
    })
    it("should have the correct background color for CLEAR label", () => {
        const label = "CLEAR";
        const chipStyles = CHIP_LABEL_STYLES[label];
        const { container } = render(<MuiChip label={label} sx={chipStyles} />);
        const chipElement = container.querySelector('.MuiChip-root');    
        expect(chipElement).toHaveStyle(`background-color: ${theme.palette.accent.lightGreen}`);
        expect(chipElement).toHaveStyle(`color: ${theme.palette.accent.green}`);

    });

})
