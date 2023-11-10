package com.example.movieapi.cart_detail.model;

import com.example.movieapi.account_users.model.AccountUser;
import com.example.movieapi.movie.model.Movie;

import javax.persistence.*;

@Entity
public class CartDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "id_movie", referencedColumnName = "id")
    private Movie movie;
    @ManyToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id")
    private AccountUser accountUser;

    public CartDetail() {
    }

    public CartDetail(Integer id, Movie movie, AccountUser accountUser) {
        this.id = id;
        this.movie = movie;
        this.accountUser = accountUser;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public AccountUser getAccountUser() {
        return accountUser;
    }

    public void setAccountUser(AccountUser accountUser) {
        this.accountUser = accountUser;
    }
}
