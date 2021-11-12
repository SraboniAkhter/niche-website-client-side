import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css';
 
const Review = () => {
    const [reviews, setReviews] = useState([])
   
    useEffect(() => {
        fetch('https://arcane-harbor-29981.herokuapp.com/reviews')
        // fetch('http://localhost:5000/reviews')
        
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <section className="container my-5">
            <div>
                <h1 className="text-center text-warning">Costumer's Review</h1>
            </div>
            <div className="row">
                  {
                      reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                  }  
            </div>
        </section>
    );
};

export default Review;