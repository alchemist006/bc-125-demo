package com.bootcamp.checkr.user.service;

import com.bootcamp.checkr.user.entity.User;
import com.bootcamp.checkr.user.exceptions.UserException;
import com.bootcamp.checkr.user.repository.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;


@Service
public class JwtService {

    @Value("${SECRET_ID}")
    private String secret;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    public void validateToken(final String token) {
        Jwts.parserBuilder().setSigningKey(getSignKey()).build().parseClaimsJwt(token);
    }

    public String generateToken(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isEmpty()) {
            throw new UserException("Either email or password is incorrect. Unable to generate token");
        } else {
            if(bCryptPasswordEncoder.matches(password,user.get().getPassword())) {
                Map<String, Object> claims = new HashMap<>();
                return createToken(claims, email);
            }
        }
        return "Unable to generate token";
    }

    private String createToken(Map<String, Object> claims, String userName) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userName)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+1000*60*30))
                .signWith(getSignKey(), SignatureAlgorithm.HS256).compact();
    }

    private Key getSignKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secret);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
