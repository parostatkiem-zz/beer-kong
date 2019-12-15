import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Badge,
  UncontrolledTooltip
} from "reactstrap";
import PageHeader from "components/PageHeader/PageHeader";
import {
  faUsers,
  faUserAstronaut,
  faChess,
  faTrophy
} from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "components/SectionHeader/SectionHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Team = () => {
  return (
    <Container className="my-3">
      <section>
        <Row>
          <Col>
            <PageHeader
              icon={faUsers}
              kind="drużyna"
              value="Nygusy z Konarskiego"
            >
              <h6>Człowiek człowiekowi wilkiem, a piwo piwo piwo.</h6>
            </PageHeader>
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
