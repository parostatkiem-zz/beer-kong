import React, { useState } from "react";
import { Jumbotron } from "reactstrap";
import "./Match.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import classNames from "classnames";
import useDate from "hooks/UseDate";
import EditMatchModal from "components/EditMatchModal/EditMatchModal";

const Match = ({
  user1,
  user2,
  plannedAt,
  winner = null,
  user1points,
  user2points,
  isFinished,
  leagueId,
  id
}) => {
  const date = useDate(plannedAt);

  const [showEditModal, setShowEditModal] = useState(false);
  return (
    <>
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
          <span className="points">{user1points}</span>
        </div>
        <FontAwesomeIcon className="bolt_icon" icon={faBolt} />
        <span onClick={() => setShowEditModal(true)} className="date">
          {date}
        </span>
        <div
          className={classNames([
            "player",
            "right",
            { winner: winner && winner.id === user2.id }
          ])}
        >
          <span className="points">{user2points}</span>
          <Link to={"/player/" + user2.id}>{user2.name}</Link>
          {winner && winner.id === user2.id ? (
            <FontAwesomeIcon className="trophy" icon={faTrophy} />
          ) : (
            <span></span>
          )}
        </div>
      </Jumbotron>
      <EditMatchModal
        isOpen={showEditModal}
        setOpen={setShowEditModal}
        wasFinished={isFinished}
        user1={user1}
        user2={user2}
        leagueId={leagueId}
        matchId={id}
      />
    </>
  );
};

export default Match;
