package com.example.movieapi.user_role.model;

import com.example.movieapi.account_users.model.AccountUser;
import com.example.movieapi.roles.model.Role;

import javax.persistence.*;

@Entity
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "account_id", referencedColumnName = "id")
    private AccountUser accountUser;

    @ManyToOne
    @JoinColumn(name = "role_id", referencedColumnName = "id")
    private Role role;

    public UserRole() {
    }

    public UserRole(Integer id, AccountUser accountUser, Role role) {
        this.id = id;
        this.accountUser = accountUser;
        this.role = role;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public AccountUser getAccountUsers() {
        return accountUser;
    }

    public void setAccountUsers(AccountUser accountUsers) {
        this.accountUser = accountUsers;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}