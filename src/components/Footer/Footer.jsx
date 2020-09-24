import React from 'react'
import './Footer.css'
import {FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa";
export const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="list">
                    <h6>About</h6>
                    <ul>
                        <li>Company</li>
                        <li>Testimonials</li>
                        <li>Licensing</li>
                    </ul>
                </div>
                <div className="list">
                    <h6>Instructions</h6>
                    <ul>
                        <li>Resources</li>
                        <li>Guidebooks</li>
                    </ul>
                </div>
                <div className="list social">
                    <h6>Social Media</h6>
                    <ul>
                        <li><FaFacebook /></li>
                        <li><FaInstagram/></li>
                        <li><FaTwitter /></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
