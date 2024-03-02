import { Link } from "react-router-dom";
import classes from "./index.module.css";
import { Suspense, useEffect, useState } from "react";
import { IoCloseOutline, IoSearchOutline, IoMenu } from "react-icons/io5";
import SideBar from "../SideBar";
import { apiKey, apiUrl, movie } from "../../libs/definitions";
import { options } from "../../libs/data";
import MovieCard from "../MovieCard";

const Header = () => {
  const [active, setActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<movie[]>([]);

  const handleSideBar = () => {
    setActive((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleRemoveText = () => {
    setSearchValue("");
  };

  useEffect(() => {
    const getSearchMovie = async () => {
      try {
        const searchTimer = setTimeout(async () => {
          const res = await fetch(
            apiUrl +
              `search/movie?api_key=${apiKey}&query=${searchValue}&include_adult=false&page=1`,
            options
          ).then((res) => res.json());

          setSearchResults(res.results);
        }, 500);

        return () => clearTimeout(searchTimer);
      } catch (error) {
        console.error("Search Error: ", error);
      }
    };

    getSearchMovie();
  }, [searchValue]);

  return (
    <>
      <header className={classes.header_container}>
        <div
          className={`d-flex justify-content-between align-items-center gap-2`}
        >
          <Link to="/" className={classes.logo}>
            Movieflix
          </Link>
          <div className={classes.searchbar_desktop}>
            <input
              type="text"
              name="search"
              value={searchValue}
              id="search"
              aria-label="searchbar"
              placeholder="Search movies..."
              className={classes.search_field}
              onChange={handleChange}
            />
            <IoSearchOutline className={classes.search_field_icon} />
            <IoCloseOutline
              className={classes.close_icon}
              onClick={handleRemoveText}
            />
          </div>
          {active ? (
            <IoCloseOutline
              className={classes.close_menu}
              onClick={handleSideBar}
            />
          ) : (
            <IoMenu className={classes.open_menu} onClick={handleSideBar} />
          )}
        </div>
        <div className={classes.searchbar_mobile}>
          <input
            type="text"
            name="search"
            value={searchValue}
            id="search"
            aria-label="searchbar"
            placeholder="Search movies..."
            className={classes.search_field}
            onChange={handleChange}
          />
          <IoSearchOutline className={classes.search_field_icon} />
          <IoCloseOutline
            className={classes.close_icon}
            onClick={handleRemoveText}
          />
        </div>
        {active && <SideBar />}
      </header>
      {searchValue.length > 0 && (
        <div
          className={`position-fixed left-0 bottom-0 ${classes.search_modal}`}
        >
          <p className={classes.search_label}>Result For</p>
          <h1 className={classes.search_title}>{searchValue}</h1>

          <div className="row row-gap-5 column-gap-5">
            {searchResults.map((result) => (
              <Suspense>
                <div className="col" onClick={handleRemoveText}>
                  <MovieCard movie={result} />
                </div>
              </Suspense>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
