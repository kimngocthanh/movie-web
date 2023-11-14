package com.example.movieapi.customer.model;

import com.example.movieapi.account_users.model.AccountUser;

import javax.persistence.*;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String dob;
    private String phone;
    private String email;
    private String address;
    @OneToOne
    @JoinColumn(name = "id_account", referencedColumnName = "id")
    private AccountUser accountUser;

    public Customer() {
    }

    public Customer(Integer id, String name, String dob, String phone, AccountUser accountUser) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.phone = phone;
        this.accountUser = accountUser;
    }

    public Customer(Integer id, String name, String dob, String phone, String email, String address, AccountUser accountUser) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.accountUser = accountUser;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public AccountUser getAccountUser() {
        return accountUser;
    }

    public void setAccountUser(AccountUser accountUser) {
        this.accountUser = accountUser;
    }
}
