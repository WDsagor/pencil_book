import React from "react";
import { toast } from "react-toastify";
import axios from "axios";

import "./MyItem.css";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useEffect } from "react";
import { useState } from "react";
import NotAdded from "./NotAdded";
import { Helmet } from "react-helmet-async";

const MyItem = () => {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);
  const naviget = useNavigate();

  useEffect(() => {
    const url = `pencilbookserver.up.railway.app/myitems/${user?.email}`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user?.email]);

  if (items.length === 0) {
    return <NotAdded></NotAdded>;
  }

  // if(itemLoading){
  //   return <Loading></Loading>
  // }
  const deleteItem = (id) => {
    const confirm = window.confirm("Are you sure to delete this item ?");
    if (confirm) {
      (async () => {
        const { data } = await axios.delete(
          `pencilbookserver.up.railway.app/inventory/${id}`,
          {
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );

        if (!data.success)
          return toast.error(data.error, {
            position: toast.POSITION.TOP_CENTER,
          });

        toast(data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        const remainItem = items.filter((item) => item._id !== id);
        setItems(remainItem);
      })();
    }
  };
  const itemUpdate = (id) => {
    naviget(`/update/${id}`);
  };
  return (
    <div className="items">
      <Helmet>
        <title>My Items - PENCIL BOOK</title>
      </Helmet>
      <h1 className="text-4xl uppercase font-bold">Manage your item</h1>
      <h2 className="text-lg uppercase pb-7 ">
        You can Manage your item's Update, delete, modify
      </h2>
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
                  <button
                    className="updateBtn"
                    onClick={() => itemUpdate(item?._id)}>
                    Update
                  </button>{" "}
                  <button
                    className="deleteBtn"
                    onClick={() => deleteItem(item?._id)}>
                    Delete
                  </button>
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
