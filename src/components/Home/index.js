import React from "react";
import Body from "../../containers/Body";
import Bodyabout from "../../containers/Bodyabout";
import Bodynav from "../../containers/Bodynav";
import Footer from "../../containers/Footer";
import Hospitalteam from "../../containers/Hospitalteam";
import "./style.css";

function Home() {
  return (
    <div className="h">
      <img
        className="home"
        src={require("../../assets/image/scientists-laboratory.jpg").default}
        alt="logo"
      />
      <div>
        <Bodynav />
      </div>

      <div>
        <Bodyabout />
      </div>
      <div>
        <Hospitalteam />
      </div>
      <div>
        <Body />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
