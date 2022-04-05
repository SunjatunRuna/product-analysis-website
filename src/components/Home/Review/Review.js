import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';


const Review = () => {
    const [reviews, setReview] = useState([]);
    let filterData = reviews.slice(0, 3)
    useEffect(() => {
        fetch("review.json")
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className='my-5'>
            <h3 className='my-5 pt-5'>Customers Review</h3>
            <div className='container row row-cols-lg-3 g-3'>
            {
                    filterData.map(review => (
                        <Cart key={review.id} review={review}></Cart>
                    ))
                }
            </div>

        </div>
    );
};

export default Review;