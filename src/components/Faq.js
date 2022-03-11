import "./Faq.css";

const Faq = () => {
  return (
    <div className="faq">
      <div className="container">
        <div className="col1">
          <h3>Frequently asked questions</h3>
          <p>Cant find the answer?</p>
          <p>Send email to our team.</p>
        </div>

        <div className="col2">
          <div className="questions">
            <h4>What skills do programmers need?</h4>
            <p>
              Mathematical, SkillsProblem-solving, Communication, Computer
              Skills
            </p>
          </div>
          <div className="questions">
            <h4>Which language is mostly used in Frontend?</h4>
            <p>
              JavaScript, CSS, React, and HTML are the widely recognized front
              end languages.
            </p>
          </div>
          <div className="questions">
            <h4>Which language is mostly used in Backend?</h4>
            <p>
              JavaScript, PHP, Python, Java and Ruby are the known backend
              programming languages that most backend developers are using
              nowadays.
            </p>
          </div>
          <div className="questions">
            <h4>What is the best way to learn coding </h4>
            <p>Practice, practice and practice.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
