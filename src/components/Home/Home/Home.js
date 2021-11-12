import React from 'react';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Offers from '../Offers/Offers';
import Partner from '../Partner/Partner';
import Review from '../Review/Review';
// import Products from '../Products/Products';
import WebFeature from '../WebFeature/WebFeature';
import HomeProductData from '../HomeProductData/HomeProductData';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <HomeProductData></HomeProductData>
            <br /> <br /> <br />
            <Link to="/product"><button type="button" class="btn btn-outline-info">Show more product</button></Link>
            {/* <Products></Products> */}
            <Offers></Offers>
            <Review></Review>
            <WebFeature></WebFeature>
            <Partner></Partner>
            <Features></Features>
          <Footer></Footer>
        </div>
    );
};

export default Home;