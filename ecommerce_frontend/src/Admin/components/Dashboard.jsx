import { Grid } from "@mui/material";
import React from "react";
import Achivement from "./Achivement";
import MonthlyOverview from "./MonthlyOverview";
import OrdersTable from "../View/OrderTableView";
import ProductsTableView from "../View/ProductTableView";
import WeeklyOverview from "./WeeklyOverview";
import TotalEarning from "./TotalEarning";
import OtherInfo from "./OtherInfo";

const AdminDashboard = () => {
  return (
    <div className="p-8 bg-[#18122B]">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className="shadow-lg shadow-gray-600">
            <Achivement />
          </div>
        </Grid>

        <Grid item xs={12} md={8}>
          <div className="shadow-lg shadow-gray-600">
            <MonthlyOverview />
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <div className="shadow-lg shadow-gray-600">
            <WeeklyOverview />
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <div className="shadow-lg shadow-gray-600">
            <TotalEarning />
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
            <OtherInfo/>
        </Grid>

        {/* <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-600">
            <OrdersTable />
          </div>
        </Grid> */}

        {/* <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-600">
            <ProductsTableView/>
          </div>
        </Grid> */}
        
      </Grid>
    </div>
  );
};

export default AdminDashboard;
