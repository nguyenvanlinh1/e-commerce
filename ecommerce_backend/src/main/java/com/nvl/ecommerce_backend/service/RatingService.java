package com.nvl.ecommerce_backend.service;

import java.util.List;

import com.nvl.ecommerce_backend.Model.Rating;
import com.nvl.ecommerce_backend.Model.User;
import com.nvl.ecommerce_backend.exception.ProductException;
import com.nvl.ecommerce_backend.request.RatingRequest;

public interface RatingService {
    
    public Rating createRating(RatingRequest req, User user) throws ProductException;
    public List<Rating> getProductsRating(Long productId);

}
