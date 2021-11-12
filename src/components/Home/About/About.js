import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../../image/banner-03_644x450_crop_center.jpg'
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const About = () => {
    return (
        <section className="pb-0 pb-md-5 my-5">
            <Navbar></Navbar>
            <div className="container mb-5">
                <div className="row mb-5">
                   <div className="col-md-7 align-self-center">
                        <h1 className="text-info">About our stylish sunglasses</h1>
                        <p className="text-secondary my-5">
                        The fast app navigation system allows you to compare glasses and inspect how they fit your face. Whether you wear glasses lower on the nose as mini shades or as full eye cover, Ideofit app allows you to place the frame exactly how you would wear them in real life..
                        </p>
                        <Link to="/"><button className="btn btn-info">Learn More</button></Link>
                    </div>
                    <div className="col-md-5 mb-4 m-md-0">
                        <img src={images} alt=""/>
                        <div>
            </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default About;