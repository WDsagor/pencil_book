import React from "react";
import AllItem from "../../../useHooks/useHooks";
import AllItems from "../AllItems/AllItems";
import './Invetory.css'

const Inventory = () => {
  const [items, setItems] = AllItem([]);

  return (
    <div className="items">
      <h1>Inventory</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Item Name </th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Item Origin</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <AllItems key={item._id} item={item}></AllItems>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
