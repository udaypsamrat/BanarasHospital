import React from "react";
import "./style.css";
import Data from "../../data/Doctors.json";
import Footer from "../../containers/Footer";

function Doctors() {
  console.log(Data);
  return (
    <div className="doctors">
      <img src={require("../../assets/image/dr.homeimg.png").default} alt="/" />

      {Data.data.map((item, i) => (
        <tr key={i}>
          <br />
          <div className="doctors-info">
            <div className="details-dr">
              <h3>{item.doctorsName}</h3>
              <h5>{item.doctorsCategory}</h5>

              <samp>{item.days}</samp>
              <br />
              <samp>{item.timeAM}</samp>
              <br />
              <samp>{item.timePM}</samp>
              <br />
              <p>{item.description}</p>
            </div>
            <div className="dr-img-top">
              {/* <img className="dr-img" src={item.doctorsImage} alt="" /> */}
            </div>
          </div>
        </tr>
      ))}
      <Footer />
    </div>
  );
}

export default Doctors;
