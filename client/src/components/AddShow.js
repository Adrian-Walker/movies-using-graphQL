import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { GET_DIRECTOR_QUERY, ADD_SHOW_MUTATION } from "../queries/queries";

function AddShow() {
  const [show, setShow] = useState("");
  const [genre, setGenre] = useState("");
  const [directorId, setDirectorId] = useState("");
  const [addShow] = useMutation(ADD_SHOW_MUTATION);
  const { loading, data, error } = useQuery(GET_DIRECTOR_QUERY);

  if (loading) return <p>Loading...</p>;
  // console.log(data, "line 16 add show")

  const renderDirectors = () => {
    return data.directors.map((director) => {
      return (
        <option value={director.id} key={director.id}>
          {director.name}
        </option>
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addShow({
      variables: {
        show,
        genre,
        directorId
      },
    });
    console.log(show, genre, directorId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="show-name">Show Name: </label>
        <input
          id="show-name"
          name="show-name"
          type="text"
          onChange={(e) => setShow(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="genre">Genre: </label>
        <input
          id="genre"
          name="genre"
          type="text"
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="director">Director: </label>
        <select
          id="director"
          name="director"
          onChange={(e) => setDirectorId(e.target.value)}
        >
          <option>Choose Director:</option>
          {renderDirectors()}
        </select>
      </div>

      <div>
        <button type="submit">Add New Show</button>
      </div>
    </form>
  );
}

export default AddShow;
