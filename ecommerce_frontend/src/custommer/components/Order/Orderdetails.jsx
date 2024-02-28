import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Button, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../State/Admin/Order/Action";


const status = [
  {orderStatus: "PENDING", index: 1},
  {orderStatus: "CONFIRMED", index: 2},
  {orderStatus: "SHIPPED", index: 3},
  {orderStatus: "DELIVERED", index: 4},
]

const Orderdetails = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {orderId} = useParams();
  const {adminOrder} = useSelector(store => store)
  const handleRate = (productId)  => {
    navigate(`/account/rate/${productId}`)
  }
  
  useEffect(() => {
    dispatch(getOrders())
  }, [])

  console.log("Order: ", adminOrder?.orders);

  const findIndexById = (orders, orderId) => {
    return orders?.findIndex((item) => item?.id === orderId) ?? -1;
  };
  
  const index = findIndexById(adminOrder?.orders, parseInt(orderId, 10));

  const orderStatusIndex = () => {
    return adminOrder?.orders[index]?.orderStatus === "PENDING" ? 1 : 
    adminOrder?.orders[index]?.orderStatus === "CONFIRMED" ? 2 :
    adminOrder?.orders[index]?.orderStatus === "SHIPPED" ? 3 :
    adminOrder?.orders[index]?.orderStatus === "DELIVERED" ? 4 : 5
  }

  const listProduct = adminOrder?.orders?.find(item => item?.id === parseInt(orderId, 10))
  return (
    <div className="px-5 lg:px-20 m-10">
      <div className="p-3 border-2 shadow-xl rounded-md">
        <h1 className="font-semibold text-xl py-7">Delivery Address</h1>
        <AddressCard address={listProduct?.shippingAddress} />
      </div>

      <div className="my-5 py-8 border-2 shadow-xl rounded-md">
        <OrderTracker activeStep={orderStatusIndex()} />
      </div>

      <Grid className="space-y-5" container>
        {listProduct?.orderItems?.map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item?.product?.imageUrl}
                  alt=""
                />

                <div className="space-y-2 ml-5">
                  <p className="font-semibold">{item?.product?.title}</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color: {item?.product?.color}</span> <span>Size: {item?.size}</span>
                  </p>
                  <p>Quantity: {item?.quantity}</p>
                  <p className="text-green-500">{item?.product?.price}$</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <Button sx={{fontSize:"0.7rem"}} onClick={() => handleRate(item?.product?.id)}>Rate & Review Product</Button>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Orderdetails;
