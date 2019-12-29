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
  faChess,
  faTrophy,
  faUserAstronaut
} from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "components/SectionHeader/SectionHeader";
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

const Team = ({ id }) => {
  const team = useQuery(GET_TEAM, { variables: { id } });

  const users = useQuery(GET_USERS);

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
                    <Badge id="test6" color="warning">
                      12
                    </Badge>
                    <UncontrolledTooltip
                      delay={0}
                      placement="bottom"
                      target="test6"
                    >
                      Punkty zdobyte przez gracza
                    </UncontrolledTooltip>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} sm={4}>
            <Card className="shadow border-0 mb-3">
              <ListGroup>
                <ListGroupItem className="justify-content-between">
                  Liga &nbsp;
                  <Link to={"/league/" + team.data.team.league.id}>
                    <Badge color="primary">{team.data.team.league.name}</Badge>
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="justify-content-between">
                  Założona przez &nbsp;
                  <Link to={"/player/" + team.data.team.owner.id}>
                    <Badge color="primary">{team.data.team.owner.name}</Badge>
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="justify-content-between">
                  Data założenia <Badge color="primary">{createdAt}</Badge>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="mt-3">
        <Row>
          <Col sm={6} xs={12}>
            <Card className="shadow border-0 mb-3">
              <CardHeader>
                <h5 className="my-0">
                  <FontAwesomeIcon icon={faChess} color="#fb6340" />{" "}
                  <a href="/league/1">Konarskiego oficjalnie </a>
                </h5>
                <h5>
                  <FontAwesomeIcon icon={faTrophy} color="#fb6340" />{" "}
                  <Badge
                    id="test12"
                    style={{ fontSize: "80%" }}
                    color="primary"
                  >
                    1
                  </Badge>
                  <UncontrolledTooltip
                    delay={0}
                    placement="bottom"
                    target="test12"
                  >
                    Miejsce drużyny w lidze
                  </UncontrolledTooltip>
                </h5>
              </CardHeader>
              <ListGroup>
                <ListGroupItem
                  tag="a"
                  href="/player/1"
                  className="justify-content-between d-flex"
                >
                  <strong>Filip Strózik </strong>
                  <Badge color="primary">założyciel</Badge>
                  <Badge id="test6" color="warning">
                    12
                  </Badge>
                  <UncontrolledTooltip
                    delay={0}
                    placement="bottom"
                    target="test6"
                  >
                    Punkty zdobyte przez gracza
                  </UncontrolledTooltip>
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  href="/player/1"
                  className="justify-content-between d-flex"
                >
                  Jan Sudczak
                  <Badge id="test7" color="warning">
                    8
                  </Badge>
                  <UncontrolledTooltip
                    delay={0}
                    placement="bottom"
                    target="test7"
                  >
                    Punkty zdobyte przez gracza
                  </UncontrolledTooltip>
                </ListGroupItem>

                <ListGroupItem
                  tag="a"
                  href="/player/1"
                  className="justify-content-between d-flex"
                >
                  Klaudia
                  <Badge id="test9" color="warning">
                    6
                  </Badge>
                  <UncontrolledTooltip
                    delay={0}
                    placement="bottom"
                    target="test9"
                  >
                    Punkty zdobyte przez gracza
                  </UncontrolledTooltip>
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  href="/player/1"
                  className="justify-content-between d-flex"
                >
                  Natalia
                  <Badge id="test77" color="warning">
                    4
                  </Badge>
                  <UncontrolledTooltip
                    delay={0}
                    placement="bottom"
                    target="test77"
                  >
                    Punkty zdobyte przez gracza
                  </UncontrolledTooltip>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={6} xs={12}>
            <Card className="shadow border-0 mb-3">
              <CardHeader>
                <h5 className="my-0">
                  <FontAwesomeIcon icon={faChess} color="#fb6340" />{" "}
                  <a href="/league/1">Konarskiego na luzie </a>
                </h5>
                <h5>
                  <FontAwesomeIcon icon={faTrophy} color="#fb6340" />{" "}
                  <Badge
                    id="test12"
                    style={{ fontSize: "80%" }}
                    color="primary"
                  >
                    6
                  </Badge>
                  <UncontrolledTooltip
                    delay={0}
                    placement="bottom"
                    target="test12"
                  >
                    Miejsce drużyny w lidze
                  </UncontrolledTooltip>
                </h5>
              </CardHeader>
              <ListGroup>
                <ListGroupItem
                  tag="a"
                  href="/player/1"
                  className="justify-content-between d-flex"
                >
                  <strong>Filip Strózik </strong>
                  <Badge color="primary">założyciel</Badge>
                  <Badge id="test6" color="warning">
                    6
                  </Badge>
                  <UncontrolledTooltip
                    delay={0}
                    placement="bottom"
                    target="test6"
                  >
                    Punkty zdobyte przez gracza
                  </UncontrolledTooltip>
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  href="/player/1"
                  className="justify-content-between d-flex"
                >
                  Jan Sudczak
                  <Badge id="test7" color="warning">
                    5
                  </Badge>
                  <UncontrolledTooltip
                    delay={0}
                    placement="bottom"
                    target="test7"
                  >
                    Punkty zdobyte przez gracza
                  </UncontrolledTooltip>
                </ListGroupItem>

                <ListGroupItem
                  tag="a"
                  href="/player/1"
                  className="justify-content-between d-flex"
                >
                  Klaudia
                  <Badge id="test9" color="warning">
                    3
                  </Badge>
                  <UncontrolledTooltip
                    delay={0}
                    placement="bottom"
                    target="test9"
                  >
                    Punkty zdobyte przez gracza
                  </UncontrolledTooltip>
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  href="/player/1"
                  className="justify-content-between d-flex"
                >
                  Natalia
                  <Badge id="test77" color="warning">
                    0
                  </Badge>
                  <UncontrolledTooltip
                    delay={0}
                    placement="bottom"
                    target="test77"
                  >
                    Punkty zdobyte przez gracza
                  </UncontrolledTooltip>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Team;
