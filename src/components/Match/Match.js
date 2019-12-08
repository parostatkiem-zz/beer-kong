import React, { useState } from "react";
import { Jumbotron, Badge } from "reactstrap";
import "./Match.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSlash,
  faEdit,
  faBolt,
  faTrophy
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Match = ({ player1, player2, date, winner, looserPoints }) => {
  return (
    <Jumbotron className="match">
      <div className={classNames(["player", "left", { winner: winner === 1 }])}>
        {winner === 1 && <FontAwesomeIcon className="trophy" icon={faTrophy} />}
        <Link>{player1}</Link>
        <span class="points">10</span>
      </div>
      <FontAwesomeIcon className="bolt_icon" icon={faBolt} />
      <span className="date">{date}</span>
      <div
        className={classNames(["player", "right", { winner: winner === 2 }])}
      >
        <span class="points">{looserPoints}</span>
        <Link>{player2}</Link>
        {winner === 2 && <FontAwesomeIcon className="trophy" icon={faTrophy} />}
      </div>
    </Jumbotron>
  );
};

export default Match;
