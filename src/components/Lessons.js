import "./Lessons.css";

const Lessons = () => {
  return (
    <div className="lessons">
      <div className="container">
        <div className="topContent">
          <div>
            <h2> Everything you need about coding. </h2>
            <p>Enroll for the latest news. </p>
          </div>

          <button className="btnEnroll"> Enroll Today </button>
        </div>

        <div className="bottomContent">
          <div className="card">
            <div>
              <p>HTML is the standard markup language for Web pages.</p>
            </div>
            <div>
              <p>CSS is the language we use to style an HTML document.</p>
            </div>
            <div>
              <p>JavaScript is used to develop interactive web applications.</p>
            </div>
          </div>
          <div className="card">
            <div>
              <p>
                Node. js is primarily used for non-blocking, event-driven
                servers, due to its single-threaded nature.
              </p>
            </div>
            <div>
              <p>
                C++ is a general purpose coding language which has been used for
                game programming, software engineering, data structures and
                more.
              </p>
            </div>
            <div>
              <p>
                Java can be used to build applications for a wide range of
                platforms. Desktops, servers, mobile phones, tablets.
              </p>
            </div>
          </div>
          <div className="card">
            <div>
              <p>
                Php is used to manage dynamic content, databases, session
                tracking, even build entire e-commerce sites.
              </p>
            </div>
            <div>
              <p>
                React. js is an open-source JavaScript library that is used for
                building user interfaces specifically for single-page
                applications.
              </p>
            </div>
            <div>
              <p>
                Python is a computer programming language often used to build
                websites and software, automate tasks, and conduct data
                analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
