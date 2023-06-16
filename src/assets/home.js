import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from './slide1.jpg';
import slide2 from './slide2.jpg';
import slide3 from './slide3.jpg';
import logo from './logo.png';
import background from "./bg.jpg";
import './home.css';

function CarKharido() {
  return (
    <div>
      
      {/* navigation */}
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-1" style={{ backgroundImage: `url(${background})` }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
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
                  <a className="nav-link active" aria-current="page" href="1.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="login.html">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Products.html">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="review.html">Reviews</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html"><b>Contact us</b></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* carousel */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={slide1} className="d-block w-100" alt="slide1" />
            <div className="carousel-caption d-none d-md-block">
              <h5></h5>
              <h3 className="text-white">Luxury Sedan</h3>
              <p className="text-white pb-5">
                Experience the ultimate luxury and comfort with our stunning
                luxury sedans. Perfect for those who seek elegance and refinement.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={slide2} className="d-block w-100" alt="slide2" />
            <div className="carousel-caption d-none d-md-block">
              <h3 className="text-white">Compact SUV</h3>
              <p className="text-white pb-5">
                Discover the power and versatility of our compact SUVs. Designed
                for adventure, these vehicles offer exceptional performance and
                ample cargo space.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="slide3" />
            <div className="carousel-caption d-none d-md-block">
              <h3 className="text-white">Electric Car</h3>
              <p className="text-white pb-5">
                Go green with our electric cars. Experience emission-free driving
                and cutting-edge technology that takes you into the future of
                automotive.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* button */}
      <div className="text-center p-3">
        <a href="specials.html">
          <button type="button" className="btn btn-dark">Our Specials</button>
        </a>
      </div>

      {/* alert */}
      <div>
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <b>Exciting News!</b> We're currently having a sale. Don't miss out on
          our amazing offers!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>

      {/* footer */}
      <div className="my-5">
        <section>
          <footer
            className="text-center text-white"
            style={{ backgroundColor: 'rgb(64, 64, 64)' }}
          >
            <div className="container p-4 pb-0">
              <section>
                <p className="d-flex justify-content-center align-items-center">
                  <span className="me-3">To know more About Us</span>
                  <a href="about.html">
                    <button type="button" className="btn btn-outline-light btn-rounded">
                      Click here
                    </button>
                  </a>
                </p>
              </section>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'grey' }}>
              © 2023 CarKharido.in
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default CarKharido;
