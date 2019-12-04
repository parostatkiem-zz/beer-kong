import React from "react";
import { Link } from "react-router-dom";
import "./UserDisplay.scss";

const UserDisplay = ({ image, name }) => (
  <div className="user-display">
    <Link to={"/user/" + 1}>
      <img className="user-display__img" src={image} alt="" />
      <span className="user-display__name">{name}</span>
    </Link>
  </div>
);
export default UserDisplay;
