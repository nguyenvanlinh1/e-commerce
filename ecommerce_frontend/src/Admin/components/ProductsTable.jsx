import {
  Avatar,
  Box,
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  findProducts,
  getAllProduct,
} from "../../State/Product/Action";
import { useLocation, useNavigate } from "react-router-dom";
import LayersIcon from "@mui/icons-material/Layers";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = useSelector((store) => store);
  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  const pageNumber = searchParams.get("page") || 1;

  useEffect(() => {
    const data = {
      pageNumber: pageNumber-1,
      pageSize: 5
    };
    dispatch(getAllProduct(data));
  }, [pageNumber, product.deleteProduct]);

  console.log("Product: ", product)

  const [productData, setProductData] = useState({
    category: "all",
    sort: "",
  });

  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === "category") {
      if (value !== "all") {
        setIsCategorySelected(true);
        navigate(`/admin/products/?category=` + value);
        const data = {
          category: value,
          colors: [],
          sizes: [],
          minPrice: 0,
          maxPrice: 10000,
          minDiscount: 0,
          sort: productData.sort,
          pageNumber: 0,
          pageSize: 5,
          stock: "",
        };
        dispatch(findProducts(data));
      } else {
        setIsCategorySelected(false);
        const data = {
          pageNumber: pageNumber-1,
          pageSize: 5
        };
        navigate(`/admin/products`);
        dispatch(getAllProduct(data));
      }
    } else {
      if (name === "sort") {
        navigate(
          `/admin/products/?category=${productData.category}&sort=${value}`
        );
        const data = {
          category: productData.category,
          colors: [],
          sizes: [],
          minPrice: 0,
          maxPrice: 10000,
          minDiscount: 0,
          sort: value,
          pageNumber: 0,
          pageSize: 5,
          stock: "",
        };
        dispatch(findProducts(data));
      }
    }
  };

  const handleProductDelete = (productId) => {
    dispatch(deleteProduct(productId));
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
              <InputLabel sx={{ color: "white" }}>Category</InputLabel>
              <Select
                name="category"
                label="Category"
                onChange={handleOnChange}
                value={productData.thirdLavelCategory}
                sx={{ color: "white" }}
              >
                <MenuItem value="men_jeans">Men Jeans</MenuItem>
                <MenuItem value="men_shirts">Men Shirt</MenuItem>
                <MenuItem value="trousers">Trousers</MenuItem>
                <MenuItem value="men_t_shirts">Men T-Shirt</MenuItem>
                <MenuItem value="sweaters">Sweaters</MenuItem>
                <MenuItem value="activewear">Activewear</MenuItem>
                <MenuItem value="all">All Product</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth disabled={!isCategorySelected}>
              <InputLabel sx={{ color: "white" }}>Availability</InputLabel>
              <Select
                name="availability"
                label="Availability"
                onChange={handleOnChange}
                sx={{ color: "white" }}
              >
                <MenuItem>ABC</MenuItem>
                <MenuItem>CDE</MenuItem>
                <MenuItem>FGH</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth disabled={!isCategorySelected}>
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
      <Card className="mt-2" sx={{ bgcolor: "#443C68" }}>
        <Typography variant="h4" className="p-3">
          All Products
        </Typography>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, bgcolor: "#443C68" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Image</TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  Title
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  Category
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  Price($)
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  Quantity
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  Update
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            {/* <TableBody>
              {productData.category !== "all"
                ? product?.products?.content?.map((item) => (
                    <TableRow
                      key={item.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="left">
                        <Avatar src={item.imageUrl}></Avatar>
                      </TableCell>

                      <TableCell align="left" scope="row">
                        {item.title}
                      </TableCell>

                      <TableCell align="left">{item.category.name}</TableCell>
                      <TableCell align="left">{item.price}</TableCell>
                      <TableCell align="left">{item.quantity}</TableCell>
                      <TableCell align="left">
                        <Button
                          onClick={() => handleProductDelete(item.id)}
                          variant="outlined"
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                : Array.isArray(product?.products) &&
                  product?.products?.map((item) => (
                    <TableRow
                      key={item.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="left">
                        <Avatar src={item.imageUrl}></Avatar>
                      </TableCell>

                      <TableCell align="left" scope="row">
                        {item.title}
                      </TableCell>

                      <TableCell align="left">{item.category.name}</TableCell>
                      <TableCell align="left">{item.price}</TableCell>
                      <TableCell align="left">{item.quantity}</TableCell>
                      <TableCell align="left">
                        <Button
                          onClick={() => handleProductDelete(item.id)}
                          variant="outlined"
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody> */}
            <TableBody>
            {product?.products?.content?.map((item) => (
                    <TableRow
                      key={item.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="left">
                        <Avatar src={item.imageUrl}></Avatar>
                      </TableCell>

                      <TableCell align="left" scope="row" sx={{color:"white"}}>
                        {item.title}
                      </TableCell>

                      <TableCell align="left" sx={{color:"white"}}>{item.category.name}</TableCell>
                      <TableCell align="left" sx={{color:"white"}}>{item.price}</TableCell>
                      <TableCell align="left" sx={{color:"white"}}>{item.quantity}</TableCell>
                      <TableCell align="left">
                        <Button
                          variant="outlined"
                          sx={{color:"yellow"}}
                        >
                          Update
                        </Button>
                      </TableCell>
                      <TableCell align="left">
                        <Button
                          onClick={() => handleProductDelete(item.id)}
                          variant="outlined"
                          sx={{color:"red"}}
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
        count={product?.products?.totalPages}
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

export default ProductsTable;
