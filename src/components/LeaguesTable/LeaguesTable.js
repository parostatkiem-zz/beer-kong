import React from "react";
import SingleLeague from "./SingleLeague/SingleLeague";

const LeaguesTable = ({ leagues }) => {
  return (
    <>
      {leagues.map(l => (
        <SingleLeague key={l.name} {...l} />
      ))}
    </>
  );
};

export default LeaguesTable;
