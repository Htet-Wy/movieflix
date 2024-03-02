import { defer, json } from "react-router-dom";
import type { LoaderFunction } from "react-router-dom";
import { apiKey, apiUrl, genre } from "./definitions";

export const genres: genre[] = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzA2MGRjNDFjMGNjZDIxZDAwMzU5OWVhYmRlZWI5ZiIsInN1YiI6IjY1Y2YxYmNhNjBjNzUxMDE2MjY4ZWY4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o7hyvjoUBLjAmxQVOkuGlC8d427j1a0X9i9cxueSpwM",
  },
};

export const genreList = (list: number[]) => {
  const genreNameArr = [];
  for (let i = 0; i < list.length; i++) {
    const genreName = genres.find((genre) => genre.id === list[i]);

    if (genreName) {
      genreNameArr.push(genreName.name);
    }
  }

  return genreNameArr;
};

export const homeLoader: LoaderFunction = async () => {
  return defer({
    popular: popularLoader(),
    nowPlaying: nowPlayingLoader(),
    topRated: topRatedLoader(),
    upcoming: upcomingLoader(),
  });
};

export const nowPlayingLoader = async () => {
  const response = await fetch(apiUrl + "movie/now_playing", options);

  if (!response.ok) {
    throw json(
      {
        message: "Couldn't fetch now playing movies",
      },
      { status: 500 }
    );
  } else {
    const data = await response.json();
    return data.results;
  }
};

export const topRatedLoader = async () => {
  const response = await fetch(apiUrl + "movie/top_rated", options);

  if (!response.ok) {
    throw json(
      {
        message: "Couldn't fetch top rated movies",
      },
      { status: 500 }
    );
  } else {
    const data = await response.json();
    return data.results;
  }
};

export const upcomingLoader = async () => {
  const response = await fetch(apiUrl + "movie/upcoming", options);

  if (!response.ok) {
    throw json(
      {
        message: "Couldn't fetch upcoming movies",
      },
      { status: 500 }
    );
  } else {
    const data = await response.json();
    return data.results;
  }
};

export const popularLoader = async () => {
  const response = await fetch(apiUrl + "movie/popular", options);

  if (!response.ok) {
    throw json(
      {
        message: "Couldn't popular movies",
      },
      { status: 500 }
    );
  } else {
    const data = await response.json();
    return data.results;
  }
};

export const movieDetailLoader: LoaderFunction = async ({ params }) => {
  if (!params || typeof params.movieId !== "string") {
    throw new Error("Invalid parameters for movieDetailLoader");
  }

  return defer({
    movie: movieLoader(params.movieId),
  });
};

export const movieLoader = async (id: string) => {
  const response = await fetch(
    apiUrl +
      `movie/${id}?api_key=${apiKey}&append_to_response=credits,videos,recommendations`,
    options
  );

  if (!response.ok) {
    throw json(
      {
        message: "Couldn't fetch movie detail",
      },
      { status: 500 }
    );
  } else {
    const data = await response.json();
    return data;
  }
};

const genreLoader = async (genreId: number) => {
  const response = await fetch(
    apiUrl +
      `discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=false&language=en-US&page=1&with_genres=${genreId}`,
    options
  );

  if (!response.ok) {
    throw json(
      {
        message: "Couldn't fetch movie list base on genre",
      },
      { status: 500 }
    );
  } else {
    const data = await response.json();
    return data.results;
  }
};

export const actionLoader = () => {
  return genreLoader(28);
};

export const adventureLoader = () => {
  return genreLoader(12);
};

export const animationLoader = () => {
  return genreLoader(16);
};

export const comedyLoader = () => {
  return genreLoader(35);
};

export const crimeLoader = () => {
  return genreLoader(80);
};

export const documentaryLoader = () => {
  return genreLoader(99);
};

export const dramaLoader = () => {
  return genreLoader(18);
};

export const familyLoader = () => {
  return genreLoader(10751);
};

export const fantasyLoader = () => {
  return genreLoader(14);
};

export const historyLoader = () => {
  return genreLoader(36);
};

export const horrorLoader = () => {
  return genreLoader(27);
};

export const musicLoader = () => {
  return genreLoader(10402);
};

export const mysteryLoader = () => {
  return genreLoader(9648);
};

export const romanceLoader = () => {
  return genreLoader(10749);
};

export const scienceLoader = () => {
  return genreLoader(878);
};

export const thrillerLoader = () => {
  return genreLoader(53);
};

export const tvMovieLoader = () => {
  return genreLoader(10770);
};

export const warLoader = () => {
  return genreLoader(10752);
};

export const westernLoader = () => {
  return genreLoader(37);
};
