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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MovieCard({ movie, handleDelete }) {
  const { title, description, posteUrl, rating, id } = movie;
  const classes = useStyles();

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
        <Button size="small" color="secondary">
          Delete
        </Button>
        <Button onClick={() => handleDelete(id)} size="small" color="primary">
          Learn More
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
