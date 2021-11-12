import React from 'react';
import logo from '../../../image/logo-1.png'
import logo2 from '../../../image/logo-2.png'
import logo3 from '../../../image/logo-4.png'
import { Col, Container, Row } from 'react-bootstrap';

const Partner = () => {
    return (
        <div>
            <Container>
            <Row>
    <Col sm>
    <img src={logo} className="img-fluid" alt="..."/>
    </Col>
    <Col sm><img src={logo2} className="img-fluid" alt="..."/></Col>
    <Col sm><img src={logo3} className="img-fluid" alt="..."/></Col>
  </Row>
            </Container>
        </div>
    );
};

export default Partner;