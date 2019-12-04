import React from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const SectionHeader = ({ title, description, icon }) => {
  return (
    <>
      <hr className="my-3" />
      <div
        className={classNames([
          "d-flex",
          "pr-3",
          "justify-content-md-center",
          { "text-center": !icon }
        ])}
      >
        {icon && (
          <div className="mt-1">
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-default">
              <FontAwesomeIcon icon={icon} />
            </div>
          </div>
        )}
        <div className="pl-4">
          <h4 className="display-3 text-white">{title}</h4>
          <p style={{ color: "#e9ecef" }}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default SectionHeader;