package com.nvl.ecommerce_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nvl.ecommerce_backend.Model.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

    @Query("Select o From Order o Where o.user.id = :userId And (o.orderStatus = 'PLACED' Or o.orderStatus = 'PENDING' Or o.orderStatus = 'CONFIRMED' Or o.orderStatus = 'SHIPPED' Or o.orderStatus = 'DELIVERED')")
    public List<Order> getUsersOrders(@Param("userId") Long userId);
    
}
