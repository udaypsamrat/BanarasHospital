import { useRef, useState } from "react";
import "./style.css";
import { FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import Footer from "../../containers/Footer";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xtgljra",
        "template_84qgng4",
        formRef.current,
        "user_MpN8yqwhPeSXWt5ckop4D"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Contact here...</h1>
          <div className="c-info">
            <div className="c-info-item">
              <FaMobile />
              +91 0000000000
            </div>
            <div className="c-info-item">
              <MdEmail />
              info@banarashospital.com
            </div>
            <div className="c-info-item">
              <MdEmail />
              banarashospital@gmail.com
            </div>
            <div className="c-info-item">
              <MdEmail />
              contact@banarashospital.com
            </div>
            <div className="c-info-item">
              <FaMobile />
              +91 0000000000
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            Banaras Hospitals is always looking to make things easier for you.
            Our aim is to provide our customers with the best medical
            facilities, constant care, and reliable support. If you would like
            to get in touch with a doctor from a specific department, would like
            some specific information about the services we provide, or just
            have a question for us, please fill up the Form given below and we
            will get back to you.
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="full_name" />
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Phone" name="phone" />
            <textarea rows="7" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
