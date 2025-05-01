import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="container d-flex flex-column align-items-center  justify-content-center mt-3">
        <button
          className="btn btn-primary"
          onClick={() => {
            nav("/");
          }}
        >
          View Profile
        </button>
        <h1 className="h1 text-light mt-5">Projects </h1>
      </div>

      <div className="container mt-5">
        <div className="row row-cols-2 row-cols-sm-3 g-1 ">
          <div className="col">
            <div
              className="d-flex justify-content-center p-2 rounded align-items-start flex-column profile text-light "
              style={{ gap: "2px" }}
            >
              <img
                src="currency.png"
                alt=""
                className="img img-fluid rounded mt-1"
              />
              <div className=" h4 fw-bold mt-2" style={{ fontSize: "10px" }}>
                Currency Converter
              </div>
              <p className="P" style={{ fontSize: "12px" }}>
                A JavaScript based Currency Conversion Tool.
              </p>
              <div className="d-flex justify-content-between  w-100">
                <a
                  href="https://nandhu-2326.github.io/Currency-Convertor/"
                  className="text-decoration-none text-light "
                  style={{ fontSize: "11px" }}
                >
                  <button className="btn btn-primary btn-sm px-sm-3">
                    Live
                  </button>
                </a>
                <a
                  href="https://github.com/Nandhu-2326/Currency-Convertor/blob/main/index.js"
                  className="text-decoration-none text-light"
                  style={{ fontSize: "11px" }}
                >
                  <button className="btn btn-primary btn-sm px-sm-3">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="d-flex justify-content-center p-2 rounded align-items-start flex-column profile text-light "
              style={{ gap: "1px" }}
            >
              <img
                src="weatherApp.png"
                alt=""
                className="img img-fluid rounded mt-1"
              />
              <div className=" h4 fw-bold mt-2" style={{ fontSize: "10px" }}>
                Weather App
              </div>
              <p className="P" style={{ fontSize: "12px" }}>
                A JavaScript based Using API Weather App.
              </p>
              <div className="d-flex justify-content-between mt-1 w-100">
                <a
                  href="https://nandhu-2326.github.io/Weather-App/"
                  className="text-decoration-none text-light "
                  style={{ fontSize: "11px" }}
                >
                  <button className="btn btn-primary btn-sm px-sm-3">
                    Live
                  </button>
                </a>
                <a
                  href="https://github.com/Nandhu-2326/Weather-App"
                  className="text-decoration-none text-light"
                  style={{ fontSize: "11px" }}
                >
                  <button className="btn btn-primary btn-sm px-sm-3">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col" >
            <div
              className="d-flex justify-content-center p-2 rounded align-items-start flex-column profile text-light "
              style={{ gap: "1px" }}
            >
              <img
                src="countryG.png"
                alt=""
                className="img img-fluid rounded mt-1"
              />
              <div className=" h4 fw-bold mt-2" style={{ fontSize: "10px" }}>
                Country Guide
              </div>
              <p className="P" style={{ fontSize: "12px" }}>
                A JavaScript based Using API Country Guide.
              </p>
              <div className="d-flex justify-content-between mt-1 w-100">
                <a
                  href="https://nandhu-2326.github.io/Country-Guide/"
                  className="text-decoration-none text-light "
                  style={{ fontSize: "11px" }}
                >
                  <button className="btn btn-primary btn-sm px-sm-3">
                    Live
                  </button>
                </a>
                <a
                  href="https://github.com/Nandhu-2326/Country-Guide"
                  className="text-decoration-none text-light"
                  style={{ fontSize: "11px" }}
                >
                  <button className="btn btn-primary btn-sm px-sm-3">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="d-flex justify-content-center p-2 rounded align-items-start flex-column profile text-light "
              style={{ gap: "1px" }}
            >
              <img
                src="hospital.png"
                alt=""
                className="img img-fluid rounded mt-1"
              />
              <div
                className=" h4 fw-bold mt-2 mt-md-0"
                style={{ fontSize: "10px" }}
              >
                Hospital
              </div>
              <p className="P mt-md-3" style={{ fontSize: "12px" }}>
                A JavaScript based created Hospital Application.
              </p>
              <div className="d-flex justify-content-between mt-2 mt-md-0 w-100">
                <a
                  href="https://nandhu-2326.github.io/Hospital/"
                  className="text-decoration-none text-light "
                  style={{ fontSize: "11px" }}
                >
                  <button className="btn btn-primary btn-sm px-sm-3">
                    Live
                  </button>
                </a>
                <a
                  href="https://github.com/Nandhu-2326/Hospital"
                  className="text-decoration-none text-light"
                  style={{ fontSize: "11px" }}
                >
                  <button className="btn btn-primary btn-sm px-sm-3">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col" >
            <div
              className="d-flex mt-2 justify-content-center p-2 rounded align-items-start flex-column profile text-light "
              style={{ gap: "1px" }}
            >
              <img
                src="cal.png"
                alt=""
                className="img img-fluid rounded mt-1"
                style={{ objectFit: "cover" }}
              />
              <div
                className=" h4 mt-4 fw-bold mt-2"
                style={{ fontSize: "10px" }}
              >
                Calculator
              </div>
              <p className="P mt-3" style={{ fontSize: "12px" }}>
                A JavaScript based created Calculator.
              </p>
              <div className="d-flex justify-content-between mt-2 w-100">
                <a
                  href="https://nandhu-2326.github.io/Calculator/"
                  className="text-decoration-none text-light "
                  style={{ fontSize: "11px" }}
                >
                  <button className="btn btn-primary btn-sm px-sm-3">
                    Live
                  </button>
                </a>
                <a
                  href="https://github.com/Nandhu-2326/Calculator"
                  className="text-decoration-none text-light"
                  style={{ fontSize: "11px" }}
                >
                  <button className="btn btn-primary btn-sm px-sm-3">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col" >
            <div
              className="d-flex mt-2 justify-content-center p-2 rounded align-items-start flex-column profile text-light "
              style={{ gap: "1px" }}
            >
              <img
                src="joke.png"
                alt=""
                className="img img-fluid rounded mt-1"
              />
              <div className=" h4 fw-bold mt-3" style={{ fontSize: "10px" }}>
                Joke App
              </div>
              <p className="P mt-4" style={{ fontSize: "12px" }}>
                A JavaScript based on Using Joke API .
              </p>
              <div className="d-flex justify-content-between mt-2 w-100">
                <a
                  href="https://nandhu-2326.github.io/Joke"
                  className="text-decoration-none text-light "
                  style={{ fontSize: "11px" }}
                >
                  <button className="btn btn-primary btn-sm px-sm-3">
                    Live
                  </button>
                </a>
                <a
                  href="https://github.com/Nandhu-2326/Joke"
                  className="text-decoration-none text-light"
                  style={{ fontSize: "11px" }}
                >
                  <button className="btn btn-primary btn-sm px-sm-3">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col" >
            <div
              className="d-flex justify-content-center p-2 rounded align-items-start flex-column profile text-light "
              style={{ gap: "1px" }}
            >
              <img
                src="clock.png"
                alt=""
                className="img img-fluid rounded mt-1"
              />
              <div className=" h4 fw-bold mt-2" style={{ fontSize: "10px" }}>
                Digital Clock
              </div>
              <p className="P" style={{ fontSize: "12px" }}>
                A JavaScript based created by Digital Clock.
              </p>
              <div className="d-flex justify-content-between mt-1 w-100">
                <a
                  href="https://nandhu-2326.github.io/DigitalClock/"
                  className="text-decoration-none text-light "
                  style={{ fontSize: "11px" }}
                >
                  <button className="btn btn-primary btn-sm px-sm-3">
                    Live
                  </button>
                </a>
                <a
                  href="https://github.com/Nandhu-2326/DigitalClock"
                  className="text-decoration-none text-light"
                  style={{ fontSize: "11px" }}
                >
                  <button className="btn btn-primary btn-sm px-sm-3">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col" >
            <div
              className="d-flex justify-content-center p-2 rounded align-items-start flex-column profile text-light "
              style={{ gap: "1px" }}
            >
              <img
                src="coffee.png"
                alt=""
                className="img img-fluid rounded mt-1"
              />
              <div className=" h4 fw-bold mt-4" style={{ fontSize: "10px" }}>
                Coffee Shop
              </div>
              <p className="P mt-2" style={{ fontSize: "12px" }}>
                A Bootstrap 5 based created by Coffee Shop.
              </p>
              <div className="d-flex justify-content-between mt-1 w-100">
                <a
                  href="https://nandhu-2326.github.io/coffee/"
                  className="text-decoration-none text-light "
                  style={{ fontSize: "11px" }}
                >
                  <button className="btn btn-primary btn-sm px-sm-3">
                    Live
                  </button>
                </a>
                <a
                  href="https://github.com/Nandhu-2326/coffee"
                  className="text-decoration-none text-light"
                  style={{ fontSize: "11px" }}
                >
                  <button className="btn btn-primary btn-sm px-sm-3">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
