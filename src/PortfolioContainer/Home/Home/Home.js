import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar';
import Profile from '../Profile';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <NavBar></NavBar>
            <Profile></Profile>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;