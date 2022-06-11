import React from 'react';
import './Portfolio.css'
import image1 from '../../assets/Home/images/image1.png'
import image2 from '../../assets/Home/images/image2.png'
import image3 from '../../assets/Home/images/image3.png'
import image4 from '../../assets/Home/images/image4.png'
import image5 from '../../assets/Home/images/image5.png'
import image6 from '../../assets/Home/images/image6.png'
import {Link } from "react-router-dom";

const Portfolio = () => {
    return (
        <section className='portfolio_full' id='portfolio'>
            <h5>My recent work</h5>
            <h2>Some Projects</h2>
            <div className='container portfolio_container'>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img style={{width:370}} src={image1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a className='highlighted-btnnn' href=" https://github.com/jahidulislam123/manufacturer-website-client-site-assignment-12" target='_blank'>Client site</a>
                    <a className='highlighted-btnnn' href=" https://bicycle-parts-f992b.web.app/" target='_blank'>Live site</a>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123/manufacturer-website-server-site-assignment-12" target='_blank'>Server Site</a>

                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img style={{width:370}}  src={image2} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123/assignment-11-server-site" target='_blank'>Client Site</a>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123/assignment-11-client-site-car" target='_blank'>Live site</a>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123/assignment-11-server-site" target='_blank'>Server site</a>

                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img style={{width:370}}  src={image3} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123/Lucky-one-assignment-8" target='_blank'>Client site</a>
                    <a className='highlighted-btnnn' href="https://genuine-melomakarona-c34878.netlify.app/" target='_blank'>Live site</a>

                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img style={{width:370}}  src={image4} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123" target='_blank'>Github</a>
                    <a className='highlighted-btnnn' href="https://spiffy-semifreddo-f293a1.netlify.app/home" target='_blank'>Live site</a>

                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img style={{width:370}}  src={image5} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123/product-analysis-assignment-9" target='_blank'>Github</a>
                    <a className='highlighted-btnnn' href=" https://jahidulislam123.github.io/influencer-gear/index.html" target='_blank'>Live site</a>

                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img style={{width:370}}  src={image6} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a className='highlighted-btnnn' href="ttps://github.com/jahidulislam123/influencer-gear" target='_blank'>Github</a>
                    <a className='highlighted-btnnn' href="https://wild-photograper-services.web.app/" target='_blank'>Live site</a>
                   

                </article>

            </div>

        </section>
    );
};

export default Portfolio;