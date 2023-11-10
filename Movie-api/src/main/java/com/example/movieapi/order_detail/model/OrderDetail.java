package com.example.movieapi.order_detail.model;

import com.example.movieapi.movie.model.Movie;
import com.example.movieapi.orders.model.Orders;

import javax.persistence.*;

@Entity
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Double price;
    private Boolean isFlag;
    @ManyToOne
    @JoinColumn(name = "id_order", referencedColumnName = "id")
    private Orders orders;
    @ManyToOne
    @JoinColumn(name = "id_movie", referencedColumnName = "id")
    private Movie movie;

    public OrderDetail() {
    }

    public OrderDetail(Integer id, Double price, Boolean isFlag, Orders orders, Movie movie) {
        this.id = id;
        this.price = price;
        this.isFlag = isFlag;
        this.orders = orders;
        this.movie = movie;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Boolean getFlag() {
        return isFlag;
    }

    public void setFlag(Boolean flag) {
        isFlag = flag;
    }

    public Orders getOrders() {
        return orders;
    }

    public void setOrders(Orders orders) {
        this.orders = orders;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }
}
