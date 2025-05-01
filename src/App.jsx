import { FaHtml5, FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate } from "react-router-dom";
import { Atom } from "react-loading-indicators";
import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";

const App = () => {
  const nav = useNavigate();
  const [showLoader, setShowLoader] = useState(true);
  const project = () => {
    nav("/Project");
  };
  const handleScroll = () => {
    AOS.init({
      duration: 800,
      once: false,
    });
    AOS.refresh();
  };
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000); // 2 seconds

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // return () => clearTimeout(timer);
    };
  }, []);
  const html = 85;
  const js = 75;
  const bootstrap = 80;
  const react = 70;
  if (showLoader) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100 min-vw-100">
        <Atom color="#ffffff" size="large" text="Welcome " textColor="" />
      </div>
    );
  }
  return (
    <>
      <div className="container mt-3">
        <marquee behavior="" direction="">
          <p
            className="text-light d-flex justify-content-around align-items-center "
            style={{ gap: "30px" }}
          >
            <GrReactjs
              style={{ width: "100px", height: "100px" }}
              className="reactIcon"
            />
            <FaHtml5
              style={{ width: "100px", height: "90px" }}
              className="html"
            />
            <FaCss3
              style={{ width: "100px", height: "100px" }}
              className="css"
            />
            <TbBrandJavascript
              className="html"
              style={{ width: "100px", height: "100px" }}
            />
            <FaBootstrap
              style={{ width: "100px", height: "100px" }}
              className="css"
            />
          </p>
        </marquee>
      </div>

      <div className="container shadow-lg p-2 bg-dark mt-1">
        <div className="row d-flex align-items-center">
          <div className="col-8" style={{ color: "whitesmoke" }}>
            <div className="h5">Hi, I'm Nandu</div>
            <p className="p semi-bold" style={{ fontSize: "13px" }}>
              I'm a Front-end web developer who enjoys creating clean,
              responsive, and user-friendly websites. <br /> I Love learning and
              building projects that make an Impact.
            </p>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <img
              src="Nandu.jpg"
              alt=""
              style={{ width: "100px", height: "100%" }}
              className="img img-fluid  rounded rounded-circle"
            />
          </div>
        </div>
      </div>

      <div className="container mt-3 d-flex justify-content-center align-items-center">
        <button className="btn px-5 btn-lg btn-primary mt-4 " onClick={project}>
          View Projects
        </button>
      </div>

      <div className="container text-light mt-4">
        <div className="row d-flex g-2">
          <h1 className="h1 col-12 fw-bold">Skills</h1>
          <div className="col-6 col-md-3 " data-aos="fade-left">
            <div className="card bg-dark  border border-2 border-light  text-light">
              <div className="card-body  d-flex justify-content-center ">
                <FaHtml5
                  style={{ width: "65px", height: "90px" }}
                  className="css"
                />
              </div>
              <p className="text-light text-center fw-semibold">HTML 5</p>
              <ProgressBar
                animated
                now={85}
                className="mb-3"
                label={`${html}%`}
              />
            </div>
          </div>
          <div className="col-6 col-md-2" data-aos="fade-right">
            <div className="card bg-dark  border border-2 border-light px-1  text-light">
              <div className="card-body  d-flex justify-content-center ">
                <FaCss3
                  style={{ width: "65px", height: "90px" }}
                  className="css"
                />
              </div>
              <p className="text-light text-center fw-semibold">CSS 3</p>
              <ProgressBar
                animated
                now={85}
                className="mb-3"
                label={`${html}%`}
              />
            </div>
          </div>
          <div className="col-6 col-md-2" data-aos="fade-right">
            <div className="card border border-2 border-light px-1 bg-dark text-light">
              <div className="card-body  d-flex justify-content-center ">
                <TbBrandJavascript
                  className="css"
                  style={{ width: "65px", height: "90px" }}
                />
              </div>
              <p className="text-light text-center fw-semibold">JavaScript </p>
              <ProgressBar
                animated
                now={75}
                label={`${js}%`}
                className="mb-3"
              />
            </div>
          </div>
          <div className="col-6 col-md-2" data-aos="fade-left">
            <div className="card border  border-2 border-light px-1 bg-dark text-light">
              <div className="card-body  d-flex justify-content-center ">
                <FaBootstrap
                  style={{ width: "65px", height: "90px" }}
                  className="css"
                />
              </div>
              <p
                className="text-light text-center fw-semibold"
                style={{ fontSize: "14px" }}
              >
                Bootstrap 5{" "}
              </p>
              <ProgressBar
                animated
                now={80}
                label={`${bootstrap}%`}
                className="mb-3"
              />
            </div>
          </div>
          <div className="col-12 col-md-3" data-aos="zoom-out">
            <div className="card border border-2 border-light px-1 bg-dark text-light">
              <div className="card-body  d-flex justify-content-center ">
                <FaReact
                  style={{ width: "65px", height: "90px" }}
                  className="reactIcon"
                />
              </div>
              <p className="text-light text-center fw-semibold">React JS </p>
              <ProgressBar
                animated
                now={70}
                label={`${react}%`}
                className="mb-3"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 shadow-lg" data-aos="zoom-in">
        <div className="h1 text-light fw-bold">About Me</div>
        <p className="p text-light ">
          Hi, I'm Nanda Kumar, a passionate Front-End Web Developer with a
          strong foundation in HTML5, CSS3, Bootstrap 5, JavaScript, and React
          JS. I enjoy building clean, responsive websites that provide smooth
          user experiences across all devices. I’m always eager to learn new
          technologies and improve my skills, and I take pride in turning ideas
          into functional, real-world web applications.
        </p>
      </div>
      <div className="container-fluid mt-2 bg-dark p-3">
        <div className="row g-3">
          <div className="col-12 text-light text-center">Contact With Me</div>
          <div className="col-6 d-flex align-items-start flex-column ">
            <p className="text-light" style={{ fontSize: "11px" }}>
              <PiPhoneCallFill fontSize={"15px"} />: 7603944133
            </p>
            <p className="text-light" style={{ fontSize: "9px" }}>
              <label htmlFor="" typeof="email">
                <SiMinutemailer fontSize={"15px"} /> : kan633574@gmail.com
              </label>
            </p>
          </div>
          <div className="col-6 d-flex justify-content-around align-items-center">
            <a
              href="https://www.instagram.com/crazy_nandhu_/?hl=en"
              className="text-decoration-none text-light"
            >
              <FaInstagram fontSize={"30px"} />
            </a>
            <a
              href="https://github.com/Nandhu-2326/"
              className="text-decoration-none text-light"
            >
              <FaGithub fontSize={"30px"} />
            </a>
            <a
              href="https://wa.me./7603944133"
              className="text-decoration-none text-light"
            >
              <FaWhatsapp fontSize={"30px"} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
