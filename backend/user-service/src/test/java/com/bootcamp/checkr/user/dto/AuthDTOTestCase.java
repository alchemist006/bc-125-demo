package com.bootcamp.checkr.user.dto;

import com.bootcamp.checkr.user.dto.AuthDTO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

 class AuthDTOTestCase {

    private AuthDTO authDTO;

    @BeforeEach
    public void setUp() {
        authDTO = new AuthDTO();
    }

    @Test
     void testGettersAndSetters() {
        authDTO.setEmail("prabhu@gmail.com");
        authDTO.setPassword("Prabhu@12");

        assertEquals("prabhu@gmail.com", authDTO.getEmail());
        assertEquals("Prabhu@12", authDTO.getPassword());
    }

    @Test
     void testNoArgsConstructor() {
        AuthDTO newAuthDTO = new AuthDTO();

        assertNull(newAuthDTO.getEmail());
        assertNull(newAuthDTO.getPassword());
    }

    @Test
     void testAllArgsConstructor() {
        AuthDTO newAuthDTO = new AuthDTO("vikram@gmail.com", "Vikram@21");

        assertEquals("vikram@gmail.com", newAuthDTO.getEmail());
        assertEquals("Vikram@21", newAuthDTO.getPassword());
    }

}

