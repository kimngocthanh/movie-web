package com.example.movieapi.user_role.repository;

import com.example.movieapi.user_role.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRoleRepository extends JpaRepository<UserRole,Integer> {
}
