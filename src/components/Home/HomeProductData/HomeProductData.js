import React, { useEffect, useState } from 'react';
import HomeProductDatas from '../HomeProductDatas/HomeProductDatas';


const HomeProductData = () => {
    const [products, setProducts] = useState([])
    const [homeProduct] = [products.slice(0,6)]
    
    useEffect(() => {
        fetch('https://arcane-harbor-29981.herokuapp.com/products')
        // fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div id="products">
            <h2 className="text-info mt-5">Our products</h2>
            <div className="product-container">
                {
                    homeProduct.map(product => <HomeProductDatas
                        key={product._id}
                        product={product}
                    ></HomeProductDatas>)
                }
            </div>
        </div>
    );
};

export default HomeProductData;