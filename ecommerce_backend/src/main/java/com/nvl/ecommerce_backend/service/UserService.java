package com.nvl.ecommerce_backend.service;

import java.util.List;

import com.nvl.ecommerce_backend.Model.User;
import com.nvl.ecommerce_backend.exception.UserException;

public interface UserService {
    public User findUserById(Long userId) throws UserException;

    public User findUserProfileByJwt(String jwt) throws UserException;

    public List<User> findAllUser() throws UserException;
}
