import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import "./PageHeader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const PageHeader = ({ children, value, icon, kind }) => {
  return (
    <Card className={classNames(["shadow", "border-0", "page-header", "mb-3"])}>
      <CardBody className="">
        <Row className="top-row">
          <Col lg={{ size: "auto" }} className="icon-column">
            <FontAwesomeIcon className="icon" icon={icon} size="6x" />
            <span className="kind">{kind}</span>
          </Col>
          <Col className="text-column">
            <h1 className="number">{value}</h1>
            {children}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default PageHeader;
