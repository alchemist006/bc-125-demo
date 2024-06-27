package com.bootcamp.checkr.user.dto;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

class UserDTOTest {

    @DisplayName("JUnit tests for transaction dto")
    @Test
    void testTransactionDto() {
        UserDTO userDto = new UserDTO( "Saiprabhu", "sai@gmail.com", "Prabhu@123");
        assertThat(userDto.getName()).isEqualTo("Saiprabhu");
        assertThat(userDto.getPassword()).isEqualTo("Prabhu@123");
        assertThat(userDto.getEmail()).isEqualTo("sai@gmail.com");
        userDto.setName("madhu");
        userDto.setPassword("Madhu@123");
        userDto.setEmail("madhud@gmail.com");
        assertThat(userDto.getName()).isEqualTo("madhu");
        assertThat(userDto.getPassword()).isEqualTo("Madhu@123");
        assertThat(userDto.getEmail()).isEqualTo("madhud@gmail.com");
    }
}
