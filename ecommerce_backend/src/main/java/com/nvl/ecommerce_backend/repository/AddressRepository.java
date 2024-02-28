package com.nvl.ecommerce_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nvl.ecommerce_backend.Model.Address;

public interface AddressRepository extends JpaRepository<Address, Long>{

    
}
