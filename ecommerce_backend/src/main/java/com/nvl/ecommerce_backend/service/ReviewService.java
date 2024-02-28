package com.nvl.ecommerce_backend.service;

import java.util.List;
import com.nvl.ecommerce_backend.Model.Review;
import com.nvl.ecommerce_backend.Model.User;
import com.nvl.ecommerce_backend.exception.ProductException;
import com.nvl.ecommerce_backend.request.ReviewRequest;

public interface ReviewService {
    public Review createReview(ReviewRequest req, User user) throws ProductException;
    public List<Review> getProductsReview(Long productId);
}
