import React from "react";
import { Card, CardBody, Row } from "reactstrap";
import "./Counter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const Counter = ({ children, value, icon, size = "m" }) => {
  return (
    <Card
      className={classNames([
        "shadow",
        "border-0",
        "counter",
        "mb-3",
        "size-" + size
      ])}
    >
      <CardBody className="">
        <Row className="top-row mx-2">
          <h1 className="number">{value}</h1>
          <FontAwesomeIcon className="icon" icon={icon} size="6x" />
        </Row>
        {size === "m" ? (
          <h5 className="text-center">{children}</h5>
        ) : (
          <h6 className="text-center">{children}</h6>
        )}
      </CardBody>
    </Card>
  );
};

export default Counter;
