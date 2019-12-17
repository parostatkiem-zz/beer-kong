import React from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import "./SectionHeader.scss";

const SectionHeader = ({ title, description, icon, actions }) => {
  return (
    <>
      <hr className="my-3" />
      <div
        style={{ alignItems: "end" }}
        className={classNames(["d-flex", "my-3", "section-header"])}
      >
        {icon && (
          <div className="mt-1 header">
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-default">
              <FontAwesomeIcon icon={icon} />
            </div>
          </div>
        )}
        <div className="pl-4 header">
          <h4 className=" text-white">{title}</h4>
          <p style={{ color: "#e9ecef" }}>{description}</p>
        </div>
        <div className="actions"> {actions}</div>
      </div>
    </>
  );
};

export default SectionHeader;
