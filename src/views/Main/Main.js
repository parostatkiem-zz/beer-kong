import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Footer from "components/Footer/Footer.js";


import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/components.js";

import TopHeader from 'components/Header/TopHeader/TopHeader'

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();

  return (
    <div>

      <TopHeader />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <h2>Ogromna małpa</h2>
        <CustomTabs
          headerColor="danger"
          tabs={[
            {
              tabName: "Jest",
              tabIcon: Face,
              tabContent: <h1>P O T Ę Ż N A</h1>
            },
            {
              tabName: "Gada",
              tabIcon: Chat,
              tabContent: <h1>Głupoty</h1>
            },
            {
              tabName: "Zje",
              tabIcon: Build,
              tabContent: <h1>32 banany</h1>
            }
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}
