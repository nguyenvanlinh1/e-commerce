package com.nvl.ecommerce_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nvl.ecommerce_backend.Model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long>{
    
}
