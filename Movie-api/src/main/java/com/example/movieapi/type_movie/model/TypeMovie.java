package com.example.movieapi.type_movie.model;

import com.example.movieapi.movie.model.Movie;

import javax.persistence.*;

@Entity
public class TypeMovie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;


    public TypeMovie() {
    }

    public TypeMovie(Integer id, String name) {
        this.id = id;
        this.name = name;
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


}
