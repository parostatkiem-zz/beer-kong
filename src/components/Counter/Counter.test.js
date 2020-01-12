import React from "react";
import { render } from "@testing-library/react";
import Counter from "./Counter";
import { faICursor } from "@fortawesome/free-solid-svg-icons";

describe("Counter", () => {
  it("Renders the number", () => {
    const { getByText } = render(<Counter value={123} icon={faICursor} />);
    expect(getByText("123")).toBeInTheDocument();
  });

  it("Renders the children", () => {
    const { getByText } = render(
      <Counter icon={faICursor}>Test string</Counter>
    );
    expect(getByText("Test string")).toBeInTheDocument();
  });
});
