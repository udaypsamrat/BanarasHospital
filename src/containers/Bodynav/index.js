import React from "react";
import "./style.css";

function Bodynav() {
  return (
    <div className="h">
      <div className="h-wrapper">
        <div className="h-left">
          <h3>Banaras hospital</h3>
          <p className="h-desc">
            Established in the year 1994, Banaras Hospitals at Lanka is the
            first organised corporate multidisciplinary super-speciality
            hospital of the region. The Hospital from its inception has had a
            strong focus on distinguished Medical Faculty, State of the Art
            Diagnostic services and an ingrained culture of ethical practise.
            <br />
            Though the building at Banaras remains much the same, the medical
            technology being used to provide services has been continously
            upgraded. We take pride in offering the services of the only NABL
            Accredited Lab in this part of the country ( i.e. Banaras Speciality
            Labs), the most updated Radiology department; at par with the best
            hospitals ( be it teaching or corporate ) in India.
            <br />
            The Cardiology department offers the services of a dedicated
            Coronary Care Unit , with a state of the art, low dose flat panel
            Cardiac Cath Lab. Our 128 Slice CT Scan offers the facility of
            non-invasive Cardiac Angiography, which makes us unique. We use 4D
            Echo Doppler system for the most accurate doppler studies.
          </p>
        </div>
        <div className="h-right">
          <img
            className="picture"
            src={require("../../assets/image/surgery1.webp").default}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}

export default Bodynav;
