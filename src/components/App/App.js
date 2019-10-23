import React, { useState } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Main from "views/Main/Main.js";
// import LandingPage from "views/LandingPage/LandingPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";

import UserInfoContext from 'contexts/UserInfoContext/UserInfo.context'
var hist = createBrowserHistory();

const App = () => {
    const [userInfo, setUserInfoState] = useState(
        sessionStorage.getItem('userInfo') !== null ?
            JSON.parse(sessionStorage.getItem('userInfo')) :
            null);

    function setUserInfo(infoObject) {
        sessionStorage.setItem('userInfo', JSON.stringify(infoObject));
        setUserInfoState(infoObject);
    }

    return <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
        <Router history={hist}>
            <Switch>
                {/* <Route path="/landing-page" component={LandingPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} /> */}
                <Route path="/" component={Main} />
            </Switch>
        </Router>
    </UserInfoContext.Provider>



}

export default App;