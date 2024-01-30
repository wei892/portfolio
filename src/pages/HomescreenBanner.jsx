// stylying for the homepage banner
import "../cssFiles/homesceen.css";

// importing packages
// import { Link } from "react-router-dom";

const HomepageBanner = () => {
  return (
    <>
      <div className="homepageBanner">
        <div className="bioCont">
          <h2>Hi! I{"'"}m Wei Lin Li</h2>
          <p>
            <b>Computer Science </b> student at <b>CUNY - Hunter College</b>{" "}
            with a minor in Mathematics
          </p>
          <div className="linkContainer">
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/mimi-li03/"
              >
                Linked In
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/wei892"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        {/* <div className="blank_spacing"></div> */}
        <div className="bioCont heartCont">
          <div className="heart"></div>
        </div>
        <div className="blank_spacing"></div>
      </div>
    </>
  );
};

export default HomepageBanner;
