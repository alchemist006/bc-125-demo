package com.bootcamp.checkr.user.controller;

import com.bootcamp.checkr.user.dto.UserDTO;
import com.bootcamp.checkr.user.entity.User;
import com.bootcamp.checkr.user.service.UserService;
import com.bootcamp.checkr.user.util.ApiEndpoints;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = { "http://localhost:3000",
        "https://bc125fe.spcluster.tk" }, exposedHeaders = "Access-Control-Allow-Origin", allowedHeaders = "*", allowCredentials = "true")
@RestController
@RequestMapping(ApiEndpoints.USERS_BASE_PATH)
@Slf4j
public class SignUpController {

    @Autowired
    private UserService userService;

    @PostMapping(ApiEndpoints.SAVE_USERS)
    public ResponseEntity<User> createUser(@Valid @RequestBody UserDTO userDTO) {
        User user = userService.saveUser(userDTO);
        log.info("in signup controller create user");
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping("/users/signup")
    public boolean getUserByEmail(@RequestParam("email") String email) {
        User user = userService.getUserByEmail(email);
        log.info("user", user);
        return user != null;
    }

}