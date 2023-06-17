//import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React from 'react';
import About from './assets/about';
import Contact from './assets/contact';
import ForgetPassword from './assets/forget';
import CarKharido from './assets/home';
import EmailLogin from './assets/login';
import Products from './assets/products';
import Review from './assets/review';
import Specials from './assets/specials';
import EmailRegistration from './assets/registration';
function App() {
  return(
    <>
       <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<CarKharido/>} />
          <Route path="/home" element={<CarKharido/>} />
          <Route path="/login" element={<EmailLogin />} />
          <Route path="/products" element={<Products />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/registration" element={<EmailRegistration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
