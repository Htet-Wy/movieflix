import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import {
  actionLoader,
  adventureLoader,
  animationLoader,
  comedyLoader,
  crimeLoader,
  documentaryLoader,
  dramaLoader,
  familyLoader,
  fantasyLoader,
  historyLoader,
  homeLoader,
  horrorLoader,
  movieDetailLoader,
  musicLoader,
  mysteryLoader,
  romanceLoader,
  scienceLoader,
  thrillerLoader,
  tvMovieLoader,
  warLoader,
  westernLoader,
} from "./libs/data";
import MovieDetailPage from "./pages/MovieDetailPage";
import GenrePage from "./pages/GenrePage";
import Genre from "./components/Genre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: ":movieId",
        element: <MovieDetailPage />,
        loader: movieDetailLoader,
      },
      {
        path: "Action",
        element: <GenrePage title="Action" genreId={28} />,
        loader: actionLoader,
      },
      {
        path: "Adventure",
        element: <GenrePage title="Adventure" genreId={12} />,
        loader: adventureLoader,
      },
      {
        path: "Animation",
        element: <GenrePage title="Animation" genreId={16} />,
        loader: animationLoader,
      },
      {
        path: "Comedy",
        element: <GenrePage title="Comedy" genreId={35} />,
        loader: comedyLoader,
      },
      {
        path: "Crime",
        element: <GenrePage title="Crime" genreId={80} />,
        loader: crimeLoader,
      },
      {
        path: "Documentary",
        element: <GenrePage title="Documentary" genreId={99} />,
        loader: documentaryLoader,
      },
      {
        path: "Drama",
        element: <GenrePage title="Drama" genreId={18} />,
        loader: dramaLoader,
      },
      {
        path: "Family",
        element: <GenrePage title="Family" genreId={10751} />,
        loader: familyLoader,
      },
      {
        path: "Fantasy",
        element: <GenrePage title="Fantasy" genreId={14} />,
        loader: fantasyLoader,
      },
      {
        path: "History",
        element: <GenrePage title="History" genreId={36} />,
        loader: historyLoader,
      },
      {
        path: "Horror",
        element: <GenrePage title="Horror" genreId={27} />,
        loader: horrorLoader,
      },
      {
        path: "Music",
        element: <GenrePage title="Music" genreId={10402} />,
        loader: musicLoader,
      },
      {
        path: "Mystery",
        element: <GenrePage title="Mystery" genreId={9648} />,
        loader: mysteryLoader,
      },
      {
        path: "Romance",
        element: <GenrePage title="Romance" genreId={10749} />,
        loader: romanceLoader,
      },
      {
        path: "Science Fiction",
        element: <GenrePage title="Science Fiction" genreId={878} />,
        loader: scienceLoader,
      },
      {
        path: "TV Movie",
        element: <GenrePage title="TV Movie" genreId={10770} />,
        loader: tvMovieLoader,
      },
      {
        path: "Thriller",
        element: <GenrePage title="Thriller" genreId={53} />,
        loader: thrillerLoader,
      },
      {
        path: "War",
        element: <GenrePage title="War" genreId={10752} />,
        loader: warLoader,
      },
      {
        path: "Western",
        element: <GenrePage title="Western" genreId={37} />,
        loader: westernLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
