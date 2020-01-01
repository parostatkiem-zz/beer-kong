import { gql } from "apollo-boost";

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
        users {
          id
          name
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
      id
      leagues {
        id
      }
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

export const GET_TEAM = gql`
  query Team($id: ID) {
    team(where: { id: $id }) {
      id
      name
      description
      createdAt
      league {
        id
        name
      }
      users {
        id
        name
        leagues {
          id
        }
      }
      owner {
        id
        name
      }
    }
  }
`;

export const GET_MATCHES_WITHIN_LEAGUE = gql`
  query Matches($where: MatchWhereInput) {
    matches(where: $where) {
      id
      plannedAt
      isFinished
      user1 {
        id
        name
      }
      user2 {
        id
        name
      }
      user1points
      user2points
      winner {
        id
      }
    }
  }
`;

export const GET_MATCHES = gql`
  query Matches($where: MatchWhereInput) {
    matches(where: $where) {
      id
    }
  }
`;
