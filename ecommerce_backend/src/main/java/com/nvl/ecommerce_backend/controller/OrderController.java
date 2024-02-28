package com.nvl.ecommerce_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nvl.ecommerce_backend.Model.Address;
import com.nvl.ecommerce_backend.Model.Order;
import com.nvl.ecommerce_backend.Model.User;
import com.nvl.ecommerce_backend.exception.OrderException;
import com.nvl.ecommerce_backend.exception.UserException;
import com.nvl.ecommerce_backend.service.OrderService;
import com.nvl.ecommerce_backend.service.UserService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    
    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @PostMapping("/")
    public ResponseEntity<Order> createOrder(@RequestBody Address shippingAddress, @RequestHeader("Authorization") String jwt) throws UserException{
        User user = userService.findUserProfileByJwt(jwt);
        Order order = orderService.createOrder(user, shippingAddress);

        return new ResponseEntity<Order>(order, HttpStatus.CREATED);
    }

    @GetMapping("/user")
    public ResponseEntity<List<Order>> usersOrderHistory(@RequestHeader("Authorization") String jwt) throws UserException{
        User user = userService.findUserProfileByJwt(jwt);
        List<Order> orders = orderService.usersOrderHistory(user.getId());
        return new ResponseEntity<>(orders, HttpStatus.CREATED);
    }

    @GetMapping("/{Id}")
    public ResponseEntity<Order> findOrderById(@PathVariable("Id")Long orderId, @RequestHeader("Authorization") String jwt) throws UserException, OrderException{
        User user = userService.findUserProfileByJwt(jwt);
        Order order = orderService.findOrderById(orderId);
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }
}
