import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../State/Admin/Order/Action";

const orderStatus = [
  { label: "On the way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

const Order = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);
  const { auth} = useSelector((store) => store)

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const handleIndexUser = adminOrder?.orders?.filter(order => order?.user?.id === auth.user.id);
  console.log(handleIndexUser)

  return (
    <div className="px:5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between", pt:"20px"}}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-4xl">Filter</h1>

            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDERS STATUS</h1>

              {orderStatus.map((option) => (
                <div className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:indigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-5">
            {handleIndexUser.map((order) =>
              order?.orderItems.map((orderItem) => <OrderCard key={orderItem.id} orderId={order?.id} orderItem={orderItem}/>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
