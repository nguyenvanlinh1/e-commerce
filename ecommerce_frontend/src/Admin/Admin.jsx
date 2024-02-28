import {
  Box,
  CssBaseline,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import EmailIcon from "@mui/icons-material/Email";
import InboxIcon from "@mui/icons-material/Inbox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminDashboard from "./components/Dashboard";
import CreateProductForm from "./components/CreateProductForm";
import ProductsTable from "./components/ProductsTable";
import OrdersTable from "./components/OrdersTable";
import CustomersTable from "./components/CustomersTable";
import WeeklyOverview from "./components/WeeklyOverview";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { useSelector } from "react-redux";
import HeaderAdmin from "./components/HeaderAdmin";

const menu = [
  { name: "Dashborad", path: "/admin", icon: <DashboardIcon /> },
  {
    name: "Products",
    path: "/admin/products",
    icon: <ProductionQuantityLimitsIcon />,
  },
  { name: "Customers", path: "/admin/customers", icon: <SupportAgentIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <BorderColorIcon /> },
  {
    name: "AddProduct",
    path: "/admin/product/create",
    icon: <AddCircleIcon />,
  },
  {
    name: "Weekly Overview",
    path: "/admin/weeklyOverview",
    icon: <SignalCellularAltIcon />,
  },
  // {name: "", path: " "},
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  console.log("Auth: ", auth);

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // border:"1px solid blue",
        height: "100%",
        bgcolor: "#18122B",
        color: "white",
      }}
    >
      <>
        {/* {isLargeScreen && <Toolbar />} */}
        <List>
          {menu.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => navigate(item.path)}
            >
              <ListItemButton>
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>

      <List>
        <Grid container>
          <Grid item xs={12}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText>Account</ListItemText>
              </ListItemButton>
            </ListItem>
          </Grid>
          <Grid item xs={12}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EmailIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText>Request</ListItemText>
              </ListItemButton>
            </ListItem>
          </Grid>
        </Grid>
      </List>
    </Box>
  );
  return (
    <>
      <div className="relative top-0">
        <div className="w-full h-[10%] fixed z-10">
          <HeaderAdmin />
        </div>
      </div>
      <div className="relative flex h-[90%]">
        <CssBaseline />
        <div className="shadow-lg shadow-gray-600 w-[15%] border border-gray-600 h-[92%] fixed top-[8%]">
          {drawer}
        </div>
        <div className="w-[85%] h-full ml-[15%] mt-[4%]">
          <Routes>
            <Route path="/" element={<AdminDashboard />}></Route>
            <Route
              path="/product/create"
              element={<CreateProductForm />}
            ></Route>
            <Route path="/products" element={<ProductsTable />}></Route>
            <Route path="/orders" element={<OrdersTable />}></Route>
            <Route path="/customers" element={<CustomersTable />}></Route>
            <Route path="/weeklyOverview" element={<WeeklyOverview />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Admin;
