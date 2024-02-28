package com.nvl.ecommerce_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nvl.ecommerce_backend.Model.Address;
import com.nvl.ecommerce_backend.Model.User;
import com.nvl.ecommerce_backend.exception.UserException;
import com.nvl.ecommerce_backend.request.AddressRequest;
import com.nvl.ecommerce_backend.service.AddressService;
import com.nvl.ecommerce_backend.service.UserService;

@RestController
@RequestMapping("/api/address")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @Autowired
    private UserService userService;

    @PostMapping("/")
    public ResponseEntity<Address> createAddress(@RequestBody AddressRequest req, @RequestHeader("Authorization") String jwt) throws UserException{
        User user = userService.findUserProfileByJwt(jwt);
        Address address = addressService.createAddress(req, user);
        return new ResponseEntity<>(address, HttpStatus.ACCEPTED);
    }
}
