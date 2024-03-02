import React from "react";
import classes from "./index.module.css";
import { video } from "../../libs/definitions";

const Trailer: React.FC<{ vidoes: video[] }> = (props) => {
  const trailers = props.vidoes.filter(
    (video) =>
      video.type === "Official Trailer" ||
      video.type === "Trailer" ||
      (video.type === "Teaser" && video.site === "YouTube")
  );

  return (
    <div>
      <h3 className={`text-white ${classes.title}`}>Trailers and Clips</h3>
      <div className={`d-flex overflow-x-auto ${classes.trailer_slider}`}>
        {trailers.map((trailer) => {
          const videoUrl = `https://www.youtube.com/embed/${trailer.key}?&theme=dark&color=white&rel=0`;

          return (
            <div className={classes.video_card} key={trailer.id}>
              <iframe
                src={videoUrl}
                width="500"
                height="294"
                frameBorder="0"
                allowFullScreen
                title={trailer.name}
                className={classes.cover_img}
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trailer;
