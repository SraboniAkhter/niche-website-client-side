import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const MyOrders = () => {
    const {user} = useAuth();
    const [productDetails,setProductDetails] = useState([]);
    //  console.log(productDetails);

    useEffect(() => {
         fetch('https://arcane-harbor-29981.herokuapp.com/bookings')
        //  fetch('http://localhost:5000/bookings')
        .then(res => res.json())
        .then(data =>setProductDetails(data))
    },[])
    const handleDelete = id => {
        const proccess =window.confirm ('Are you sure you want to delete?')
        if(proccess){
            const url = `https://arcane-harbor-29981.herokuapp.com/booking/${id}`;
            // const url = `http://localhost:5000/booking/${id}`;
           fetch(url,{
               method: 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
            //    console.log(data);
               if(data.deletedCount){
                        alert('Are you sure you want to delete?')
                   const remaining = productDetails.filter(product =>product._id !== id);
               setProductDetails(remaining)
               }
           })
        }
       }
    const userBooking = productDetails.filter(product =>product.email ===user.email)
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-info">Manage My Orders</h2>
            {
                
                userBooking.map(product => <div className="mx-5" key={product._id}>
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
        <h6 className="card-text">Update status:{product.status}</h6>
        <button className="btn btn-danger text-white" onClick={ () => handleDelete(product._id) }>Delete</button>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                </div>)
            }
            <Footer></Footer>
        </div>
    );
};

export default MyOrders;