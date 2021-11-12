import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../image/notFound.jpg';
const NotFound = () => {
    return (
        <div>
<div className="card bg-dark text-white">
  <img style={{height:"600px"}} src={notFound} className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h2 className="text-danger">Page not found</h2>
    <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
    <Link to="/"> <button className="btn btn-danger">Back to Home</button> </Link>
  </div> 
  </div>
        </div>
    );
};

export default NotFound;