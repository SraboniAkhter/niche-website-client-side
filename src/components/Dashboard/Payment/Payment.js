import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../image/istockphoto-926167508-170667a.jpg'
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const Payment = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img src={img} alt="" />
            <br />
            <Link to="/home"><button type="button" class="btn btn-warning">Back to Home</button></Link>
            <Footer></Footer>
        </div>
    );
};

export default Payment;