import React from "react";
import { render } from "@testing-library/react";
import LoadingBar from "./LoadingBar";

describe("LoadingBar", () => {
  it("Renders spinner", () => {
    const { getByLabelText } = render(<LoadingBar />);
    expect(getByLabelText("loading-spinner")).toBeInTheDocument();
  });
});
