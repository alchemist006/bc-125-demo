package com.bootcamp.checkr.user.controller;


import com.bootcamp.checkr.user.dto.AuthDTO;
import com.bootcamp.checkr.user.entity.User;
import com.bootcamp.checkr.user.service.JwtService;
import com.bootcamp.checkr.user.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.mockito.Mockito.when;

class SignInControllerTest {


    @InjectMocks
    private SignInController signInController;

    @Mock
    private JwtService jwtService;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
   void testValidateToken() {
        String validToken = "validToken";
        Mockito.doNothing().when(jwtService).validateToken(validToken);
        String result = signInController.validateToken(validToken);
        assertEquals("Token is valid", result);
    }

    @Test
   void testGetToken() {
        AuthDTO authDTO = new AuthDTO("email@example.com", "password");
        Mockito.when(jwtService.generateToken(authDTO.getEmail(), authDTO.getPassword())).thenReturn("GeneratedToken");
        boolean success = signInController.getToken(authDTO);
        assertEquals(true, success);
        AuthDTO invalidAuthDTO = new AuthDTO(null, "password");
        boolean failure = signInController.getToken(invalidAuthDTO);
        assertEquals(false, failure);

        AuthDTO invalidAuthDTO2 = new AuthDTO("email@example.com", null);
        boolean failure2 = signInController.getToken(invalidAuthDTO2);
        assertFalse(failure2);

        AuthDTO bothNullAuthDTO = new AuthDTO(null, null);
        boolean failure3 = signInController.getToken(bothNullAuthDTO);
        assertFalse(failure3);
    }


}
