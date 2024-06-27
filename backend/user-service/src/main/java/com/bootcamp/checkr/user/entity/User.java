package com.bootcamp.checkr.user.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="user")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
}
