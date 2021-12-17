import React from "react";
import "./style.css";

function Bodyabout() {
  return (
    <div className="b-a">
      <div className="ba-wrapper">
        <div className="ba-left">
          <img
            className="photo"
            src={require("../../assets/image/laboratory.webp").default}
            alt="laboratory img"
          />
        </div>
        <div className="ba-right">
          <samp className="whybio">Why we are</samp>
          <h4>
            Why Choose
            <br />
            Other Healthcare?
          </h4>
          <p>
            The Cardiology department offers the services of a dedicated
            Coronary Care Unit , with a state of the art, low dose flat panel
            Cardiac Cath Lab. Our 128 Slice CT Scan offers the facility of
            non-invasive Cardiac Angiography, which makes us unique. We use 4D
            Echo Doppler system for the most accurate doppler studies.
          </p>
          <div className="ba-info">
            <div className="dbio1">
              <h4>700 Doctors</h4>
              <p>
                The Cardiology department offers the services of a dedicated
                Coronary Care Unit , with a state of the art, low dose flat
                panel Cardiac Cath Lab.
              </p>
            </div>
            <div className="dbio1">
              <h4>700 Doctors</h4>
              <p>
                The Cardiology department offers the services of a dedicated
                Coronary Care Unit , with a state of the art, low dose flat
                panel Cardiac Cath Lab.
              </p>
            </div>
            <div className="dbio1">
              <h4>700 Doctors</h4>
              <p>
                The Cardiology department offers the services of a dedicated
                Coronary Care Unit , with a state of the art, low dose flat
                panel Cardiac Cath Lab.
              </p>
            </div>
            <div className="dbio1">
              <h4>700 Doctors</h4>
              <p>
                The Cardiology department offers the services of a dedicated
                Coronary Care Unit , with a state of the art, low dose flat
                panel Cardiac Cath Lab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bodyabout;
