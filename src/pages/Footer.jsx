import "../cssFiles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerCont">
        <div> Mimi (Wei Lin) Li @ 2023 </div> <br></br>
        <div> Connect with Me: </div> <br></br>
        <div className="socialsCont">
          <a
            className="social"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/wei892"
          >
            Github
          </a>
          <a
            className="social"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mimi-li03/"
          >
            Linked In
          </a>
          <a className="social" href="mailto: wlin.li2403@gmail.com">
            Email
          </a>
          <a className="social" href="">
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
