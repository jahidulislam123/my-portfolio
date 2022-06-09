import React from 'react';
import Footer from '../Footer/Footer';
import Profile from '../Profile';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <Profile></Profile>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;