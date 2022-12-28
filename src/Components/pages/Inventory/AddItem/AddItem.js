import React from "react";
import axios from "axios";
import "./AddItem.css";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { Helmet } from "react-helmet-async";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const handleAdd = async (event) => {
    event.preventDefault();
    const items = {
      user: user.displayName,
      email: user.email,
      name: event.target.name.value,
      made: event.target.origin.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      url: event.target.url.value,
    };
    // console.log(items);

    try {
      const { data } = await axios.post(
        "https://pencilbookserver.up.railway.app/inventory",
        items,
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (!data.success) {
        return toast.error(data.error, {
          position: toast.POSITION.TOP_CENTER,
        });
      }

      toast.success(data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      event.target.reset();
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <div className="add-area">
      <Helmet>
        <title> Add item - PENCIL BOOK</title>
      </Helmet>
      <h1>Add your item</h1>
      <form onSubmit={handleAdd} className="add-from">
        <div className="input-fild">
          <label>Item name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your item name"
            required
            autoComplete="off"
          />
        </div>
        <div className="input-fild">
          <label>Origin</label>
          <input
            type="text"
            name="origin"
            placeholder="Enter item origin"
            required
            autoComplete="off"
          />
        </div>
        <div className="input-fild">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            placeholder="Enter quantity"
            required
            autoComplete="off"
          />
        </div>
        <div className="input-fild">
          <label>Price</label>
          <input
            type="text"
            name="price"
            placeholder="Enter your full name"
            required
            autoComplete="off"
          />
        </div>
        <div className="input-fild">
          <label>Image url</label>
          <input
            type="url"
            name="url"
            placeholder="Enter your image url"
            required
            autoComplete="off"
          />
        </div>
        <div className="button">
          <input type="submit" value="Add Item" />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
