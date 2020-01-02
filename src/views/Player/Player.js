import React from "react";
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
  Progress
} from "reactstrap";
import {
  faUserAstronaut,
  faFutbol,
  faChess,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useQuery } from "@apollo/react-hooks";
import { GET_USER } from "gql/queries";
import LoadingBar from "components/LoadingBar/LoadingBar";
import useDate from "hooks/UseDate";
import ErrorModal from "components/ErrorModal/ErrorModal";

const Player = ({ id }) => {
  const user = useQuery(GET_USER, {
    pollInterval: process.env.REACT_APP_POLL_INTERVAL,
    variables: { id }
  });

  const createdAt = useDate((user.data && user.data.user.createdAt) || null);

  if (user.error) {
    return <ErrorModal text={user.error.message} />;
  }
  if (user.loading) {
    return <LoadingBar />;
  }
  return (
    <Container className="my-3">
      <section>
        <Row>
          <Col>
            <PageHeader
              icon={faUserAstronaut}
              kind="Gracz"
              value={user.data.user.name}
            >
              <h6>
                W piwnej społeczności od{" "}
                <Badge color="primary">{createdAt}</Badge>
              </h6>
            </PageHeader>
          </Col>
        </Row>
        <Row>
          <Col sm={4} xs={12}>
            <Card className="shadow border-0 mb-3">
              <CardHeader>
                <h5 className="my-0">
                  <FontAwesomeIcon icon={faUsers} color="#fb6340" /> Drużyny
                </h5>
              </CardHeader>
              <ListGroup>
                {user.data.user.teams.map(team => (
                  <ListGroupItem
                    key={team.id}
                    tag="a"
                    href={"/team/" + team.id}
                    className="justify-content-between d-flex"
                  >
                    {team.owner.id === user.data.user.id ? (
                      <>
                        <strong>{team.name}</strong>
                        <Badge color="primary">założyciel</Badge>
                      </>
                    ) : (
                      team.name
                    )}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Card>
          </Col>
          <Col sm={4} xs={12}>
            <Counter icon={faFutbol} size="s" value={35}>
              Rozegranych meczów
              <div className="progress-wrapper">
                <div className="progress-info">
                  <div className="progress-label">
                    <span>Wygrane</span>
                  </div>
                  <div className="progress-percentage">
                    <span>22</span>
                  </div>
                </div>
                <Progress max="35" value="22" />
              </div>
              <div className="progress-wrapper">
                <div className="progress-info">
                  <div className="progress-label">
                    <span>Rozegrane / zaplanowane </span>
                  </div>
                  <div className="progress-percentage">
                    <span>41</span>
                  </div>
                </div>
                <Progress max="41" value="35" />
              </div>
            </Counter>
          </Col>

          <Col sm={4} xs={12}>
            <Card className="shadow border-0 mb-3">
              <CardHeader>
                <h5 className="my-0">
                  <FontAwesomeIcon color="#fb6340" icon={faChess} /> Ligi
                </h5>
              </CardHeader>
              <ListGroup>
                {user.data.user.leagues.map(league => (
                  <ListGroupItem
                    key={league.id}
                    tag="a"
                    href={"/league/" + league.id}
                    className="justify-content-between d-flex"
                  >
                    {league.owner.id === user.data.user.id ? (
                      <>
                        <strong>{league.name}</strong>
                        <Badge color="primary">założyciel</Badge>
                      </>
                    ) : (
                      league.name
                    )}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Player;
