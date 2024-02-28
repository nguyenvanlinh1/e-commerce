import React, { useEffect, useState } from "react";
import { Input, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import { createAddress } from "../../../State/Address/Action";
import { toast } from "react-toastify";

export default function Profile() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  
  const [productData, setProductData] = useState({
    userId: auth?.user?.id,
    city: "",
    state: "",
    streetAddress: "",
    zipCode: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddInfoUser = (e) => {
    e.preventDefault();
    dispatch(createAddress(productData));
    toast.success("Added user information successfully!")
  };

  const handleUpdateInfoUser = (e) => {
    toast.success("Updated user information successfully!")
  }

  return (
    <div className="transition-colors duration-300">
      <div className="profileShadow container mx-auto p-4">
        <div className="shadow-xl border bg-white rounded-lg p-6">
          <h1 className="text-2xl font-semibold mb-10 text-black text-center">
            <PersonIcon sx={{ fontSize: "36px", mr: 2 }}></PersonIcon>
            Personal Information
          </h1>
          {auth?.user?.address.length === 0 ? (
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <TextField
                  label="First Name"
                  name="firstName"
                  value={auth.user.firstName}
                  className="border p-2 rounded w-full"
                ></TextField>
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={auth.user.lastName}
                  className="border p-2 rounded w-full"
                ></TextField>
              </div>
              <div className="mb-4">
                <TextField
                  label="Email"
                  name="email"
                  value={auth.user.email}
                  className="border p-2 rounded w-full"
                  disabled
                ></TextField>
              </div>
              <div className="mb-4">
                <TextField
                  label="Mobile"
                  name="mobile"
                  className="border p-2 rounded w-full"
                  value={productData.mobile}
                  onChange={handleChange}
                ></TextField>
              </div>
              <div className="mb-4">
                <TextField
                  label="Address"
                  name="streetAddress"
                  className="border p-2 rounded w-full"
                  value={productData.streetAddress}
                  onChange={handleChange}
                ></TextField>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <TextField
                  label="City"
                  className="border p-2 rounded w-full"
                  name="city"
                  value={productData.city}
                  onChange={handleChange}
                ></TextField>
                <TextField
                  label="State/ Province"
                  className="border p-2 rounded w-full"
                  name="state"
                  value={productData.state}
                  onChange={handleChange}
                ></TextField>
                <TextField
                  label="Zip/ Code"
                  name="zipCode"
                  className="border p-2 rounded w-full"
                  value={productData.zipCode}
                  onChange={handleChange}
                ></TextField>
              </div>
              <div className="flex justify-evenly items-center">
                <button
                  type="button"
                  id="theme-toggle"
                  className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-800 focus:outline-none transition-colors"
                  onClick={handleAddInfoUser}
                >
                  Add information
                </button>
                <button
                  type="button"
                  id="theme-toggle"
                  className="px-4 py-2 rounded bg-gray-500 text-white focus:outline-none transition-colors"
                  disabled
                >
                  Update information
                </button>
              </div>
            </form>
          ) : (
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <TextField
                  label="First Name"
                  name="firstName"
                  value={auth.user?.firstName}
                  className="border p-2 rounded w-full"
                ></TextField>
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={auth.user?.lastName}
                  className="border p-2 rounded w-full"
                ></TextField>
              </div>
              <div className="mb-4">
                <TextField
                  label="Email"
                  name="email"
                  value={auth.user?.email}
                  className="border p-2 rounded w-full"
                  disabled
                ></TextField>
              </div>
              <div className="mb-4">
                <TextField
                  label="Mobile"
                  name="mobile"
                  className="border p-2 rounded w-full"
                  value={auth.user?.address[0].mobile}
                  onChange={handleChange}
                ></TextField>
              </div>
              <div className="mb-4">
                <TextField
                  label="Address"
                  name="streetAddress"
                  className="border p-2 rounded w-full"
                  value={auth.user?.address[0].street_address}
                  onChange={handleChange}
                ></TextField>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <TextField
                  label="City"
                  className="border p-2 rounded w-full"
                  name="city"
                  value={auth.user?.address[0].city}
                  onChange={handleChange}
                ></TextField>
                <TextField
                  label="State/ Province"
                  className="border p-2 rounded w-full"
                  name="state"
                  value={auth.user?.address[0].state}
                  onChange={handleChange}
                ></TextField>
                <TextField
                  label="Zip/ Code"
                  name="zipCode"
                  className="border p-2 rounded w-full"
                  value={auth.user?.address[0].zipCode}
                  onChange={handleChange}
                ></TextField>
              </div>
              <div className="flex justify-evenly items-center">
                <button
                  type="button"
                  id="theme-toggle"
                  className="px-4 py-2 rounded bg-gray-500 text-white focus:outline-none transition-colors"
                  disabled
                >
                  Add information
                </button>
                <button
                  type="button"
                  id="theme-toggle"
                  className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-800 focus:outline-none transition-colors"
                  onClick={handleUpdateInfoUser}
                >
                  Update information
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
