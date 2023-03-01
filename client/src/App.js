import "./App.css";
import kpslogo from "./images/kpslogo.png";
import hq from "./images/kpshq2.jpeg";
import banner from "./images/banner.png";
import fiveicon from "./images/fiveicon.png";
import tbnblade from "./images/tbnblade.png";
import tbn from "./images/tbn.png";
import prvideo from "./images/section2_1.gif";
import intropic from "./images/section2_2.gif";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logocont"></div>
        <div>
          <ul className="list">
            <li>
              <a href="url">About KPS</a>
            </li>
            <li>
              <p>Open KPS</p>
            </li>
            <li>
              <p>Investment</p>
            </li>
            <li>
              <p>Technology</p>
            </li>
            <li>
              <p>Support</p>
            </li>
          </ul>
        </div>
      </header>
      <div>
        {/* <div>
          <img src={hq} className="hqpic" />
        </div> */}

        <img src={banner} className="banner" />
        <body>
          <div>
            <p className="services">KPS Service</p>
            <p className="details">
              It provides domestic and international power generation facilities
              O&M, power plant facility diagnosis and performance improvement,
              transmission and transmission facilities, and renewable EPC total
              solutions. KEPCO KPS is moving forward as the world's No. 1 power
              facility maintenance industry Grand platform company!
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
                maintenance of hydroelectric, thermal, and nuclear power plants
                as well as transmission, substations, and industrial facilities.
              </p>
            </div>
            <img src={fiveicon} className="fiveicon" alt="fiveicon"></img>
          </div>
        </body>
      </div>
      <footer>
        <img src={kpslogo} className="App-logo" alt="logo" />{" "}
        <p className="address">
          211, Munhwa-ro, Naju-si, Jeollanam-do, 58326 Republic of Korea,{" "}
          <br></br>Tel. +82-61-345-0114
        </p>
      </footer>
    </div>
  );
}

export default App;
