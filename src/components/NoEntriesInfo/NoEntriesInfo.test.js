import React from "react";
import { render } from "@testing-library/react";
import NoEntriesInfo from "./NoEntriesInfo";

describe("NoEntriesInfo", () => {
  it("Renders the default text", () => {
    const { container } = render(<NoEntriesInfo />);
    expect(container.textContent).toMatchSnapshot();
  });

  it("Renders a custom text", () => {
    const text = "test 123";
    const { container } = render(<NoEntriesInfo text={text} />);
    expect(container.textContent).toContain(text);
  });
});
