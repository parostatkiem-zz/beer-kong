import React from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);
const Profile = ({ id }) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        statystyki twoich meczow <br />
        Prowadzone przez ciebie ligi <br />
        Posiadane przez ciebie druzyny <br />
        {id}
      </div>
    </div>
  );
};
export default Profile;
