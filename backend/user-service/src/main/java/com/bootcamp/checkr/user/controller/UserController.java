package com.bootcamp.checkr.user.controller;

import com.bootcamp.checkr.user.entity.User;
import com.bootcamp.checkr.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.bootcamp.checkr.user.util.ApiEndpoints;
import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000",
        "https://bc125fe.spcluster.tk" }, exposedHeaders = "Access-Control-Allow-Origin", allowedHeaders = "*", allowCredentials = "true")
@RestController
@RequestMapping(ApiEndpoints.USERS_BASE_PATH)
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(ApiEndpoints.GET_USER_BY_ID)
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }

    @GetMapping(ApiEndpoints.GET_ALL_USERS)
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

}