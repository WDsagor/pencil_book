import React from "react";

const AllItems = ({ item }) => {
  const { name, quantity, price, url, user } = item;
  console.log(item);
  return (
    <tr>
      <td><img src={url} alt="" /></td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{user}</td>
    </tr>
  );
};

export default AllItems;
