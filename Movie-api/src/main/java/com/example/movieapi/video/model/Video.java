package com.example.movieapi.video.model;

import com.example.movieapi.movie.model.Movie;

import javax.persistence.*;

@Entity
public class Video {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String url;
    @ManyToOne
    @JoinColumn(name = "id_movie",referencedColumnName = "id")
    private Movie movie;

    public Video() {
    }

    public Video(Integer id, String url, Movie movie) {
        this.id = id;
        this.url = url;
        this.movie = movie;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }
}
