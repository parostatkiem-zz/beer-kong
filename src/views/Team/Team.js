import React from "react";
import { Container, Row, Col } from "reactstrap";
import PageHeader from "components/PageHeader/PageHeader";
import {
  faUsers,
  faUserAstronaut,
  faChess
} from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "components/SectionHeader/SectionHeader";

const Team = () => {
  return (
    <Container className="my-3">
      <section>
        <Row>
          <Col>
            <PageHeader icon={faUsers} value="Nygusy z Konarskiego">
              <h6>Człowiek człowiekowi wilkiem, a piwo piwo piwo.</h6>
            </PageHeader>
          </Col>
        </Row>
      </section>
      {/* {/* <section className="mt-3">
    <SectionHeader size="s" title="Rozegrane mecze" icon={faFutbol} />
    {mockMatchesPlayed.map(match => (
      <Match {...match} />
    ))}
  </section> */}

      <section className="mt-3">
        <SectionHeader title="Członkowie" icon={faUserAstronaut} />
      </section>

      <section className="mt-3">
        <SectionHeader title="Ligi" icon={faChess} />
      </section>
    </Container>
  );
};

export default Team;
