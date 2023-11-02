package com.example.movieapi.account_users.model;

public class AuthenticationResponse {
    private String token;
    private String errMsg;

    public AuthenticationResponse() {
    }

    public AuthenticationResponse(String token, String errMsg) {
        this.token = token;
        this.errMsg = errMsg;
    }

    public String getErrMsg() {
        return errMsg;
    }

    public void setErrMsg(String errMsg) {
        this.errMsg = errMsg;
    }

    public AuthenticationResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
