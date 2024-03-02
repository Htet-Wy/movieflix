import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { movie, movieDetail } from "../../libs/definitions";
import MovieDetail from "../../components/MovieDetail";
import { PageLoading } from "../../components/Loading";

const MovieDetailPage = () => {
  const { movie } = useLoaderData() as {
    movie: movieDetail;
  };

  return (
    <>
      <Suspense fallback={<PageLoading title="Loading Movie" />}>
        <Await resolve={movie}>
          {(movie) => <MovieDetail movie={movie} />}
        </Await>
      </Suspense>
    </>
  );
};

export default MovieDetailPage;
