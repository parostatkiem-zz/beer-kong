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
              <Nav className=" nav-footer justify-content-end">
                <NavItem>
                  <NavLink href="/aboutgame" target="_blank">
                    O Grze
                  </NavLink>
                  <NavLink href="/guide" target="_blank">
                    Przewodnik
                  </NavLink>
                  <NavLink href="https://github.com/parostatkiem/beer-kong" target="_blank">
                    Źródło Strony
                  </NavLink>
                  <NavLink href="https://github.com/pPrecel/BeerKongServer" target="_blank">
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
