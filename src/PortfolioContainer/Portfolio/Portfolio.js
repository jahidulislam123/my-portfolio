import React from 'react';
import './Portfolio.css'
import image1 from '../../assets/Home/images/image1.png'
import image2 from '../../assets/Home/images/image2.png'
import image3 from '../../assets/Home/images/image3.png'
import image4 from '../../assets/Home/images/image4.png'
import image5 from '../../assets/Home/images/image5.png'
import image6 from '../../assets/Home/images/image6.png'
import d1 from '../../assets/Home/images/d1.jpg'
import d2 from '../../assets/Home/images/d2.jpg'
import d3 from '../../assets/Home/images/d3.png'
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
                    
                    
                    <div>
                  
<button type="button" className='btn btn-outline-success mt-3' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Details
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-black">
        <div className='m-4 '>
            <img className='m-4 rounded' style={{width:320}} src={d1} alt="" />
            <img className='m-4 rounded' style={{width:320}} src={d2} alt="" />
            <img className='m-4 rounded' style={{width:320}} src={d3} alt="" />
        </div>
        <div>
            <h2> Manufacturer-website [Full Stack]   </h2>
                <p> Features :
In this project there are two sections one is for users and another is for admin with login System via firebase authentication .
Users can comment, book orders , cancel orders as well as pay money .
Admin can add products , delete products , manage orders , add admin etc
       Technologies : React , React Router , React-Hooks ,React-Query , Firebase , Tailwind , 
       Payment-Gateway-Stripe , Nodejs , Mongodb , Heroku
</p>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>
                    </div>


                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img style={{width:370}}  src={image2} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123/assignment-11-server-site" target='_blank'>Client Site</a>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123/assignment-11-client-site-car" target='_blank'>Live site</a>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123/assignment-11-server-site" target='_blank'>Server site</a>



                    <div>
                  
                  <button type="button" className='btn btn-outline-success mt-3' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Details
                  </button>
                  
                  
                  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog-scrollable">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          ...
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                                      </div>



                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img style={{width:370}}  src={image3} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123/Lucky-one-assignment-8" target='_blank'>Client site</a>
                    <a className='highlighted-btnnn' href="https://genuine-melomakarona-c34878.netlify.app/" target='_blank'>Live site</a>


                    <div>
                  
                  <button type="button" className='btn btn-outline-success mt-3' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Details
                  </button>
                  
                  
                  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog-scrollable">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          ...
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                                      </div>



                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img style={{width:370}}  src={image4} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123" target='_blank'>Github</a>
                    <a className='highlighted-btnnn' href="https://spiffy-semifreddo-f293a1.netlify.app/home" target='_blank'>Live site</a>




                    <div>
                  
                  <button type="button" className='btn btn-outline-success mt-3' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Details
                  </button>
                  
                  
                  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog-scrollable">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          ...
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                                      </div>



                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img style={{width:370}}  src={image5} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123/product-analysis-assignment-9" target='_blank'>Github</a>
                    <a className='highlighted-btnnn' href=" https://jahidulislam123.github.io/influencer-gear/index.html" target='_blank'>Live site</a>



                    <div>
                  
                  <button type="button" className='btn btn-outline-success mt-3' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Details
                  </button>
                  
                  
                  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog-scrollable">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          ...
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                                      </div>



                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img style={{width:370}}  src={image6} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a className='highlighted-btnnn' href="ttps://github.com/jahidulislam123/influencer-gear" target='_blank'>Github</a>
                    <a className='highlighted-btnnn' href="https://wild-photograper-services.web.app/" target='_blank'>Live site</a>


                    <div>
                  
                  <button type="button" className='btn btn-outline-success mt-3' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Details
                  </button>
                  
                  
                  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog-scrollable">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                                      </div>



                </article>

            </div>

        </section>
    );
};

export default Portfolio;