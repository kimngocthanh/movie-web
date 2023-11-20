package com.example.movieapi.comments.service;

import com.example.movieapi.comments.model.ICommentsDto;

import java.util.List;

public interface ICommentService {
    List<ICommentsDto> getAllComment(Integer id);
    void createComment(String username, Integer idMovie, String comment);
}
