import { gql } from "apollo-boost";

export const ADD_LEAGUE = gql`
  mutation CreateLeague($data: LeagueCreateInput!) {
    createLeague(data: $data) {
      name
    }
  }
`;

export const ADD_TEAM = gql`
  mutation CreateTeam($data: TeamCreateInput!) {
    createTeam(data: $data) {
      name
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($data: UserCreateInput!) {
    createUser(data: $data) {
      name
      id
      picture
    }
  }
`;
