package com.nvl.ecommerce_backend.service;

import java.util.List;

import com.nvl.ecommerce_backend.Model.Address;
import com.nvl.ecommerce_backend.Model.Order;
import com.nvl.ecommerce_backend.Model.User;
import com.nvl.ecommerce_backend.exception.OrderException;

public interface OrderService {
    
    public Order createOrder(User user, Address shippingAddress);
    public Order findOrderById(Long orderId) throws OrderException;
    public List<Order> usersOrderHistory(Long userId);
    public Order placedOrder(Long orderId) throws OrderException;
    public Order confirmedOrder(Long orderId) throws OrderException;
    public Order shippedOrder(Long orderId) throws OrderException;
    public Order deliveredOrder(Long orderId) throws OrderException;
    public Order cancelOrder(Long orderId) throws OrderException;
    public List<Order> getAllOrders();
    public void deleteOrder(Long orderId) throws OrderException;

}
