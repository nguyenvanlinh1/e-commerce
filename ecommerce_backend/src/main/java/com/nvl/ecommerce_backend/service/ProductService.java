package com.nvl.ecommerce_backend.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.nvl.ecommerce_backend.Model.Product;
import com.nvl.ecommerce_backend.exception.ProductException;
import com.nvl.ecommerce_backend.request.CreateProductRequest;

public interface ProductService {
    
    public Page<Product> findAllProducts(Integer pageNumber, Integer pageSize);
    public Product createProduct(CreateProductRequest req);
    public String deleteProduct(Long productId) throws ProductException;
    public Product updateProduct(Long productId, Product req) throws ProductException;
    public Product findProductById(Long id) throws ProductException;
    public List<Product> findProductByCategory(String category);
    public Page<Product> getAllProduct(String category, List<String> colors, List<String> sizes, 
    Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, 
    String stock, Integer pageNumber, Integer pageSize);

}
