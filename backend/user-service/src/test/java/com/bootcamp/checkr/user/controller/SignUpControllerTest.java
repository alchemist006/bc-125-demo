package com.bootcamp.checkr.user.controller;

import com.bootcamp.checkr.user.dto.UserDTO;
import com.bootcamp.checkr.user.entity.User;
import com.bootcamp.checkr.user.service.UserService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)
 class SignUpControllerTest {


    @Mock
    private UserService userService;

    @InjectMocks
    private SignUpController signUpController;


     @Test
     void testCreateUser() {
         UserDTO userDTO = new UserDTO();
         userDTO.setName("John");
         when(userService.saveUser(userDTO)).thenReturn(new User());
         ResponseEntity<User> response = signUpController.createUser(userDTO);
         assertEquals(HttpStatus.CREATED, response.getStatusCode());
         assertNotNull(response.getBody());
     }

    @Test
   void testGetUserByEmail() {

        String testEmail = "test@example.com";
        User existingUser = new User();
        Mockito.when(userService.getUserByEmail(testEmail)).thenReturn(existingUser);
        boolean result = signUpController.getUserByEmail(testEmail);
        assertTrue(result);
        Mockito.when(userService.getUserByEmail(testEmail)).thenReturn(null);
        result = signUpController.getUserByEmail(testEmail);
        assertFalse(result);
    }

}
