import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
// import TopHeader from "components/Header/TopHeader/TopHeader";
import Main from "views/Main/Main.js";
// import Footer from "components/Footer/Footer";
// import Profile from "views/Profile/Profile";
import League from "../../views/League/League";

import UserInfoContext from "contexts/UserInfoContext/UserInfo.context";
import TopNav from "components/TopNav/TopNav";
import Player from "views/Player/Player";

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
      <TopNav />
      <Switch>
        <Route exact path="/" component={Main} />

        <Route
          path="/league/:id"
          render={props => <League id={props.match.params.id} />}
        />

        <Route
          path="/player/:id"
          render={props => <Player id={props.match.params.id} />}
        />

        <Route path="*">
          <h1>Chyba zabłądziłeś... 404</h1>
        </Route>
      </Switch>
    </UserInfoContext.Provider>
  );
};

export default Router;
