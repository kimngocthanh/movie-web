package com.example.movieapi.comments.model;

import com.example.movieapi.account_users.model.AccountUser;
import com.example.movieapi.video.model.Video;

import javax.persistence.*;

@Entity
public class Comments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String commentText;
    private String date;
    @ManyToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id")
    private AccountUser accountUser;
    @ManyToOne
    @JoinColumn(name = "id_video",referencedColumnName = "id")
    private Video video;

    public Comments() {
    }

    public Comments(Integer id, String commentText, String date, AccountUser accountUser, Video video) {
        this.id = id;
        this.commentText = commentText;
        this.date = date;
        this.accountUser = accountUser;
        this.video = video;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCommentText() {
        return commentText;
    }

    public void setCommentText(String commentText) {
        this.commentText = commentText;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public AccountUser getAccountUser() {
        return accountUser;
    }

    public void setAccountUser(AccountUser accountUser) {
        this.accountUser = accountUser;
    }

    public Video getVideo() {
        return video;
    }

    public void setVideo(Video video) {
        this.video = video;
    }
}
