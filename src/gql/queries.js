import { gql } from "apollo-boost";

export const GET_LEAGUES = gql`
  query Leagues {
    leagues {
      name
      description
      users {
        id
      }
      teams {
        id
      }
    }
  }
`;

export const GET_USERS = gql`
  query Users {
    users {
      name
    }
  }
`;
