import "./App.css";
import kpslogo from "./images/kpslogo.png";
import prvideo from "./images/section2_1.gif";
import intropic from "./images/section2_2.gif";
import Header from "./components/Header";
import Slide from "./components/Slide";
import Hqimg from "./images/kpshq3.png";
import Services from "./components/Services";
import Subfoot from "./components/Subfoot";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <div className="app-cont">
          <div className="details">
            <p className="services">KEPCO KPS Service</p>
            <p className="details1">
              KEPCO KPS provides domestic and international power generation
              facilities O&M, power plant facility diagnosis and performance
              improvement, transmission and transmission facilities, and
              renewable EPC solutions. KEPCO KPS is moving forward as the
              world's No. 1 power facility maintenance company!
              <br />
              <br />
              Established for the efficient maintenance of electric power
              facilities as the core of national economic development, KEPCO KPS
              has grown into a leading company in domestic power facility
              maintenance thanks to continuous technology development and human
              resource development for the past 35 years. It is also renowned
              for its technology in the global markets.
            </p>
          </div>
          <div className="cont-hqimg">
            <img src={Hqimg} alt="hq" className="hqimg1" />
          </div>
          <div className="intropic">
            <p className="intro1">Introduction</p>
            <img src={intropic} alt="intropic" className="intropic0"></img>
          </div>
          <div className="prvideo">
            <p className="prvideo1">PR Video</p>
            <img src={prvideo} alt="prvideo" className="video"></img>
          </div>

          <div className="kpsservices">
            <Services />
          </div>
          <div className="ceo">
            <p>CEO Message</p>
          </div>
          <div className="ceomessage">
            <p>
              <strong>
                “We are on our way to becoming the world’s best provider of
                power plant services!”
              </strong>
              <br />
              <br />
              KEPCO KPS is a company specializing in reliable high-quality
              maintenance of hydroelectric, thermal, and nuclear power plants as
              well as transmission, substations, and industrial facilities.
            </p>
          </div>
          <div className="slider-main">
            <Slide />
          </div>
        </div>
      </div>
      <div className="subfoot-grid">
        <div className="subfoot">
          <Subfoot />
        </div>
      </div>
      <footer>
        <img src={kpslogo} className="App-logo" alt="logo" />
      </footer>
      <p className="address">
        211, Munhwa-ro, Naju-si, Jeollanam-do, 58326 Republic of Korea,
        <br></br>Tel. +82-61-345-0114
      </p>
    </>
  );
}

export default App;
