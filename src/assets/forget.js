import React from 'react';
import logo from './logo.png';
import title from './title.png';
import './login.css';

function ForgetPassword() {
  const validateForm = () => {
    // Add your form validation logic here
    return true;
  };

  return (
    <div>
      {/* navigation */}
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

      {/* forget password */}
      <div className="container mt-5 shadow-lg shadow-glow">
        <div className="row" style={{ marginTop: '200px' }}>
          <div className="col-md-6 offset-md-3 p-5">
            <div className="email-header">
              <img
                src={title}
                className="rounded"
                alt="forgot password"
                width="50px"
                height="30px"
                style={{ marginRight: 'px' }}
              />
              Forgot Password
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <form onSubmit={validateForm}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="mobile"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  <div className="text-center mt-3">
                    <button type="submit" className="btn btn-primary">
                      Reset Password
                    </button>
                  </div>
                </form>
                <div className="mt-3">
                  <span>Remember your password?</span>
                  <a href="login.html">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;