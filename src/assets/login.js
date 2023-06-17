import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from './logo.png';
import title from './title.png';
import './login.css';
function EmailLogin() {
  const validateForm = (event) => {
    event.preventDefault(); // Prevents the form from submitting automatically

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password should be at least 6 characters long and contain at least one symbol and one number"
      );
      return;
    }

    // All validations passed
    alert("Form submitted successfully!");
  };

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
                  <div className="text-center mt-3">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
                <div className="mt-3">
                  <Link to="/forget" >Forgot Password?</Link>
                </div>
                <div className="mt-3">
                  <span>Don't have an account?</span>
                  <Link to="/registration">Register</Link>
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
