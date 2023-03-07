import "./Header.css";
import Hlog from "../images/h-log.png";
import banner from "../images/banner.png";
import Nav from "../components/Nav";
import bgimg from "../images/kpshq3.png";
import Bigbanner from "../images/slideBG2.png";
const Header = () => {
  return (
    <header className="App-header">
      <div className="head-con"></div>
      <div className="h-text">
        <img src={Hlog} alt="logo" className="hlog"></img>
      </div>
      <div className="bigbanner-cont">
        <img src={Bigbanner} alt="bigbanner" className="bigbanner"></img>
      </div>
      <div>
        <img src={banner} alt="banner" className="banner" />
      </div>
      <div className="navi-cont">
        <Nav />
      </div>
      {/* <--- desk --->  */}

      <div className="cont-bgimg">
        <img src={bgimg} alt="bgimg" className="bgimg" />
      </div>
    </header>
  );
};

export default Header;
