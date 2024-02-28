import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { createProduct } from "../../State/Product/Action";
import { toast } from "react-toastify";

const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
  { name: "XL", quantity: 0 },
];

const CreateProductForm = () => {
  const [isfristCategorySelect, setfristCategorySelected] = useState(false);
  const [isSecondCategorySelect, setSecondCategorySelected] = useState(false);
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPersent: "",
    size: initialSizes,
    quantity: "",
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
    description: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === "topLavelCategory") {
      setfristCategorySelected(true);
    } else if (name === "secondLavelCategory") {
      setSecondCategorySelected(true);
    }
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? (name = "quantity") : (name = e.target.name);

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(productData));
    toast.success("Added product successfully");
  };

  console.log("product: ", productData)

  return (
    <div className="p-5 bg-[#fff]">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="pb-5 text-center font-bold"
      >
        Add New Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              id="outlined-required"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPersent"
              value={productData.discountPersent}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLavelCategory"
                value={productData.topLavelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                <MenuItem value="kids">Kids</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLavelCategory"
                value={productData.secondLavelCategory}
                onChange={handleChange}
                label="Second Level Category"
                disabled={!isfristCategorySelect}
              >
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
                <MenuItem value="brands">Brands</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLavelCategory"
                value={productData.thirdLavelCategory}
                onChange={handleChange}
                label="Third Level Category"
                disabled={!isSecondCategorySelect}
              >
                {productData.topLavelCategory === "women" &&
                productData.secondLavelCategory === "clothing"
                  ? [
                      <MenuItem key="tops" value="tops">
                        Tops
                      </MenuItem>,
                      <MenuItem key="women_shirts" value="women_shirts">
                        Women Shirts
                      </MenuItem>,
                      <MenuItem key="dresses" value="dresses">
                        Dresses
                      </MenuItem>,
                      <MenuItem key="women_jeans" value="women_jeans">
                        Women Jeans
                      </MenuItem>,
                      <MenuItem key="sweaters" value="sweaters">
                        Sweaters
                      </MenuItem>,
                      <MenuItem key="women_t_shirts" value="t_shirts">
                        T-Shirts
                      </MenuItem>,
                      <MenuItem key="jackets" value="jackets">
                        Jackets
                      </MenuItem>,
                    ]
                  : null}
                {productData.topLavelCategory === "women" &&
                productData.secondLavelCategory === "accessories"
                  ? [
                      <MenuItem value="women_watches">Watches</MenuItem>,
                      <MenuItem value="women_wallets">Wallets</MenuItem>,
                      <MenuItem value="women_bags">Bags</MenuItem>,
                      <MenuItem value="women_sunglasses">Sunglasses</MenuItem>,
                      <MenuItem value="women_hats">Hats</MenuItem>,
                      <MenuItem value="women_belts">Belts</MenuItem>,
                    ]
                  : null}
                {productData.topLavelCategory === "men" &&
                productData.secondLavelCategory === "clothing"
                  ? [
                      <MenuItem value="men_shirts">Men Shirts</MenuItem>,
                      <MenuItem value="trousers">Trousers</MenuItem>,
                      <MenuItem value="men_jeans">Men Jeans</MenuItem>,
                      <MenuItem value="sweaters">Sweaters</MenuItem>,
                      <MenuItem value="men_t_shirts">T-Shirts</MenuItem>,
                      <MenuItem value="activewear">Activewear</MenuItem>,
                    ]
                  : null}
                {productData.topLavelCategory === "men" &&
                productData.secondLavelCategory === "accessories"
                  ? [
                      <MenuItem value="men_watches">Watches</MenuItem>,
                      <MenuItem value="men_wallets">Wallets</MenuItem>,
                      <MenuItem value="men_bags">Bags</MenuItem>,
                      <MenuItem value="men_sunglasses">Sunglasses</MenuItem>,
                      <MenuItem value="men_hats">Hats</MenuItem>,
                      <MenuItem value="men_belts">Belts</MenuItem>,
                    ]
                  : null}
                {productData.secondLavelCategory === "brands"
                  ? [
                      <MenuItem value="full_nelson">Full Nelson</MenuItem>,
                      <MenuItem value="my_way">My Way</MenuItem>,
                      <MenuItem value="re_arranged">Re-Arranged</MenuItem>,
                      <MenuItem value="counterfeit">Counterfeit</MenuItem>,
                      <MenuItem value="significant_other">
                        Significant Other
                      </MenuItem>,
                    ]
                  : null}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              value={productData.description}
              onChange={handleChange}
            />
          </Grid>
          {productData.size.map((size, index) => (
            <Grid container item spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Size Name"
                  name="name"
                  value={size.name}
                  onChange={(event) => handleSizeChange(event, index)}
                  disabled
                  fullWidth
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Quantity"
                  name="size_quantity"
                  type="number"
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                  fullWidth
                />
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ p: 1.8, m: "auto" }}
              className="py-20"
              size="large"
              type="submit"
            >
              Add New Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateProductForm;
