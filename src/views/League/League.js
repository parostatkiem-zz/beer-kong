import React from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

const League = ({ id }) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        Ilosc zarejestrowanych uzytkownikow, ilosc druzyn, ilosc rozegranych
        meczow, <br />
        Nadchodzące mecze <br />
        Mecze już rozegrane
        <br />
        {id}
      </div>
    </div>
  );
};
export default League;
