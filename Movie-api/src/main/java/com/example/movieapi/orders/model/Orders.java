package com.example.movieapi.orders.model;

import com.example.movieapi.account_users.model.AccountUser;

import javax.persistence.*;

@Entity
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String datetime;
    private Boolean flagDeleted;
    @ManyToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id")
    private AccountUser accountUser;

}
