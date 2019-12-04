import React, { Children } from "react";
import {
  Jumbotron,
  Row,
  Col,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Card,
  CardBody,
  Badge,
  Button,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAstronaut,
  faUsers,
  faBeer,
  faFutbol
} from "@fortawesome/free-solid-svg-icons";
import SingleLeague from "./SingleLeague/SingleLeague";

const LeaguesTable = ({}) => {
  const leagues = [
    {
      name: "Konarskiego oficjalnie",
      description: "Przestrzegamy reguł International BeerPong Federation",
      matches: 10,
      players: 17,
      teams: 3,
      beers: 22,
      id: 1
    },
    {
      name: "MS Beertrinken",
      description:
        "Szeregi Furiera, gradienty w kwadracie  - to nie dla mnie, wolę browar na chacie",
      matches: 3,
      players: 57,
      teams: 12,
      beers: 324,
      id: 1
    },
    {
      name: "Konarskiego na luzie",
      description: "Liczy się piwo i dobra zabawa",
      matches: 14,
      players: 14,
      teams: 3,
      beers: 37,
      id: 1
    }
  ];

  return (
    <>
      {leagues.map(l => (
        <SingleLeague key={l.name} {...l} />
      ))}
      <nav aria-label="...">
        <Pagination
          className="pagination justify-content-center"
          listClassName="justify-content-center"
        >
          <PaginationItem className="disabled">
            <PaginationLink
              href="#pablo"
              onClick={e => e.preventDefault()}
              tabIndex="-1"
            >
              <i className="fa fa-angle-left" />
              <span className="sr-only">Previous</span>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="active">
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              2 <span className="sr-only">(current)</span>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              <i className="fa fa-angle-right" />
              <span className="sr-only">Next</span>
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </nav>
    </>
  );
};

export default LeaguesTable;
