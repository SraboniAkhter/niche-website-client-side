
import React from 'react';
import Rating from 'react-rating';
import './ReviewCard.css'
const ReviewCard = ({review}) => {
    return (
        <div className="col-md-4 p-3">
            <div className="shadow reviewCard p-3">
                <div className="d-flex justify-content-around align-items-center">
                    <div>
                        <h3>{review.name}</h3>
                        <h6>{new Date().toDateString()}</h6>
                    </div>
                </div>
                <div className="mt-3">
                    <Rating
                    initialRating={review.star}
                     emptySymbol="far fa-star icon-color"
                     fullSymbol="fas fa-star icon-color"
                    ></Rating>
                    <p>{review.review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
