import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from "react";
import logo from "./logo.png";
import aboutImage from "./about.png";


function About() {
  return (
    <div>
      {/* Navigation */}
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-3">
          <div className="container-fluid">
          <Link to="/home" className="navbar-brand" >
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
                <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link" >Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link" >Products</Link>
                </li>
                <li className="nav-item">
                  <Link to="/review" className="nav-link" >Reviews</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link"><b>Contact us</b></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* About */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-8 mt-5">
          <strong>
            <b>
              <h1>About us</h1>
            </b>
          </strong>

          <p>Welcome to Car Kharido!</p>
          <p>
            At Car Kharido, we are passionate about connecting car buyers and
            sellers in a seamless and efficient manner. Whether you're looking
            to sell your car or find the perfect vehicle to meet your needs,
            we're here to make the process enjoyable and hassle-free. Our
            mission is to provide a user-friendly platform that empowers
            individuals to buy and sell cars with confidence. We understand that
            buying or selling a car can be a significant decision, and our goal
            is to simplify the process, saving you time, money, and stress. What
            sets us apart is our commitment to transparency and trust. We strive
            to create a trustworthy and reliable marketplace where buyers and
            sellers can interact securely. We have implemented robust
            verification processes to ensure that all listings are accurate and
            genuine, giving you peace of mind when browsing our site. For
            sellers, we offer a simple and straightforward listing process. We
            are excited to be part of your automotive journey and look forward
            to helping you find the car of your dreams or successfully sell your
            vehicle with ease.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="col-md-4 ml-20 mr-5">
        <img src={aboutImage} alt="" className="img-fluid ml-20" />
      </div>
    </div>
  );
}

export default About;
