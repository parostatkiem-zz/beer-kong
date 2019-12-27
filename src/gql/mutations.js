import { gql } from "apollo-boost";

export const ADD_LEAGUE = gql`
  mutation CreateLeague($data: LeagueCreateInput!) {
    createLeague(data: $data) {
      name
    }
  }
`;
