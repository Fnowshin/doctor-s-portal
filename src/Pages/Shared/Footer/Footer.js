import React from 'react';
import footer from '../../../assets/images/footer.png'

const Footer = (props) => {
    return (
        <div style={{backgroundImage: `url(${footer})`, backgroundSize: 'cover'}}>
            <footer className="footer p-10 text-base-content" >
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Emergency Checkup</a> 
    <a className="link link-hover">Monthly Checkup</a> 
    <a className="link link-hover">Weekly Checkup</a> 
    <a className="link link-hover">Deep Checkup</a>
  </div> 
  <div>
    <span className="footer-title">ORAL HEALTH</span> 
    <a className="link link-hover">Fluoride Treatment</a> 
    <a className="link link-hover">Cavity Filling</a> 
    <a className="link link-hover">Teath Whitening</a> 
  </div> 
  <div>
    <span className="footer-title">OUR ADDRESS</span> 
    <a className="link link-hover">Dhaka, Panthopath 207, Bangladesh</a>   
  </div>
 
</footer> 
<footer className="footer footer-center p-10  text-base-content rounded">
<div>
    <p>Copyright © 2022 - All rights reserved </p>
  </div>
  </footer>
        </div>
    );
};

export default Footer;