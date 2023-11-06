import React from "react";
import MoviesPage from "./MoviesPage";

function MoviesPageComponent({ movies }) {
  return (
    <div>
      <MoviesPage movies={movies} />
    </div>
  );
}


export default MoviesPageComponent;
