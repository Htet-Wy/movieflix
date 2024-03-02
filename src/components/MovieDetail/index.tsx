import React from "react";
import classes from "./index.module.css";
import { FaStar } from "react-icons/fa6";
import Trailer from "../../components/Trailer";
import { imgUrl, movieDetail } from "../../libs/definitions";
import MovieList from "../MovieList";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MovieDetail: React.FC<{ movie: movieDetail }> = (props) => {
  const date = props.movie.release_date.split("-")[0];
  const rating = props.movie.vote_average.toFixed(1);
  const genres = props.movie.genres.map((genre) => genre.name);
  const backdropImg = imgUrl + props.movie.backdrop_path;
  const starringList = props.movie.credits.cast.map((actor) => actor.name);
  const director = props.movie.credits.crew.filter(
    (crew) => crew.job === "Director"
  );
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("..");
  };

  return (
    <>
      <FaArrowLeft className={classes.back_btn} onClick={handleNavigate} />
      <section className={classes.movie_detail}>
        <div
          className={`position-absolute top-0 left-0 z-n1 ${classes.backdrop_img}`}
          style={{
            backgroundImage: `url(${backdropImg})`,
          }}
        ></div>
        <figure className={classes.movie_poster}>
          <img
            src={imgUrl + props.movie.poster_path}
            alt={props.movie.title}
            className={classes.cover_img}
          />
        </figure>
        <div className={classes.detail_container}>
          <h1 className={`text-white ${classes.movie_name}`}>
            {props.movie.title}
          </h1>
          <div className="d-flex align-items-center gap-4">
            <div className="d-flex align-items-center gap-2">
              <FaStar className={classes.star} />
              <span>{rating}</span>
            </div>
            <div className={classes.sperator}></div>
            <div>{props.movie.runtime}m</div>
            <div className={classes.sperator}></div>
            <div>{date}</div>
          </div>
          <p className={classes.genre}>
            {genres.map((genre, index) =>
              index === genres.length - 1 ? genre : genre + ", "
            )}
          </p>
          <p className={`text-white ${classes.overview}`}>
            {" "}
            {props.movie.overview}
          </p>
          <div className={classes.starring_list}>
            <div
              className={`d-flex align-items-start gap-4 ${classes.list_item}`}
            >
              <p className={classes.list_name}>Starring</p>
              <p className="text-white">
                {starringList.map((actor, index) =>
                  index === starringList.length - 1 ? actor : actor + ", "
                )}
              </p>
            </div>
            <div
              className={`d-flex align-items-start gap-4 ${classes.list_item}`}
            >
              <p className={classes.list_name}>Directed By</p>
              <p className="text-white">{director[0].name}</p>
            </div>
          </div>
          <Trailer vidoes={props.movie.videos.results} />
        </div>
      </section>
      <MovieList
        title="You May Also Like"
        movies={props.movie.recommendations.results}
      />
    </>
  );
};

export default MovieDetail;
