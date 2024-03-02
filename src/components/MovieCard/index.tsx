import React from "react";
import classes from "./index.module.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { imgUrl, movie } from "../../libs/definitions";

const MovieCard: React.FC<{ movie: movie }> = (props) => {
  const date = props.movie.release_date.split("-")[0];
  const rating = props.movie.vote_average.toFixed(1);

  return (
    <div className={classes.movie_card}>
      <Link to={`/${props.movie.id}`} className={classes.poster}>
        <img
          src={imgUrl + props.movie.poster_path}
          alt={props.movie.title}
          className={classes.movie_img}
        />
      </Link>
      <Link
        to={`/${props.movie.id}`}
        className={`text-decoration-none text-white ${classes.movie_name}`}
      >
        {props.movie.title}
      </Link>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <FaStar className={classes.star} />
          <span>{rating}</span>
        </div>
        <div className={`text-white ${classes.date}`}>{date}</div>
      </div>
    </div>
  );
};

export default MovieCard;
