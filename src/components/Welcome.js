import "./Welcome.css";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaPython,
  FaPhp,
  FaReact,
  FaNode,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
const Welcome = () => {
  return (
    <div className="welcome">
      <div className="container">
        <div className="content">
          <div className="col1">
            <h1>
              Improve Your <span className="coding">Coding Skills</span>
            </h1>

            <p>
              The websites are games, and part of the game for developers is to
              see how short they can get their solutions..
            </p>

            <div className="lang">
              <p>Languages</p>

              <div className="icons">
                <i>
                  <FaHtml5 />
                </i>
                <i>
                  <FaCss3 />
                </i>
                <i>
                  <FaJs />
                </i>
                <i>
                  <FaJava />
                </i>
                <i>
                  <FaPython />
                </i>
                <i>
                  <FaPhp />
                </i>
                <i>
                  <FaReact />
                </i>
                <i>
                  <FaNode />
                </i>
              </div>
            </div>
          </div>
          <div className="col2">
            <div className="formLayout">
              <div className="formContainer">
                <p className="signIn"> Sign in with </p>
                <div className="social">
                  <i>
                    <FaFacebook />
                  </i>

                  <i>
                    <FaTwitter />
                  </i>
                  <i>
                    <FaGithub />
                  </i>
                </div>
                <div className="or">
                  <p>
                    <span>OR</span>
                  </p>
                </div>

                <form action="">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button className="btnCreate">Create your account</button>
                </form>
              </div>
              <div className="formFooter">
                <p> By signing up, you agree to our terms. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
