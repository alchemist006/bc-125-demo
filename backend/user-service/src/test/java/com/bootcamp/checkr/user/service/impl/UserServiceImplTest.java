package com.bootcamp.checkr.user.service.impl;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.bootcamp.checkr.user.dto.UserDTO;
import com.bootcamp.checkr.user.entity.User;
import com.bootcamp.checkr.user.exceptions.UserException;
import com.bootcamp.checkr.user.mapper.UserMapper;
import com.bootcamp.checkr.user.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Collections;
import java.util.List;
import java.util.Optional;


 class UserServiceImplTest {

    @InjectMocks
    private UserServiceImpl userService;

    @Mock
    private UserRepository userRepository;

    @Mock
    private UserMapper userMapper;

    @Mock
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @BeforeEach
    public void init() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
     void testGetUserById() {
        Long userId = 1L;
        User user = new User();
        user.setId(userId);

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));

        User result = userService.getUserById(userId);

        assertEquals(userId, result.getId());
    }

    @Test
     void testGetUserByIdUserNotFound() {
        Long userId = 1L;

        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        assertThrows(UserException.class, () -> userService.getUserById(userId));
    }

    @Test
     void testGetAllUsers() {
        User user1 = new User();
        user1.setId(1L);
        User user2 = new User();
        user2.setId(2L);

        when(userRepository.findAll()).thenReturn(List.of(user1, user2));

        List<User> result = userService.getAllUsers();

        assertEquals(2, result.size());
    }

    @Test
     void testGetAllUsersEmptyList() {
        when(userRepository.findAll()).thenReturn(Collections.emptyList());

        List<User> result = userService.getAllUsers();

        assertTrue(result.isEmpty());
    }

    @Test
     void testSaveUser() {
        UserDTO userDTO = new UserDTO();
        userDTO.setEmail("user@example.com");
        userDTO.setPassword("password");

        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());

        when(userRepository.findByEmail(userDTO.getEmail())).thenReturn(Optional.empty());
        when(userMapper.convertToUser(userDTO)).thenReturn(user);
        when(bCryptPasswordEncoder.encode(userDTO.getPassword())).thenReturn("hashedPassword");
        when(userRepository.save(user)).thenReturn(user);

        User result = userService.saveUser(userDTO);

        assertEquals(user.getEmail(), result.getEmail());
        assertEquals("hashedPassword", result.getPassword());
    }

    @Test
     void testSaveUserUserExists() {
        UserDTO userDTO = new UserDTO();
        userDTO.setEmail("user@example.com");

        when(userRepository.findByEmail(userDTO.getEmail())).thenReturn(Optional.of(new User()));

        assertThrows(UserException.class, () -> userService.saveUser(userDTO));
    }

    @Test
     void testSaveUserException() {
        UserDTO userDTO = new UserDTO();
        userDTO.setEmail("user@example.com");
        userDTO.setPassword("password");

        when(userRepository.findByEmail(userDTO.getEmail())).thenReturn(Optional.empty());
        when(userMapper.convertToUser(userDTO)).thenThrow(UserException.class);

        assertThrows(UserException.class, () -> userService.saveUser(userDTO));
    }

    @Test
    void testGetUserByEmail() {
        String email = "user@example.com";
        User user = new User();
        user.setEmail(email);

        when(userRepository.findByEmail(email)).thenReturn(Optional.of(user));

        User result = userService.getUserByEmail(email);

        assertEquals(email, result.getEmail());
    }

    @Test
     void testGetUserByEmailUserNotFound() {
        String email = "user@example.com";

        when(userRepository.findByEmail(email)).thenReturn(Optional.empty());

        assertThrows(UserException.class, () -> userService.getUserByEmail(email));
    }

}
