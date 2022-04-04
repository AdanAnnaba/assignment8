import React from 'react';
import Watch from '../../Image/watch.jpg'
import './Home.css';

const Home = () => {
    return (
        <div className='home-page'>
            <div>
            <h1 className='text-6xl text-stone-900'>The World’s Best Luxury Watch Brands</h1>
            </div>
            <div>
                <img src={Watch} alt="" />
                <small>IWC Schaffhausen</small>
            </div>
        </div>
    );
};

export default Home;