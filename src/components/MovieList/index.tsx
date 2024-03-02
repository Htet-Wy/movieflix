import React, { Suspense } from "react";
import classes from "./index.module.css";
import MovieCard from "../MovieCard";
import { movie } from "../../libs/definitions";
import { MovieCardLoading } from "../Loading";

const MovieList: React.FC<{ title: string; movies: movie[] }> = (props) => {
  return (
    <section className={classes.movie_list}>
      <h3 className={classes.title}>{props.title}</h3>
      <div className={classes.movies}>
        {props.movies.map((movie) => (
          <Suspense fallback={<MovieCardLoading />}>
            <MovieCard key={movie.id} movie={movie} />
          </Suspense>
        ))}
      </div>
    </section>
  );
};

export default MovieList;
