import React from "react";
import classNames from "classnames";
import Counter from "../../components/Counter/Counter";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  ListGroup,
  Badge,
  ListGroupItem
} from "reactstrap";

import SectionHeader from "components/SectionHeader/SectionHeader";
import {
  faUserAstronaut,
  faFutbol,
  faBowlingBall,
  faUsers,
  faChess
} from "@fortawesome/free-solid-svg-icons";
import Match from "components/Match/Match";
import { Link } from "react-router-dom";
import PageHeader from "components/PageHeader/PageHeader";

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

const League = ({ id }) => {
  return (
    <Container className="my-3">
      <section>
        <Row>
          <Col>
            <PageHeader
              icon={faChess}
              kind="Liga"
              value="Konarskiego oficjalnie"
            >
              <h6>Przestrzegamy reguł International BeerPong Federation</h6>
            </PageHeader>
          </Col>
        </Row>
        <Row>
          <Col sm={4} xs={12}>
            <Counter icon={faFutbol} size="s" value={35}>
              Rozegranych meczów
            </Counter>
          </Col>
          <Col sm={4} xs={12}>
            <Card className="shadow border-0 mb-3">
              <ListGroup>
                <ListGroupItem className="justify-content-between">
                  Założona przez &nbsp;
                  <Link>
                    <Badge color="primary">Filip Strózik</Badge>
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="justify-content-between">
                  Data założenia <Badge color="primary">21.03.2019</Badge>
                </ListGroupItem>
                <ListGroupItem className="justify-content-between">
                  Tutaj też coś można dać <Badge color="primary">Coś</Badge>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={4} xs={12}>
            <Counter icon={faUserAstronaut} size="s" value={41}>
              Aktywnych użytkowników
            </Counter>
          </Col>
        </Row>
      </section>
      <section className="mt-3">
        <SectionHeader size="s" title="Rozegrane mecze" icon={faFutbol} />
        {mockMatchesPlayed.map(match => (
          <Match {...match} />
        ))}
      </section>

      <section className="mt-3">
        <SectionHeader title="Planowane mecze" icon={faBowlingBall} />
        {mockMatchesUnplayed.map(match => (
          <Match {...match} />
        ))}
      </section>
    </Container>
  );
};

export default League;
