import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeh } from "@fortawesome/free-solid-svg-icons";
import "./NoEntriesInfo.scss";

export default function NoEntriesInfo({
  text = "Ta lista nie ma jeszcze wpisów",
  children,
  className
}) {
  return (
    <h6 className={"no-entries-info " + className}>
      <FontAwesomeIcon className="icon" inverse icon={faMeh} />{" "}
      {children || text}
    </h6>
  );
}
