import React, { useContext } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Badge,
  UncontrolledTooltip
} from "reactstrap";
import PageHeader from "components/PageHeader/PageHeader";
import {
  faUsers,
  faTrophy,
  faUserAstronaut,
  faFutbol
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddUserToTeamModal from "components/AddUserToTeamModal/AddUserToTeamModal";
import { useQuery } from "@apollo/react-hooks";
import { GET_TEAM } from "gql/queries";
import ErrorModal from "components/ErrorModal/ErrorModal";
import UserInfoContext from "contexts/UserInfoContext/UserInfo.context";
import LoadingBar from "components/LoadingBar/LoadingBar";
import useDate from "hooks/UseDate";
import { GET_USERS } from "gql/queries";
import { Link } from "react-router-dom";
import { GET_MATCHES } from "gql/queries";
import Match from "components/Match/Match";
import SectionHeader from "components/SectionHeader/SectionHeader";
import NoEntriesInfo from "components/NoEntriesInfo/NoEntriesInfo";

const Team = ({ id }) => {
  const team = useQuery(GET_TEAM, { variables: { id } });
  const users = useQuery(GET_USERS);
  const matches = useQuery(GET_MATCHES);

  const plannedMatches = matches.data
    ? matches.data.matches
        .filter(
          m =>
            (!m.isFinished && m.user1.teams.some(t => t.id === id)) ||
            m.user2.teams.some(t => t.id === id)
        )
        .map(m => <Match leagueId={id} key={m.id} {...m} />)
    : [];

  const { userInfo } = useContext(UserInfoContext);
  const createdAt = useDate(team.data ? team.data.team.createdAt : 0);

  if (team.error) {
    return <ErrorModal text={team.error.message} />;
  }
  if (team.loading) {
    return <LoadingBar />;
  }

  return (
    <Container className="my-3">
      <section>
        <Row>
          <Col>
            <PageHeader
              icon={faUsers}
              kind="drużyna"
              value={team.data.team.name}
              actions={
                (userInfo && userInfo.id === team.data.team.owner.id && (
                  <AddUserToTeamModal
                    teamId={id}
                    leagueId={team.data.team.league.id}
                    usersToChoseFrom={(users.data && users.data.users) || []}
                  />
                )) ||
                null
              }
            >
              <h6>{team.data.team.description}</h6>
            </PageHeader>
          </Col>
        </Row>
      </section>

      <section className="mt-3">
        <Row>
          <Col sm={8} xs={12}>
            <Card className="shadow border-0 mb-3">
              <CardHeader>
                <h5 className="my-0">
                  <FontAwesomeIcon icon={faUserAstronaut} color="#fb6340" />{" "}
                  Ranking graczy
                </h5>
              </CardHeader>
              <ListGroup>
                {team.data.team.users.map(u => (
                  <ListGroupItem
                    key={u.id}
                    tag="a"
                    href={"/player/" + u.id}
                    className="justify-content-between d-flex"
                  >
                    {userInfo && userInfo.id === u.id ? (
                      <strong>{u.name}</strong>
                    ) : (
                      u.name
                    )}

                    {u.id === team.data.team.owner.id && (
                      <Badge color="primary">założyciel</Badge>
                    )}
                    <Badge id={"won" + u.id} color="warning">
                      {/* TODO */}
                      <UncontrolledTooltip
                        delay={0}
                        placement="bottom"
                        target={"won" + u.id}
                      >
                        Ilość wygranych meczów
                      </UncontrolledTooltip>
                      <FontAwesomeIcon icon={faTrophy} color="#fb6340" />{" "}
                      {
                        u.matches.filter(
                          m => m.isFinished && m.winner.id === u.id
                        ).length
                      }
                    </Badge>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} sm={4}>
            <Card className="shadow border-0 mb-3">
              <ListGroup>
                <ListGroupItem key="league" className="justify-content-between">
                  Liga &nbsp;
                  <Link to={"/league/" + team.data.team.league.id}>
                    <Badge color="primary">{team.data.team.league.name}</Badge>
                  </Link>
                </ListGroupItem>
                <ListGroupItem key="owner" className="justify-content-between">
                  Założona przez &nbsp;
                  <Link to={"/player/" + team.data.team.owner.id}>
                    <Badge color="primary">{team.data.team.owner.name}</Badge>
                  </Link>
                </ListGroupItem>
                <ListGroupItem key="date" className="justify-content-between">
                  Data założenia <Badge color="primary">{createdAt}</Badge>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="mt-3">
        <SectionHeader size="s" title="Planowane mecze" icon={faFutbol} />
        {matches.error || matches.loading ? (
          <LoadingBar />
        ) : plannedMatches.length ? (
          plannedMatches
        ) : (
          <NoEntriesInfo>
            Nie ma żadnych zaplanowanych meczów dla tej drużyny
          </NoEntriesInfo>
        )}
      </section>
    </Container>
  );
};

export default Team;
