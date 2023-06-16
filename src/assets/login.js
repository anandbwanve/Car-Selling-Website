import React from 'react';
import logo from './logo.png';
import title from './title.png';

function EmailLogin() {
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

      {/* login */}
      <div className="container mt-5 shadow-lg shadow-glow">
        <div className="row" style={{ marginTop: '200px' }}>
          <div className="col-md-6 offset-md-3 p-5" >
            <div className="email-header">
              <img
                src={title}
                className="rounded"
                alt="login to car Dekho"
                width="50px"
                height="30px"
                style={{ marginRight: 'px' }}
              />
              Login to Car Kharido
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
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
                <div className="mt-3">
                  <a href="forgotpass.html">Forgot Password?</a>
                </div>
                <div className="mt-3">
                  <span>Don't have an account?</span>
                  <a href="register.html">Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailLogin;
