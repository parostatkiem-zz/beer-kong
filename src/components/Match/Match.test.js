import React from "react";
import { render } from "@testing-library/react";
import Match from "./Match";
import { MockedProvider } from "@apollo/react-testing";
import { BrowserRouter } from "react-router-dom";

describe("Match", () => {
  const mockUsers = [
    {
      id: 1,
      name: "user1",
      picture: "user1picture"
    },
    {
      id: 2,
      name: "user2",
      picture: "user2picture"
    }
  ];
  it("Renders user names", () => {
    const { getByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <BrowserRouter>
          <Match user1={mockUsers[0]} user2={mockUsers[1]} />
        </BrowserRouter>
      </MockedProvider>
    );
    expect(getByText(mockUsers[0].name)).toBeInTheDocument();
    expect(getByText(mockUsers[1].name)).toBeInTheDocument();
  });

  it("Renders user links with thumbnails", () => {
    const { queryAllByRole } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <BrowserRouter>
          <Match user1={mockUsers[0]} user2={mockUsers[1]} />
        </BrowserRouter>
      </MockedProvider>
    );
    expect(queryAllByRole("link")).toMatchSnapshot();
  });

  it("Renders user points", () => {
    const { getByLabelText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <BrowserRouter>
          <Match
            user1={mockUsers[0]}
            user2={mockUsers[1]}
            user1points={3}
            user2points={4}
          />
        </BrowserRouter>
      </MockedProvider>
    );
    expect(getByLabelText("user-one-points").textContent).toBe("3");
    expect(getByLabelText("user-two-points").textContent).toBe("4");
  });

  it("Renders trophy icon when the match is finished", () => {
    const { queryByLabelText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <BrowserRouter>
          <Match winner={{ id: 2 }} user1={mockUsers[0]} user2={mockUsers[1]} />
        </BrowserRouter>
      </MockedProvider>
    );
    expect(queryByLabelText("trophy")).toBeInTheDocument();
  });

  it("Does not render trophy icon when the match is not finished", () => {
    const { queryByLabelText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <BrowserRouter>
          <Match isFinished={false} user1={mockUsers[0]} user2={mockUsers[1]} />
        </BrowserRouter>
      </MockedProvider>
    );
    expect(queryByLabelText("trophy")).not.toBeInTheDocument();
  });

  it("Renders the planned date", () => {
    const mockDate = new Date("2006-11-05").toISOString();
    const { queryByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <BrowserRouter>
          <Match
            plannedAt={mockDate}
            user1={mockUsers[0]}
            user2={mockUsers[1]}
          />
        </BrowserRouter>
      </MockedProvider>
    );
    expect(
      queryByText(new Date(mockDate).toLocaleDateString())
    ).toBeInTheDocument();
  });
});
