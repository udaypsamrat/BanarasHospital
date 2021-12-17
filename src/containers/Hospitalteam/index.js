import React from "react";
import "./style.css";

function Hospitalteam() {
  return (
    <div className="hteam">
      <h5>TESTIMONIALS</h5>
      <h4>Our Patients Speak</h4>
      <div className="ht-wrapper">
        <div className="ht-left">
          <img
            className="picture"
            src={require("../../assets/image/hospitalteam.jpg").default}
            alt="/"
          />
        </div>
        <div className="ht-right">
          <h4>Dr. P.k Rama</h4>
          <samp>General Practitioner, Banaras</samp>
          <p>
            The Hospital has an ultra modern OT Complex of 4 OT's which are
            equipped with State of the Art Anaesthesia workstations and other
            equipment required to conduct surgical procedures with patient
            safety as a paramount consideration. Taking into account all of
            this, the level of skill set of faculty for OPD & IPD services, the
            state of the art medical technology available to the patients, for
            correct diagnosis and the right treatment coupled with the strength
            of an experienced nursing and paramedical team, makes Banaras a
            preferred choice for all discerning patients. This also makes us a
            preferred hospital for a large number of corporate bodies such as
            Navaratna’s and Maharatna’s such as Indian Oil & NTPC among others
            as well as prestigious private organisations like Tata Motors,
            Larsen & Toubro Ltd ( L & T ), and banks such as Bank of Baroda,
            Central Bank of India, Corporation Bank, Punjab National Bank. We
            also serve a large number of patients from various central
            government and state government bodies as well such as CGHS, ECHS,
            CRPF, IB etc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hospitalteam;
