package com.nvl.ecommerce_backend.service;

import com.nvl.ecommerce_backend.Model.Address;
import com.nvl.ecommerce_backend.Model.User;
import com.nvl.ecommerce_backend.exception.UserException;
import com.nvl.ecommerce_backend.request.AddressRequest;

public interface AddressService {
    
    public Address createAddress(AddressRequest req ,User user) throws UserException;
}
