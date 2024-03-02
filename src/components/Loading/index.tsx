import React from "react";
import classes from "./index.module.css";

export const PageLoading: React.FC<{ title: string }> = (props) => {
  return (
    <div className={`d-flex justify-content-center align-items-center gap-3`}>
      <p className="m-0">{props.title}</p>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export const MovieCardLoading = () => {
  return (
    <div>
      <div className={classes.loading_img}></div>
      <div>
        <div className={classes.loading_title}></div>
        <div className="d-flex justify-content-between align-items-center">
          <div className={classes.loading_rating}></div>
          <div className={classes.loading_date}></div>
        </div>
      </div>
    </div>
  );
};
