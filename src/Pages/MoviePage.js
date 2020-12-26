import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddMovie from "../components/AddMovie";
import MovieList from "../containers/MovieList";
function MoviePage() {
  const movies = useSelector((state) => state.movies);

  //   const handleAddMovie = (movie) => {
  //     const newMovie = { ...movie, id: Math.random() };
  //     console.log("movie", newMovie);
  //     setMovieList([...movieList, newMovie]);
  //   };
  //   const handleDelete = (id) => {
  //     console.log(id);
  //     const newList = movieList.filter((movie) => movie.id !== id);
  //     setMovieList(newList);
  //   };
 

  return (
    <div className="App">
      <h1>Movie App</h1>
      <MovieList movieList={movies} />
      <AddMovie />
    </div>
  );
}

export default MoviePage;
