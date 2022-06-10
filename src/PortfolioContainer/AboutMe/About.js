import React from 'react';
import './About.css'
import image from '../../assets/Home/images/jahid.png'

const About = () => {
    return (
        <section className='full-about-section' id='about'>
            <h5 className='about-heading'>Get To Know</h5>
            <h2 className='about-heading'>About Me</h2>
            <div className='container about_container'>
                <div className='about_me'>
                    <div className="about_me-image">
                        <img style={{width:450}} src={image} alt="About Image" />
                    </div>
                </div>
                <div className='about_content'>
                    <div className="about_cards">
                        <article className='about_card'>
                        <svg className='about_icon' style={{width:25}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"/></svg>
                            <h5>Education</h5>
                            <small>BSC in Cse</small> <br />

                            <small>Daffodil Internation Univarsity</small>

                        </article>
                        <article className='about_card'>
                        <svg className='about_icon' style={{width:25}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"/></svg>
                            <h5>Courses</h5>
                            <small>Programming Hero</small> <br />

                            <small>Complete web developement</small>

                        </article>
                        <article className='about_card'>
                        <svg className='about_icon' style={{width:25}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M384 0H96C60.65 0 32 28.65 32 64v384c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64V64C448 28.65 419.3 0 384 0zM240 128c35.35 0 64 28.65 64 64s-28.65 64-64 64c-35.34 0-64-28.65-64-64S204.7 128 240 128zM336 384h-192C135.2 384 128 376.8 128 368C128 323.8 163.8 288 208 288h64c44.18 0 80 35.82 80 80C352 376.8 344.8 384 336 384zM496 64H480v96h16C504.8 160 512 152.8 512 144v-64C512 71.16 504.8 64 496 64zM496 192H480v96h16C504.8 288 512 280.8 512 272v-64C512 199.2 504.8 192 496 192zM496 320H480v96h16c8.836 0 16-7.164 16-16v-64C512 327.2 504.8 320 496 320z"/></svg>
                            <h5>Projects</h5>
                            <small>Front End</small> <br />

                            <small>Full stack and Responsive</small>

                        </article>
                    </div>
                    <p>I am a Full Stack web developer . i learned html , css , bootstrap , tailwind ,javascript ,
                        react , react-router , firebase , nodejs, mongodb , expressjs, github, heroku, netlify etc .
                        I hava a huge passion to start my professional life as a full Stack-web Developer . I always try to learn new new technologies.
                        Number of projects i have done with html-css, bootstrap , tailwind , react, javascript ,mongodb,nodejs as well as with responsieness.
                        Now i am highly confident and dedicated to work with a company and team based . if i get any
                        opurtunity i will to explore myself as much as possible.......

                    </p>
                    <div className='button-a'>
                        <a  href="" ><button className='highlighted-btnn'>Lets Talk</button></a>
                        </div>
                </div>

            </div>

        </section>
    );
};

export default About;