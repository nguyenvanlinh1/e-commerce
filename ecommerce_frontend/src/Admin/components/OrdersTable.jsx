import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from "../../State/Admin/Order/Action";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Pagination,
  PaginationItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useLocation, useNavigate } from "react-router-dom";

const OrdersTable = () => {
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const location = useLocation();

  const [productData, setProductData] = useState({
    status: "",
    sort: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }


  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);

  const filterOrdersByStatus = (orders, status) => {
    if (!orders || !Array.isArray(orders)) {
      return [];
    }
    if(status === "ALL"){
      return orders;
    }
    else{
      return orders.filter(item => item?.orderStatus === status);
    }
  };
  
  const sortFilterOrdersByStatus = (orders, sort) => {
    if(!orders || !Array.isArray(orders)){
      return [];
    }
    if(sort === "price_low"){
      return orders.sort((a, b) => a?.totalPrice - b?.totalPrice);
    }
    else if(sort === "price_high"){
      return orders.sort((a, b) => b?.totalPrice - a?.totalPrice);
    }
    else{
      return orders;
    }
  };

  useEffect(() => {
    dispatch(getOrders());
    filterOrdersByStatus(adminOrder?.orders, productData.status);
    sortFilterOrdersByStatus(filterOrdersByStatus(adminOrder?.orders, productData.status), productData.sort)
  }, [
    adminOrder.shipped,
    adminOrder.confirmed,
    adminOrder.delivered,
    adminOrder.deletedOrder,
  ]);

  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose();
  };

  const handleShipedOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose();
  };

  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId));
    handleClose();
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  const handlePaginationChange = (event, value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", value);
    const query = searchParams.toString();
    navigate({search: `?${query}`})
  }


  return (
    <div className="p-5 bg-[#18122B] h-[100vh]">
      <Card sx={{ bgcolor: "#443C68" }}>
        <Typography variant="h5" className="p-3 text-white">
          Sort{" "}
          <IconButton>
            <LayersIcon sx={{ color: "white" }} />
          </IconButton>
        </Typography>
        <Grid container spacing={2} className="mb-5 px-5">
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: "white" }}>Status</InputLabel>
              <Select
                name="status"
                label="Status"
                onChange={handleOnChange}
                value={productData.status}
                sx={{ color: "white" }}
              >
                <MenuItem value="PENDING">PENDING</MenuItem>
                <MenuItem value="PLACED">PLACED</MenuItem>
                <MenuItem value="DELIVERED">DELIVERED</MenuItem>
                <MenuItem value="SHIPPED">SHIPPED</MenuItem>
                <MenuItem value="CONFIRMED">CONFIRMED</MenuItem>
                <MenuItem value="ALL">ALL</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: "white" }}>Sort to Price</InputLabel>
              <Select
                name="sort"
                label="Sort to Price"
                onChange={handleOnChange}
                sx={{ color: "white" }}
              >
                <MenuItem value="price_low">Low To High</MenuItem>
                <MenuItem value="price_high">Higt To Low</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Card>
      <Typography variant="h4" className="p-3 text-white">All Orders</Typography>
      <Card className="mt-2">
        <TableContainer component={Paper} sx={{ bgcolor: "#443C68" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Image</TableCell>
                <TableCell sx={{ color: "white" }} align="left">Title</TableCell>
                <TableCell sx={{ color: "white" }} align="left">ID</TableCell>
                <TableCell sx={{ color: "white" }} align="left">Total Price($)</TableCell>
                <TableCell sx={{ color: "white" }} align="left">Status</TableCell>
                <TableCell sx={{ color: "white" }} align="left">Update</TableCell>
                <TableCell sx={{ color: "white" }} align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortFilterOrdersByStatus(filterOrdersByStatus(adminOrder?.orders, productData.status), productData.sort).map((item, index) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="" className="">
                    <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItem) => (
                        <Avatar src={orderItem.product.imageUrl}></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>

                  <TableCell align="left" scope="row">
                    {item.orderItems.map((orderItem) => (
                      <p className="text-white">{orderItem.product.title}</p>
                    ))}
                    {/* {item.title} */}
                  </TableCell>

                  <TableCell sx={{ color: "white" }} align="left">{item.id}</TableCell>
                  <TableCell sx={{ color: "white" }} align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left">
                    <span
                      className={`text-white px-5 py-2 rounded-full ${
                          item.orderStatus === "CONFIRMED"
                          ? "bg-[#33cc33]"
                          : item.orderStatus === "SHIPPED"
                          ? "bg-[#00bfff]"
                          : item.orderStatus === "PLACED"
                          ? "bg-[#02B290]"
                          : item.orderStatus === "PENDING"
                          ? "bg-[#e6e600]"
                          : "bg-[#ff3333]"
                      }`}
                    >
                      {item.orderStatus}
                    </span>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      id="basic-button"
                      aria-haspopup="true"
                      onClick={(event) => handleClick(event, index)}
                      aria-controls={`basic-menu-${item.id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                      sx={{ color: "yellow" }}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item.id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={() => handleClose(index)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={() => handleConfirmedOrder(item.id)}>
                        Confirmed Order
                      </MenuItem>
                      <MenuItem onClick={() => handleShipedOrder(item.id)}>
                        Shipped Order
                      </MenuItem>
                      <MenuItem onClick={() => handleDeliveredOrder(item.id)}>
                        Delivered Order
                      </MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => handleDeleteOrder(item.id)}
                      variant="outlined"
                      sx={{ color: "red" }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Pagination
        sx={{
          p: 2,
          mt: "5px",
          display: "flex",
          justifyContent: "center",
          bgcolor: "#443C68",
        }}
        count={10}
        color="primary"
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
            sx={{ color: "white" }}
          />
        )}
        onChange={handlePaginationChange}
      />
    </div>
  );
};

export default OrdersTable;
