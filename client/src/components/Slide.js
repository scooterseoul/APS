import "./Slide.css";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import slide4 from "../images/tbnblade.png";

const Slide = () => {
  return (
    <div className="slider">
      <div className="slides">
        <img src={slide1} alt="slide1" className="slide"></img>
        <img src={slide2} alt="slide2" className="slide"></img>
        <img src={slide3} alt="slide3" className="slide"></img>
        <img src={slide4} alt="slide4" className="slide"></img>
      </div>
    </div>
  );
};

export default Slide;
