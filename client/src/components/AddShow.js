import { gql, useQuery } from "@apollo/client";

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

function AddShow() {
  return <div></div>;
}

export default AddShow;
