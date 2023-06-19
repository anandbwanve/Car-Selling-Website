import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import logo from "./logo.png";
import "./login.css";

function MyRegistration() {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  let handlerUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let handlerMobileAction = (e) => {
    let newuser = { ...user, mobile: e.target.value };
    setUser(newuser);
  };

  let registerAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // BACKEND
      let url = `http://localhost:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`;

      let res = await fetch(url);

      if (res.status !== 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }

      let newuser = {
        username: "",
        password: "",
        email: "",
        mobile: "",
      };
      setUser(newuser);

      formRef.current.classList.remove("was-validated");

      alert("Success");
      setIsSuccess(true);
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
  };

  return (
    <>
      {/* navigation */}
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-1">
          <div className="container-fluid">
            <Link to="/home" className="navbar-brand">
              <img
                src={logo}
                alt="Logo"
                className="img-fluid"
                style={{ maxHeight: "35px" }}
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
                  <Link
                    to="/home"
                    className="nav-link active"
                    aria-current="page"
                  >
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

      {/* registration */}

      <div
        className="row justify-content-center mt-10"
        style={{ marginTop: "100px" }}
      >
        <div className="col-sm-12 col-md-6 ">
          <div className="fs-2" style={{ textAlign: "center" }}>
            Registration Form
          </div>

          <form ref={formRef} className="needs-validation" noValidate>
            <input
              type="text"
              className="form-control form-control-lg mb-2 mt-1"
              placeholder="Enter username"
              value={user.username}
              onChange={handlerUsernameAction}
              required
            />
            <input
              type="password"
              className="form-control form-control-lg mb-2"
              placeholder="Enter password"
              value={user.password}
              onChange={handlerPasswordAction}
              minLength={6}
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$"
              title="Password must be at least 6 characters long and contain at least one letter and one number."
              required
            />
            <input
              type="email"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Email"
              value={user.email}
              onChange={handlerEmailAction}
              required
            />
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter mobile"
              value={user.mobile}
              onChange={handlerMobileAction}
              pattern="[0-9]{10}"
              title="Mobile number must be 10 digits."
              required
            />
            <input
              type="button"
              value="Register"
              className="w-100 btn btn-lg btn-secondary"
              onClick={registerAction}
            />
          </form>

          {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>}
        </div>
      </div>
    </>
  );
}

export default MyRegistration;
