import React from "react";
import "./style.css";

function Footer() {
  return (
    <div>
      <div className="Footer">
        <div className="containersfooter">
          <h5>About Us</h5>
          <p>
            Established in the year 1994, Banaras Hospitals at banaras is the
            first organised corporate multidisciplinary super-speciality
            hospital of the region. The Hospital from ...
          </p>
        </div>
        <div className="footermid">
          <h5>Quick Links</h5>
          <ul className="footerQuick">
            <li> Departments</li>
            <li> Ambulance Services</li>
            <li> Banaras Foundation</li>
            <li> Medical Tourism</li>
            <li> Career</li>
            <li> Privacy Policy</li>
            <li> Contact Us</li>
            <li>Requirement Search</li>
            <li> Doctor's Login</li>
          </ul>
        </div>
        <div className="footercontact">
          <h3>Banaras Hospital</h3>
          <div className="footersamp">
            <h5>
              <i class="fas fa-search-location"></i>Banaras Hospitals Ltd.
              Lanka, Varanasi-221005 (U.P.)
              <br />
              INDIA
            </h5>
            <h4>
              {" "}
              <i class="fas fa-mobile"></i>7000000002
            </h4>
            <h4>
              <i class="fas fa-mobile"></i>9000000001
            </h4>
            <h4>
              <i class="fas fa-mobile"></i>5000000008
            </h4>
            <h4>
              <i class="fas fa-mobile"></i>7000008888
            </h4>

            <h4>
              <i class="far fa-envelope-open"></i>info@banarashospital.com
            </h4>
            <h4>
              <i class="far fa-envelope-open"></i>banarashospital@gmail.com
            </h4>
            <h4>
              <i class="far fa-envelope-open"></i>contact@banarashospital.com
            </h4>
          </div>
        </div>
      </div>
      <div className="copyfooter">
        &copy;{new Date().getFullYear()} Banaras Hospital -all Rights
      </div>
    </div>
  );
}

export default Footer;
