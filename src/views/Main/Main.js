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

import TopHeader from 'components/TopHeader/TopHeader'

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();

  return (
    <div>

      <TopHeader />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <h2>Stara Filipa</h2>
        <CustomTabs
          headerColor="danger"
          tabs={[
            {
              tabName: "Jest",
              tabIcon: Face,
              tabContent: <h1>Gruba</h1>
            },
            {
              tabName: "Pierdoli",
              tabIcon: Chat,
              tabContent: <h1>Głupoty</h1>
            },
            {
              tabName: "Zmieści",
              tabIcon: Build,
              tabContent: <h1>w sobie klucz 32</h1>
            }
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}
