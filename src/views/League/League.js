import React, { useContext } from "react";

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
  faBowlingBall,
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

const mockMatchesPlayed = [
  {
    player1: "Jan Kowalski",
    player2: "Filip Strózik",
    date: new Date(2019, 11, 3).toLocaleDateString(),
    winner: 2,
    looserPoints: 6
  },
  {
    player1: "Natalia",
    player2: "Klaudia",
    date: new Date(2019, 10, 5).toLocaleDateString(),
    winner: 1,
    looserPoints: 7
  },
  {
    player1: "Tobik",
    player2: "Bunia",
    date: new Date(2019, 5, 12).toLocaleDateString(),
    winner: 1,
    looserPoints: 2
  }
];

const mockMatchesUnplayed = [
  {
    player1: "Jan Kowalski",
    player2: "Filip Strózik"
    //  date: new Date(2019, 11, 3).toLocaleDateString()
  },
  {
    player1: "Natalia",
    player2: "Klaudia"
    //  date: new Date(2019, 10, 5).toLocaleDateString()
  },
  {
    player1: "Tobik",
    player2: "Bunia"
    // date: new Date(2019, 5, 12).toLocaleDateString()
  }
];

const mockUsers = [
  { id: "123", name: "Jan Sudczak" },
  { id: "4535", name: "Filip Strozik" },
  { id: "756756", name: "Klaudusia" },
  { id: "542354", name: "Klakson" },
  { id: "12134242343", name: "Tobik" }
];

const League = ({ id }) => {
  const league = useQuery(GET_LEAGUE, { variables: { id } });
  const createdAt = useDate(league.data ? league.data.league.createdAt : 0);
  const { userInfo } = useContext(UserInfoContext);
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
                    usersToChoseFrom={mockUsers}
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
                <Counter icon={faFutbol} size="s" value={35}>
                  Rozegranych meczów
                </Counter>
              </Col>
              <Col lg={12} sm={4}>
                <Counter
                  icon={faUserAstronaut}
                  size="s"
                  value={league.data.league.users.length}
                >
                  Aktywnych użytkowników
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
                {userInfo && <AddTeamModal leagueId={id} />}
              </CardHeader>
              <ListGroup>
                {league.data.league.teams.map(team => (
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
                      12
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
        <SectionHeader
          size="s"
          title="Ranking użytkowników"
          icon={faUserAstronaut}
        />
        <Card className="shadow border-0 mb-3">
          <ListGroup>
            {league.data.league.users.map(u => (
              <ListGroupItem
                key={u.id}
                className="d-flex justify-content-between"
              >
                <div>
                  <Link to={"/player/" + u.id}>{u.name}</Link>{" "}
                  <Link
                    to={"/team/" + u.teams.find(t => t.league.id === id).id}
                  >
                    <Badge color="primary">
                      {u.teams.find(t => t.league.id === id).name}
                    </Badge>
                  </Link>
                </div>
                <Badge color="warning">
                  {/* TODO */}
                  <FontAwesomeIcon icon={faTrophy} color="#fb6340" /> 21
                </Badge>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Card>
      </section>

      <section className="mt-3">
        <SectionHeader size="s" title="Rozegrane mecze" icon={faFutbol} />
        {mockMatchesPlayed.map(match => (
          <Match key={match.player1 + match.player2} {...match} />
        ))}
      </section>

      <section className="mt-3">
        <SectionHeader title="Planowane mecze" icon={faBowlingBall} />
        {mockMatchesUnplayed.map(match => (
          <Match key={match.player1 + match.player2} {...match} />
        ))}
      </section>
    </Container>
  );
};

export default League;
