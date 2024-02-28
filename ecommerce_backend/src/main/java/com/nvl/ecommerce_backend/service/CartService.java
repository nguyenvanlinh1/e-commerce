package com.nvl.ecommerce_backend.service;

import com.nvl.ecommerce_backend.Model.Cart;
import com.nvl.ecommerce_backend.Model.User;
import com.nvl.ecommerce_backend.exception.ProductException;
import com.nvl.ecommerce_backend.request.AddItemRequest;

public interface CartService {
    public Cart createCart(User user);
    public String addCartItem(Long userId, AddItemRequest req) throws ProductException;
    public Cart findUserCart(Long userId);
}
