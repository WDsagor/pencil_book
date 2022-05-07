import React, { useEffect, useState } from "react";
import AllItem from "../../../useHooks/useHooks";
import AllItems from "../AllItems/AllItems";

const Inventory = () => {
  const [items, setItems] = AllItem([]);

  
  return (
    <div>
      <h1>Inventory</h1>
      <div>
        {items.map((item) => (
          <AllItems key={item._id} item={item}></AllItems>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
