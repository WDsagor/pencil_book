import React from "react";
import AllItem from "../../../useHooks/useHooks";
import Loading from "../../Loading/Loading";
import AllItems from "../AllItems/AllItems";
import './Invetory.css'

const Inventory = () => {
  const [items, setItems, itemLoading] = AllItem();
  if(itemLoading){
    return <Loading></Loading>
  }
  return (
    <div className="items">
      <h1 className=" text-4xl font-bold uppercase">Inventory</h1>
      <h1 className=" text-xl uppercase">{items.length} Added Here </h1>
      <table>
        <thead>
          <tr>
            <th className=" uppercase">Image</th>
            <th className=" uppercase">Item Name </th>
            <th className=" uppercase">Quantity</th>
            <th className=" uppercase">Price</th>
            <th className=" uppercase">Added user Name </th>
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
