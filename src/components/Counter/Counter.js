import React, { Children } from "react";
import { Jumbotron, Row, Col } from "reactstrap";
import "./Counter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Counter = ({ children, value, icon }) => {
  return (
    <Jumbotron className="counter py-3">
      <Row className="top-row mx-2">
        <h1 className="number">{value}</h1>

        <FontAwesomeIcon className="icon" icon={icon} size="6x" />
      </Row>
      <h5 className="text-center">{children}</h5>
    </Jumbotron>
  );
};

export default Counter;
