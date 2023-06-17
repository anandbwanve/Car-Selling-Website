import React from "react";
import logo from "./logo.png";
import alto800 from "./alto800.jpg";
import baleno from './baleno.jpg';
import dzire from './dzire.jpg';
import ecco from './ecco.jpg';
import ertiga from './ertiga.jpg';
import grandVitara from "./grand vitara.jpg";

function Products() {
  return (
    <div>
      {/* navigation */}
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-1">
          <div className="container-fluid">
            <a className="navbar-brand" href="1.html">
              <img src={logo} alt="Logo" className="img-fluid" style={{ maxHeight: "35px" }} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="1.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="login.html">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Products.html">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="review.html">
                    Reviews
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    <b>Contact us</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* Products */}
      <section style={{ backgroundColor: "rgb(155, 155, 155)" }}>
        <div className="text-center container py-5">
          <h4 className="mt-5 mb-5">
            <strong>Our Car Collection</strong>
          </h4>

          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              {/* alto */}
              <div className="card">
                <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={alto800} className="w-100" alt="" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-primary ms-2">New</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">Alto 800</h5>
                  </a>
                  <a href="" className="text-reset">
                    <p>Compact</p>
                  </a>
                  <h6 className="mb-3">Rs. 2.15 Lakh</h6>
                </div>
              </div>
            </div>

             {/* baleno */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image" data-mdb-ripple-color="light">
            <img src={baleno} className="w-100" alt="" />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span className="badge bg-success ms-2">Eco</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">Baleno</h5>
            </a>
            <a href="" className="text-reset">
              <p>Compact SUV</p>
            </a>
            <h6 className="mb-3">Rs. 4.5 Lakh</h6>
          </div>
        </div>
      </div>

      {/* dzire */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image" data-mdb-ripple-color="light">
            <img src={dzire} className="w-100" alt="" />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span className="badge bg-danger ms-2">-10%</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">Swift Dzire</h5>
            </a>
            <a href="" className="text-reset">
              <p>Sedan</p>
            </a>
            <h6 className="mb-3">
              <s>Rs. 6 Lakh</s>
              <strong className="ms-2 text-danger">Rs. 5.4 Lakh</strong>
            </h6>
          </div>
        </div>
      </div>

      {/* ecco */}
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card">
          <div className="bg-image" data-mdb-ripple-color="light">
            <img src={ecco} className="w-100" alt="" />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span className="badge bg-success ms-2">Eco</span>
                    <span className="badge bg-danger ms-2">-10%</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">Ecco</h5>
            </a>
            <a href="" className="text-reset">
              <p>Traveller</p>
            </a>
            <h6 className="mb-3">
              <s>Rs. 4 Lakh</s>
              <strong className="ms-2 text-danger">Rs. 3.62 Lakh</strong>
            </h6>
          </div>
        </div>
      </div>

      {/* ertiga */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image" data-mdb-ripple-color="light">
            <img src={ertiga} className="w-100" alt="" />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span className="badge bg-primary ms-2">New</span>
                    <span className="badge bg-success ms-2">Eco</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">Ertiga</h5>
            </a>
            <a href="" className="text-reset">
              <p>MUV</p>
            </a>
            <h6 className="mb-3">Rs. 8.57 Lakh</h6>
          </div>
        </div>
      </div>

            {/* vitara */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="bg-image " data-mdb-ripple-color="light">
                  <img src={grandVitara} className="w-100" alt="" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-primary ms-2">New</span>
                          <span className="badge bg-success ms-2">Eco</span>
                          <span className="badge bg-danger ms-2">-10%</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">Grand Vitara</h5>
                  </a>
                  <a href="" className="text-reset">
                    <p>Hybrid</p>
                  </a>
                  <h6 className="mb-3">
                    <s>Rs. 13.5 Lakh</s>
                    <strong className="ms-2 text-danger">Rs. 12.15 Lakh</strong>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="my-5">
        <section>
          <footer className="text-center text-white" style={{ backgroundColor: "rgb(64, 64, 64)" }}>
            <div className="container p-4 pb-0">
              <section>
                <p className="d-flex justify-content-center align-items-center">
                  <span className="me-3">Register now</span>
                  <a href="register.html">
                    <button type="button" className="btn btn-outline-light btn-rounded">
                      Register
                    </button>
                  </a>
                </p>
              </section>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: "grey" }}>
              ©️ 2023 CarKharido.in
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default Products;
