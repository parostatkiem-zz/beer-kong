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
  mutation LoginOrRegisterUser($data: UserCreateInput!) {
    loginOrRegisterUser(data: $data) {
      name
      id
      picture
    }
  }
`;

export const CREATE_MATCH = gql`
  mutation CreateMatch($data: MatchCreateInput!) {
    createMatch(data: $data) {
      id
    }
  }
`;

export const END_MATCH = gql`
  mutation EndMatch($where: MatchWhereUniqueInput!, $data: MatchEndInput!) {
    endMatch(where: $where, data: $data) {
      id
    }
  }
`;

export const ADD_USER_TO_TEAM = gql`
  mutation AddUserToTeam(
    $where: TeamWhereUniqueInput!
    $data: UserWhereUniqueInput!
  ) {
    addUserToTeam(where: $where, data: $data) {
      name
      id
    }
  }
`;
