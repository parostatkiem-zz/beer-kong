import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Badge,
  Button,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAstronaut,
  faUsers,
  faBeer,
  faFutbol
} from "@fortawesome/free-solid-svg-icons";

import "./SingleLeague.scss";
import { useQuery } from "@apollo/react-hooks";
import { GET_MATCHES } from "gql/queries";

const SingleLeague = ({
  name,
  description,
  id,
  users,
  teams,
  finishedMatches
}) => {
  const matches = useQuery(GET_MATCHES, {
    pollInterval: process.env.REACT_APP_POLL_INTERVAL,
    variables: { where: { league: { id }, isFinished: true } }
  });

  return (
    <Card className="shadow border-0 mb-3 single-league">
      <CardBody className="py-3">
        <Row>
          <Col sm={12} md={8} className="info">
            <Link to={"/league/" + id}>
              <h3 className=" text-primary text-uppercase">{name}</h3>
            </Link>
            <p className=" description mt-3">{description}</p>
            <Link to={"/league/" + id}>
              <Button className="mt-2" color="primary">
                Zobacz więcej
              </Button>
            </Link>
          </Col>

          <Col sm={12} md={4}>
            <ListGroup>
              <ListGroupItem className="property">
                <FontAwesomeIcon icon={faUserAstronaut} />
                <span className="text">Gracze</span>
                <Badge color="primary">{users.length}</Badge>
              </ListGroupItem>
              <ListGroupItem className="property">
                <FontAwesomeIcon icon={faUsers} />
                <span className="text">Drużyny</span>
                <Badge color="primary">{teams.length}</Badge>
              </ListGroupItem>
              <ListGroupItem className="property">
                <FontAwesomeIcon icon={faFutbol} />
                <span className="text">Rozegrane mecze</span>
                <Badge color="primary">{finishedMatches}</Badge>
              </ListGroupItem>
              <ListGroupItem className="property">
                <FontAwesomeIcon icon={faBeer} />
                <span className="text">Wypite piwa</span>
                <Badge color="primary">
                  {matches.data
                    ? matches.data.matches.length
                      ? matches.data.matches
                          .map(m => m.user1points + m.user2points)
                          .reduce((sum, current) => sum + current)
                      : 0
                    : "..."}
                </Badge>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default SingleLeague;
