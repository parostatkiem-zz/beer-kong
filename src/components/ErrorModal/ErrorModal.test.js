import React from "react";
import { render } from "@testing-library/react";
import ErrorModal from "./ErrorModal";

describe("ErrorModal", () => {
  const defaultTitle = "Ups, coś poszło nie tak";
  it("Renders the default title", () => {
    const { getByText } = render(<ErrorModal />);
    expect(getByText(defaultTitle)).toBeInTheDocument();
  });

  it("Renders a custom title", () => {
    const { getByText } = render(<ErrorModal title="test 123" />);
    expect(getByText("test 123")).toBeInTheDocument();
  });

  it("Renders a custom text and the default title", () => {
    const { getByText } = render(<ErrorModal text="test 123" />);
    expect(getByText("test 123")).toBeInTheDocument();
    expect(getByText(defaultTitle)).toBeInTheDocument();
  });
});
