import React, { Suspense, useEffect, useState } from "react";
import classes from "./index.module.css";
import { apiKey, apiUrl, movie } from "../../libs/definitions";
import MovieCard from "../MovieCard";
import { options } from "../../libs/data";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MovieCardLoading } from "../Loading";

const Genre: React.FC<{ title: string; movies: movie[]; genreId: number }> = (
  props
) => {
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState<movie[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("..");
  };

  const handleLoadMore = () => {
    setLoading(true);
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        if (page > 1) {
          const res = await fetch(
            apiUrl +
              `discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=false&language=en-US&page=${page}&with_genres=${props.genreId}`,
            options
          ).then((res) => res.json());

          setLoading(false);

          if (page > 2) {
            setMovieList((prev) => [...prev, ...res.results]);
          } else {
            setMovieList(res.results);
          }
        }
      } catch (error) {
        console.error("Error at data fetching: ", error);
      }
    };

    getMovies();
  }, [page, props.genreId]);

  return (
    <section>
      <div
        className={`d-flex align-items-center gap-4 ${classes.title_wrapper}`}
      >
        <FaArrowLeft className={classes.back_btn} onClick={handleNavigate} />
        <h1 className={classes.genre_title}>All {props.title} Movies</h1>
      </div>
      <div className="row row-gap-5 column-gap-5">
        {props.movies.map((movie) => (
          <div className="col col-sm-auto" key={movie.id}>
            <Suspense fallback={<MovieCardLoading />}>
              <MovieCard movie={movie} />
            </Suspense>
          </div>
        ))}
        {movieList.map((movie) => (
          <div className="col" key={movie.id}>
            <Suspense fallback={<MovieCardLoading />}>
              <MovieCard movie={movie} />
            </Suspense>
          </div>
        ))}
      </div>
      <button
        className={`d-flex justify-content-center align-items-center gap-4 mx-auto ${classes.load_btn}`}
        onClick={handleLoadMore}
      >
        Load More
        {loading && (
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </button>
    </section>
  );
};

export default Genre;
