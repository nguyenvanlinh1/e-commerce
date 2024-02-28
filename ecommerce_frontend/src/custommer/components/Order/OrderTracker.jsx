import { Button, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out For Delivery",
  "Delivered",
];

const OrderTracker = ({ activeStep }) => {
  return activeStep === 4 ? (
    <div className="relative flex justify-around w-full">
      <Stepper activeStep={activeStep} alternativeLabel className="w-[75%]">
        {steps.map((label) => (
          <Step>
            <StepLabel sx={{ color: "#9155fd", fontSize: "36px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Button
        sx={{ color: "#E01529", fontSize: "14px" }}
        startIcon={<ArrowRightAltIcon />}
      >
        Return
      </Button>
    </div>
  ) : (
    <div className="relative flex justify-around w-full">
      <Stepper activeStep={activeStep} alternativeLabel className="w-[75%]">
        {steps.map((label) => (
          <Step>
            <StepLabel sx={{ color: "#9155fd", fontSize: "36px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
