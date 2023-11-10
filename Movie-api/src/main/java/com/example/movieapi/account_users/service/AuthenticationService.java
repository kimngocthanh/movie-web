package com.example.movieapi.account_users.service;

import com.example.movieapi.account_users.config.JwtService;
import com.example.movieapi.account_users.model.AccountUser;
import com.example.movieapi.account_users.model.AuthenticationRequest;
import com.example.movieapi.account_users.model.AuthenticationResponse;
import com.example.movieapi.account_users.model.RegisterRequest;
import com.example.movieapi.account_users.repository.IAccountUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class AuthenticationService {
    @Autowired
    private IAccountUserRepository accountUserRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;


    public AuthenticationResponse register(RegisterRequest registerRequest) {
        AccountUser accountUser = accountUserRepository.getAccountByUserName(registerRequest.getUsername());
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        if(accountUser!=null) {
            authenticationResponse.setToken(null);
            authenticationResponse.setErrMsg("Tài khoản đã tồn tại!");
            return authenticationResponse;
        }
        accountUserRepository.createAccount(passwordEncoder.encode(registerRequest.getPassword()),registerRequest.getUsername(),  1);
        AccountUser accountUserNew = accountUserRepository.getAccountByUserName(registerRequest.getUsername());
        authenticationResponse.setToken(jwtService.generateToken(accountUserNew));
        authenticationResponse.setErrMsg(null);
        return authenticationResponse;
    }

    public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getUsername(),
                        authenticationRequest.getPassword()
                )
        );
        AccountUser accountUser = accountUserRepository.getAccountByUserName(authenticationRequest.getUsername());
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        authenticationResponse.setToken(jwtService.generateToken(accountUser));
        return authenticationResponse;
    }
}
