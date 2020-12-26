import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../Redux/actions/action";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MovieCard({ movie }) {
  const { title, description, posteUrl, rating, id } = movie;
  const classes = useStyles();

  const history = useHistory()
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log("Delete here");
    dispatch(deleteMovie(id));
  };
  const handleNavigate = () => {
    history.push(`/movies/${id}`)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={posteUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleDelete} size="small" color="secondary">
          Delete
        </Button>
        <Button onClick={handleNavigate} size="small" color="primary">
          update
        </Button>
      </CardActions>
    </Card>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf({
    title: PropTypes.string,
    description: PropTypes.string,
    posteUrl: PropTypes.string,
    rating: PropTypes.number,
  }),
  handleDelete: PropTypes.func,
};
