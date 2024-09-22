import React from 'react'
import './Footer.css'
import { assets } from '../../assests/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt='logo' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, numquam.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="facebook icon" />
                    <img src={assets.twitter_icon} alt="twitter icon" />
                    <img src={assets.linkedin_icon} alt="linkedIn icon" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-1234-747</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024. Tomato.com - All rights reserved</p>
    </div>
  )
}

export default Footer