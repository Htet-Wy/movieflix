import classes from "./index.module.css";
import { genres } from "../../libs/data";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <nav className={classes.sidebar}>
      <div className={classes.genre_list}>
        <p className={classes.title}>Genres</p>
        {genres.map((genre) => (
          <NavLink
            key={genre.id}
            to={genre.name}
            className={({ isActive }) =>
              isActive ? classes.active_genre : classes.genre
            }
          >
            {genre.name}
          </NavLink>
        ))}
      </div>

      <div className={classes.footer}>
        <p>Copyright 2024</p>
        <a
          href="https://github.com/Htet-Wy"
          target="blank"
          className="text-decoration-none"
        >
          Code by Htet-Wy
        </a>
      </div>
    </nav>
  );
};

export default SideBar;
