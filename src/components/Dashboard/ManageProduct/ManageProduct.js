import React, { useEffect, useState } from 'react';

const ManageProduct = () => {

    const [products,setProducts] = useState('');
    const [productDetails,setProductDetails] = useState([]);

    useEffect(() => {
        fetch('https://arcane-harbor-29981.herokuapp.com/products')
        // fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data =>setProductDetails(data))
    },[])

    const handleDelete = id => {
        const proccess =window.confirm ('Are you sure you want to delete?')
        if(proccess){
           const url = `https://arcane-harbor-29981.herokuapp.com/products/${id}`;
        //    const url = `http://localhost:5000/products/${id}`;
           fetch(url,{
               method: 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
               console.log(data);
               if(data.deletedCount){
                        alert('Are you sure you want to delete?')
                   const remaining = productDetails.filter(product =>product._id !== id);
               setProductDetails(remaining)
               }
           })
        }
       }
    return (
        <div>
        <h2 className="text-warning">Manage All products</h2>
        {
            
            productDetails.map(product => <div className="mx-5" key={product._id}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
      <div className="card">
    <h2 className="card-text">{product.name}</h2>
    <img src={product.imageURL} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h6 className="card-title">{product.price}tk</h6>
    <p className="card-text">{product.description}</p>
    <p className="card-text">{product.email}</p>
    <h6 className="card-text">{product.userAddress}</h6>
    <button className="btn btn-danger text-white me-3" onClick={ () => handleDelete(product._id) }>Delete</button>
                </div>
                </div>
                </div>
                </div>
                
            </div>)

        }
        
    </div>
    );
};

export default ManageProduct;