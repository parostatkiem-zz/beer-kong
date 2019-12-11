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
  ListGroupItem,
  CardHeader,
  CardFooter,
  Progress
} from "reactstrap";

import SectionHeader from "components/SectionHeader/SectionHeader";
import {
  faUserAstronaut,
  faFutbol,
  faBowlingBall,
  faChess,
  faUsers,
  faUser
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageHeader from "../../components/PageHeader/PageHeader";

const Player = ({ id }) => {
  return (
    <Container className="my-3">
      <section>
        <Row>
          <Col>
            <PageHeader icon={faUserAstronaut} value="Filip Strózik">
              <h6>
                W piwnej społeczności od{" "}
                <Badge color="primary">22.03.2018</Badge>
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
                <ListGroupItem
                  tag="a"
                  href="/league/1"
                  className="justify-content-between d-flex"
                >
                  Nygusy z Konarskiego
                </ListGroupItem>

                <ListGroupItem
                  tag="a"
                  href="/league/1"
                  className="justify-content-between d-flex"
                >
                  Wydział Matematyki Stosowanej
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  href="/league/1"
                  className="justify-content-between d-flex"
                >
                  <strong>HGWsuad </strong>
                  <Badge color="primary">założyciel</Badge>
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  href="/league/1"
                  className="justify-content-between d-flex"
                >
                  Tajemnice Nowogradu
                </ListGroupItem>
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
                <ListGroupItem
                  tag="a"
                  href="/league/1"
                  className="justify-content-between d-flex"
                >
                  <strong>Konarskiego na luzie </strong>
                  <Badge color="primary">założyciel</Badge>
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  href="/league/1"
                  className="justify-content-between d-flex"
                >
                  Konarskiego oficjalnie
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Player;
