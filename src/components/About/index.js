import React from "react";
import "./style.css";
import Footer from "../../containers/Footer";

function About() {
  return (
    <div className="About">
      <div className="Componentabout">
        <img
          src={require("../../assets/image/abouthome.jpg").default}
          alt="/"
        />
        <h3> About Us</h3>
      </div>
      <div className="aboutinfo">
        <p>
          Established in the year 1994, Banaras Hospitals at Banaras is the
          first organised corporate multidisciplinary super-speciality hospital
          of the region. The Hospital from its inception has had a strong focus
          on distinguished Medical Faculty, State of the Art Diagnostic services
          and an ingrained culture of ethical practise.
          <br />
          Though the building at Lanka remains much the same, the medical
          technology being used to provide services has been continously
          upgraded. We take pride in offering the services of the only NABL
          Accredited Lab in this part of the country ( i.e. Banaras Speciality
          Labs), the most updated Radiology department; at par with the best
          hospitals ( be it teaching or corporate ) in India.
          <br />
          The Cardiology department offers the services of a dedicated Coronary
          Care Unit , with a state of the art, low dose flat panel Cardiac Cath
          Lab. Our 128 Slice CT Scan offers the facility of non-invasive Cardiac
          Angiography, which makes us unique. We use 4D Echo Doppler system for
          the most accurate doppler studies.
          <br />
          We also serve a large number of patients from various central
          government and state government bodies as well such as CGHS, ECHS,
          CRPF, IB etc.
        </p>

        <img src={require("../../assets/image/othlogo.jpg").default} alt="/" />
      </div>
      <div className="containersbio">
        <p>
          The Hospital has an ultra modern OT Complex of 4 OT's which are
          equipped with State of the Art Anaesthesia workstations and other
          equipment required to conduct surgical procedures with patient safety
          as a paramount consideration. Taking into account all of this, the
          level of skill set of faculty for OPD & IPD services, the state of the
          art medical technology available to the patients, for correct
          diagnosis and the right treatment coupled with the strength of an
          experienced nursing and paramedical team, makes Banaras a preferred
          choice for all discerning patients. This also makes us a preferred
          hospital for a large number of corporate bodies such as Navaratna’s
          and Maharatna’s such as Indian Oil & NTPC among others as well as
          prestigious private organisations like Tata Motors, Larsen & Toubro
          Ltd ( L & T ), and banks such as Bank of Baroda, Central Bank of
          India, Corporation Bank, Punjab National Bank.
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
