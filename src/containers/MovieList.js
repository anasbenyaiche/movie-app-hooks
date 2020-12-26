import React, { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import PropTypes from "prop-types";

const MovieList = ({ movieList, handleDelete }) => {
  useEffect(() => {}, [movieList]);

  return (
    <div className="movies-container">
      {movieList?.map((movie, index) => (
        <MovieCard
          movie={movie}
          key={index}
          handleDelete={(id) => handleDelete(id)}
        />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.array,
  handleDelete: PropTypes.func,
};

export default MovieList;
