import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import TopHeader from "components/Header/TopHeader/TopHeader";
import Main from "views/Main/Main.js";
import Footer from "components/Footer/Footer";
import Profile from "views/Profile/Profile";

import UserInfoContext from "contexts/UserInfoContext/UserInfo.context";
import League from "views/League/League";

const Router = () => {
  const [userInfo, setUserInfoState] = useState(
    sessionStorage.getItem("userInfo") !== null
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : null
  );

  function setUserInfo(infoObject) {
    sessionStorage.setItem("userInfo", JSON.stringify(infoObject));
    setUserInfoState(infoObject);
  }

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      <TopHeader />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route
          path="/profile/:id"
          render={props => <Profile id={props.match.params.id} />}
        />
        <Route
          path="/league/:id"
          render={props => <League id={props.match.params.id} />}
        />
        {/* <Route path="/landing-page" component={LandingPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} /> */}
        <Route path="*">
          <h1>Chyba zabłądziłeś... 404</h1>
        </Route>
        <Footer />
      </Switch>
    </UserInfoContext.Provider>
  );
};

export default Router;
