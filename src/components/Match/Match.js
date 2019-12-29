import React from "react";
import { Jumbotron } from "reactstrap";
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
import useDate from "hooks/UseDate";

const Match = ({
  user1,
  user2,
  plannedAt,
  winner = null,
  user1Points,
  user2Points,
  isFinished
}) => {
  const date = useDate(plannedAt);
  return (
    <Jumbotron className={classNames("match", { unplayed: !isFinished })}>
      <div
        className={classNames([
          "player",
          "left",
          { winner: winner && winner.id === user1.id }
        ])}
      >
        {winner && winner.id === user1.id ? (
          <FontAwesomeIcon className="trophy" icon={faTrophy} />
        ) : (
          <span></span>
        )}
        <Link to={"/player/" + user1.id}>{user1.name}</Link>
        <span className="points">{user1Points}</span>
      </div>
      <FontAwesomeIcon className="bolt_icon" icon={faBolt} />
      <span className="date">{date}</span>
      <div
        className={classNames([
          "player",
          "right",
          { winner: winner && winner.id === user2.id }
        ])}
      >
        <span className="points">{user2Points}</span>
        <Link to={"/player/" + user2.id}>{user2.name}</Link>
        {winner && winner.id === user2.id ? (
          <FontAwesomeIcon className="trophy" icon={faTrophy} />
        ) : (
          <span></span>
        )}
      </div>
    </Jumbotron>
  );
};

export default Match;
