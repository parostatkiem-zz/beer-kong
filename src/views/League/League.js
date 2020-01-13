import React, { useContext, useEffect, useState } from "react";
import Counter from "../../components/Counter/Counter";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Badge,
  ListGroupItem,
  CardHeader,
  UncontrolledTooltip
} from "reactstrap";
import SectionHeader from "components/SectionHeader/SectionHeader";
import {
  faUserAstronaut,
  faFutbol,
  faUsers,
  faChess,
  faTrophy
} from "@fortawesome/free-solid-svg-icons";
import Match from "components/Match/Match";
import { Link } from "react-router-dom";
import PageHeader from "components/PageHeader/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@apollo/react-hooks";
import { GET_LEAGUE } from "gql/queries";
import LoadingBar from "components/LoadingBar/LoadingBar";
import useDate from "hooks/UseDate";
import ErrorModal from "components/ErrorModal/ErrorModal";
import UserInfoContext from "contexts/UserInfoContext/UserInfo.context";
import AddTeamModal from "./../../components/AddTeamModal/AddTeamModal";
import AddMatchModal from "components/AddMatchModal/AddMatchModal";
import { GET_MATCHES } from "gql/queries";
import NoEntriesInfo from "components/NoEntriesInfo/NoEntriesInfo";

const League = ({ id }) => {
  const [hasAddedTeam, setAddedTeam] = useState(false);
  const league = useQuery(GET_LEAGUE, {
    pollInterval: process.env.REACT_APP_POLL_INTERVAL,
    variables: { id }
  });
  const matches = useQuery(GET_MATCHES, {
    pollInterval: process.env.REACT_APP_POLL_INTERVAL,
    variables: { where: { league: { id } } }
  });
  const createdAt = useDate(league.data ? league.data.league.createdAt : 0);
  const { userInfo } = useContext(UserInfoContext);

  useEffect(() => {
    if (!league.data || !userInfo) {
      return;
    }

    setAddedTeam(
      league.data.league.teams.some(t => t.owner.id === userInfo.id)
    );
  }, [league.data, setAddedTeam, userInfo]);

  if (league.error) {
    return <ErrorModal text={league.error.message} />;
  }
  if (league.loading) {
    return <LoadingBar />;
  }

  return (
    <Container className="my-3">
      <section>
        <Row>
          <Col>
            <PageHeader
              icon={faChess}
              kind="Liga"
              value={league.data.league.name}
              actions={
                (userInfo && userInfo.id === league.data.league.owner.id && (
                  <AddMatchModal
                    leagueId={league.data.league.id}
                    usersToChoseFrom={league.data.league.teams.flatMap(
                      t => t.users
                    )}
                  />
                )) ||
                null
              }
            >
              <h6>{league.data.league.description}</h6>
            </PageHeader>
          </Col>
        </Row>
        <Row>
          <Col lg={4} sm={12}>
            <Row>
              <Col lg={12} sm={4}>
                <Counter
                  icon={faFutbol}
                  size="s"
                  value={
                    league.data ? league.data.league.finishedMatches : "..."
                  }
                >
                  Rozegranych meczów
                </Counter>
              </Col>
              <Col lg={12} sm={4}>
                <Counter
                  icon={faUserAstronaut}
                  size="s"
                  value={league.data.league.users.length}
                >
                  Aktywnych graczy
                </Counter>
              </Col>
              <Col lg={12} sm={4}>
                <Card className="shadow border-0 mb-3">
                  <ListGroup>
                    <ListGroupItem className="justify-content-between">
                      Założona przez &nbsp;
                      <Link to={"/player/" + league.data.league.owner.id}>
                        <Badge color="primary">
                          {league.data.league.owner.name}
                        </Badge>
                      </Link>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                      Data założenia <Badge color="primary">{createdAt}</Badge>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col lg={8} sm={12}>
            <Card className="shadow border-0 mb-3">
              <CardHeader>
                <h5 className="my-0">
                  <FontAwesomeIcon icon={faUsers} color="#fb6340" /> Ranking
                  drużyn
                </h5>
                {userInfo && !hasAddedTeam && <AddTeamModal leagueId={id} />}
              </CardHeader>
              <ListGroup>
                {league.data.league.teams
                  .sort(team => team.points)
                  .reverse()
                  .map(team => (
                    <ListGroupItem
                      key={team.name}
                      tag="a"
                      href={"/team/" + team.id}
                      className="justify-content-between d-flex"
                    >
                      {userInfo && team.owner.id === userInfo.id ? (
                        <>
                          <strong> {team.name}</strong>
                          <Badge color="primary">założyciel</Badge>
                        </>
                      ) : (
                        <span> {team.name}</span>
                      )}
                      <Badge id={team.id} color="warning">
                        {team.points}
                      </Badge>
                      <UncontrolledTooltip
                        delay={0}
                        placement="bottom"
                        target={team.id}
                      >
                        Punkty zdobyte przez drużynę
                      </UncontrolledTooltip>
                    </ListGroupItem>
                  ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </section>
      <section className="mt-3">
        <SectionHeader size="s" title="Ranking graczy" icon={faUserAstronaut} />
        {league.data.league.users.length ? (
          <Card className="shadow border-0 mb-3">
            <ListGroup>
              {league.data.league.users
                .sort((a, b) => b.pointsInLeague - a.pointsInLeague)
                .map(u => (
                  <ListGroupItem
                    key={u.id}
                    className="d-flex justify-content-between"
                  >
                    <div>
                      <Link to={"/player/" + u.id}>{u.name}</Link>{" "}
                      <Link
                        to={
                          "/team/" +
                          (u.teams.find(t => t.league.id === id) || {}).id
                        }
                      >
                        <Badge color="primary">
                          {(u.teams.find(t => t.league.id === id) || {}).name}
                        </Badge>
                      </Link>
                    </div>
                    <Badge id={"won" + u.id} color="warning">
                      <UncontrolledTooltip
                        delay={0}
                        placement="bottom"
                        target={"won" + u.id}
                      >
                        Ilość wygranych meczów
                      </UncontrolledTooltip>
                      <FontAwesomeIcon icon={faTrophy} color="#fb6340" />{" "}
                      {u.pointsInLeague}
                    </Badge>
                  </ListGroupItem>
                ))}
            </ListGroup>
          </Card>
        ) : (
          <NoEntriesInfo>W tej lidze nie ma jeszcze graczy</NoEntriesInfo>
        )}
      </section>

      <section className="mt-3">
        <SectionHeader size="s" title="Rozegrane mecze" icon={faFutbol} />

        {matches.error || matches.loading ? (
          <LoadingBar />
        ) : matches.data.matches.length ? (
          matches.data.matches
            .filter(m => m.isFinished)
            .map(m => (
              <Match
                canManage={
                  userInfo && userInfo.id === league.data.league.owner.id
                }
                leagueId={id}
                key={m.id}
                {...m}
              />
            ))
        ) : (
          <NoEntriesInfo>
            W tej lidze nie odbył się jeszcze żaden mecz
          </NoEntriesInfo>
        )}
      </section>

      <section className="mt-3">
        <SectionHeader size="s" title="Planowane mecze" icon={faFutbol} />
        {matches.error || matches.loading ? (
          <LoadingBar />
        ) : matches.data.matches.length ? (
          matches.data.matches
            .filter(m => !m.isFinished)
            .map(m => (
              <Match
                canManage={
                  userInfo && userInfo.id === league.data.league.owner.id
                }
                leagueId={id}
                key={m.id}
                {...m}
              />
            ))
        ) : (
          <NoEntriesInfo>
            W tej lidze nie odbył się jeszcze żaden mecz
          </NoEntriesInfo>
        )}
      </section>
    </Container>
  );
};

export default League;
