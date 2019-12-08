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
  faBowlingBall
} from "@fortawesome/free-solid-svg-icons";
import Match from "components/Match/Match";
import { Link } from "react-router-dom";

const mockMatches = [
  {
    player1: "Jan Kowalski",
    player2: "Filip Strózik",
    date: new Date(2019, 11, 3).toLocaleDateString(),
    winner: 2,
    looserPoints: 6
  }
];

const League = ({ id }) => {
  return (
    <Container className="my-3">
      <section>
        <Row>
          <Col>
            <Counter size="s" value="Konarskiego oficjalnie">
              Przestrzegamy reguł International BeerPong Federation
            </Counter>
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
        <SectionHeader
          size="s"
          title="Rozegrane mecze"
          icon={faFutbol}
          // description="Top 5 najlepszych lig, z mozliwoscią obejrzenia wszystkich"
        />
        {mockMatches.map(match => (
          <Match {...match} />
        ))}
      </section>

      <section className="mt-3">
        <SectionHeader
          title="Planowane mecze"
          icon={faBowlingBall}
          // description="Top 5 najlepszych lig, z mozliwoscią obejrzenia wszystkich"
        />
      </section>
    </Container>
  );
};

export default League;
