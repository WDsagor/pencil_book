import React from "react";
// import "./SixItem.css";

const SixItem = ({ item }) => {
  const { name, quantity, price, url } = item;
  return (
    <div className="card w-72 sm:w-96 lg:w-80 bg-base-100 shadow-lg">
  <figure className="h-48 w-48 mx-auto"><img className="pt-5"  src={url} alt={name}/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Available Quantity : {quantity}</p>
    <div className="card-actions justify-end text-right">
    <p className=" font-bold">Price {price} <span className="font-2xl font-black">&#2547;</span></p>
    </div>
  </div>
</div>
  );
};

export default SixItem;
