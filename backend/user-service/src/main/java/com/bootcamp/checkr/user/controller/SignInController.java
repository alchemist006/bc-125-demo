package com.bootcamp.checkr.user.controller;

import com.bootcamp.checkr.user.dto.AuthDTO;
import com.bootcamp.checkr.user.service.JwtService;
import com.bootcamp.checkr.user.util.ApiEndpoints;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = { "http://localhost:3000",
        "https://bc125fe.spcluster.tk" }, exposedHeaders = "Access-Control-Allow-Origin", allowedHeaders = "*", allowCredentials = "true")
@RestController
@RequestMapping(ApiEndpoints.USERS_BASE_PATH)
public class SignInController {

    @Autowired
    private JwtService jwtService;

    @GetMapping(ApiEndpoints.VALIDATE_TOKEN)
    public String validateToken(@RequestParam("token") String token) {
        jwtService.validateToken(token);
        return "Token is valid";
    }

    @PostMapping(ApiEndpoints.LOGIN)
    public boolean getToken(@RequestBody AuthDTO authDTO) {
        if (authDTO.getEmail() != null && authDTO.getPassword() != null) {
            String result = jwtService.generateToken(authDTO.getEmail(), authDTO.getPassword());
            return !result.equals("Unable to generate token");
        } else {
            return false;
        }

    }
}
