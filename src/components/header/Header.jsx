import "./Header.css";
import revalogo from "../../images/reva_logo.svg"
import VayuVyastra_circle from "../../images/VayuVyastra_circle.png"
function Header() {
  return <div className="app-header">
    <div className="left-side-app-header" >
      <img src={revalogo} alt="" className="revalogo" />
        <img src={VayuVyastra_circle} alt="" className="revalogo" />
        <h2 className="title" >Vayuyastra</h2>
    </div>
  </div>;
}

export default Header;
