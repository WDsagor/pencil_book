import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateItem.css";

const UpdateItem = () => {
  const [item, setItem] = useState({});
//   const [loading, setLoading] = useState(false);
  const {id}  = useParams();
//   console.log(id);

  useEffect(() => {
    // setLoading(true);
    const url = `https://stark-dusk-04607.herokuapp.com/inventory${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        setItem(data);
        // setLoading(false);
      });
  }, [id]);

  const handleUdate = () => {};
  const handleDelivery = () => {};

  return (
    <div className="add-area">
      <h1>Update your item</h1>
      <div className="update-area">
        <form onSubmit={handleUdate} className="add-from">
          <div className="input-fild">
            <label>Item name</label>
            <input
              type="text"
              name="name"
              value={item.name}
              required
              autoComplete="off"
            />
          </div>
          <div className="input-fild">
            <label>Origin</label>
            <input
              type="text"
              name="origin"
              value={item.made}

              required
              autoComplete="off"
            />
          </div>
          <div className="input-fild">
            <label>Quantity</label>
            <input
              type="text"
              name="quantity"
              value={item.quantity}

              required
              autoComplete="off"
            />
          </div>
          <div className="input-fild">
            <label>Price</label>
            <input
              type="text"
              name="price"
              value={item.price}

              required
              autoComplete="off"
            />
          </div>
          <div className="input-fild">
            <label>Image url</label>
            <input
              type="url"
              name="url"
              value={item.url}

              required
              autoComplete="off"
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

              required
              autoComplete="off"
            />
          </div>

          <div className="input-fild">
            <label> Delivery quantity</label>
            <input
              type="text"
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
