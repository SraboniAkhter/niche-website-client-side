import React from 'react';
import './Footer.css';
import { faFacebookF, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>ABOUT OUR COMPANY</h6>
            <p className="text-justify">We are offering you the unique goods because our product is the real treasure. If you are a true fan, you’ll love it. We have a tremendous variety in comparison to all of our competitors. Our collection is like a sea pearl among simple stones.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><Link to="/">Cat eye</Link></li>
              <li><Link to="/destination">Classic</Link></li>
              <li><Link to="/tour">Hipster</Link></li>
              <li><Link to="/service">Prescription sunglasses</Link></li>
              <li><Link to="/service">Sporty</Link></li>
              <li><Link to="/service">Unique</Link></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Informations</h6>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Catalog</Link></li>
              <li><Link to="#">Collection</Link></li>
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Blog</Link></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright 2021 All Rights Reserved by 
          <Link to="#">Sunstore</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><Link className="facebook" to="https://www.facebook.com/"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></Link></li>
              <li><Link className="google" to="https://www.google.com/"><FontAwesomeIcon className="icon" icon={faGoogle} /></Link></li>
              <li><Link className="instagram" to="https://www.instagram.com/"><FontAwesomeIcon className="icon" icon={faInstagram} /></Link></li>   
            </ul>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Footer;