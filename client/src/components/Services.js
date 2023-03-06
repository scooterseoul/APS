import "./Services.css";
import Engineering from "../images/icon-engineering.png";
import Overseas from "../images/icon-overseas.png";
import Power from "../images/icon-power.png";
import Training from "../images/icon-training.png";
import Transmission from "../images/icon-trans.png";
const Services = () => {
  return (
    <div>
      {/* <div className="slidy">
            <img src={hq} />
          </div> */}

      <ul className="services-list">
        <li>
          <p href="url">Hydro, Thermal & Nuclear Services</p>
          <div className="power">
            <img src={Power} alt="power"></img>
          </div>
        </li>
        <li>
          <p>Power Transmission & Substation Services</p>
          <div className="transmission">
            <img src={Transmission} alt="transmission"></img>
          </div>
        </li>
        <li>
          <p>Overseas Power Plant O&M Services</p>
          <div className="overseas">
            <img src={Overseas} alt="overseas"></img>
          </div>
        </li>
        <li>
          <p>Training, Education & Development</p>
          <div className="training">
            <img src={Training} alt="training"></img>
          </div>
        </li>
        <li>
          <p>Research, Development & Technology</p>
          <div className="engineering">
            <img src={Engineering} alt="engineering"></img>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Services;
