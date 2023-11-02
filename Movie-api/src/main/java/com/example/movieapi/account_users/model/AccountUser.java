package com.example.movieapi.account_users.model;

import com.example.movieapi.user_role.model.UserRole;
import com.fasterxml.jackson.annotation.JsonBackReference;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.Set;

@Entity
public class AccountUser implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(unique = true)
    private String userName;
    private String password;
    private Boolean flagDeleted;

    @JsonBackReference
    @OneToMany(mappedBy = "accountUser", fetch = FetchType.EAGER)
    private Set<UserRole> userRoleSet;

//        @OneToMany(mappedBy = "accountUser")
//        private Set<Orders> ordersSet;

//        @OneToMany(mappedBy = "accountUser")
//        private Set<CartDetail> cartDetailSet;

    public AccountUser() {
    }

    public AccountUser(Integer id, String userName, String password, Boolean flagDeleted, Set<UserRole> userRoleSet) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.flagDeleted = flagDeleted;
        this.userRoleSet = userRoleSet;
    }

//        public AccountUser(Integer id, String userName, String password, Boolean flagDeleted, Set<UserRole> userRoleSet, Set<Orders> ordersSet, Set<CartDetail> cartDetailSet) {
//            this.id = id;
//            this.userName = userName;
//            this.password = password;
//            this.flagDeleted = flagDeleted;
//            this.userRoleSet = userRoleSet;
//            this.ordersSet = ordersSet;
//            this.cartDetailSet = cartDetailSet;
//        }


//    public Set<Orders> getOrdersSet() {
//        return ordersSet;
//    }
//
//    public void setOrdersSet(Set<Orders> ordersSet) {
//        this.ordersSet = ordersSet;
//    }

//    public Set<CartDetail> getCartDetailSet() {
//        return cartDetailSet;
//    }

//    public void setCartDetailSet(Set<CartDetail> cartDetailSet) {
//        this.cartDetailSet = cartDetailSet;
//    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public void setPassword(String password) {
        this.password = password;
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
