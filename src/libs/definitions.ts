import { ActionFunctionArgs, ParamParseKey, Params } from "react-router-dom";

export const imgUrl = "https://image.tmdb.org/t/p/w500";
export const apiUrl = "https://api.themoviedb.org/3/";
export const apiKey = "04c35731a5ee918f014970082a0088b1";

export type genre = {
  id: number;
  name: string;
};

export type collection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export type production_company = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type production_country = {
  iso_3166_1: string;
  name: string;
};

export type spoken_language = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type movieDetail = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: collection;
  budget: number;
  genres: genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: production_company[];
  production_countries: production_country[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: spoken_language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: {
    cast: cast[];
    crew: crew[];
  };
  videos: {
    results: video[];
  };
  recommendations: {
    page: number;
    results: movie[];
  };
};

export type movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type cast = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type crew = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
};

export type video = {
  iso_629_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  published_at: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  id: string;
};
