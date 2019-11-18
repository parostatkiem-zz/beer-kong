import React from "react";
import ReactDOM from "react-dom";
import Router from "components/Router/Router";

import "assets/scss/material-kit-react.scss?v=1.8.0";
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Router as ReactRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ApolloClient from "apollo-client";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GQL
  // fetchOptions: {
  //   mode: "no-cors"
  // }
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: `Bearer 1234`
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
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
