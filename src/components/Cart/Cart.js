import React from 'react';

const Cart = (props) => {
    const { name, ratings, comment } = props.review;
    return (
        <div>
            <div className='border border-mute pt-3'>
                <h6>Buyer Name: {name}</h6>
                <p>Comment: {comment}</p>
                <p>Ratings: <span className='text-warning'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i></span></p>
            </div>
        </div>
    );
};

export default Cart;