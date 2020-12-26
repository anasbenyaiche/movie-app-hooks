import { movies } from "../../constants/moives";
import {
  ADD_MOVIE,
  DELETE_MOVIE,
  UPDATE_MOVIE,
} from "../actionTypes/actionTypes";

const INITIAL_STATE = {
  movies,
};

export const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const { movies } = state;
  switch (type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...movies, payload],
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: movies.filter((movie) => movie.id !== payload),
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        movies: movies.map((movie) => {
          if (movie.id === payload.id) {
            return payload.updatedMovie;
          } else {
            return movie;
          }
        }),
      };
    default:
      return state;
  }
};
