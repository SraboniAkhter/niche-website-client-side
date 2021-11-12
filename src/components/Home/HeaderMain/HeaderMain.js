import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../image/banner-02_644x450_crop_center.jpg'
import banner2 from '../../../image/banner-01_644x450_crop_center.jpg'
import banner3 from '../../../image/banner-06_980x700_crop_center.jpg'


const HeaderMain = () => {
    return (
        <div style={{ height: '100%' }}>
            <Carousel>
  <Carousel.Item>
    <img
        style={{ height: '500px' }}
      className="d-block w-100"
      src={banner}
      alt="First slide"
    />
    <Carousel.Caption>
    <h3 className="text-info">New Dita Sunglasses</h3>
    <p>Precision,Quality & Longevity</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{ height: '500px' }}
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3 className="text-info">We love the beach!</h3>
    <p>Best Women Sunglasses</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{ height: '500px' }}
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3 className="text-info">Designer frames 50% off</h3>
    <p>Save your eyes from sunbeams in summer!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default HeaderMain;