package com.nvl.ecommerce_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nvl.ecommerce_backend.Model.User;


public interface UserRepository extends JpaRepository<User, Long>{
    
    public User findByEmail(String email);

}
