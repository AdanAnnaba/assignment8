import React from 'react';
import ReviewData from '../Hook/Hook';
import './Reviews.css';

const Reviews = () => {
    const [reviews,setReviews] = ReviewData()
    return (
        <div>
            <div>
            <h2 className='text-5xl p-5 uppercase'>What our customers say!</h2>
        </div>
       <div className='total-review'>
           {
               reviews.map(reviews=><div className='box'>
                     <h5>Name: {reviews.name} </h5>
                     <img src={reviews.img} alt="" />
                     <p className='text-justify'>Reviews: {reviews.reviews}</p>
                     <p>Ratings: {reviews.ratings}</p>
               </div>)
           }
       </div>
        </div>
    );
};

export default Reviews;