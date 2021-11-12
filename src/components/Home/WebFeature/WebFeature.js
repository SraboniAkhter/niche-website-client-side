import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../image/img.jpg'
import img2 from '../../../image/banner-05_644x450_crop_center.jpg'


const WebFeature = () => {
    return (
        <div className="mt-4">
            <Container>
   
  <Row style={{height: '550px'}}>
    <Col>
    <img src={img} class="img-fluid" alt="..."/>
    </Col>
    <Col md="auto"><img src={img2} class="img-fluid" alt="..."/></Col>
    <Col xs lg="2">
    <h1>Underline your personality</h1>
        <button type="button" class="btn btn-info text-white btn-lg">Shop Now</button>
    </Col>
  </Row>
</Container>
        </div>
    );
};

export default WebFeature;