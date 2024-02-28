import { Box, Button, Grid, Rating, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReviewProductCard from "./ReviewProductCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductsById } from "../../../State/Product/Action";
import { createReviewByProduct } from "../../../State/Review/Action";
import { createRatingByProduct } from "../../../State/Rating/Action";

const ReviewProduct = () => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { product } = useSelector((store) => store);

  const handleChange = (event, newValue) => {
    setRating(newValue)
    const address = {
      productId: productId,
      rating: newValue,
    }

    const ratingData = {address}
    dispatch(createRatingByProduct(ratingData))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = new FormData(e.currentTarget)
    const address = {
      productId: productId,
      review: data.get("title") + ":" + data.get("description"),
    };

    const reviewData = {address, navigate}
    dispatch(createReviewByProduct(reviewData))
  };



  useEffect(() => {
    dispatch(findProductsById({ productId }));
  }, []);

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <div className="font-bold border rounded-s-md shadow-md p-5 mt-5 mx-20">
            Rate & Review Product
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ReviewProductCard product={product} />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ p: 10 }}>
          <Grid
            className="border rounded-s-md shadow-md"
            sx={{ mb: 2, p: "20px" }}
            item
            xs={12}
          >
            <p>Rate This Product</p>
            <Rating name="half-rating" defaultValue={0} precision={1} onChange={handleChange} />
          </Grid>
          <Box className="border rounded-s-md shadow-md p-5">
            <Grid item xs={12}>
              <form onSubmit={handleSubmit}>
                <TextField
                  required
                  id="title"
                  name="title"
                  label="Title"
                  fullWidth
                  autoComplete="given-name"
                  sx={{ mb: 3 }}
                ></TextField>
                <TextField
                  required
                  id="description"
                  name="description"
                  label="Description"
                  fullWidth
                  multiline
                  rows={6}
                  autoComplete="given-name"
                ></TextField>
                <Button
                  sx={{
                    p: "10px",
                    bgcolor: "#4d79ff",
                    color: "white",
                    display: "block",
                    margin: "15px auto 0",
                  }}
                  variant="contained"
                  type="submit"
                >
                  Submit Review
                </Button>
              </form>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReviewProduct;
