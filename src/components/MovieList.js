import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "../Context/MovieContext";

const MovieList = () => {
  const [moviesList] = useContext(MovieContext);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {moviesList.map((movie, id) => (
        <Movie
          key={id}
          title={movie.Title}
          plot={movie.Plot}
          director={movie.Director}
          year={movie.Year}
          genre={movie.Genre}
          lang={movie.Language}
          cast={movie.Actors}
          poster={movie.Poster}
          time={movie.Runtime}
        />
      ))}
    </div>
  );
};

export default MovieList;
