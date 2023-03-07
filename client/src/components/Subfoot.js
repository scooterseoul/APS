import "./Subfoot.css";
import Dow from "../images/dowjones.png";
import Globalcompact from "../images/globalcompact.png";
const Subfoot = () => {
  return (
    <div className="subfoot-list">
      <div className="dow">
        <img src={Dow} alt="dow"></img>
      </div>

      <div className="globalcompact">
        <img src={Globalcompact} alt="globalcompact"></img>
      </div>
    </div>
  );
};

export default Subfoot;
