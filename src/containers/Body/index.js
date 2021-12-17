import React from "react";
import "./style.css";

function Body() {
  return (
    <div className="b-h">
      <div className="bh-left">
        <samp className="whybio">Why we are</samp>
        <h4>
          Why Choose
          <br />
          Other Healthcare?
        </h4>
        <p>
          The Cardiology department offers the services of a dedicated Coronary
          Care Unit , with a state of the art, low dose flat panel Cardiac Cath
          Lab. Our 128 Slice CT Scan offers the facility of non-invasive Cardiac
          Angiography, which makes us unique. We use 4D Echo Doppler system for
          the most accurate doppler studies.
        </p>

        <div className="bh-info">
          <div className="dbio1">
            <h4>700 Doctors</h4>
            <p>
              The Cardiology department offers the services of a dedicated
              Coronary Care Unit , with a state of the art, low dose flat panel
              Cardiac Cath Lab.
            </p>
          </div>
          <div className="dbio1">
            <h4>700 Doctors</h4>
            <p>
              The Cardiology department offers the services of a dedicated
              Coronary Care Unit , with a state of the art, low dose flat panel
              Cardiac Cath Lab.
            </p>
          </div>

          <div className="dbio1">
            <h4>700 Doctors</h4>
            <p>
              The Cardiology department offers the services of a dedicated
              Coronary Care Unit , with a state of the art, low dose flat panel
              Cardiac Cath Lab.
            </p>
          </div>
          <div className="dbio1">
            <h4>700 Doctors</h4>
            <p>
              The Cardiology department offers the services of a dedicated
              Coronary Care Unit , with a state of the art, low dose flat panel
              Cardiac Cath Lab.
            </p>
          </div>
        </div>
      </div>
      <div className="bh-right">
        <img
          src={require("../../assets/image/healthcare.jpg").default}
          alt="/"
        />
      </div>
    </div>
  );
}

export default Body;
