import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import './AddReview.css';

const AddReview = () => {
    const {user} = useAuth();
    const name = user.displayName;
    const userEmail = user.email;

    const { register, handleSubmit ,reset } = useForm();
    const onSubmit = data => {
    //    console.log(data);
    
        const {review,star} =data;
        const convertData = {
            review, star , name , userEmail
        }
        // console.log(convertData);
     axios.post('https://arcane-harbor-29981.herokuapp.com/reviews',convertData)
    //  axios.post('http://localhost:5000/reviews',convertData)
     
     .then(res => {
         if(res.data.insertedId) {
             alert('added successfully');
             reset()
         }
     })
     };
    return (
        <div>
            <Navbar></Navbar>
           <div className="add-review">
           <h3>Add  Your Review</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: false, maxLength: 30 })} placeholder={user.displayName} disabled/>
                <br />
                <input {...register("email")} placeholder={user.email} disabled/>
                <br />
                <textarea {...register("review")} placeholder="write your opinion here" />
                <br />
                <input type="number" {...register("star")} placeholder="star" />
                <br />
                <input className="btn btn-warning text-white" type="submit" />
                </form>
           </div>
                <Footer></Footer>
        </div>
    );
};

export default AddReview;