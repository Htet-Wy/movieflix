import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import classes from "./index.module.css";
import MovieCard from "../../components/MovieCard";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className={classes.main_wrapper}>
        <SideBar />
        <article className={`position-relative z-1 ${classes.content_wrapper}`}>
          <Outlet />
        </article>
      </main>
    </>
  );
};

export default RootLayout;
