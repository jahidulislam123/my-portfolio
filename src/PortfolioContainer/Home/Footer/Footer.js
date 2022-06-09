import React from 'react';
import './Footer.css'
import images from '../../../assets/Home/images/shape-bg.png'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-parent">
                <img src={images}
                 alt="no internet connection"
                 />
            </div>
            
        </div>
    );
};

export default Footer;