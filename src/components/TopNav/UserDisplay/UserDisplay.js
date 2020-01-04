import React from "react";
import { Link } from "react-router-dom";
import "./UserDisplay.scss";
import { Button } from "reactstrap";

const UserDisplay = ({ picture, name, id }) => (
  <div className="user-display ">
    <Link to={"/player/" + id}>
      <img className="user-display__img" src={picture} alt="" />
      <Button
        color="warning"
        size="sm"
        type="button"
        className="user-display__name"
      >
        {name}
      </Button>
    </Link>
  </div>
);
export default UserDisplay;
