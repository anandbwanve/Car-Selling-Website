import React from 'react';
import alto800 from './products/alto800.jpg';
import baleno from './products/baleno.jpg';
import dzire from './products/dzire.jpg';
import ecco from './products/ecco.jpg';
import ertiga from './products/ertiga.jpg';
import vitara from './products/grand vitara.jpg';

import logo from './logo.png';

const CarKharido = () => {
  return (
    <>
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-1">
          <div className="container-fluid">
            <a className="navbar-brand" href="1.html">
              <img
                src={logo}
                alt="Logo"
                className="img-fluid"
                style={{ maxHeight: '35px' }}
              />
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

      <section style={{ backgroundColor: 'rgb(155, 155, 155)' }}>
        <div className="text-center container py-5">
          <h4 className="mt-5 mb-5">
            <strong>Our Car Collection</strong>
          </h4>

          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={alto800} className="w-100" />
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
                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
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

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
              <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={dzire} className="w-100" />
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
                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">Swift</h5>
                  </a>
                  <a href="" className="text-reset">
                    <p>Hatchback</p>
                  </a>
                  <h6 className="mb-3">Rs. 5.19 Lakh</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={vitara} className="w-100" />
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
                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">Brezza</h5>
                  </a>
                  <a href="" className="text-reset">
                    <p>SUV</p>
                  </a>
                  <h6 className="mb-3">Rs. 7.51 Lakh</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="footer" className="bg-light text-center">
        <div className="container py-5">
          <h5 className="mb-3">Contact Us</h5>
          <p>Email: cardekho@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </section>
    </>
  );
};

export default CarKharido;

