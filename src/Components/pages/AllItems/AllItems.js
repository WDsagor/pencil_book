import React from "react";

const AllItems = ({ item }) => {
  const { name, quantity, price, made, url } = item;
  console.log(item);
  return (
    <tr>
      <td><img src={url} alt="" /></td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{made}</td>
    </tr>
  );
};

export default AllItems;
