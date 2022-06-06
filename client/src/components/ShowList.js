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

function ShowList() {
  const { loading, data, error } = useQuery(GET_SHOW_QUERY);
  if (loading) return <p>Loading...</p>;
  // console.log(data, "line 22")

  const renderShows = () => {
    return data.shows.map((show) => {
      return <li key={show.id}>{show.name}</li>;
    });
  };

  return (
    <div className="App">
      <h1>ShowList</h1>
      <ul>{renderShows()}</ul>
    </div>
  );
}

export default ShowList;
