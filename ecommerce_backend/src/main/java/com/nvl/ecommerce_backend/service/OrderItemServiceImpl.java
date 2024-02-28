package com.nvl.ecommerce_backend.service;

import org.springframework.stereotype.Service;

import com.nvl.ecommerce_backend.Model.OrderItem;
import com.nvl.ecommerce_backend.repository.OrderItemRepository;

@Service
public class OrderItemServiceImpl implements OrderItemService{

    private OrderItemRepository orderItemRepository;

    public OrderItemServiceImpl(OrderItemRepository orderItemRepository) {
        this.orderItemRepository = orderItemRepository;
    }


    @Override
    public OrderItem createOrderItem(OrderItem orderItem) {
        
        return orderItemRepository.save(orderItem);
    }
    
}
