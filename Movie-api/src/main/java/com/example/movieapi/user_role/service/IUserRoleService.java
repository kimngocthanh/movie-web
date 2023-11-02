package com.example.movieapi.user_role.service;

import com.example.movieapi.user_role.model.UserRole;

public interface IUserRoleService {
    void createUserRole(UserRole userRole);

    String findRoleByUsername(String username);
}
