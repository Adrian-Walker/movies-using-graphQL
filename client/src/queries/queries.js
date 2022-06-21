import { gql } from "@apollo/client";

const GET_SHOW_QUERY = gql`
  {
    shows {
      name
      id
      genre
      director {
        id
        name
        age
      }
    }
  }
`;

const GET_DIRECTOR_QUERY = gql`
  {
    directors {
      name
      id
    }
  }
`;

const ADD_SHOW_MUTATION = gql`
  mutation($name: String!, $genre: String!, $directorId: String!) {
    addShow(name: $name, genre: $genre, directorId: $directorId) {
      name
      id
    }
  }
`;

export { GET_SHOW_QUERY, GET_DIRECTOR_QUERY, ADD_SHOW_MUTATION };
