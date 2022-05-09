import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
import AllItem from "../../../useHooks/useHooks";
import "./MyItem.css";
import { useNavigate } from "react-router-dom";

const MyItem = () => {
  const [items, setItems] = AllItem();
  const naviget = useNavigate()

const deleteItem = id =>{
  const confirm = window.confirm("Are you sure to delete this item ?")
  if(confirm){
    (async () => {
      const { data } = await axios.delete(`http://localhost:5000/inventory/${id}`);
      
      if(!data.success) return toast.error(data.error, {
        position: toast.POSITION.TOP_CENTER
      })
  
      toast(data.message, {
        position: toast.POSITION.TOP_CENTER
      })
      const remainItem = items.filter(item=> item._id !== id);
      setItems(remainItem);
    })()
  }
} 
const itemUpdate = id =>{
  naviget(`/update/${id}`)

} 
  return (
    <div className="items">
      <h2>Manage your item</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Item Name </th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Manage Item</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item._id}>
                <td>
                  <img src={item.url} alt="" />
                </td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>
                  <button className="updateBtn" onClick={()=>itemUpdate(item._id)}>Update</button> <button className="deleteBtn" onClick={()=> deleteItem(item._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyItem;
