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

const Match = ({ player1, player2, date, winner = null, looserPoints }) => {
  return (
    <Jumbotron className={classNames("match", { unplayed: winner === null })}>
      <div className={classNames(["player", "left", { winner: winner === 1 }])}>
        {winner === 1 ? (
          <FontAwesomeIcon className="trophy" icon={faTrophy} />
        ) : (
          <span></span>
        )}
        <Link to="/player/1">{player1}</Link>
        <span className="points">{winner === 1 ? 10 : looserPoints}</span>
      </div>
      <FontAwesomeIcon className="bolt_icon" icon={faBolt} />
      <span className="date">{date}</span>
      <div
        className={classNames(["player", "right", { winner: winner === 2 }])}
      >
        <span className="points">{winner === 2 ? 10 : looserPoints}</span>
        <Link to="/player/1">{player2}</Link>
        {winner === 2 ? (
          <FontAwesomeIcon className="trophy" icon={faTrophy} />
        ) : (
          <span></span>
        )}
      </div>
    </Jumbotron>
  );
};

export default Match;
