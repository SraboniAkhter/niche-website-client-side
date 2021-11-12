import React from 'react';
import img from '../../../image/image.jpg'

const Features = () => {
    return (
        <div className="mt-5 m-5">
            <h2 className="text-bold">Special Offers & Discounts</h2>
            <p><small className="text-secondary">With some of the world's most popular design's available, <br /> a quality sunglass is at your fingertips. Maximize your Sunstore membership and enjoy the special offers and discount.</small></p>
            
            <div class="card mb-3">
          <img style={{height: '450px'}} src={img} className="card-img-top img-fluid" alt="..."/>
          </div>

        </div>
    );
};

export default Features;