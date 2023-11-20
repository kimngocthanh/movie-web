package com.example.movieapi.comments.model;

public class CommentDto {
    private String comment;
    private Integer idMovie;

    public CommentDto() {
    }

    public CommentDto(String comment, Integer idMovie) {
        this.comment = comment;
        this.idMovie = idMovie;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }


    public Integer getIdMovie() {
        return idMovie;
    }

    public void setIdMovie(Integer idMovie) {
        this.idMovie = idMovie;
    }
}
