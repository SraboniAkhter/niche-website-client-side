import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'


const AddProduct = () => {

    const [imageURL,setImageURL] = useState(null);
    const { register, handleSubmit ,reset } = useForm();
   
     const onSubmit = data => {
          console.log(data);
         const productData = {
             name: data.name,
             description: data.description,
             price: data.price,
             imageURL:imageURL
         }
         console.log(productData);
       axios.post('https://arcane-harbor-29981.herokuapp.com/products',productData)
       // axios.post('http://localhost:5000/products',productData)
       .then(res => {
           if(res.data.insertedId) {
               alert('added successfully');
               reset()
           }
       })
       };
   
     const handleImageAdd = product => {
         const imageStore = new FormData();
         imageStore.set('key','5aadb17e758cd32a97ba74e511a1a6b6')
         imageStore.append('image',product.target.files[0]);
   
       //   image added
         axios.post('https://api.imgbb.com/1/upload',imageStore)
         .then(function (response) {
             setImageURL(response.data.data.display_url);
         })
         .catch(function (error) {
             console.log(error);
         })
   
     }
    return (
        <div className="add-product">
            <h3>Add  Your products</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 60 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                 <input type="file" placeholder="image" onChange={handleImageAdd} />
                <br />
                <input className="btn btn-warning text-white" type="submit" />
                </form>
        </div>
    );
};

export default AddProduct;