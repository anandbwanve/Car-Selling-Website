import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from './logo.png';


function EnquireNow() {
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Process the form data (e.g., send it to a backend server)
    // ...

    // Reset form fields after submission
    setContactNumber('');
    setEmail('');
    setAddress('');
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
      {/* Enquire Now Form */}
      <section
        style={{
         // backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container py-5">
          <h4 className="mt-5 mb-5">
            <strong>Enquire Now</strong>
          </h4>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="contactNumber" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactNumber"
                    value={contactNumber}
                    onChange={handleContactNumberChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    id="address"
                    value={address}
                    onChange={handleAddressChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="my-5">
        <section>
          {/* Footer code */}
          {/* ... */}
        </section>
      </div>
    </div>
  );
}

export default EnquireNow;
