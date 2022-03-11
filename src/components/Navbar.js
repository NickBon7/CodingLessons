import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assest/logo.png";
const Navbar = () => {
  const [clickSide, setClickSide] = useState(false);
  const clickHandler = () => setClickSide(!clickSide);

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <ul className={clickSide ? "navMenu active" : "navMenu"}>
            <li className="navItem">
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to="/lessons" className="navLink">
                Lessons
              </Link>
            </li>
            <li className="navItem">
              <Link to="/faq" className="navLink">
                FAQ
              </Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink">
                Contact
              </Link>
            </li>
          </ul>
          <div className="side" onClick={clickHandler}>
            {clickSide ? (
              <FaTimes className="bars" />
            ) : (
              <FaBars className="bars" />
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
