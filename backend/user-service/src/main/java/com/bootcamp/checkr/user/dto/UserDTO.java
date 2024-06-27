package com.bootcamp.checkr.user.dto;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {



    @NotBlank(message = "Name is required")
    private String name;

    @Email(message = "Email is  not valid")
    private String email;

    @NotBlank(message = "password is required")
    @Size(min = 6, max = 10, message = "Password must be 6-10 characters with at least one lowercase, one uppercase, and one digit")
    private String password;
}
