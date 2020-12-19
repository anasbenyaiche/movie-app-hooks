import React, { useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import { movies } from "./constants/moives";
import MovieList from "./containers/MovieList";
function App() {
  const [movieList, setMovieList] = useState(movies);

  const handleAddMovie = (movie) => {
    const newMovie = { ...movie, id: Math.random() };
    console.log("movie", newMovie);
    setMovieList([...movieList, newMovie]);
  };
  const handleDelete = (id) => {
    console.log(id);
    const newList = movieList.filter((movie) => movie.id !== id);
    setMovieList(newList);
  };
  return (
    <div className="App">
      <h1>Movie App</h1>
      <MovieList movieList={movieList} handleDelete={handleDelete} />
      <AddMovie onAdd={handleAddMovie} />
    </div>
  );
}

export default App;
