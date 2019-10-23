import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Main from "views/Main/Main.js";
// import LandingPage from "views/LandingPage/LandingPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";

import UserInfoContext from 'contexts/UserInfoContext/UserInfo.context'

var hist = createBrowserHistory();

ReactDOM.render(
  <UserInfoContext.Provider value={null}>
    <Router history={hist}>
      <Switch>
        {/* <Route path="/landing-page" component={LandingPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} /> */}
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  </UserInfoContext.Provider>,
  document.getElementById("root")
);
