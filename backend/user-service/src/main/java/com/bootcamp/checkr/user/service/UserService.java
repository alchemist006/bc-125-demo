package com.bootcamp.checkr.user.service;


import com.bootcamp.checkr.user.dto.UserDTO;
import com.bootcamp.checkr.user.entity.User;

import java.util.List;

public interface UserService {

    public User getUserById(Long userId);

    public List<User> getAllUsers();

    public User saveUser(UserDTO userDTO);

    public User getUserByEmail(String email);

}
