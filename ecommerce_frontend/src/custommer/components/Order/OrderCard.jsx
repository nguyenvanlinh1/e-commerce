import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = ( {orderItem, orderId}) => {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/account/order/${orderId}`)} className="p-5 shadow-md shadow-black hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={orderItem?.product?.imageUrl}
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">{orderItem?.product?.title}</p>
              <p className="opacity-50 text-xs font-semibold">Size: {orderItem?.size}</p>
              <p className="opacity-50 text-xs font-semibold">Color: {orderItem?.product?.color}</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p className="text-green-500 text-xl">{orderItem?.product?.price}$</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <div>

            <p>
                <AdjustIcon sx={{width:"15px", height:"15px"}} className="text-green-600 mr-2 text-sm"/>
                <span>Delivered On {orderItem?.product?.createdAt.split("T")[0]}</span>
                <p className="text-gray-700">{orderItem?.product?.createdAt.split("T")[1].split(".")[0]}</p>
            </p>
            <p className="text-sm">
                Your Item has Beed  Delivered
            </p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivered On {orderItem?.product?.createdAt.split("T")[0]}</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
