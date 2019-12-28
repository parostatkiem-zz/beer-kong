import React from "react";
import { Link } from "react-router-dom";
import "./UserDisplay.scss";
import { Button } from "reactstrap";

const UserDisplay = ({ image, name, id }) => (
  <div className="user-display">
    <Link to={"/user/" + id}>
      <img className="user-display__img" src={image} alt="" />
      <Button
        color="secondary"
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
