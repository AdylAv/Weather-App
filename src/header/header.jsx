import "./header.css"

import Gapp from "../main/weather";


function Header() {
    return (
    <div className="wrapperHeader">
      <div  className="header">
        <h1 className="header_title">Информация о погоде</h1>
        <Gapp/>
      </div> 
    </div>
    );
  }
  
  export default Header;