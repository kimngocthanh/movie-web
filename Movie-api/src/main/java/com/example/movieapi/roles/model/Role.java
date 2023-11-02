package com.example.movieapi.roles.model;

import com.example.movieapi.user_role.model.UserRole;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Boolean flagDeleted;

    @OneToMany(mappedBy = "role")
    private Set<UserRole> userRoleSet;

    public Role() {
    }

    public Role(Integer id, String name, Boolean flagDeleted, Set<UserRole> userRoleSet) {
        this.id = id;
        this.name = name;
        this.flagDeleted = flagDeleted;
        this.userRoleSet = userRoleSet;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getFlagDeleted() {
        return flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }

    public Set<UserRole> getUserRoleSet() {
        return userRoleSet;
    }

    public void setUserRoleSet(Set<UserRole> userRoleSet) {
        this.userRoleSet = userRoleSet;
    }
}
