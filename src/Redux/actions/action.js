import {
  ADD_MOVIE,
  DELETE_MOVIE,
  UPDATE_MOVIE,
} from "../actionTypes/actionTypes";

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});

export const deleteMovie = (id) => ({
  type: DELETE_MOVIE,
  payload: id,
});

export const updateMovie = (updatedMovie, id) => ({
  type: UPDATE_MOVIE,
  payload: { updatedMovie, id },
});
