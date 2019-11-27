import React from "react";
import classNames from "classnames";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";

import { Container } from "reactstrap";

export default function Main(props) {
  return (
    <Container>
      Ilosc obecnie otwartych lig, <br />
      ilosc zarejestrowanych użytkowników <br />
      Top 5 najlepszych lig, z mozliwoscią obejrzenia wszystkich <br />
      <Link to="/profile/1"> Profil o ID=1</Link>
      <Link to="/league/1"> Liga o ID=1</Link>
    </Container>
  );
}
