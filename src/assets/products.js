import { BrowserRouter as Router, Link } from 'react-router-dom';
import React, { useState } from 'react';
import logo from './logo.png';
import alto800 from './alto800.jpg';
import baleno from './baleno.jpg';
import dzire from './dzire.jpg';
import ecco from './ecco.jpg';
import ertiga from './ertiga.jpg';
import grandVitara from './grand vitara.jpg';
import axios from 'axios';

function Products() {
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleBuyNow = (carName) => {
    // Process the purchase logic here
    console.log(`Car: ${carName}`);
    console.log(`Address: ${address}`);
    console.log(`Mobile Number: ${mobileNumber}`);

    alert("Success!");
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  return (
    <div>
      {/* Navigation */}
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-1">
          <div className="container-fluid">
            <Link to="/home" className="navbar-brand">
              <img
                src={logo}
                alt="Logo"
                className="img-fluid"
                style={{ maxHeight: '35px' }}
              />
            </Link>
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
                  <Link to="/home" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/review" className="nav-link">
                    Reviews
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    <b>Contact us</b>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* Products */}
      <section style={{ backgroundColor: 'rgb(155, 155, 155)' }}>
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
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Alto 800</h5>
                  <p className="card-text">Starting from $10,000</p>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    onClick={() => handleBuyNow('Alto 800')}
                    data-bs-toggle="modal"
                    data-bs-target="#buyNowModal"
                  >
                    Buy Now!
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
              {/* baleno */}
              <div className="card">
                <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={baleno} className="w-100" alt="" />
                  <a href="#!">
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Baleno</h5>
                  <p className="card-text">Starting from $15,000</p>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    onClick={() => handleBuyNow('Baleno')}
                    data-bs-toggle="modal"
                    data-bs-target="#buyNowModal"
                  >
                    Buy Now!
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
              {/* dzire */}
              <div className="card">
                <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={dzire} className="w-100" alt="" />
                  <a href="#!">
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Dzire</h5>
                  <p className="card-text">Starting from $12,000</p>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    onClick={() => handleBuyNow('Dzire')}
                    data-bs-toggle="modal"
                    data-bs-target="#buyNowModal"
                  >
                    Buy Now!
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
              {/* ecco */}
              <div className="card">
                <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={ecco} className="w-100" alt="" />
                  <a href="#!">
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Ecco</h5>
                  <p className="card-text">Starting from $20,000</p>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    onClick={() => handleBuyNow('Ecco')}
                    data-bs-toggle="modal"
                    data-bs-target="#buyNowModal"
                  >
                    Buy Now!
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
              {/* ertiga */}
              <div className="card">
                <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={ertiga} className="w-100" alt="" />
                  <a href="#!">
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Ertiga</h5>
                  <p className="card-text">Starting from $18,000</p>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    onClick={() => handleBuyNow('Ertiga')}
                    data-bs-toggle="modal"
                    data-bs-target="#buyNowModal"
                  >
                    Buy Now!
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
              {/* grandVitara */}
              <div className="card">
                <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={grandVitara} className="w-100" alt="" />
                  <a href="#!">
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Grand Vitara</h5>
                  <p className="card-text">Starting from $25,000</p>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    onClick={() => handleBuyNow('Grand Vitara')}
                    data-bs-toggle="modal"
                    data-bs-target="#buyNowModal"
                  >
                    Buy Now!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buy Now Modal */}
      <div className="modal fade" id="buyNowModal" tabIndex="-1" aria-labelledby="buyNowModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="buyNowModalLabel">
                Enter your details
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter your address"
                    value={address}
                    onChange={handleAddressChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobileNumber" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobileNumber"
                    placeholder="Enter your mobile number"
                    value={mobileNumber}
                    onChange={handleMobileNumberChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={() => handleBuyNow('Car')}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
