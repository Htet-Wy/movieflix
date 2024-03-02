import ControlButton from "../ControlButton";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import classes from "./index.module.css";
import { useState } from "react";
import { imgUrl, movie } from "../../libs/definitions";
import { genreList } from "../../libs/data";

const Banner: React.FC<{ movies: movie[] }> = (props) => {
  const [chooseBtn, setChooseBtn] = useState<number>(0);
  const bannerSlider = props.movies[chooseBtn];
  const date = bannerSlider.release_date.split("-")[0];
  const rating = bannerSlider.vote_average.toFixed(1);
  const genres = genreList(bannerSlider.genre_ids);

  console.log(genres);

  const handleBtnClick = (index: number) => {
    setChooseBtn(index);
  };

  return (
    <>
      <section
        className={`${classes.banner} position-relative overflow-hidden`}
      >
        <img
          src={imgUrl + bannerSlider.backdrop_path}
          alt={bannerSlider.title}
          className={classes.cover_img}
        />
        <div className={`position-absolute z-1 ${classes.banner_slider}`}>
          <h2 className={`text-white ${classes.movie_name}`}>
            {bannerSlider.title}
          </h2>
          <div className={`d-flex align-items-center gap-4`}>
            <div>{date}</div>
            <div className={`text-white ${classes.rating}`}>{rating}</div>
          </div>
          <p className={classes.genre}>
            {genres.map((genre, index) =>
              index === genres.length - 1 ? genre : genre + ", "
            )}
          </p>
          <p className={classes.description}>{bannerSlider.overview}</p>
          <Link
            to={`${bannerSlider.id}`}
            className={`d-flex align-items-center gap-4 text-decoration-none bg-danger text-white ${classes.btn}`}
          >
            <FaRegCirclePlay />
            <span>Watch Now</span>
          </Link>
        </div>
        <div
          className={`position-absolute z-1 right-0 ${classes.banner_control}`}
        >
          <div className={`d-flex ${classes.control_wrapper}`}>
            {props.movies.map((movie, index) => (
              <ControlButton
                key={movie.id}
                chooseBtn={chooseBtn}
                image={movie.poster_path}
                index={index}
                handleBtnClick={handleBtnClick}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
