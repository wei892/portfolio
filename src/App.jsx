import { useRoutes } from "react-router-dom";
import { Link } from "react-router-dom";

import "./cssFiles/app.css";
import "./cssFiles/NavBar.css";

// import components
import HomepageBanner from "./pages/HomescreenBanner";
import PassionProj from "./pages/passionProj";
import Exp from "./pages/Experiences";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import ResumePage from "./pages/Resume";

function App() {
  let navElement = useRoutes([
    { path: "/", element: <HomepageBanner /> },
    { path: "my_passion/*", element: <PassionProj /> },
    { path: "exp", element: <Exp /> },
    { path: "projects", element: <Projects /> },
    { path: "resume", element: <ResumePage /> },
  ]);

  return (
    <div className="pageCont">
      <div className="pageBody">
        <header>
          <div className="navBar navigation">
            <div className="leftCont">
              <h1> Wei Lin Li </h1>
            </div>

            <div className="rightCont">
              <div className="navButton">
                <Link to="/">
                  <h5> Home </h5>
                </Link>
              </div>

              <div className="navButton">
                <Link to="/my_passion">
                  <h5> My Hobbies </h5>
                </Link>
              </div>

              <div className="navButton">
                <Link to="/exp">
                  <h5> Experiences </h5>
                </Link>
              </div>

              <div className="navButton">
                <Link to="/projects">
                  <h5> Projects </h5>
                </Link>
              </div>

              <div className="navButton">
                <Link to="resume">
                  <h5> Resume </h5>
                </Link>
              </div>
            </div>
          </div>
        </header>
        {navElement}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
