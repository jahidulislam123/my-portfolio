import React from 'react';
import './Portfolio.css'
import image1 from '../../assets/Home/images/image1.png'
import image2 from '../../assets/Home/images/image2.png'
import image3 from '../../assets/Home/images/image3.png'
import image4 from '../../assets/Home/images/image4.png'
import image5 from '../../assets/Home/images/image5.png'
import image6 from '../../assets/Home/images/image6.png'

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
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123" target='_blank'>Github</a>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123" target='_blank'>Live site</a>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123" target='_blank'>Server Site</a>

                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img style={{width:370}}  src={image2} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123" target='_blank'>Github</a>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123" target='_blank'>Live site</a>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123" target='_blank'>Server site</a>

                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img style={{width:370}}  src={image3} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123" target='_blank'>Github</a>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123" target='_blank'>Live site</a>

                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img style={{width:370}}  src={image4} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123" target='_blank'>Github</a>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123" target='_blank'>Live site</a>

                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img style={{width:370}}  src={image5} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123" target='_blank'>Github</a>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123" target='_blank'>Live site</a>

                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img style={{width:370}}  src={image6} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123" target='_blank'>Github</a>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123" target='_blank'>Live site</a>

                </article>

            </div>

        </section>
    );
};

export default Portfolio;