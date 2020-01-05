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
  NavItem
} from "reactstrap";
import UserInfoContext from "contexts/UserInfoContext/UserInfo.context";
import UserDisplay from "./UserDisplay/UserDisplay";
import { Link } from "react-router-dom";
import "./TopNav.scss";
import { CREATE_USER } from "gql/mutations";
import { useMutation } from "@apollo/react-hooks";
import { GET_USER } from "gql/queries";
import logo from "assets/img/favicon.png";

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
            <img alt="Google logo" src="/google.svg"></img>
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
  const [createUser] = useMutation(CREATE_USER, {
    refetchQueries: [{ query: GET_USER }],
    onError: console.error,
    onCompleted: data => setUserInfo(data.loginOrRegisterUser)
  });

  function responseGoogle(resp) {
    if (resp.error) {
      alert("Logowanie nie powiodło się. Spróbuj ponownie.");
      console.error(resp.error);
      return;
    }

    const profile = resp.profileObj;
    createUser({
      variables: {
        data: {
          name: profile.name,
          sub: profile.googleId,
          picture: profile.imageUrl
        }
      }
    });

    sessionStorage.setItem("token", resp.tokenId);
  }

  function logout() {
    setUserInfo(null);
    sessionStorage.removeItem("token");
  }

  return (
    <Navbar className="navbar-dark bg-primary navbar-horizontal" expand="lg">
      <Container>
        <NavbarBrand href="/">
          <img className="mr-2" src={logo} alt="" />
          Beer Kong
        </NavbarBrand>
        <NavbarBrand href="/aboutgame">
          O grze
        </NavbarBrand>
        <NavbarBrand href="/guide">
          Przewodnik
        </NavbarBrand>
        <button className="navbar-toggler" id="navbar-default">
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar-default">
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <Link to="/">
                  <img className="mr-2" src={logo} alt="" />
                  Beer Kong
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
            <NavItem>{userInfo && <UserDisplay {...userInfo} />}</NavItem>
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
