import React from "react";
import classNames from "classnames";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";

import { Container, Row, Col, Jumbotron } from "reactstrap";
import Counter from "components/Counter/Counter";
import { faChess, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

export default function Main(props) {
  return (
    <Container className="my-3">
      <Row>
        <Col sm={6} xs={12}>
          <Counter icon={faChess} value={12}>
            Obecnie otwartych lig
          </Counter>
        </Col>
        <Col sm={6} xs={12}>
          <Counter icon={faUserAstronaut} value={931}>
            Zarejestrowanych użytkowników
          </Counter>
        </Col>
      </Row>
      Top 5 najlepszych lig, z mozliwoscią obejrzenia wszystkich <br />
      <Link to="/profile/1"> Profil o ID=1</Link>
      <Link to="/league/1"> Liga o ID=1</Link>
    </Container>
  );
}
