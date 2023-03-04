import "./App.css";
import kpslogo from "./images/kpslogo.png";
import fiveicon from "./images/fiveicon.png";
import prvideo from "./images/section2_1.gif";
import intropic from "./images/section2_2.gif";
import Header from "./components/Header";
import Slide from "./components/Slide";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <div>
          <p className="services">KPS Service</p>
          <p className="details">
            KEPCO KPS provides domestic and international power generation
            facilities O&M, power plant facility diagnosis and performance
            improvement, transmission and transmission facilities, and renewable
            EPC solutions. KEPCO KPS is moving forward as the world's No. 1
            power facility maintenance company!
          </p>
          <div className="videocont">
            <div>
              <img src={prvideo} className="prvideo" alt="prvideo"></img>
            </div>
            <div>
              <img src={intropic} className="intropic" alt="intropic"></img>
            </div>
          </div>
          <div>
            <p className="ceo">CEO Message</p>
            <p className="ceomessage">
              <strong>
                “We are on our way to becoming the world’s best provider of
                general plant services!”
              </strong>
              <br></br>
              KEPCO KPS is a company specializing in reliable high-quality
              maintenance of hydroelectric, thermal, and nuclear power plants as
              well as transmission, substations, and industrial facilities.
            </p>
          </div>
          <div className="slider-main">
            <Slide />
          </div>

          <img src={fiveicon} className="fiveicon" alt="fiveicon"></img>
        </div>
      </div>
      <footer>
        <img src={kpslogo} className="App-logo" alt="logo" />
      </footer>{" "}
      <p className="address">
        211, Munhwa-ro, Naju-si, Jeollanam-do, 58326 Republic of Korea,{" "}
        <br></br>Tel. +82-61-345-0114
      </p>
    </>
  );
}

export default App;
