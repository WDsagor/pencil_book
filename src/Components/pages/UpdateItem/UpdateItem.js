import { toast } from "react-toastify";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";

const UpdateItem = () => {
  const [dError, setDError] = useState("")
  const [item, setItem] = useState({});
  const [updateItem, setUpdateItem] = useState({});
  const {id}  = useParams();


  useEffect(() => {
    const url = `https://stark-dusk-04607.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if(!data){
          return <Loading></Loading>
        }else{
          
          setItem(data);
          setUpdateItem(data)
        }
      });
  }, [id, item]);
  const handleUpdateName = event =>{
    const newName = event.target.value;
    const {name, ...rest}= updateItem;
    const newItem = {name: newName, ...rest}
    setUpdateItem(newItem)
    
  }
  const handleUpdateOrigin = event =>{
    const newMade = event.target.value;
    const {made, ...rest}= updateItem;
    const newItem = {made: newMade, ...rest}
    setUpdateItem(newItem)
  }
  const handleUpdateQuantity = event =>{
    const newQuantity = event.target.value;
    const {quantity, ...rest}= updateItem;
    const newItem = {quantity: newQuantity, ...rest}
    setUpdateItem(newItem)
  }
  const handleUpdatePrice = event =>{
    const newPrice = event.target.value;
    const {price, ...rest}= updateItem;
    const newItem = {price: newPrice, ...rest}
    setUpdateItem(newItem)
  }
  const handleUpdateUrl = event =>{
    const newUrl = event.target.value;
    const {url, ...rest}= updateItem;
    const newItem = {url: newUrl, ...rest}
    setUpdateItem(newItem)
  }
const handleUpdate = async(event)=>{
  event.preventDefault();
  // console.log(updateItem);
  const setupdateItem ={
    name:updateItem.name,
    made:updateItem.made,
    price:updateItem.price,
    quantity:updateItem.quantity,
    url:updateItem.url
  }
  
    try{
      const { data } = await axios.put(`http://localhost:5000/inventory/${id}`, setupdateItem);
    
    if (!data.success) {
      return toast.error(data.error, {
        position: toast.POSITION.TOP_CENTER
      });
        
    }
    if(data.success){

    toast.success(data.message, {
      position: toast.POSITION.TOP_CENTER
    })}
  }catch(error){
    toast.error(error.message, {
      position: toast.POSITION.TOP_CENTER
    })
    }
   
  
}
  const handleDelivery = async(event) => {
    event.preventDefault();
    const deliveryItem ={
      name:item.name,
      quantity:event.target.deliveryQuantity.value
     
    }
    
    try{
      if(parseInt(item.quantity)>= event.target.deliveryQuantity.value && event.target.deliveryQuantity.value > 0){

        const { data } = await axios.put(`http://localhost:5000/delivery/${id}`, deliveryItem);
      
    
    if (!data.success) {
      return toast.error(data.error, {
        position: toast.POSITION.TOP_CENTER
      });
        
    }
    if(data.success){

    toast.success(data.message, {
      position: toast.POSITION.TOP_CENTER
    })}
    event.target.reset();
    setDError('')
  }else{
    setDError(`Your quantity not available, Available quantity ${item.quantity}`)
  }
  }catch(error){
    toast.error(error.message, {
      position: toast.POSITION.TOP_CENTER
    })
    }

  };

  return (
<div>
<h1 className=" text-orange-500 text-4xl text-center font-bold pt-10 uppercase">Manage your item</h1>
<div class="text-center text-white">
      <p class="p-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
<div class="hero min-h-screen">
  <div>
  <div class="hero-content flex-col lg:flex-row">
  <form   onSubmit={handleUpdate}>
      <h1 class="text-4xl font-bold py-5 text-white">Update item</h1>
          <div className="form-control">
          <label class="label">
            <span class="label-text text-white">Name</span>
          </label>
            <input class="w-full input input-bordered bg-transparent border-white text-white" onChange={handleUpdateName}
              type="text"
              name="name"
              value={updateItem.name}
              required
      
        
            />
          </div>
          <div className="form-control ">
          <label class="label">
            <span class="label-text text-white">Origin</span>
          </label>
            <input class="w-full input input-bordered bg-transparent border-white text-white" onChange={handleUpdateOrigin}
              type="text"
              name="origin"
              value={updateItem.made}
              required

             
            />
          </div>
          <div className="form-control ">
          <label class="label">
            <span class="label-text text-white">Quantity</span>
          </label>
            <input class="w-full input input-bordered bg-transparent border-white text-white" onChange={handleUpdateQuantity}
              type="number"
              name="quantity"
              value={updateItem.quantity}
              required
              
            />
          </div>
          <div className="form-control">
          <label class="label">
            <span class="label-text text-white">Price</span>
          </label>
            <input class="w-full input input-bordered bg-transparent border-white text-white" onChange={handleUpdatePrice}
              type="number"
              name="price"
              value={updateItem.price}
              required

              
            />
          </div>
          <div className="form-control my-5">
          <label class="label">
            <span class="label-text text-white">Image URL</span>
          </label>
            <input class="w-96 input input-bordered bg-transparent border-white text-white"  onChange={handleUpdateUrl}
              type="url"
              name="url"
              value={updateItem.url}
              required

              
            />
          </div>
          <div className="form-control">
            <input class="btn btn-primary" type="submit" value="Update" />
          </div>
        </form>
    <div>
    <form onSubmit={handleDelivery} className=" mt-10 ml-10">
    <h1 class="text-4xl font-bold text-white">Delivery item</h1>
          <div className="form-control">
          <label class="label">
            <span class="label-text text-white">Name</span>
          </label>
            <input class="w-96 input input-bordered bg-transparent border-white text-white"
              type="text"
              name="name"
              value={item.name}
            />
          </div>

          <div className="form-control">
            <label class="label"> 
            <span class="label-text text-white">Delivery quantity</span>
            </label>
            <input class="w-96 input input-bordered bg-transparent border-white text-white"
              type="number"
              name="deliveryQuantity"
              placeholder="Enter your delivery quantity"
              required
              autoComplete="off"
            />
           {dError?  <span className=" text-error">{dError}</span>:''}
          </div>

          <div className="form-control">
            <input class="btn btn-primary mt-6 "type="submit" value="Delivery Item" />
          </div>
        </form>
    </div>
  </div>
  </div>
</div>
</div>
  );
};

export default UpdateItem;
