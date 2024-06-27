package com.bootcamp.checkr.user.controller;


import com.bootcamp.checkr.user.entity.User;
import com.bootcamp.checkr.user.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.List;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

 class UserControllerTest {

    @InjectMocks
    private UserController userController;

    @Mock
    private UserService userService;


    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
     void testGetUserById() {
        Long userId = 1L;
        User user = new User();
        user.setId(userId);
        when(userService.getUserById(userId)).thenReturn(user);
        ResponseEntity<User> response = userController.getUserById(userId);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(user, response.getBody());
    }


    @Test
     void testGetAllUsers() {
        ResponseEntity<List<User>> response = userController.getAllUsers();
        assertEquals(200, response.getStatusCodeValue());
        List<User> users = response.getBody();
        assertEquals(0, users.size());
    }


}
