import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Container, Row, Col } from "reactstrap";
import Counter from "components/Counter/Counter";
import {
  faChess,
  faUserAstronaut,
  faFutbol
} from "@fortawesome/free-solid-svg-icons";
import LeaguesTable from "components/LeaguesTable/LeaguesTable";
import SectionHeader from "components/SectionHeader/SectionHeader";
import AddLeagueModal from "components/AddLeagueModal/AddLeagueModal";
import LoadingBar from "components/LoadingBar/LoadingBar";
import { GET_LEAGUES, GET_USERS, GET_MATCHES } from "gql/queries";
import ErrorModal from "components/ErrorModal/ErrorModal";
import UserInfoContext from "contexts/UserInfoContext/UserInfo.context";

export default function Main(props) {
  const leagues = useQuery(GET_LEAGUES, {
    pollInterval: process.env.REACT_APP_POLL_INTERVAL
  });
  const users = useQuery(GET_USERS, {
    pollInterval: process.env.REACT_APP_POLL_INTERVAL
  });
  const matches = useQuery(GET_MATCHES, {
    pollInterval: process.env.REACT_APP_POLL_INTERVAL,
    variables: { where: { isFinished: true } }
  });

  const { userInfo } = useContext(UserInfoContext);
  return (
    <Container className="my-3">
      <section>
        <Row>
          <Col sm={4} xs={12}>
            <Counter
              size="s"
              icon={faChess}
              value={leagues.data ? leagues.data.leagues.length : "..."}
            >
              Obecnie otwartych lig
            </Counter>
          </Col>
          <Col sm={4} xs={12}>
            <Counter
              size="s"
              icon={faUserAstronaut}
              value={users.data ? users.data.users.length : "..."}
            >
              Zarejestrowanych użytkowników
            </Counter>
          </Col>
          <Col sm={4} xs={12}>
            <Counter
              size="s"
              icon={faFutbol}
              value={matches.data ? matches.data.matches.length : "..."}
            >
              Rozegranych meczów
            </Counter>
          </Col>
        </Row>
      </section>

      {/* <section className="mt-3">
        <SectionHeader
          title="Najlepsze ligi"
          description="Top 5 najlepszych lig, z mozliwoscią obejrzenia wszystkich"
          actions={userInfo ? <AddLeagueModal /> : null}
        />

        {leagues.error || leagues.loading ? (
          <>
            {leagues.error && <ErrorModal text={leagues.error.message} />}
            <LoadingBar />
          </>
        ) : (
          <LeaguesTable
            leagues={leagues.data.leagues.sort(
              (a, b) => b.users.length - a.users.length
            )}
          />
        )}
      </section> */}
    </Container>
  );
}
