import { toast } from "react-toastify";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdateItem = () => {
  const [dError, setDError] = useState("");
  const [item, setItem] = useState({});
  const [updateItem, setUpdateItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `https://stationery-inventory-management-server-wdsagor.vercel.app/inventory/${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setUpdateItem(data);
      });
  }, [id]);
  const handleUpdateName = (event) => {
    const newName = event.target.value;
    const { name, ...rest } = updateItem;
    const newItem = { name: newName, ...rest };
    setUpdateItem(newItem);
  };
  const handleUpdateOrigin = (event) => {
    const newMade = event.target.value;
    const { made, ...rest } = updateItem;
    const newItem = { made: newMade, ...rest };
    setUpdateItem(newItem);
  };
  const handleUpdateQuantity = (event) => {
    const newQuantity = event.target.value;
    const { quantity, ...rest } = updateItem;
    const newItem = { quantity: newQuantity, ...rest };
    setUpdateItem(newItem);
  };
  const handleUpdatePrice = (event) => {
    const newPrice = event.target.value;
    const { price, ...rest } = updateItem;
    const newItem = { price: newPrice, ...rest };
    setUpdateItem(newItem);
  };
  const handleUpdateUrl = (event) => {
    const newUrl = event.target.value;
    const { url, ...rest } = updateItem;
    const newItem = { url: newUrl, ...rest };
    setUpdateItem(newItem);
  };
  const handleUpdate = async (event) => {
    event.preventDefault();
    // console.log(updateItem);
    const setupdateItem = {
      name: updateItem.name,
      made: updateItem.made,
      price: updateItem.price,
      quantity: updateItem.quantity,
      url: updateItem.url,
    };

    try {
      const { data } = await axios.put(
        `https://stationery-inventory-management-server-wdsagor.vercel.app/inventory/${id}`,
        setupdateItem,
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
      if (data.success) {
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  const handleDelivery = async (event) => {
    event.preventDefault();
    const deliveryItem = {
      name: item.name,
      quantity: event.target.deliveryQuantity.value,
    };

    try {
      if (
        parseInt(item.quantity) >= event.target.deliveryQuantity.value &&
        event.target.deliveryQuantity.value > 0
      ) {
        const { data } = await axios.put(
          `https://stationery-inventory-management-server-wdsagor.vercel.app/delivery/${id}`,
          deliveryItem,
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
        if (data.success) {
          toast.success(data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        event.target.reset();
        setDError("");
      } else {
        setDError(
          `Your quantity not available, Available quantity ${item.quantity}`
        );
      }
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title> Update item - PENCIL BOOK</title>
      </Helmet>
      <h1 className=" text-orange-500 text-4xl text-center font-bold pt-10 uppercase">
        Manage your item
      </h1>
      <div className="text-center text-white">
        <p className="p-6 w-1/2 mx-auto uppercase text-slate-400">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div className="hero min-h-screen">
        <div>
          <div className="hero-content flex-col lg:flex-row">
            <form onSubmit={handleUpdate}>
              <h1 className="text-4xl font-bold py-5 text-white">
                Update item
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  className="w-full input input-bordered bg-transparent border-white text-white"
                  onChange={handleUpdateName}
                  type="text"
                  name="name"
                  value={updateItem.name}
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white">Origin</span>
                </label>
                <input
                  className="w-full input input-bordered bg-transparent border-white text-white"
                  onChange={handleUpdateOrigin}
                  type="text"
                  name="origin"
                  value={updateItem.made}
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white">Quantity</span>
                </label>
                <input
                  className="w-full input input-bordered bg-transparent border-white text-white"
                  onChange={handleUpdateQuantity}
                  type="number"
                  name="quantity"
                  value={updateItem.quantity}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Price</span>
                </label>
                <input
                  className="w-full input input-bordered bg-transparent border-white text-white"
                  onChange={handleUpdatePrice}
                  type="number"
                  name="price"
                  value={updateItem.price}
                  required
                />
              </div>
              <div className="form-control my-5">
                <label className="label">
                  <span className="label-text text-white">Image URL</span>
                </label>
                <input
                  className="w-96 input input-bordered bg-transparent border-white text-white"
                  onChange={handleUpdateUrl}
                  type="url"
                  name="url"
                  value={updateItem.url}
                  required
                />
              </div>
              <div className="form-control">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Update"
                />
              </div>
            </form>
            <div>
              <form onSubmit={handleDelivery} className=" mt-10 lg:ml-10">
                <h1 className="text-4xl font-bold text-white">Delivery item</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    className="w-96 input input-bordered bg-transparent border-white text-white"
                    type="text"
                    name="name"
                    value={item.name}
                    readOnly
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">
                      Delivery quantity
                    </span>
                  </label>
                  <input
                    className="w-96 input input-bordered bg-transparent border-white text-white"
                    type="number"
                    name="deliveryQuantity"
                    placeholder="Enter your delivery quantity"
                    required
                    autoComplete="off"
                  />
                  {dError ? <span className=" text-error">{dError}</span> : ""}
                </div>

                <div className="form-control">
                  <input
                    className="btn btn-primary mt-6 "
                    type="submit"
                    value="Delivery Item"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
