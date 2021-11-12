import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../../image/img1.jpg'

const Offers = () => {
    return (
        <div className="container mt-5">
            <Row className="bg-info">
    <Col>
    <img src={img} alt="" />
    </Col>
    <Col className="text-center">
        <br /> <br />
    <h1>Sale OFF 20% all products</h1>
    <p><small className="text-white">Our store is more than just another average online retailer. We sell not only top quality products, but give our customers a positive online shopping experience.</small></p>
    <Link to="/services">
    <button className="btn btn-dark">Buy Now</button>
    </Link>
    </Col>
  </Row>
            
            
        </div>
    );
};

export default Offers;