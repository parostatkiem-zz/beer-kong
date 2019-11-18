import React from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Footer from "components/Footer/Footer.js";

import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/components.js";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();

  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        Ilosc obecnie otwartych lig, <br />
        ilosc zarejestrowanych użytkowników <br />
        Top 5 najlepszych lig, z mozliwoscią obejrzenia wszystkich <br />
        <Link to="/profile/1"> Profil o ID=1</Link>
        <Link to="/league/1"> Liga o ID=1</Link>
      </div>
    </div>
  );
}
