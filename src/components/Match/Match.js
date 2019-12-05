import React, { useState } from "react";
import { Jumbotron, Badge } from "reactstrap";
import "./Match.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlash } from "@fortawesome/free-solid-svg-icons";

const Match = ({ player1, player2, date, winner, looserPoints }) => {
  return (
    <Jumbotron className="match">
      <div className="player winner">{player1}</div>
      <div className="player">{player2}</div>
    </Jumbotron>
  );
};

export default Match;
