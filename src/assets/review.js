import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from './logo.png';
import img1 from './img1.jpg';
import img2 from './img2.webp';
import img3 from './img3.webp';
import img4 from './img4.jpeg';
import img5 from './img5.jpg';
import img6 from './img6.jpeg';
import './review.css';

function Review() {
  return (
    <div>
      {/* navigation */}
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-1">
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

      {/* review section starts */}
      <section>
        <div className="review container">
          <div className="content">
            <h3>
              <strong>What Customers Say</strong>
            </h3>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <div className="box">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non neque alias est? Magni perferendis
                  nemo tempore at, itaque eligendi. Iure!
                </p>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <h6>Mary</h6>
                <img src={img1} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non neque alias est? Magni perferendis
                  nemo tempore at, itaque eligendi. Iure!
                </p>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <h6>Patricia</h6>
                <img src={img2} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non neque alias est? Magni perferendis
                  nemo tempore at, itaque eligendi. Iure!
                </p>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <h6>James</h6>
                <img src={img3} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non neque alias est? Magni perferendis
                  nemo tempore at, itaque eligendi. Iure!
                </p>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <h6>John</h6>
                <img src={img4} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non neque alias est? Magni perferendis
                  nemo tempore at, itaque eligendi. Iure!
                </p>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <h6>Linda</h6>
                <img src={img5} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non neque alias est? Magni perferendis
                  nemo tempore at, itaque eligendi. Iure!
                </p>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <h6>Barbara</h6>
                <img src={img6} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Review;
