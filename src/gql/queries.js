import { gql } from "apollo-boost";
import { classNames } from "classnames";

export const GET_LEAGUES = gql`
  query Leagues {
    leagues {
      id
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
export const GET_LEAGUE = gql`
  query League($id: ID) {
    league(where: { id: $id }) {
      name
      id
      description
      users {
        name
      }
      owner {
        name
        id
      }
      createdAt
      teams {
        name
        id
        owner {
          id
        }
      }
      users {
        name
        id
        teams {
          name
          id
          league {
            id
          }
        }
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

export const GET_USER = gql`
  query User($id: ID) {
    user(where: { id: $id }) {
      id
      name
      createdAt
      teams {
        id
        name
        owner {
          id
        }
      }
      leagues {
        id
        name
        owner {
          id
        }
      }
    }
  }
`;
