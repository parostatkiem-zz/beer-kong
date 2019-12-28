import React from "react";
import { Row, Col } from "reactstrap";
import "./LoadingBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function LoadingBar({}) {
  return (
    <Row className="justify-content-md-center loading-bar">
      <Col lg={{ size: "auto" }}>
        <FontAwesomeIcon icon={faSpinner} />
      </Col>
    </Row>
  );
}
