import React from "react";
import classNames from "classnames";
import Counter from "../../components/Counter/Counter";
import { Container, Row, Col, Jumbotron } from "reactstrap";

import SectionHeader from "components/SectionHeader/SectionHeader";
import {
  faUserAstronaut,
  faFutbol,
  faBowlingBall
} from "@fortawesome/free-solid-svg-icons";
import Match from "components/Match/Match";

const mockMatches = [
  {
    player1: "Jan Kowalski",
    player2: "Filip Strózik",
    date: new Date("3.11.2019"),
    winner: 2,
    looserPoints: 6
  }
];

const League = ({ id }) => {
  return (
    <Container className="my-3">
      <section>
        <Row>
          <Col sm={6} xs={12}>
            <Counter icon={faFutbol} size="s" value={35}>
              Rozegranych meczów
            </Counter>
          </Col>
          <Col sm={6} xs={12}>
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
