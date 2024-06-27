import React from "react";
import { render } from "@testing-library/react";
import HomePageTemplate from ".";

describe("HomePageTemplate Component", () => {
  it("renders with all components provided", () => {
    const { getByText } = render(
        <HomePageTemplate
          header={<div>Custom Header</div>}
          content={<div>Custom Content</div>} 
          sidebar={<div>Custom Sidebar</div>}        
        />
    );

    expect(getByText("Custom Header")).toBeInTheDocument();
    expect(getByText("Custom Content")).toBeInTheDocument();
    expect(getByText("Custom Sidebar")).toBeInTheDocument();
  });
});