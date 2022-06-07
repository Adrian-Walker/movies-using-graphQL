import { useQuery } from "@apollo/client";
import {GET_SHOW_QUERY} from "../queries/queries";

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
