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
import aa from '../../assets/Home/images/11-a.jpg'
import bb from '../../assets/Home/images/11-b.jpg'
import cc from '../../assets/Home/images/11-c.jpg'
import ll from '../../assets/Home/images/l1.jpg'
import m1 from '../../assets/Home/images/m1.jpg'
import m2 from '../../assets/Home/images/m2.jpg'
import m3 from '../../assets/Home/images/m3.jpg'
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
                    <h3>Manufacturer-website [Full Stack] </h3>
                    <a className='highlighted-btnnn' href=" https://github.com/jahidulislam123/manufacturer-website-client-site-assignment-12" target='_blank'>Client site</a>
                    <a className='highlighted-btnnn' href=" https://bicycle-parts-f992b.web.app/" target='_blank'>Live site</a>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123/manufacturer-website-server-site-assignment-12" target='_blank'>Server Site</a>
                
                    <div>
                  
         <button type="button" className='btn btn-outline-success mt-3' data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
           Details
         </button>


<div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel1">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-black">
        <div className='m-4  '>
            <img className='m-4 rounded' style={{width:300}} src={d1} alt="" />
            <img className='m-4 rounded' style={{width:300}} src={d2} alt="" />
            <img className='m-4 rounded' style={{width:300}} src={d3} alt="" />
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
                    <h3>Car analyzing website [Full Stack]</h3>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123/assignment-11-client-site-car" target='_blank'>Client Site</a>
                    <a className='highlighted-btnnn' href="https://lambent-narwhal-0dfeaf.netlify.app/" target='_blank'>Live site</a>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123/assignment-11-server-site" target='_blank'>Server site</a>
                    <div>
                  
                   
<button type="button" class="btn btn-outline-success mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Details
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-black">
      <div className='m-4  '>
            <img className='m-4 rounded' style={{width:300}} src={aa} alt="" />
            <img className='m-4 rounded' style={{width:300}} src={bb} alt="" />
            <img className='m-4 rounded' style={{width:300}} src={cc} alt="" />
        </div>
       <div>
       Features :
There is a login system implemented by firebase authentication. 
one can add a new car, delete a car , modify information and for database management Mongodb used with nodeJS.
Showing details by clicking on a  single product 
      Technologies : React ,React Router , React-Toostify , React-Hooks-Form , Bootstrap 
      Firebase , Firebase-hooks , Nodejs , Express js , Mongodb

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
                    <img style={{width:370}}  src={image6} alt="" />
                    </div>
                    <h3>Wild Photographer  </h3>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123/wild-photograper-assignment-10" target='_blank'>Client site</a>
                    <a className='highlighted-btnnn' href="https://wild-photograper-services.web.app/" target='_blank'>Live site</a>


                    <div>
                  
                 
<button type="button" class="btn btn-outline-success mt-3" data-bs-toggle="modal" data-bs-target="#exampleModalw">
  Details
</button>


<div class="modal fade" id="exampleModalw" tabindex="-1" aria-labelledby="exampleModalLabelw" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabelw">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-black">
      <div className='m-4  '>
            <img className='m-4 rounded' style={{width:300}} src={m1} alt="" />
            <img className='m-4 rounded' style={{width:300}} src={m2} alt="" />
            <img className='m-4 rounded' style={{width:300}} src={m2} alt="" />
        </div>
        <div>
          <p>
          Features : 
Implemented dynamic route and protecting
Implemented login system with firebase authentication for google login and registration
     Technologies : React , React Bootstrap , React Router , Json-Api
     firebase authentication , firebase-authentication-hooks

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
                    <img style={{width:370}}  src={image3} alt="" />
                    </div>
                    <h3>This is a book selection Website [React]</h3>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123/Lucky-one-assignment-8" target='_blank'>Client site</a>
                    <a className='highlighted-btnnn' href="https://genuine-melomakarona-c34878.netlify.app/" target='_blank'>Live site</a>


                    <div>
                  
<button type="button" class="btn btn-outline-success mt-3" data-bs-toggle="modal" data-bs-target="#exampleModall">
  Details
</button>


<div class="modal fade" id="exampleModall" tabindex="-1" aria-labelledby="exampleModalLabell" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabell">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-black">
      <div className='m-4  '>
            <img className='m-4 rounded' style={{width:300}} src={ll} alt="" />
            
        </div>
        <div>
          This is a javascript related website . in this website 
          there are number of books are availabe .
          just select some books and there name will be showon in rigt side . if someone click in 
          right side then automitically it will choose one to you .
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
                    <img style={{width:370}}  src={image4} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123" target='_blank'>Github</a>
                    <a className='highlighted-btnnn' href="https://spiffy-semifreddo-f293a1.netlify.app/home" target='_blank'>Live site</a>




                    <div>
                 
<button type="button" class="btn btn-outline-success mt-3" data-bs-toggle="modal" data-bs-target="#exampleModalp">
  Details
</button>


<div class="modal fade" id="exampleModalp" tabindex="-1" aria-labelledby="exampleModalLabelp" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabelp">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-black">
        <p>This is a web site where i implemented react ,
          react router ,
          react rechart 
          dash board , pie chart , bar-chart etc . 
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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
                    <h3>responsibe website</h3>
                    <a className='highlighted-btnnn' href="https://github.com/jahidulislam123/product-analysis-assignment-9" target='_blank'>Github</a>
                    <a className='highlighted-btnnn' href=" https://jahidulislam123.github.io/influencer-gear/index.html" target='_blank'>Live site</a>



                    <div>
                    
<button type="button" class="btn btn-outline-success mt-3" data-bs-toggle="modal" data-bs-target="#exampleModalz">
  Details
</button>


<div class="modal fade" id="exampleModalz" tabindex="-1" aria-labelledby="exampleModalLabelz" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabelz">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-black">
        <p>It is a website i have made it by using the Technologies which is 
          Bootstrap , and i deploy it in netlify , in this website i have shown something 
          like a ecomerece website
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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