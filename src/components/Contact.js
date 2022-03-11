import "./Contact.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="col1">
          <div className="content">
            <div>
              <h2>Get in touch</h2>
              <p>
                Let's talk! We are open to discuss everything about programing.
              </p>
            </div>
            <div className="address">
              <p> Glasgow, Scotland </p>
            </div>
            <div className="icons">
              <FaPhone />
              <p>07123456789</p>
            </div>
            <div className="icons">
              <FaEnvelope />
              <p> mail@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col2">
          <form action="">
            <h3>Let us know for any questions</h3>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="phone" placeholder="Phone" />
            <textarea
              name="Message"
              placeholder="Message"
              cols="40"
              rows="10"
            />
            <button className="btnSend">Send </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
