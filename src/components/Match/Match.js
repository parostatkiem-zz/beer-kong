import React, { useState } from "react";
import { Jumbotron, Button } from "reactstrap";
import "./Match.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faTrophy,
  faFlagCheckered,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import classNames from "classnames";
import useDate from "hooks/UseDate";
import EditMatchModal from "components/EditMatchModal/EditMatchModal";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_MATCH } from "gql/mutations";
import { GET_LEAGUE } from "gql/queries";
import { GET_MATCHES } from "gql/queries";

function PlayerLink({ user }) {
  return (
    <Link to={"/player/" + user.id}>
      <img className="thumbnail" src={user.picture} alt={" "} />
      {user.name}
    </Link>
  );
}

const Match = ({
  user1,
  user2,
  plannedAt,
  winner = null,
  user1points,
  user2points,
  isFinished,
  leagueId,
  id,
  canManage = false
}) => {
  const date = useDate(plannedAt);
  const [deleteMatch] = useMutation(DELETE_MATCH, {
    refetchQueries: [
      { query: GET_LEAGUE, variables: { id: leagueId } },
      { query: GET_MATCHES, variables: { where: { league: { leagueId } } } }
    ],
    onError: e => window.alert(e.message),
    onCompleted: () => setShowEditModal(false)
  });

  function handleMatchDelete() {
    if (!window.confirm("Czy na pewno chcesz usunąć ten mecz?")) {
      return;
    }

    deleteMatch({ variables: { where: { id } } });
  }

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
          <span></span>
          <PlayerLink user={user1} />
          <span className="points">
            {winner && winner.id === user1.id ? (
              <FontAwesomeIcon className="trophy" icon={faTrophy} />
            ) : (
              <span></span>
            )}
            {user1points}
          </span>
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
          <span className="points">
            {user2points}
            {winner && winner.id === user2.id ? (
              <FontAwesomeIcon className="trophy" icon={faTrophy} />
            ) : (
              <span></span>
            )}
          </span>
          <PlayerLink user={user2} />

          {canManage ? (
            <Button
              className="btn-icon btn-2 action-button"
              color="primary"
              type="button"
              size="sm"
              onClick={() =>
                isFinished ? handleMatchDelete() : setShowEditModal(true)
              }
            >
              <span className="btn-inner--icon">
                <FontAwesomeIcon
                  icon={isFinished ? faTrash : faFlagCheckered}
                />
              </span>
            </Button>
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
        handleDelete={handleMatchDelete}
      />
    </>
  );
};

export default Match;
