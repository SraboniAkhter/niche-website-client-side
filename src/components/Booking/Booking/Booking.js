import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Form, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import Button from '@restart/ui/esm/Button';

const Booking = () => {

  const [userEmail,setUserEmail] = useState('');
  const [userAddress,setUserAddress] = useState('');
  const [userNumber,setUserNumber] = useState('');
  // console.log(userAddress ,userNumber,userEmail);
    const {productId} =useParams();
    let {user ,isLoading} = useAuth();

    // console.log(user.email)

    const handleSubmit = e => {
      e.preventDefault();
      e.target.reset();
      // console.log(data);
     
   };

    // console.log(productId);
    //  console.log(data);
    const [productDetails,setProductDetails] = useState({});
      useEffect(() => {
          fetch(`https://arcane-harbor-29981.herokuapp.com/products/${productId}`)
          // fetch(`http://localhost:5000/products/${productId}`)
        .then(res => res.json())
        .then(data =>setProductDetails(data))
    },[])
    const name = productDetails.name;
    const price = productDetails.price;
    const imageURL = productDetails.imageURL;
    const description = productDetails.description;
    const email = user.email;
    const status = 'Pending';
    // console.log(productDetails.name);
    
    const orderData = {
      name, description , imageURL , price , email  , userNumber,userAddress,status}
      // console.log(orderData)
    
    if(isLoading){
      return <Spinner animation="border" />
    }
    // holding on input.
    const handleInputEmail = e => {
      setUserEmail(e.target.value)

  }
  const handleInputAddress = e => {
    setUserAddress(e.target.value)
  }
  const handleInputNumber = e => {
    setUserNumber(e.target.value)
  }
    
   const handleSubmitData = () => {
      axios.post('https://arcane-harbor-29981.herokuapp.com/bookings',orderData)
      // axios.post('http://localhost:5000/bookings',orderData)
    .then(res => {
        if(res.insertedId) {
            alert('added successfully');
        }
    })
   }
    
    return (
        <div className="mx-5">
             {/* <h2>This is {productId}</h2> */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
          <div className="card">
        <h2 className="card-text">{productDetails.name}</h2>
        <img src={productDetails.imageURL} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h6 className="card-title">{productDetails.price}tk</h6>
        <p className="card-text">{productDetails.description}</p>
        {/* <Link to="/complete"> */}
          {/* <button className="btn btn-info">Get Booking</button> */}
          {/* </Link> */}

    <div>
  <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control  type="name" placeholder={user.displayName} disabled/>
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  type="email" placeholder={user.email} disabled/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control type="Address" onBlur={handleInputAddress} placeholder="Address" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicNumber">
    <Form.Label>Number</Form.Label>
    <Form.Control type="Number" onBlur={handleInputNumber} placeholder="Number" />
  </Form.Group>
      <Link to="/complete">
      <Button className="btn btn-warning text-white" onClick={handleSubmitData} variant="primary" type="submit">
    Submit
  </Button>
      </Link>
</Form>
    </div>

      </div>
    </div>
  </div>
</div>
 </div>
 
    );
};
export default Booking;