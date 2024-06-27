import { render } from "@testing-library/react";
import Logout from ".";
import React from "react";
import { AVATAR_ALT_TEXT, JAMESCO, JAMES_RODRIGUEZ } from "../../../utils/constants";
import AVATAR_LOGO from '../../../../public/assets/images/avatar_image.svg'

describe('Logout' , () => {
    it.each([
        [JAMES_RODRIGUEZ],
        [JAMESCO]
    ])('should text render' , (text) => {
        const {getByText} = render(<Logout />)
        const element = getByText(text)
        expect(element).toBeInTheDocument();
    })
    it('renders Avatar component with the provided image and alt text', () => {
        const { getByAltText } = render(<Logout />);
        const avatar = getByAltText(AVATAR_ALT_TEXT);
        
        expect(avatar).toBeInTheDocument();
        
        expect(avatar).toHaveAttribute('src', AVATAR_LOGO);
        expect(avatar).toHaveStyle('width: 100%');
        expect(avatar).toHaveStyle('height: 100%');
      });
})