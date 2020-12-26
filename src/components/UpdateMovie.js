import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Button, Card } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, updateMovie } from "../Redux/actions/action";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function UpdateMovie() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const movie = useSelector((state) =>
    state.movies.filter((_movie) => {
      console.log("the movie id", _movie.id);
      console.log("the id", id);
      return _movie.id !== id;
    })
  );
  console.log("movie", movie);
  const [state, setState] = useState({
    title: "",
    description: "",
    posteUrl: "",
    rating: "",
  });
  const classes = useStyles();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = () => {
    dispatch(updateMovie(state, id));
    history.push("/movie");
  };

  const { title, description, posteUrl, rating } = state;
  console.log("add movie form ", state);
  return (
    <Card>
      <form className={classes.root} noValidate autoComplete="off">
        <FormControl variant="outlined">
          <InputLabel htmlFor="title">title</InputLabel>
          <OutlinedInput
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
            label="title"
            type="text"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="description">description</InputLabel>
          <OutlinedInput
            id="description"
            value={description}
            onChange={handleChange}
            name="description"
            label="Description"
            type="text"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="posteUrl">posteUrl</InputLabel>
          <OutlinedInput
            type="text"
            id="posteUrl"
            value={posteUrl}
            name="posteUrl"
            onChange={handleChange}
            label="Poste Url"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="rating">rating</InputLabel>
          <OutlinedInput
            id="rating"
            value={rating}
            name="rating"
            type="number"
            onChange={handleChange}
            label="Rating"
          />
        </FormControl>
        <Button onClick={handleSubmit} type="button" color="primary">
          Submit
        </Button>
      </form>
    </Card>
  );
}
