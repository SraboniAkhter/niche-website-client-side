import React from 'react';
import './Product.css';
import { NavLink } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, name, description, imageURL } = product;
    return (
        <div className="product pb-3">
            <img style={{ height:"160px"}} src={imageURL} alt="" />
            <h3 className="text-info">{name}</h3>
            <p className="px-3">{description}</p>
            <NavLink to={`/booking/${_id}`}>
                <button className="btn btn-info text-white">Buy Now</button>
            </NavLink>
        </div>
    );
};

export default Product;