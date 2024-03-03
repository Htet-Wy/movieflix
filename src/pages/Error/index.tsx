import { useNavigate, useRouteError } from "react-router-dom";
import Header from "../../components/Header";
import classes from "./index.module.css";

const ErrorPage = () => {
  const error = useRouteError() as {
    data: { message: string };
    status: number;
  };
  const navigate = useNavigate();

  let title = "An Error Occured!";
  let message = "Something Went Wrong!";

  if (error.status === 404) {
    title = "Not Found!";
    message = "Couldn't Find Resources";
  }

  return (
    <>
      <Header />
      <div
        className={`d-flex flex-column justify-content-center align-items-center gap-4 ${classes.error_wrapper}`}
      >
        <div className="text-center">
          <h1 className={classes.error_status}>{error.status}</h1>
          <p>{title}</p>
          <p>{message}</p>
        </div>
        <button className={classes.back_btn} onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
