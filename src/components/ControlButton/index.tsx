import classes from "./index.module.css";
import { imgUrl } from "../../libs/definitions";

const ControlButton: React.FC<{
  chooseBtn: number;
  image: string;
  index: number;
  handleBtnClick: (index: number) => void;
}> = (props) => {
  const handleClick = () => {
    props.handleBtnClick(props.index);
  };

  return (
    <button
      className={
        props.chooseBtn === props.index
          ? classes.active_slider_btn
          : classes.slider_btn
      }
      onClick={handleClick}
    >
      <img
        src={imgUrl + props.image}
        alt="Slide to Puss in Boots: The Last Wish"
        loading="lazy"
        className={classes.control_img}
      />
    </button>
  );
};

export default ControlButton;
