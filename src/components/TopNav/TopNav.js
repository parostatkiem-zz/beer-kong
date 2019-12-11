import React, { useContext } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import {
  Button,
  Navbar,
  NavbarBrand,
  Container,
  UncontrolledCollapse,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import UserInfoContext from "contexts/UserInfoContext/UserInfo.context";
import UserDisplay from "./UserDisplay/UserDisplay";
import { Link } from "react-router-dom";
import "./TopNav.scss";

const LoginLogoutButtons = ({ clientId, isLoggedIn, onLogout, onResponse }) =>
  !isLoggedIn ? (
    <GoogleLogin
      clientId={clientId}
      render={renderProps => (
        <Button
          className="btn-icon btn-3"
          color="secondary"
          type="button"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <span className="btn-inner--icon">
            <i className="fa fa-google"></i>
          </span>
          <span className="btn-inner--text">Zaloguj się</span>
        </Button>
      )}
      onSuccess={onResponse}
      onFailure={onResponse}
      cookiePolicy={"single_host_origin"}
    />
  ) : (
    <GoogleLogout
      clientId={clientId}
      onLogoutSuccess={onLogout}
      render={renderProps => (
        <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          Wyloguj się
        </Button>
      )}
    ></GoogleLogout>
  );

const TopNav = () => {
  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  function responseGoogle(resp) {
    console.log("google response:", resp);
    setUserInfo(resp.error ? null : resp);
  }

  function logout() {
    setUserInfo(null);
  }

  return (
    <Navbar className="navbar-dark bg-primary navbar-horizontal" expand="lg">
      <Container>
        <NavbarBrand href="/">Beer Kong</NavbarBrand>

        {userInfo && (
          <UserDisplay
            image={userInfo.profileObj.imageUrl}
            name={`${userInfo.profileObj.givenName} ${userInfo.profileObj.familyName}`}
          />
        )}
        <button className="navbar-toggler" id="navbar-default">
          <span className="navbar-toggler-icon" />
        </button>

        <UncontrolledCollapse navbar toggler="#navbar-default">
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <Link to="/">
                  <img
                    alt="..."
                    src={require("assets/img/brand/argon-react.png")}
                  />
                </Link>
              </Col>
              <Col className="collapse-close" xs="6">
                <button className="navbar-toggler" id="navbar-default">
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          <Nav className="ml-lg-auto" navbar>
            <NavItem>
              <LoginLogoutButtons
                onResponse={responseGoogle}
                onLogout={logout}
                isLoggedIn={!!userInfo}
                clientId="315865323177-9860safp7u33rghq3l7v7sbqppdjs4vu.apps.googleusercontent.com"
              />
            </NavItem>
          </Nav>
        </UncontrolledCollapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
