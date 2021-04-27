import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "../Context/MovieContext";

const MovieList = () => {
  const [moviesList] = useContext(MovieContext);
  return (
    <>
      {moviesList.map((movie) => (
          <Movie
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
    </>
  );
};

export default MovieList;
