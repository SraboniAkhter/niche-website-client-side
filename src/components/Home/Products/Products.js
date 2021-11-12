import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch('https://arcane-harbor-29981.herokuapp.com/products')
        // fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div id="products">
            <Navbar></Navbar>
            <h2 className="text-info mt-5">Our products</h2>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Products;