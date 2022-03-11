import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="colLeft">
          <ul>
            <li>
              <Link to="/" className="link">
                Sign in
              </Link>
            </li>
            <li>
              <Link to="/lessons" className="link">
                Enroll
              </Link>
            </li>

            <li>
              <Link to="/faq" className="link">
                Questions
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="colRight">
          <ul>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Privacy"
                target="_blank"
                className="link"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/HTTP_cookie"
                target="_blank"
                className="link"
              >
                Cookies
              </a>
            </li>

            <li>
              <a
                href="https://en.wikipedia.org/wiki/Terms_of_service"
                target="_blank"
                className="link"
              >
                Terms
              </a>
            </li>
            <li>
              <Link to="/" className="link"></Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy">
        <p> &copy; 2022 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
