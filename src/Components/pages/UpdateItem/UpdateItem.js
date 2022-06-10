import { toast } from "react-toastify";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import "./UpdateItem.css";

const UpdateItem = () => {
  const [item, setItem] = useState({});
  const [updateItem, setUpdateItem] = useState({});
  const {id}  = useParams();


  useEffect(() => {
    // setLoading(true);
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
  }, [id]);
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
  const {_id}= item;
  const data = await axios.put(`https://stark-dusk-04607.herokuapp.com/inventory/${_id}`,{updateItem});
  if(!data.success) return toast.error(data.error, {
    position: toast.POSITION.TOP_CENTER
  })

  toast(data.message, {
    position: toast.POSITION.TOP_CENTER
  })
  // console.log(data);
}

  const handleDelivery = () => {};

  return (
    <div className="add-area">
      <h1 className=" text-4xl">Update your item</h1>
      <div className="update-area">
        <form    className="add-from" onClick={handleUpdate}>
          <div className="input-fild">
            <label>Item name</label>
            <input onChange={handleUpdateName}
              type="text"
              name="name"
              value={updateItem.name}
              required
      
        
            />
          </div>
          <div className="input-fild">
            <label>Origin</label>
            <input onChange={handleUpdateOrigin}
              type="text"
              name="origin"
              value={updateItem.made}
              required

             
            />
          </div>
          <div className="input-fild">
            <label>Quantity</label>
            <input onChange={handleUpdateQuantity}
              type="number"
              name="quantity"
              value={updateItem.quantity}
              required
              
            />
          </div>
          <div className="input-fild">
            <label>Price</label>
            <input onChange={handleUpdatePrice}
              type="number"
              name="price"
              value={updateItem.price}
              required

              
            />
          </div>
          <div className="input-fild">
            <label>Image url</label>
            <input  onChange={handleUpdateUrl}
              type="url"
              name="url"
              value={updateItem.url}
              required

              
            />
          </div>
          <div className="button">
            <input type="submit" value="Update" />
          </div>
        </form>

        <form onSubmit={handleDelivery} className="add-from">
          <div className="input-fild">
            <label>Item name</label>
            <input
              type="text"
              name="name"
              value={item.name}
            />
          </div>

          <div className="input-fild">
            <label> Delivery quantity</label>
            <input
              type="number"
              name="quantity"
              placeholder="Enter your delivery quantity"
              required
              autoComplete="off"
            />
          </div>

          <div className="button">
            <input type="submit" value="Delivery Item" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
