import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_DIRECTOR_QUERY } from "../queries/queries";

function AddShow() {
  const { loading, data, error } = useQuery(GET_DIRECTOR_QUERY);
  const { show, setShow } = useState("");
  const { genre, setGenre } = useState("");
  const { directorId, setDirectorId } = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
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
          onChange={(e) => {
            setShow(e.target.value);
          }}
        />
        {console.log(setShow)}
      </div>

      <div>
        <label htmlFor="genre">Genre: </label>
        <input
          id="genre"
          name="genre"
          type="text"
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="director">Director: </label>
        <select
          id="director"
          name="director"
          onChange={(e) => {
            setDirectorId(e.target.value);
          }}
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
