import React from "react";
import classNames from "classnames";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";

import { Container, Row, Col, Jumbotron } from "reactstrap";
import Counter from "components/Counter/Counter";
import {
  faChess,
  faUserAstronaut,
  faVolleyballBall,
  faFutbol
} from "@fortawesome/free-solid-svg-icons";
import LeaguesTable from "components/LeaguesTable/LeaguesTable";
import SectionHeader from "components/SectionHeader/SectionHeader";

export default function Main(props) {
  return (
    <Container className="my-3">
      <section>
        <Row>
          <Col sm={4} xs={12}>
            <Counter size="s" icon={faChess} value={12}>
              Obecnie otwartych lig
            </Counter>
          </Col>
          <Col sm={4} xs={12}>
            <Counter size="s" icon={faUserAstronaut} value={931}>
              Zarejestrowanych użytkowników
            </Counter>
          </Col>
          <Col sm={4} xs={12}>
            <Counter size="s" icon={faFutbol} value={35}>
              Rozegranych meczów
            </Counter>
          </Col>
        </Row>
      </section>

      <section className="mt-3">
        <SectionHeader
          title="Najlepsze ligi"
          description="Top 5 najlepszych lig, z mozliwoscią obejrzenia wszystkich"
        />
        <LeaguesTable />
      </section>
    </Container>
  );
}
