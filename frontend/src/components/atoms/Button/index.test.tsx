import React from "react";
import MuiButton from ".";
import { render } from "@testing-library/react";
describe("MuiButton", () => {
  it("renders button with children", () => {
    const { getByText } = render(<MuiButton children="Logout" />);
    const buttonElement = getByText("Logout");
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <MuiButton children="Cancel" onClick={onClickMock} />
    );
    const buttonElement = getByText("Cancel");
    buttonElement.click();
    expect(onClickMock).toHaveBeenCalled();
  });

  it("disables the button when disabled prop is true", () => {
    const { getByText } = render(
      <MuiButton children="Disabled" disabled={true} />
    );
    const buttonElement = getByText("Disabled");
    expect(buttonElement).toBeDisabled();
  });

  it("applies custom styles", () => {
    const customStyles = {
      color: "green",
      backgroundColor: "black",
    };
    const { container } = render(
      <MuiButton children="Styled" sx={customStyles} />
    );
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveStyle("color: green");
    expect(buttonElement).toHaveStyle("background-color: rgba(25, 118, 210, 0.04)");

  });
});