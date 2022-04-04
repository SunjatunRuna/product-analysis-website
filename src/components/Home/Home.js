import React from 'react';
import Review from './Review/Review';
import './Home.css';
import img from './img/istockphoto-1033729610-612x612-removebg-preview.png'
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
        <div className='container mt-5 text-secondary'> 
            <div className="container row gx-5 mb-5">
                <div className="col-lg-6 mt-5 ps-5">
                <h1 className='text-secondary text-start mt-5'>Dream <span className='text-info'>Shop</span></h1>
                <p className='text-start text-secondary'>Shop Your Dreams, Make Your Own Happiness <br />
                Here You Get Women Clothes, Shoes, Watch And Skin Care All Product <br />
                Happy Shopping!! Stay Connected Dream Shop</p>
                <div className='text-start mt-4'><button className='border border-0 p-2 bg-info text-white fw-bold rounded'>Shop Now</button></div>
                </div>
                <div className="col-lg-6">
                <img src={img} alt="" className='img-fluid' />
                </div>
            </div>
            <Review/>
            <div className='my-5'><button className='border border-0 rounded
            p-2 bg-info'><Link to="/reviews" className='see-more'>See more</Link></button></div>
        </div>
    );
};

export default Home;