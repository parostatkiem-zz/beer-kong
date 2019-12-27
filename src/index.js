import React from "react";
import ReactDOM from "react-dom";
import Router from "components/Router/Router";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Router as ReactRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ApolloClient from "apollo-client";
import "./index.scss";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GQL
  // fetchOptions: {
  //   mode: "no-cors"
  // }
  // compress: true,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: `Bearer 1234`,
      "Content-Type": "application/json"
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: { errorPolicy: "all" }
});

var hist = createBrowserHistory();

ReactDOM.render(
  <ApolloProvider client={client}>
    <ReactRouter history={hist}>
      <Router />
    </ReactRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
