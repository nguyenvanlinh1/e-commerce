package com.nvl.ecommerce_backend.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.nvl.ecommerce_backend.Model.Product;
import com.nvl.ecommerce_backend.Model.Review;
import com.nvl.ecommerce_backend.Model.User;
import com.nvl.ecommerce_backend.exception.ProductException;
import com.nvl.ecommerce_backend.repository.ReviewRepository;
import com.nvl.ecommerce_backend.request.ReviewRequest;

@Service
public class ReviewServiceImpl implements ReviewService{

    private ReviewRepository reviewRepository;
    private ProductService productService;
    

    public ReviewServiceImpl(ReviewRepository reviewRepository, ProductService productService) {
        this.reviewRepository = reviewRepository;
        this.productService = productService;
    }

    @Override
    public Review createReview(ReviewRequest req, User user) throws ProductException {
        Product product = productService.findProductById(req.getProductId());
        
        Review review = new Review();
        review.setUser(user);
        review.setProduct(product);
        review.setReview(req.getReview());
        review.setCreatedAt(LocalDateTime.now());

        return reviewRepository.save(review);
    }

    @Override
    public List<Review> getProductsReview(Long productId) {
        return reviewRepository.getAllProductsReview(productId);
    }
    
}
