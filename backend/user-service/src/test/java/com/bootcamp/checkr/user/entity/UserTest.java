package com.bootcamp.checkr.user.entity;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

 class UserTest {

    private User user;

    @BeforeEach
    public void setUp() {
        user = new User();
    }

    @Test
     void testGettersAndSetters() {
        user.setId(1L);
        user.setName("John Doe");
        user.setEmail("john@example.com");
        user.setPassword("password123");

        assertEquals(1L, user.getId());
        assertEquals("John Doe", user.getName());
        assertEquals("john@example.com", user.getEmail());
        assertEquals("password123", user.getPassword());
    }

    @Test
     void testNoArgsConstructor() {
        User newUser = new User();

        assertNull(newUser.getId());
        assertNull(newUser.getName());
        assertNull(newUser.getEmail());
        assertNull(newUser.getPassword());
    }

    @Test
    void testAllArgsConstructor() {
        User newUser = new User(2L, "Alice Smith", "alice@example.com", "alicepassword");

        assertEquals(2L, newUser.getId());
        assertEquals("Alice Smith", newUser.getName());
        assertEquals("alice@example.com", newUser.getEmail());
        assertEquals("alicepassword", newUser.getPassword());
    }
}
