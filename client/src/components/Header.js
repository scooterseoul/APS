import "./Header.css";
import Hlog from "../images/h-log.png";
import banner from "../images/banner.png";
import Nav from "../components/Nav";
const Header = () => {
  return (
    <header className="App-header">
      <div className="head-con"></div>
      <div className="h-text">
        <img src={Hlog} className="hlog"></img>
      </div>
      <div>
        <img src={banner} className="banner" />
      </div>
      <div className="nav">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
