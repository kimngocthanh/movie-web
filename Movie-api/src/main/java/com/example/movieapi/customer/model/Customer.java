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
