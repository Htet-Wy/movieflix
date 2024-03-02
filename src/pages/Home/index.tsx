import Banner from "../../components/Banner";
import MovieList from "../../components/MovieList";
import { Await, useLoaderData } from "react-router-dom";
import { movie } from "../../libs/definitions";
import { Suspense } from "react";
import { PageLoading } from "../../components/Loading";

const Home = () => {
  const data = useLoaderData() as {
    popular: movie[];
    nowPlaying: movie[];
    topRated: movie[];
    upcoming: movie[];
  };

  return (
    <>
      <Suspense fallback={<PageLoading title="Loading" />}>
        <Await resolve={data.popular}>
          {(popular) => <Banner movies={popular} />}
        </Await>
        <Await resolve={data.nowPlaying}>
          {(nowPlaying) => (
            <MovieList title="Weekly Trending Movies" movies={nowPlaying} />
          )}
        </Await>
        <Await resolve={data.topRated}>
          {(topRated) => (
            <MovieList title="Top Rated Movies" movies={topRated} />
          )}
        </Await>
        <Await resolve={data.upcoming}>
          {(upcoming) => (
            <MovieList title="Upcoming Movies" movies={upcoming} />
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default Home;
