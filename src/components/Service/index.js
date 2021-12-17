import React from "react";
import "./style.css";
import Footer from "../../containers/Footer";

function Service() {
  return (
    <div>
      <div className="doctors-top">
        <img
          src={require("../../assets/image/servicehome.jpg").default}
          alt="service pic"
        />
        <h1>Consultation</h1>
        <samp>
          We provide a broad range of in-patient and out-patient health care
          services to match the needs of the community.
        </samp>
        <div className="componentservice">
          <div className="left-componentservice">
            <h4>
              <i class="fi-rr-user"></i>Outpatient
            </h4>
            <p>
              Our out-patient services including emergency services, day
              procedures, diagnostic and assessment services,and therapy
              services. We also organize various community based programs to
              prevent or reduce the need for hospitalization.
            </p>
          </div>
          <div className="right-componentservice">
            <h4>
              <i class="fi-rr-user"></i>Inpatient
            </h4>
            <p>
              Our in-patient services include medical, surgical, Cardiac,
              Neurology, pediatric, obstetric and rehabilitation and other multi
              speciality services.
            </p>
          </div>
        </div>

        <h1>Emergency</h1>
        <p>
          Our 24-hour emergency and trauma care is equipped to meet all medical
          and surgical emergencies. In addition to a high-technology care plan,
          we offer encouragement, understanding, respect, and compassion. The
          Emergency helpline number (0542-2220111) is available 24 hours to
          cater to the medical needs of the population we serve.
        </p>

        <div className="containerambulance">
          <img
            src={require("../../assets/image/service24.jpg").default}
            alt="/"
          />

          <img
            src={require("../../assets/image/ambulance.jpg").default}
            alt="/"
          />
          <img
            src={require("../../assets/image/stethoscope.png").default}
            alt="/"
          />
        </div>
        <div className="containerspath">
          <div className="container-pathology">
            <h1>Pathology</h1>

            <img
              src={require("../../assets/image/pathology.jpg").default}
              alt="pathology img"
            />
            <p>
              Our Pathology is one of the largest private pathology laboratories
              in Varanasi, offering a wide range of tests, all closely monitored
              with excellent quality control. Our pathologists are specialized
              in specific areas of interest and bring greater expertise to
              patients’ cases. Our primary focus is standardization of
              equipment, methodology and rationalization of testing, yet
              maintaining the current commitment to service.
            </p>
          </div>
          <div className="container-radiology">
            <h1>Radiology</h1>

            <img
              className="containerradio"
              src={require("../../assets/image/Radiology.jpg").default}
              alt="radiology img"
            />
            <p>
              We have integrated the most advanced medical imaging technology to
              deliver significant medical advantages to you. Not only do we
              offer a wide array of standard imaging exams, we also specialize
              in advanced technologies. 24 Hours ECG services including machine
              report, done by trained staff and technicians.
            </p>
          </div>
        </div>
        <div className="physi">
          <h1>Physiotherapy</h1>
          <p>
            : A wide range of physiotherapy services are available to assist
            patients recover from wide range of musculoskeletal painful
            disorders. Available modalities are:
          </p>
          <div className="container-online">
            <div className="medical-equipments">
              <h2>Medical Equipments</h2>

              <img
                src={
                  require("../../assets/image/medical-equipments.jpg").default
                }
                alt="/"
              />
            </div>

            <div className="online-conference">
              <h2>Online Medical Conference-</h2>

              <img
                src={
                  require("../../assets/image/online-medical-conference-.jpg")
                    .default
                }
                alt="kit"
              />
            </div>
            <div className="pills-medical">
              <h2>Pills Medical</h2>

              <img
                src={require("../../assets/image/pills-medical.jpg").default}
                alt="/"
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      {/* <div className="vaccine">

                <h3 className="covid-text">covid test & vaccination center </h3>
                <div className="vaccination">
                    <img src="vaccination.jpg" alt=" vaccine img" />
                </div> 

                <div className="covid-test"><img src="covid-19.png" alt ="safety-jab" /></div>
            </div> */}
      <Footer />
    </div>
  );
}

export default Service;
