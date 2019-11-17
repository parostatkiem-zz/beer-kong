import React from "react";
import ReactDOM from "react-dom";
import App from "components/App/App";

import "assets/scss/material-kit-react.scss?v=1.8.0";
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
// pages for this product

import ApolloClient from "apollo-client";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GQL
  // fetchOptions: {
  //   mode: "no-cors"
  // }
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
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

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
