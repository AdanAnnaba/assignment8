import React from 'react';
import ReviewData from '../Hook/Hook';

const Reviews = () => {
    const [reviews,setReviews] = ReviewData()
    return (
       <div>
           {
               reviews.map(reviews=><div>
                     <h5>Reviews: {reviews.name} </h5>
               </div>)
           }
        <div>
           
        </div>
       </div>
    );
};

export default Reviews;