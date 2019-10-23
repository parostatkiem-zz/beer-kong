import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Beer kong"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "black"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Beer kong</h1>
                <h3 className={classes.subtitle}>Pograj se, napij się.</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

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
