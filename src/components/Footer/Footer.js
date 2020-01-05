import React from "react";
import "./Footer.scss";
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

export default function Footer() {
  return (
    <>
      <footer id="main-footer" className="pb-4 ">
        <Container>
          <hr />
          <Row className=" align-items-center justify-content-md-between">
            <Col md="6">
              <div className=" copyright">
                © {new Date().getFullYear()} Jan Sudczak & Filip Strózik
              </div>
            </Col>
            <Col md="6">
              <Nav className=" justify-content-end">
                <NavItem>
                  <NavLink className="d-inline" href="/aboutgame">
                    O Grze
                  </NavLink>
                  <NavLink className="d-inline" href="/guide">
                    Przewodnik
                  </NavLink>
                  <NavLink
                    className="d-inline"
                    href="https://github.com/parostatkiem/beer-kong"
                  >
                    Źródło Strony
                  </NavLink>
                  <NavLink
                    className="d-inline"
                    href="https://github.com/pPrecel/BeerKongServer"
                  >
                    Źródło Serwera
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
