package com.example.movieapi.movie.model;

import com.example.movieapi.type_movie.model.TypeMovie;

import javax.persistence.*;

@Entity
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String date;
    private String director;
    private String performer;
    @Lob
    private String describes;
    private String img;
    private String image;
    private Double price;
    private String trailer;
    private String country;
    @ManyToOne
    @JoinColumn(name = "id_type", referencedColumnName = "id")
    private TypeMovie typeMovie;

    public Movie() {
    }

    public Movie(Integer id, String date, String director, String performer, String describes, String img, String image, Double price, String trailer) {
        this.id = id;
        this.date = date;
        this.director = director;
        this.performer = performer;
        this.describes = describes;
        this.img = img;
        this.image = image;
        this.price = price;
        this.trailer = trailer;
    }

    public Movie(Integer id, String name, String date, String director, String performer, String describes, String img, String image, Double price, String trailer, String country, TypeMovie typeMovie) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.director = director;
        this.performer = performer;
        this.describes = describes;
        this.img = img;
        this.image = image;
        this.price = price;
        this.trailer = trailer;
        this.country = country;
        this.typeMovie = typeMovie;
    }

    public Movie(Integer id, String name, String date, String director, String performer, String describes, String img, String image, Double price, String trailer, String country) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.director = director;
        this.performer = performer;
        this.describes = describes;
        this.img = img;
        this.image = image;
        this.price = price;
        this.trailer = trailer;
        this.country = country;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getPerformer() {
        return performer;
    }

    public void setPerformer(String performer) {
        this.performer = performer;
    }

    public String getDescribes() {
        return describes;
    }

    public void setDescribes(String describes) {
        this.describes = describes;
    }

    public TypeMovie getTypeMovie() {
        return typeMovie;
    }

    public void setTypeMovie(TypeMovie typeMovie) {
        this.typeMovie = typeMovie;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getTrailer() {
        return trailer;
    }

    public void setTrailer(String trailer) {
        this.trailer = trailer;
    }
}
