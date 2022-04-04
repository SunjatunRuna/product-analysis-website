import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Reviews = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch("review.json")
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className='container my-5'>
            <h3>What Our Customers Says?</h3>
            <div className='container mt-5 row row-cols-lg-2 g-3'>
                {
                    reviews.map(review => (
                        <Cart key={review.id} review={review}></Cart>
                    ))
                }
            </div>

        </div>
    );
};

export default Reviews;