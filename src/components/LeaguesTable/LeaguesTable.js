import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import SingleLeague from "./SingleLeague/SingleLeague";

const LeaguesTable = ({ leagues }) => {
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
