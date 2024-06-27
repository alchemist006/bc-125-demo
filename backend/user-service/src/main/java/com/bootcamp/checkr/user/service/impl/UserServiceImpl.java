package com.bootcamp.checkr.user.service.impl;


import com.bootcamp.checkr.user.dto.UserDTO;
import com.bootcamp.checkr.user.entity.User;
import com.bootcamp.checkr.user.exceptions.UserException;
import com.bootcamp.checkr.user.mapper.UserMapper;
import com.bootcamp.checkr.user.repository.UserRepository;
import com.bootcamp.checkr.user.service.UserService;
import com.bootcamp.checkr.user.util.UserMessages;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class UserServiceImpl implements UserService {


    @Autowired
    private  UserRepository userRepository;


    @Autowired
    private UserMapper userMapper;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public User getUserById(Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            return userOptional.get();
        } else {
            throw new UserException(String.format(UserMessages.USER_NOT_FOUND, userId));
        }
    }

    @Override
    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();
        if(users.isEmpty()){
            return Collections.emptyList();
        }else{
            return users;
        }
    }


    @Override
    public User saveUser(UserDTO userDTO) {
        Optional<User> existingUser = userRepository.findByEmail(userDTO.getEmail());
        if (existingUser.isPresent()) {
            log.error(String.format(UserMessages.USER_CREATION_FAILED, userDTO.getEmail()));
            throw new UserException(String.format(UserMessages.USER_ALREADY_EXISTS, userDTO.getEmail()));
        }
        try {
            User user = userMapper.convertToUser(userDTO);
            String encryptedPassword = bCryptPasswordEncoder.encode(user.getPassword());
            user.setPassword(encryptedPassword);
            return userRepository.save(user);
        } catch (UserException e) {
            log.error(UserMessages.UNABLE_TO_SAVE_USER, e);
            throw new UserException(UserMessages.UNABLE_TO_SAVE_USER);
        }
    }


    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UserException(String.format(UserMessages.USER_NOT_FOUND_BY_EMAIL, email)));
    }

}
