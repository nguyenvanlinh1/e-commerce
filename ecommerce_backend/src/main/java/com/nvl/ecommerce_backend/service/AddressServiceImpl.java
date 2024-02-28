package com.nvl.ecommerce_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nvl.ecommerce_backend.Model.Address;
import com.nvl.ecommerce_backend.Model.User;
import com.nvl.ecommerce_backend.exception.UserException;
import com.nvl.ecommerce_backend.repository.AddressRepository;
import com.nvl.ecommerce_backend.request.AddressRequest;

@Service
public class AddressServiceImpl implements AddressService{


    @Autowired
    private AddressRepository addressRepository;

    @Override
    public Address createAddress(AddressRequest req, User user) throws UserException {
        Address address = new Address();
        address.setUser(user);
        address.setFirstName(user.getFirstName());
        address.setLastName(user.getLastName());
        address.setCity(req.getCity());
        address.setMobile(req.getMobile());
        address.setState(req.getState());
        address.setStreet_address(req.getStreetAddress());
        address.setZipCode(req.getZipCode());
        return addressRepository.save(address);
    }
    
}
